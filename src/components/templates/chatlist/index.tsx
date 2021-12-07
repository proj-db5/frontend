import { Container } from "src/components/common/Container";
import { NavigationPage } from "src/components/Navigation";
import { ChatProfile } from "src/components/chatlist";
import styled from "styled-components";
import { ChatDataProps } from "src/interfaces";
import { Content } from "src/components/common/Content";

interface ChatListProps {
  data: ChatDataProps[];
}
const ChatList = ({ data }: ChatListProps) => {
  return (
    <Container page={NavigationPage.CHATS}>
      <Content>
      <ChatWrap>
        {data.map((d) => (
          <ChatProfile key={d.id} data={d} />
        ))}
      </ChatWrap>
      </Content>
    </Container>
  );
};

export default ChatList;

const ChatWrap = styled.section`
  display: flex;
  flex-direction: column;
`;
