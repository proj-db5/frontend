import { GetServerSidePropsContext } from "next";
import { useContext, useEffect, useState } from "react";
import { add, formatISO, parseISO } from "date-fns";
import useSWR from "swr";
import { ChatMessageData, ChatMessageResponse, EmptyResponse, UserResponse } from "../../libs/api/response";
import { requestGet, requestPost } from "../../libs/api/client";
import Talk from "../../components/templates/chat";
import { UserType } from "../../libs";
import { socketContext } from "../../contexts/socket";
import { deleteApi, getApi } from "../../apis";

interface ChatProps {
  opponentId: string,
}

const Chat = ({ opponentId }: ChatProps) => {
  const socket = useContext(socketContext);
  const [liveMessages, setLiveMessages] = useState<ChatMessageData[]>([]);
  const [isFriend, setIsFriend] = useState(false);

  const { data: me } = useSWR("/user/whoAmI", () => requestGet<UserResponse>("/user/whoAmI"));
  const { data: opponent } = useSWR(`/user/${opponentId}`, () => requestGet<UserResponse>(`/user/${opponentId}`));
  const { data: friends } = useSWR(`/friend/${opponentId}`, getApi.getSearchedUsers);
  if (friends && (isFriend !== !!friends?.find((f) => f.id === opponentId && f.isFriend === 1))) {
    setIsFriend(!isFriend);
  }

  useEffect(() => {
    requestGet<ChatMessageResponse>(`/chat/chatData/${opponentId}`).then((res) => {
      setLiveMessages(res.data);
      window.scrollTo(0, document.body.scrollHeight);
    });

    socket.on("RESPONSE_MESSAGE", (data) => {
      appendMessage({
        context: data.context,
        time: data.time,
        sender_id: data.from_id,
        is_rendezvous: data.is_rendezvous,
        state: true,
      });
    });

    socket.on("READ_MESSAGE", (data) => {
      if (data.read_id === opponentId) {
        setLiveMessages((prev) => prev.map((m) => ({ ...m, state: true })));
      }
    });
  }, [me]);

  const sendNormal = async (text: string) => {
    if (!me) {
      return;
    }

    const result = await requestPost<EmptyResponse>(`/chat/${opponentId}`, { context: text });
    if (result.status !== 200) {
      alert(result.message);
      return;
    }

    appendMessage({
      context: text,
      time: formatISO(new Date()),
      sender_id: me.id,
      is_rendezvous: false,
      state: false,
    });
  };

  const sendRendezvous = async (text: string, minutes: number) => {
    if (!me) {
      return;
    }

    const result = await requestPost<EmptyResponse>(`/chat/rendezvous/${opponentId}`, {
      context: text,
      rendezvous_time: minutes,
    });
    if (result.status !== 200) {
      alert(result.message);
      return;
    }

    appendMessage(({
      context: text,
      time: formatISO(new Date()),
      sender_id: me.id || "",
      is_rendezvous: true,
      expired_time: formatISO(add(new Date(), { minutes })),
      rendezvous_place: me.place,
      state: false,
    }));
  };

  const appendMessage = (message: ChatMessageData) => {
    setLiveMessages((prev) => [...prev, message]);
    window.scrollTo(0, document.body.scrollHeight);
  };

  const addFriend = async () => {
    await getApi.getAddFriend(opponentId);
    setIsFriend(true);
    alert("친구를 등록했습니다.");
  };

  const removeFriend = async () => {
    await deleteApi.deleteFriend(opponentId);
    setIsFriend(false);
    alert("친구를 삭제했습니다.");
  };

  if (!opponent) {
    return <></>;
  }
  return (
    <Talk name={opponent.name}
          type={UserType(opponent.type)}
          isFriend={isFriend}
          onClickFriendBtn={() => isFriend ? removeFriend() : addFriend()}
          onClickSendNormal={sendNormal}
          onClickSendRendezvous={sendRendezvous}
          messages={liveMessages.map((m) => ({
            text: m.context,
            time: parseISO(m.time),
            myMessage: m.sender_id !== opponent.id,
            isRendezvous: m.is_rendezvous,
            expireTime: m.expired_time ? parseISO(m.expired_time) : null,
            location: m.rendezvous_place || null,
            read: m.state,
          }))}
    />
  );
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  if (!params) {
    return { notFound: true };
  }

  const opponentId = params.id;
  return {
    notFound: false,
    props: {
      opponentId,
    },
  };
};

export default Chat;
