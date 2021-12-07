import { ScriptProps } from "next/script";
import styled from "styled-components";
import { Navigation, NavigationPage } from "../Navigation";

export const Container = ({ children, page }: ScriptProps & { page: NavigationPage }) => {
  const title = {
    [NavigationPage.NEARBY]: "내 주변",
    [NavigationPage.FRIENDS]: "친구 목록",
    [NavigationPage.CHATS]: "대화",
    [NavigationPage.MYPAGE]: "마이페이지",
  }[page];

  return (
    <Wrapper>
      <div style={{ width: "100%" }}>
        <Title>{title}</Title>
        {children}
      </div>
      <Navigation currentPage={page} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background: var(--skyblue_2);
  flex-direction: column;

  ${({ theme }) => theme.media.pc`
    flex-direction: row-reverse;
  `}
`;

const Title = styled.p`
  padding: 26px 0;
  margin: 0;

  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: var(--white);
  
  ${({ theme }) => theme.media.pc`
    padding: 48px 0;
    font-size: 30px;
  `}
`;

const Content = styled.div`
  padding: 25px;
  margin: 0 12px 95px;

  background: var(--white);
  border-radius: 8px;
  
  ${({ theme }) => theme.media.pc`
    margin: 0 25px;
  `}
`;
