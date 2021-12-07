import { NavigationPage } from "src/components/Navigation";
import { Container } from "src/components/frientlist/Container";
import { ContentDivider } from "src/components/frientlist/ContentDivider";
import { FriendProfile } from "src/components/frientlist/FriendProfile";
import { UserDataProps } from "src/interfaces";

interface NearListProps {
  onlineList: UserDataProps[];
  offlineList: UserDataProps[];
}
const NearList = ({ onlineList, offlineList }: NearListProps) => {
  return (
    <Container page={NavigationPage.NEARBY}>
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

export default NearList;
