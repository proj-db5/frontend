import type { NextPage } from "next";
import { NavigationPage } from "../components/Navigation";
import { Container } from "../components/frientlist/Container";
import { ContentDivider } from "../components/frientlist/ContentDivider";
import { FriendProfile } from "../components/frientlist/FriendProfile";

const NearList: NextPage = () => {
  return (
    <Container page={NavigationPage.NEARBY}>
      <ContentDivider text="근처 접속 중인 사용자" />
      <FriendProfile data={mock_data} />

      <ContentDivider text="근처 미접속 중인 사용자" addMargin />
      <FriendProfile data={mock_data} />
    </Container>
  );
};

export default NearList;

const mock_data = {
  id: "asdfasd",
  name: "adsfsfd",
  type: 2,
  place: 1,
  state_message: "asdf",
  online: true,
};
