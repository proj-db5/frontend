import type { NextPage } from "next";
import router from "next/router";
import styled from "styled-components";

const Subscription: NextPage = () => {
  return (
    <Wrapper>
        <Center>
        <div>
        <Title>연세톡 회원가입</Title>
      </div>
      <form>
                <div>
                <P1>ID를 입력주세요</P1>    
                <Input2 type="username"
                placeholder="예: yonseiDB"
                >
                </Input2>
                <Button1>중복확인</Button1>
                </div>

                <div>
                <P1>비밀번호 입력해주세요</P1>    
                <Input type="password"
                placeholder="비밀번호 입력해주세요">
                </Input></div>
                

                <P1>비밀번호 다시 입력해주세요</P1>
                <div><Input type="password"
                placeholder="비밀번호 다시 입력해주세요">
                </Input></div>

                <P1>원하는 닉네임을 입력해주세요</P1>
                <div><Input
                placeholder="예: 시누">
                </Input></div>


                <P1>회원 유형을 선택해주세요</P1>
               
                <Select>
                    <option value="일반">일반</option>
                    <option value="학생">학생</option>
                    <option value="강사">강사</option>
                    <option value="기업">기업</option>
                </Select>
                
                <div>
                <Button2 onClick={
                    () => router.push("/login")
                }>회원가입</Button2>
                </div>
        </form>
        </Center>
            </Wrapper>
  );
};

export default Subscription;

const Select = styled.select`
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
`;

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

const P1 = styled.p`
  padding: 15px 30px 0;
  margin: 0;
  
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: left;
  color: #FFFFFF;
`;

const Title = styled.p`
  padding: 35px 0;
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

const Input2 = styled.input`
  width: 70%;
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
  padding: 13px;
  text-align: right;
  border: 1px solid #0B97B6;
  background-color: #FFFFFF;
  border-radius: 8px;

  font-family: Source Sans Pro;
  color: #00809C;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;



const Button2 = styled.button`
  margin: 50px 0;
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

