import { Container } from "src/components/frientlist/Container";
import { NavigationPage } from "src/components/Navigation";
import { ChatProfile } from "src/components/chatlist";
import styled from "styled-components";
import { ChatDataProps } from "src/interfaces";

interface ChatListProps {
  data: ChatDataProps[];
}
const ChatList = ({ data }: ChatListProps) => {
  return (
    <Container page={NavigationPage.CHATS}>
      <ChatWrap>
        {data.map((d) => (
          <ChatProfile key={d.id} data={d} />
        ))}
      </ChatWrap>
    </Container>
  );
};

export default ChatList;

const ChatWrap = styled.section`
  display: flex;
  flex-direction: column;
`;
