import styled from "styled-components";

export const FriendProfile = () => {
  return (
    <Wrapper>
      <div>
        <ProfileImage src="https://placekitten.com/50/50" alt="프로필 사진" />
      </div>
      <ProfileInfo>
        <ProfileName>김이름</ProfileName>
        <ProfileMessage>동해물과백두산이마르고닳도록</ProfileMessage>
      </ProfileInfo>
      <ProfileAction>
        <span>채팅</span>
      </ProfileAction>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const ProfileInfo = styled.div`
  flex-grow: 1;
`;

const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ProfileName = styled.span`
  margin: 0;
  padding: 0 16px;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  color: var(--black);
`;

const ProfileMessage = styled.p`
  margin: 0;
  padding: 0 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: var(--skyblue_4);
`;

const ProfileAction = styled.div`
  height: 23px;
  width: 50px;
  background: var(--skyblue_2);
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--white);
`;
