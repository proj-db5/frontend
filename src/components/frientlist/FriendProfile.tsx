import { UserDataProps } from "src/interfaces";
import { UserType } from "src/libs";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

interface FriendProfileProps {
  data: UserDataProps;
  isUser?: boolean;
  isSearch?: boolean;
  isFriend?: 0 | 1;
  handleAddFriend?: (id: string) => Promise<void>;
  handleRemoveFriend?: (id: string) => Promise<void>;
}
export const FriendProfile = ({
  data,
  isUser = false,
  isSearch = false,
  isFriend = 0,
  handleAddFriend,
  handleRemoveFriend,
}: FriendProfileProps) => {
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
        <ProfileName>
          ({UserType(data.type)}){data.name}
        </ProfileName>
        <ProfileMessage>{data.state_message}</ProfileMessage>
      </ProfileInfo>
      {isSearch ? (
        <ProfileAction
          state={!data.isFriend}
          onClick={
            isFriend
              ? () => handleRemoveFriend && handleRemoveFriend(data.id)
              : () => handleAddFriend && handleAddFriend(data.id)
          }
        >
          {isFriend ? "친구삭제" : "친구추가"}
        </ProfileAction>
      ) : (
        <ProfileAction
          state={data.online === 1}
          onClick={
            isUser
              ? () => router.push("/mypage")
              : () => router.push(`/chat/${data.id}`)
          }
        >
          {isUser ? "편집" : "채팅"}
        </ProfileAction>
      )}
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
  display: flex;
  flex-direction: column;
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
