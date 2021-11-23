import { ScriptProps } from "next/script";
import styled from "styled-components";
import { Navigation, NavigationPage } from "./Navigation";

export const FriendListContainer = ({ children, page }: ScriptProps & { page: NavigationPage }) => {
  const title = {
    [NavigationPage.NEARBY]: "내 주변",
    [NavigationPage.FRIENDS]: "친구 목록",
    [NavigationPage.CHATS]: "대화",
    [NavigationPage.MYPAGE]: "마이페이지",
  }[page];

  return (
    <Container>
      <div>
        <Title>{title}</Title>
      </div>
      <Content>
        {children}
      </Content>
      <Navigation currentPage={page} />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--skyblue_2);
`;

const Title = styled.p`
  padding: 26px 0;
  margin: 0;

  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: var(--white);
`;

const Content = styled.div`
  padding: 25px;
  margin: 0 12px 95px;

  background: var(--white);
  border-radius: 8px;
`;

export const ContentDivider = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--skyblue_4);
`;
