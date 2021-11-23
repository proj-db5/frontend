import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouseUser, faList } from "@fortawesome/free-solid-svg-icons";

export const Navigation = ({ currentPage }: { currentPage: NavigationPage }) => {
  return (
    <Wrapper>
      <Item active={currentPage === NavigationPage.NEARBY}>
        <Link href="/nearlist">
          <div>
            <FontAwesomeIcon icon={faHouseUser} height={20}/>
            <p>내 주변</p>
          </div>
        </Link>
      </Item>
      <Item active={currentPage === NavigationPage.FRIENDS}>
        <Link href="/">
          <div>
            <FontAwesomeIcon icon={faList} height={20}/>
            <p>친구 목록</p>
          </div>
        </Link>
      </Item>
      <Item active={currentPage === NavigationPage.CHATS}>
        <Link href="/chatlist">
          <div>
            <FontAwesomeIcon icon={faComments} height={20}/>
            <p>대화</p>
          </div>
        </Link>
      </Item>
      <Item active={currentPage === NavigationPage.MYPAGE}>
        <div>
          <FontAwesomeIcon icon={faUser} height={20} />
          <p>마이페이지</p>
        </div>
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
  text-align: center;
  color: ${props => props.active ? "var(--skyblue_4)" : "var(--gray_7)"};
  cursor: pointer;
  
  p {
    margin: 0;
  }
`;
