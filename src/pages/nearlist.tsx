import type { NextPage } from "next";
import { NavigationPage } from "../components/Navigation";
import { Container } from "../components/frientlist/Container";
import { ContentDivider } from "../components/frientlist/ContentDivider";

const NearList: NextPage = () => {
  return (
    <Container page={NavigationPage.NEARBY}>
      <ContentDivider>근처 접속 중인 사용자</ContentDivider>
      <ContentDivider>근처 미접속 중인 사용자</ContentDivider>
    </Container>
  );
};

export default NearList;
