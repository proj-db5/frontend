import { useRouter } from "next/dist/client/router";
import { BackBtn } from "src/assets/talk";
import styled from "styled-components";

export interface HeaderProps {
  name: string;
  type: string;
  isFriend: boolean;
  onClickBtn: () => void;
}
const Header = ({ name, type, isFriend, onClickBtn }: HeaderProps) => {
  const router = useRouter();
  return (
    <Container>
      <BackBtn
        className="back_btn"
        role="button"
        onClick={() => router.back()}
      />
      <div style={{ flex: 1 }} />
      <h1 className="name">
        {name}({type})
      </h1>
      <div style={{ flex: 1 }} />
      <button className="friend_btn" type="button" onClick={onClickBtn}>
        {isFriend ? "친구삭제" : "친구추가"}
      </button>
    </Container>
  );
};

export default Header;

const Container = styled.menu`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 120px;
  padding: 0 21px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--white);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 1);

  .back_btn {
    cursor: pointer;
    width: 7px;
    height: 15px;
  }

  .name {
    font-size: 18px;
    line-height: 26px;
    color: var(--black);
  }

  .friend_btn {
    all: unset;
    cursor: pointer;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: var(--gray_4);
  }
`;
