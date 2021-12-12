import { useRouter } from "next/dist/client/router";
import { ChatDataProps } from "src/interfaces";
import styled, { css } from "styled-components";

interface ChatProfileProps {
  data: ChatDataProps;
}
const ChatProfile = ({ data }: ChatProfileProps) => {
  const router = useRouter();
  return (
    <Wrapper>
      <div>
        <ProfileImage
          src="https://research.yonsei.ac.kr/_res/research/img/info/img-symbol01-pop.jpg"
          alt="프로필 사진"
        />
      </div>
      <ProfileInfo>
        <div className="info">
          <p className="info__name">{data.name}</p>
          <p className="info__time">{data.time}</p>
        </div>
        <ProfileMessage>
          {(data.sender_id === data.id && data.is_expired === 1)
            ? "(시간이 만료된 랑데부 메시지입니다.)"
            : data.context}
        </ProfileMessage>
      </ProfileInfo>
      <ProfileAction
        state={data.online === 1}
        onClick={() => router.push(`/chat/${data.id}`)}
      >
        <span>채팅</span>
      </ProfileAction>
    </Wrapper>
  );
};

export default ChatProfile;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 19px 0;
  border-bottom: 1px solid var(--gray_2);
`;

const ProfileInfo = styled.div`
  flex-grow: 1;
  .info {
    display: flex;
    flex-direction: column;
    padding: 6px 16px;
    &__name {
      margin: 0;
      font-weight: bold;
      font-size: 17px;
      line-height: 25px;
      color: var(--black);
    }
    &__time {
      margin: 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--gray_8);
    }
  }
`;

const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ProfileMessage = styled.p`
  margin: 0;
  padding: 0 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: var(--skyblue_4);
`;

interface ProfileActionProps {
  state: boolean;
}
const ProfileAction = styled.div<ProfileActionProps>`
  cursor: pointer;
  height: 23px;
  width: 50px;

  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-align: center;

  ${({ state }) =>
    state
      ? css`
          background: var(--skyblue_2);
          color: var(--white);
        `
      : css`
          background: var(--white);
          color: var(--skyblue_2);
          border: 1px solid var(--skyblue_2);
        `}
`;
