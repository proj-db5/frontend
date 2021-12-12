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
      setLocation(data?.userData[0].place || 0);
    },
  });

  return (
    <>
      {FriendList?.userData ? (
        <Home
          userData={FriendList?.userData[0]}
          onlineList={
            FriendList?.friendData?.filter((fl) => fl.online === 1) || []
          }
          offlineList={
            FriendList?.friendData?.filter((fl) => fl.online !== 1) || []
          }
        />
      ) : (
        <div>...loading</div>
      )}
    </>
  );
};

export default HomePage;

// url 직접 접근 방지
HomePage.getInitialProps = async (ctx: NextPageContext) => {
  if (!ctx.req?.headers.referer) {
    ctx.res?.writeHead(307, { Location: `/login` }); // Replace <link> with your url link
    ctx.res?.end();
  }
  return { props: {} };
};
