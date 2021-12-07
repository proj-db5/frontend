import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useContext, useEffect, useState } from "react";
import { ChatMessageData, ChatMessageResponse, EmptyResponse, UserResponse } from "../../libs/api/response";
import { requestGet, requestPost } from "../../libs/api/client";
import Talk from "../../components/templates/chat";
import { UserType } from "../../libs";
import { socketContext } from "../../contexts/socket";

interface ChatProps {
  me: UserResponse,
  opponent: UserResponse,
  messages: ChatMessageResponse,
}

const Chat = ({ me, opponent, messages }: ChatProps) => {
  const socket = useContext(socketContext);
  const [liveMessages, setLiveMessages] = useState<ChatMessageData[]>(messages.data);

  useEffect(() => {
    socket.on("RESPONSE_MESSAGE", (data) => {
      appendMessage({
        context: data.context,
        time: data.time,
        sender_id: data.from_id,
        is_rendezvous: data.is_rendezvous,
      });
    });
  });

  const sendNormal = async (text: string) => {
    await requestPost<EmptyResponse>(`/chat/${opponent.id}`, { context: text });
    appendMessage({
      context: text,
      time: new Date().toISOString().slice(0, 19).replace('T', ' '),
      sender_id: me.id,
      is_rendezvous: false,
    });
  };

  const appendMessage = (message: ChatMessageData) => {
    setLiveMessages((prev) => [...prev, message]);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Talk name={opponent.name}
          type={UserType(opponent.type)}
          isFriend={false}
          onClickFriendBtn={() => {
          }}
          onClickSendNormal={sendNormal}
          onClickSendRendezvous={() => {
          }}
          messages={liveMessages.map((m) => ({
            text: m.context,
            time: m.time,
            myMessage: m.sender_id !== opponent.id,
            isRendezvous: m.is_rendezvous,
          }))}
    />
  );
};

export const getServerSideProps: GetServerSideProps<ChatProps> = async ({ params, req }: GetServerSidePropsContext) => {
  if (!params) {
    return { notFound: true };
  }

  const opponentId = params.id;
  const { cookie } = req.headers;
  return {
    props: {
      me: await requestGet<UserResponse>(`/user/whoAmI`, cookie),
      opponent: await requestGet<UserResponse>(`/user/${opponentId}`, cookie),
      messages: await requestGet<ChatMessageResponse>(`/chat/chatData/${opponentId}`, cookie),
    },
  };
};

export default Chat;
