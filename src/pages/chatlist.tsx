import type { NextPage } from "next";
import { FriendListContainer } from "../components/FriendListContainer";
import { NavigationPage } from "../components/Navigation";

const ChatList: NextPage = () => {
  return (
    <FriendListContainer page={NavigationPage.CHATS}>
      <p>-</p>
    </FriendListContainer>
  );
};

export default ChatList;
