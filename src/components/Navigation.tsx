import styled from "styled-components";
import Link from "next/link";

export const Navigation = ({ currentPage }: { currentPage: NavigationPage }) => {
  return (
    <Wrapper>
      <Item active={currentPage === NavigationPage.NEARBY}>
        <Link href="/nearlist">
          <div>
            <span>내 주변</span>
          </div>
        </Link>
      </Item>
      <Item active={currentPage === NavigationPage.FRIENDS}>
        <Link href="/">
          <div>
            <span>친구 목록</span>
          </div>
        </Link>
      </Item>
      <Item active={currentPage === NavigationPage.CHATS}>
        <Link href="/chatlist">
          <span>대화</span>
        </Link>
      </Item>
      <Item active={currentPage === NavigationPage.MYPAGE}>
        <span>마이페이지</span>
      </Item>
    </Wrapper>
  );
};

export enum NavigationPage {
  NEARBY,
  FRIENDS,
  CHATS,
  MYPAGE,
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;

  display: inline;
  height: 70px;
  width: 100%;

  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Item = styled.div<{ active: boolean }>`
  float: left;
  height: 100%;
  width: 25%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${props => props.active ? "var(--skyblue_4)" : "var(--gray_7)"};
  cursor: pointer;
`;
