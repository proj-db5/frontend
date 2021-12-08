import { getApi } from "src/apis";
import ChatList from "src/components/templates/chatlist";
import useSWR from "swr";

const ChatListPage = () => {
  const { data: chatList } = useSWR(`/chatList`, getApi.getChatList);

  return <ChatList data={mock_data} />;
};

export default ChatListPage;

// mock data
const mock_data = [
  {
    id: 5,
    user: "user1",
    online: true,
    last_message: {
      id: 10,
      context: "asdf",
      time: "2021 / 11 / 20",
      state: true,
      is_rendezvous: true,
      rendezvous_place: 3,
      rendezvous_time: 5,
    },
  },
  {
    id: 5,
    user: "user1",
    online: true,
    last_message: {
      id: 10,
      context: "asdf",
      time: "2021 / 11 / 20",
      state: true,
      is_rendezvous: true,
      rendezvous_place: 3,
      rendezvous_time: 5,
    },
  },
  {
    id: 5,
    user: "user1",
    online: false,
    last_message: {
      id: 10,
      context: "asdf",
      time: "2021 / 11 / 20",
      state: true,
      is_rendezvous: true,
      rendezvous_place: 3,
      rendezvous_time: 5,
    },
  },
];
