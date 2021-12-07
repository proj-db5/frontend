import type { NextPage } from "next";
import router from "next/router";
import styled from "styled-components";

const Login: NextPage = () => {
  return (
    <Wrapper>
        <Center>
        <div>
        <Title>연세톡 로그인</Title>
      </div>
                <div><Input type="username"
                placeholder="아이디"
                >
                </Input></div>

                <div><Input type="password"
                placeholder="비밀번호">
                </Input></div>
                
                <div>
                <Button1 onClick={
                    () => router.push("/subscription")
                }>회원가입</Button1>
                </div>
                <Button2 onClick={
                    () => router.push("/")
                }>로그인</Button2>
        </Center>
            </Wrapper>
  );
};


const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--skyblue_2);
`;

const Center = styled.div`
position: absolute;
left: 50%;
top: 35%;
transform: translate(-50%, -50%);
padding: 10px;
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
  color: #FFFFFF;
`;

const Input = styled.input`
  width: 98%;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  color: #045274;
  
  padding: 13px;
  margin: 10px;
  background: #F6F6F6;
  border: none;
  border-radius: 3px;

  ::placeholder {
    color: rgba(24, 22, 0, 0.32);
  }
`;

const Button1 = styled.button`
  float: right;
  padding: 15px;
  text-align: right;
  border: 1px solid #0B97B6;
  background-color: #0B97B6;
  border-radius: 8px;

  font-family: Source Sans Pro;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;



const Button2 = styled.button`

  width: 423px;
  padding: 15px;
  text-align: center;
  border: 1px solid #0B97B6;
  background-color: #FFFFFF;
  border-radius: 8px;

  font-family: Source Sans Pro;
  color: #00809C;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;



export default Login;
