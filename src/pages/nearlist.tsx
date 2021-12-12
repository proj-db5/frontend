import type { NextPage } from "next";
import useSWR from "swr";
import { getApi } from "src/apis";
import NearList from "src/components/templates/nearlist";
import { useRecoilValue } from "recoil";
import states from "src/modules";

const NearListPage: NextPage = () => {
  const location = useRecoilValue(states.LocationState);
  const { data: UserList } = useSWR(
    `/environ/${location}`,
    getApi.getNearUsers,
  );

  return (
    <NearList
      location={location}
      onlineList={UserList?.filter((ul) => ul.online === 1) || []}
      offlineList={UserList?.filter((ul) => ul.online !== 1) || []}
    />
  );
};

export default NearListPage;
