import useSWR from "swr";
import Search from "src/components/templates/search";
import { getApi } from "src/apis";

const SearchPage = () => {
  const { data: FriendList, mutate } = useSWR(
    `/friend/friend/`,
    getApi.getSearchedUsers,
  );

  const handleSearch = async (value: string) => {
    await mutate(getApi.getSearchedUsers(`/friend/friend/${value}`), false);
  };

  return (
    <>
      {/* {FriendList?.userData ? ( */}
      <Search handleSearch={handleSearch} searchList={mock_data_on} />
      {/* ) : (
        <div>...loading</div>
      )} */}
    </>
  );
};

export default SearchPage;

// mock data
const mock_data = {
  id: "asdfasd",
  name: "user",
  type: 2,
  place: 1,
  state_message: "asdf",
  online: true,
};

const mock_data_on = [
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: true,
  },
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: true,
  },
];

const mock_data_off = [
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: false,
  },
  {
    id: "asdfasd",
    name: "adsfsfd",
    type: 2,
    place: 1,
    state_message: "asdf",
    online: false,
  },
];
