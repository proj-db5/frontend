import { useRouter } from "next/router";
import { ScriptProps } from "next/script";
import { BackIcon, SearchIcon } from "src/assets/common";
import { LocationType } from "src/libs";
import styled from "styled-components";
import { Navigation, NavigationPage } from "../Navigation";

export const Container = ({
  children,
  page,
  location = 0,
  initData,
}: ScriptProps & {
  page: NavigationPage;
  location?: number;
  initData?: () => void;
}) => {
  const router = useRouter();

  const title = {
    [NavigationPage.NEARBY]: `내 주변(${LocationType(location)})`,
    [NavigationPage.FRIENDS]: `친구 목록(${LocationType(location)})`,
    [NavigationPage.CHATS]: "대화",
    [NavigationPage.MYPAGE]: "마이페이지",
    [NavigationPage.SEARCH]: "친구 검색",
  }[page];

  return (
    <Wrapper>
      <div style={{ width: "100%" }}>
        <Title>
          {title.includes("검색") ? (
            <BackIcon
              onClick={() => {
                initData && initData();
                router.back();
              }}
            />
          ) : (
            <div />
          )}
          {title}
          {title.includes("목록") ? (
            <SearchIcon onClick={() => router.push("/search")} />
          ) : (
            <div />
          )}
        </Title>
        {children}
      </div>
      <Navigation currentPage={page} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background: var(--skyblue_2);
  flex-direction: column;

  ${({ theme }) => theme.media.pc`
    flex-direction: row-reverse;
  `}
`;

const Title = styled.p`
  padding: 26px 20px;
  margin: 0;

  font-weight: bold;
  font-size: 20px;
  color: var(--white);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.pc`
    padding: 48px 40px;
    font-size: 30px;
  `}
`;
