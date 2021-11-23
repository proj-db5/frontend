import type { NextPage } from "next";
import { NavigationPage } from "../components/Navigation";
import { Container } from "../components/frientlist/Container";
import { ContentDivider } from "../components/frientlist/ContentDivider";
import { FriendProfile } from "../components/frientlist/FriendProfile";

const NearList: NextPage = () => {
  return (
    <Container page={NavigationPage.NEARBY}>
      <ContentDivider text="근처 접속 중인 사용자" />
      <FriendProfile />

      <ContentDivider text="근처 미접속 중인 사용자" addMargin />
      <FriendProfile />
    </Container>
  );
};

export default NearList;
