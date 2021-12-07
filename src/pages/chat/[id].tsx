import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useState } from "react";
import { ChatMessageData, ChatMessageResponse, EmptyResponse, UserResponse } from "../../libs/api/response";
import { requestGet, requestPost } from "../../libs/api/client";
import Talk from "../../components/templates/chat";
import { UserType } from "../../libs";

interface ChatProps {
  opponent: UserResponse,
  messages: ChatMessageResponse,
}

const Chat = ({ opponent, messages }: ChatProps) => {
  const [liveMessages, setLiveMessages] = useState<ChatMessageData[]>(messages.data);
  const sendNormal = async (text: string) => {
    await requestPost<EmptyResponse>(`/chat/${opponent.id}`, { context: text });
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
      opponent: await requestGet<UserResponse>(`/user/${opponentId}`, cookie),
      messages: await requestGet<ChatMessageResponse>(`/chat/chatData/${opponentId}`, cookie),
    },
  };
};

export default Chat;
