import useSWR from "swr";
import Home from "src/components/templates/home";
import { getApi } from "src/apis";
import { NextPageContext } from "next";
import { useSetRecoilState } from "recoil";
import states from "src/modules";

const HomePage = () => {
  const setLocation = useSetRecoilState(states.LocationState);
  const { data: FriendList } = useSWR(`/friend/list`, getApi.getFriendUsers, {
    onSuccess: (data) => {
      setLocation(data?.userData[0].place);
    },
  });

  return (
    <>
      {FriendList?.userData ? (
        <Home
          userData={FriendList?.userData[0]}
          onlineList={
            FriendList?.friendData?.filter((fl) => fl.online === true) || []
          }
          offlineList={
            FriendList?.friendData?.filter((fl) => fl.online !== true) || []
          }
        />
      ) : (
        <div>...loading</div>
      )}
    </>
  );
};

export default HomePage;

// mock data
const mock_data = {
  id: "asdfasd",
  name: "user",
  type: 0,
  place: 1,
  state_message: "asdfdjfkajkfjakfkjdkfjkajfjjfdfjkdfakfjkjakjkjkaakjfjkajfak",
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
    type: 1,
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
    type: 3,
    place: 1,
    state_message: "asdf",
    online: false,
  },
];

// url 직접 접근 방지
HomePage.getInitialProps = async (ctx: NextPageContext) => {
  if (!ctx.req?.headers.referer) {
    ctx.res?.writeHead(307, { Location: `/login` }); // Replace <link> with your url link
    ctx.res?.end();
  }
  return { props: {} };
};
