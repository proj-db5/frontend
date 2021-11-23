import type { NextPage } from "next";
import { ContentDivider, FriendListContainer } from "../components/FriendListContainer";
import { NavigationPage } from "../components/Navigation";

const NearList: NextPage = () => {
  return (
    <FriendListContainer page={NavigationPage.NEARBY}>
      <ContentDivider>근처 접속 중인 사용자</ContentDivider>
      <ContentDivider>근처 미접속 중인 사용자</ContentDivider>
    </FriendListContainer>
  );
};

export default NearList;
