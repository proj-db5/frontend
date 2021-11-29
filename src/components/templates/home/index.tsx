import { NavigationPage } from "src/components/Navigation";
import { Container } from "src/components/frientlist/Container";
import { ContentDivider } from "src/components/frientlist/ContentDivider";
import { FriendProfile } from "src/components/frientlist/FriendProfile";
import { UserDataProps } from "src/interfaces";

interface HomeProps {
  userData: UserDataProps;
  onlineList: UserDataProps[];
  offlineList: UserDataProps[];
}
const Home = ({ userData, onlineList, offlineList }: HomeProps) => {
  return (
    <Container page={NavigationPage.FRIENDS}>
      <ContentDivider text="내 정보" />
      <FriendProfile key={userData.id} data={userData} isUser />
      <div style={{ height: "50px" }} />
      <ContentDivider text="접속 중인 사용자" />
      {onlineList.map((ol) => (
        <FriendProfile key={ol.id} data={ol} />
      ))}
      <ContentDivider text="미접속 중인 사용자" addMargin />
      {offlineList.map((ol) => (
        <FriendProfile key={ol.id} data={ol} />
      ))}
    </Container>
  );
};

export default Home;
