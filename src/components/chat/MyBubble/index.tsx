import styled, { css } from "styled-components";

export interface MyBubbleProps {
  isRendezvous: boolean;
  text: string;
  time: string;
  read: boolean;
  location?: string;
  delTime?: string;
}
const MyBubble = ({
  isRendezvous,
  text,
  time,
  read,
  location,
  delTime,
}: MyBubbleProps) => {
  return (
    <Container>
      <BubbleWrap>
        <span className="time">{time}, {read ? "읽음" : "읽지 않음"}</span>
        <BubbleInnerWrap isRendezvous={isRendezvous}>{text}</BubbleInnerWrap>
      </BubbleWrap>
      {delTime && (
        <span className="deleted_time">
          {location}, {delTime}에 삭제됨
        </span>
      )}
    </Container>
  );
};

export default MyBubble;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 14px;
`;

const BubbleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  .time {
    height: 18px;
    margin-right: 11px;
    font-size: 9px;
    line-height: 13px;
    color: var(--gray_9);
  }

  .deleted_time {
    height: 18px;
    margin-right: 5px;
    font-size: 12px;
    line-height: 13px;
    color: var(--gray_9);
  }
`;

interface BubbleInnerWrapProps {
  isRendezvous: boolean;
}
const BubbleInnerWrap = styled.dialog<BubbleInnerWrapProps>`
  all: unset;
  max-width: 300px;
  padding: 12px 14px;
  margin-bottom: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px 2px 10px 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--white);

  ${({ isRendezvous }) =>
    isRendezvous
      ? css`
          background-color: var(--orange);
        `
      : css`
          background-color: var(--skyblue_2);
        `};
`;
