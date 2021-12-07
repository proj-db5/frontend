import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import postApi from "src/apis/postApi";
import styled from "styled-components";

const Login: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    id: "",
    password: "",
  });

  const handleLogin = async (postData: { id: string; password: string }) => {
    const res = await postApi.postLogin(postData);
    if (res) {
      router.push("/");
    } else {
      alert("로그인 실패!");
    }
  };

  return (
    <Wrapper>
      <InnerWrap>
        <Title>연세톡 로그인</Title>
        <Input
          type="username"
          placeholder="아이디"
          value={data.id}
          onChange={(e) =>
            setData({
              ...data,
              id: e.target.value,
            })
          }
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={data.password}
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />
        <Button1 onClick={() => router.push("/subscription")}>회원가입</Button1>
        <Button2
          onClick={() => {
            handleLogin(data);
          }}
        >
          로그인
        </Button2>
      </InnerWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--skyblue_2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerWrap = styled.div`
  width: 100%;
  padding: 0 28px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
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
  max-width: 544px;
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
