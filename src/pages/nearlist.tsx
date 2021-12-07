import type { NextPage } from "next";
import useSWR from "swr";
import { getApi } from "src/apis";
import NearList from "src/components/templates/nearlist";

const NearListPage: NextPage = () => {
  const { data: UserList } = useSWR(`/environ/${1}`, getApi.getNearUsers);

  return (
    <NearList
      location={1}
      onlineList={UserList?.filter((ul) => ul.online === true) || []}
      offlineList={UserList?.filter((ul) => ul.online !== true) || []}
    />
  );
};

export default NearListPage;
