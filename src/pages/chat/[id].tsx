import { GetServerSidePropsContext } from "next";
import { useContext, useEffect, useState } from "react";
import { add, formatISO, isBefore, parseISO } from "date-fns";
import useSWR from "swr";
import { ChatMessageData, ChatMessageResponse, EmptyResponse, UserResponse } from "../../libs/api/response";
import { requestGet, requestPost } from "../../libs/api/client";
import Talk from "../../components/templates/chat";
import { UserType } from "../../libs";
import { socketContext } from "../../contexts/socket";

interface ChatProps {
  opponentId: string,
}

const Chat = ({ opponentId }: ChatProps) => {
  const socket = useContext(socketContext);
  const [liveMessages, setLiveMessages] = useState<ChatMessageData[]>([]);

  const { data: me } = useSWR("/user/whoAmI", () => requestGet<UserResponse>("/user/whoAmI"));
  const { data: opponent } = useSWR(`/user/${opponentId}`, () => requestGet<UserResponse>(`/user/${opponentId}`));

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
      });
    });
  }, [me]);

  const sendNormal = async (text: string) => {
    if (!me) {
      return;
    }

    await requestPost<EmptyResponse>(`/chat/${opponentId}`, { context: text });
    appendMessage({
      context: text,
      time: formatISO(new Date()),
      sender_id: me.id,
      is_rendezvous: false,
    });
  };

  const sendRendezvous = async (text: string, minutes: number) => {
    if (!me) {
      return;
    }

    await requestPost<EmptyResponse>(`/chat/rendezvous/${opponentId}`, {
      context: text,
      rendezvous_time: minutes,
    });
    appendMessage(({
      context: text,
      time: formatISO(new Date()),
      sender_id: me.id || "",
      is_rendezvous: true,
      expired_time: formatISO(add(new Date(), { minutes })),
      rendezvous_place: me.place,
    }));
  };

  const appendMessage = (message: ChatMessageData) => {
    setLiveMessages((prev) => [...prev, message]);
    window.scrollTo(0, document.body.scrollHeight);
  };

  if (!opponent) {
    return <></>;
  }
  return (
    <Talk name={opponent.name}
          type={UserType(opponent.type)}
          isFriend={false}
          onClickFriendBtn={() => {
          }}
          onClickSendNormal={sendNormal}
          onClickSendRendezvous={sendRendezvous}
          messages={liveMessages.map((m) => ({
            text: m.context,
            time: parseISO(m.time),
            myMessage: m.sender_id !== opponent.id,
            isRendezvous: m.is_rendezvous,
            expireTime: m.expired_time ? parseISO(m.expired_time) : null,
            location: m.rendezvous_place || null,
          })).filter((m) => !m.expireTime || isBefore(new Date(), m.expireTime))}
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
