import { useState } from "react";
import { Bubble, Header, Modal, MyBubble } from "src/components/chat";
import styled from "styled-components";

export interface TalkProps {
  name: string;
  type: string;
  isFriend: boolean;
  onClickFriendBtn: () => void;
  onClickSendNormal: (message: string) => void;
  onClickSendRendezvous: () => void;
  messages: {
    text: string;
    time: string;
    myMessage: boolean,
    isRendezvous: boolean,
  }[];
}

const Talk = ({ name, type, isFriend, onClickFriendBtn, onClickSendNormal, messages }: TalkProps) => {
  const [messageInput, setMessageInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(30);

  return (
    <>
      <Container>
        <Header
          name={name}
          type={type}
          isFriend={isFriend}
          onClickBtn={onClickFriendBtn}
        />
        <BubbleContainer>
          {
            messages.map((message) => (
              message.myMessage ?
                <MyBubble
                  key={`message-${message.time}`}
                  isRendezvous={message.isRendezvous}
                  text={message.text}
                  time={message.time}
                /> :
                <Bubble
                  key={`message-${message.time}`}
                  text={message.text}
                  time={message.time}
                />
            ))
          }
        </BubbleContainer>
        <Bottom>
          <input
            className="text_input"
            placeholder="메세지 보내기..."
            onChange={(e) => setMessageInput(e.currentTarget.value)}
          />
          <BottomButton
            type="button"
            isActive={messageInput.length !== 0}
            onClick={() => onClickSendNormal(messageInput)}
          >
            일반
          </BottomButton>
          <BottomButton
            type="button"
            isActive={messageInput.length !== 0}
            onClick={() => setIsOpen(true)}
          >
            랑데뷰
          </BottomButton>
        </Bottom>
      </Container>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        time={time}
        setTime={setTime}
        onClickBtn={() => "랑데뷰전송"}
      />
    </>
  );
};

export default Talk;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const BubbleContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 140px 20px 120px 20px;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100px;
  padding: 9px 12px 50px 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--gray_4);

  .text_input {
    flex: 1;
    height: 40px;
    padding: 9px 18px;
    background: #ffffff;
    border: 2px solid var(--gray_2);
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--black_1);
    &::placeholer {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--gray_5);
    }
  }
`;

const BottomButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  height: 40px;
  padding: 10px 8px;
  margin-left: 5px;
  background: var(${props => props.isActive ? '--skyblue_3' : '--gray_3'});
  border: 2px solid var(--gray_2);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: var(--white);
`;
