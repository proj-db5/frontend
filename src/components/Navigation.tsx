import styled from "styled-components";

export const Navigation = ({ currentItem }: { currentItem: NavigationItem }) => {
  return (
    <Wrapper>
      <Item active={currentItem === NavigationItem.NEARBY}>
        <div>
          <span>내 주변</span>
        </div>
      </Item>
      <Item active={currentItem === NavigationItem.FRIENDS}>
        <span>친구 목록</span>
      </Item>
      <Item active={currentItem === NavigationItem.CHATS}>
        <span>대화</span>
      </Item>
      <Item active={currentItem === NavigationItem.MYPAGE}>
        <span>마이페이지</span>
      </Item>
    </Wrapper>
  );
};

export enum NavigationItem {
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
  color: ${props => props.active ? '#045274' : '#B7B7B7'};
`;
