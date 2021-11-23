import type { NextPage } from "next";
import { NavigationPage } from "../components/Navigation";
import { Container } from "../components/frientlist/Container";
import { ContentDivider } from "../components/frientlist/ContentDivider";

const Home: NextPage = () => {
  return (
    <Container page={NavigationPage.FRIENDS}>
      <ContentDivider>접속 중인 사용자</ContentDivider>
      <ContentDivider>미접속 중인 사용자</ContentDivider>
    </Container>
  );
};

export default Home;
