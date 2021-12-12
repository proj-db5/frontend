import styled from "styled-components";
import { format, isAfter } from "date-fns";

export interface BubbleProps {
  text: string;
  time: string;
  read: boolean;
  location?: string;
  delTime?: Date;
}

const Bubble = ({ text, time, read, location, delTime }: BubbleProps) => {
  return (
    <Wrapper>
      <Container>
        <img
          alt="profile_img"
          className="profile_img"
          src="https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png"
        />
        <BubbleInnerWrap>
          {!delTime || isAfter(delTime, new Date()) ? text : "(삭제됨)"}
        </BubbleInnerWrap>
        <span className="time">{time}, {read ? "읽음" : "읽지 않음"}</span>
      </Container>
      {delTime && (
        <span className="deleted_time">
          {location}, {format(delTime, "aa hh:mm")}에 삭제됨
        </span>
      )}
    </Wrapper>
  );
};

export default Bubble;

const Wrapper = styled.div`
  .deleted_time {
    margin-left: 53px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 8px;

  .profile_img {
    width: 44px;
    height: 44px;
    margin-right: 9px;
    border-radius: 22px;
    background-color: var(--gray_3);
    object-fit: cover;
  }

  .time {
    height: 18px;
    font-size: 9px;
    line-height: 13px;
    color: var(--gray_9);
  }
`;

const BubbleInnerWrap = styled.dialog`
  all: unset;
  max-width: 300px;
  padding: 12px 14px;
  margin-right: 8px;
  background: var(--gray_1);
  border: 1px solid var(--gray_3);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px 2px 10px 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--black_1);
`;
