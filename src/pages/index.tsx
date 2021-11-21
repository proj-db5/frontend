import type { NextPage } from "next";
import styled from "styled-components";
import { Navigation, NavigationItem } from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <div>
        <Title>친구 목록</Title>
      </div>

      <Content>
        <ContentDivider>접속 중인 사용자</ContentDivider>
        <ContentDivider>미접속 중인 사용자</ContentDivider>
      </Content>

      <Navigation currentItem={NavigationItem.FRIENDS} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0B97B6;
`;

const Title = styled.p`
  padding: 26px 0;
  margin: 0;
  
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: #FFFFFF;
`;

const Content = styled.div`
  height: 100vh;
  margin: 0 12px;
  padding: 25px;
  
  background: #FFFFFF;
  border-radius: 8px;
`;

const ContentDivider = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #045274;
`;


export default Home;
