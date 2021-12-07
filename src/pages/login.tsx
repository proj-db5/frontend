import type { NextPage } from "next";
import router from "next/router";
import styled from "styled-components";

const Login: NextPage = () => {
  return (
    <Wrapper>
      <Title>연세톡 로그인</Title>
      <Input type="username" placeholder="아이디" />
      <Input type="password" placeholder="비밀번호" />
      <Button1 onClick={() => router.push("/subscription")}>회원가입</Button1>
      <Button2 onClick={() => router.push("/")}>로그인</Button2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 28px;
  width: 100%;
  background: var(--skyblue_2);
`;

const Title = styled.p`
  padding: 100px 0;
  margin: 0;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  color: #045274;

  padding: 13px;
  margin-bottom: 13px;
  background: #f6f6f6;
  border: none;
  border-radius: 3px;

  ::placeholder {
    color: rgba(24, 22, 0, 0.32);
  }
`;

const Button1 = styled.button`
  float: right;
  text-align: right;
  border: 1px solid #0b97b6;
  background-color: #0b97b6;

  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const Button2 = styled.button`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 94%;
  padding: 15px;
  text-align: center;
  border: 1px solid #0b97b6;
  background-color: #ffffff;
  border-radius: 8px;

  font-family: Source Sans Pro;
  color: #00809c;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

export default Login;
