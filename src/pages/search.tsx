import useSWR from "swr";
import Search from "src/components/templates/search";
import { getApi } from "src/apis";

const SearchPage = () => {
  const { data: searchList, mutate } = useSWR(
    `/friend/`,
    getApi.getSearchedUsers,
  );

  const handleSearch = async (value: string) => {
    await mutate(getApi.getSearchedUsers(`/friend/${value}`), false);
  };

  return <Search handleSearch={handleSearch} searchList={searchList || []} />;
};

export default SearchPage;
