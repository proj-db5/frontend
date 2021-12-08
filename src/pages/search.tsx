import useSWR from "swr";
import Search from "src/components/templates/search";
import { deleteApi, getApi } from "src/apis";
import { useEffect } from "react";

const SearchPage = () => {
  const { data: searchList, mutate } = useSWR(
    `/friend/`,
    getApi.getSearchedUsers,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnMount: false,
    },
  );

  useEffect(() => {
    InitSearchData();
  }, []);

  const handleSearch = async (value: string) => {
    const res = await getApi.getSearchedUsers(`/friend/${value}`);
    await mutate(res, false);
  };

  const handleAddFriend = async (id: string) => {
    await getApi.getAddFriend(id);
    mutate(
      searchList?.map((sl) => {
        if (sl.id === id && !sl.isFriend) {
          return { ...sl, isFriend: 1 };
        }
        return sl;
      }),
      false,
    );
  };

  const handleRemoveFriend = async (id: string) => {
    await deleteApi.deleteFriend(id);
    mutate(
      searchList?.map((sl) => {
        if (sl.id === id && sl.isFriend) {
          return { ...sl, isFriend: 0 };
        }
        return sl;
      }),
      false,
    );
  };

  const InitSearchData = () => {
    mutate([], false);
  };

  return (
    <Search
      // initData={InitSearchData}
      handleSearch={handleSearch}
      searchList={searchList || []}
      handleAddFriend={handleAddFriend}
      handleRemoveFriend={handleRemoveFriend}
    />
  );
};

export default SearchPage;
