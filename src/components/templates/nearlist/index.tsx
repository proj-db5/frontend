import { NavigationPage } from "src/components/Navigation";
import { Container } from "src/components/common/Container";
import { ContentDivider } from "src/components/common/ContentDivider";
import { FriendProfile } from "src/components/frientlist/FriendProfile";
import { UserDataProps } from "src/interfaces";
import { Content } from "src/components/common/Content";

interface NearListProps {
  location: number;
  onlineList: UserDataProps[];
  offlineList: UserDataProps[];
}
const NearList = ({ onlineList, offlineList, location }: NearListProps) => {
  return (
    <Container page={NavigationPage.NEARBY} location={location}>
      <Content>
        <ContentDivider text="접속 중인 사용자" />
        {onlineList.map((ol) => (
          <FriendProfile key={ol.id} data={ol} />
        ))}
        <ContentDivider text="미접속 중인 사용자" addMargin />
        {offlineList.map((ol) => (
          <FriendProfile key={ol.id} data={ol} />
        ))}
      </Content>
    </Container>
  );
};

export default NearList;
