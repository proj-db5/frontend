import type { NextPage } from "next";
import { Container } from "../components/frientlist/Container";
import { NavigationPage } from "../components/Navigation";

const ChatList: NextPage = () => {
  return (
    <Container page={NavigationPage.CHATS}>
      <p>-</p>
    </Container>
  );
};

export default ChatList;
