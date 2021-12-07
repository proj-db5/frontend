import { UserDataProps } from "src/interfaces";
import { UserType } from "src/libs";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

interface FriendProfileProps {
  data: UserDataProps;
  isUser?: boolean;
}
export const FriendProfile = ({ data, isUser = false }: FriendProfileProps) => {
  const router = useRouter();
  return (
    <Wrapper>
      <div>
        <ProfileImage src="https://placekitten.com/50/50" alt="프로필 사진" />
      </div>
      <ProfileInfo>
        <ProfileName>
          ({UserType(data.type)}){data.name}
        </ProfileName>
        <ProfileMessage>{data.state_message}</ProfileMessage>
      </ProfileInfo>
      <ProfileAction
        state={data.online}
        onClick={
          isUser
            ? () => router.push("/mypage")
            : () => router.push(`/chat/${data.id}`)
        }
      >
        {isUser ? "편집" : "채팅"}
      </ProfileAction>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 19px 0;
  border-bottom: 1px solid var(--gray_2);
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ProfileName = styled.span`
  width: 200px;
  display: inline-block;
  margin: 0;
  padding: 0 16px;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  color: var(--black);

  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
`;

const ProfileMessage = styled.p`
  width: 200px;
  display: inline-block;
  margin: 0;
  padding: 0 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: var(--skyblue_4);

  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
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
