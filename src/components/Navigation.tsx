import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouseUser, faList } from "@fortawesome/free-solid-svg-icons";

const ItemIcon = ({ icon, height }: { icon: any; height: number }) => (
  <ItemIconWrapper>
    <FontAwesomeIcon icon={icon} height={height} />
  </ItemIconWrapper>
);

export const Navigation = ({
  currentPage,
}: {
  currentPage: NavigationPage;
}) => {
  return (
    <Wrapper>
      <Link href="/">
        <Item
          active={
            currentPage === NavigationPage.FRIENDS ||
            currentPage === NavigationPage.SEARCH
          }
        >
          <ItemIcon icon={faList} height={20} />
          <span>친구 목록</span>
        </Item>
      </Link>
      <Link href="/nearlist">
        <Item active={currentPage === NavigationPage.NEARBY}>
          <ItemIcon icon={faHouseUser} height={20} />
          <span>내 주변</span>
        </Item>
      </Link>
      <Link href="/chatlist">
        <Item active={currentPage === NavigationPage.CHATS}>
          <ItemIcon icon={faComments} height={20} />
          <span>채팅</span>
        </Item>
      </Link>
      <Link href="/mypage">
        <Item active={currentPage === NavigationPage.MYPAGE}>
          <ItemIcon icon={faUser} height={20} />
          <span>마이페이지</span>
        </Item>
      </Link>
    </Wrapper>
  );
};

export enum NavigationPage {
  NEARBY,
  FRIENDS,
  CHATS,
  MYPAGE,
  SEARCH,
}

const Wrapper = styled.div`
  position: fixed;
  display: inline;
  bottom: 0;
  height: 70px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.media.pc`
    position: initial;
    height: 100vh;
    width: 400px;
    padding: 20px 30px;
  `}

  background: #ffffff;
`;

const Item = styled.div<{ active: boolean }>`
  float: left;
  height: 100%;
  width: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  ${({ theme }) => theme.media.pc`
    float: initial;
    height: 60px;
    width: 100%;
    
    flex-direction: row;
    justify-content: start;
 
    font-size: 18px;
  `}

  color: ${(props) => (props.active ? "var(--skyblue_4)" : "var(--gray_7)")};
  cursor: pointer;
`;

const ItemIconWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin-bottom: 6px;

  ${({ theme }) => theme.media.pc`
    margin-right: 12px;
  `};
`;
