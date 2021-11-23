import type { NextPage } from "next";
import { ContentDivider, FriendListContainer } from "../components/FriendListContainer";
import { NavigationPage } from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <FriendListContainer page={NavigationPage.FRIENDS}>
      <ContentDivider>접속 중인 사용자</ContentDivider>
      <ContentDivider>미접속 중인 사용자</ContentDivider>
    </FriendListContainer>
  );
};

export default Home;
