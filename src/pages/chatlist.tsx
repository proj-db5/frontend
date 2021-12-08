import ChatList from "src/components/templates/chatlist";

const ChatListPage = () => {
  const { data: chatList } = useSWR(`/chatList`, getApi.getChatList);

  return <>{chatList ? <ChatList data={chatList} /> : <div>...loading</div>}</>;
};

export default ChatListPage;
