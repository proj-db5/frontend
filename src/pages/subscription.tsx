import type { NextPage } from "next";
import router from "next/router";
import styled from "styled-components";

const Subscription: NextPage = () => {
  return (
    <Wrapper>
      <Title>연세톡 회원가입</Title>

      <P1>ID를 입력주세요</P1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Input2 type="username" placeholder="예: yonseiDB" />
        <Button1>중복확인</Button1>
      </div>
      <P2>사용가능한 id 입니다.</P2>
      <P2 style={{ color: "#FEB287" }}>이미 존재하는 id 입니다.</P2>
      <div style={{ height: "20px" }} />

      <P1>비밀번호 입력해주세요</P1>
      <Input type="password" placeholder="비밀번호 입력해주세요" />

      <P1>비밀번호 다시 입력해주세요</P1>

      <Input type="password" placeholder="비밀번호 다시 입력해주세요" />

      <P1>원하는 닉네임을 입력해주세요</P1>

      <Input placeholder="예: 시누" />

      <P1>회원 유형을 선택해주세요</P1>

      <Select>
        <option value="일반">일반</option>
        <option value="학생">학생</option>
        <option value="강사">강사</option>
        <option value="기업">기업</option>
      </Select>

      <Button2 onClick={() => router.push("/login")}>회원가입</Button2>
    </Wrapper>
  );
};

export default Subscription;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0 28px;
  background: var(--skyblue_2);
`;

const Select = styled.select`
  width: 100%;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  color: #045274;

  padding: 13px;
  background: #f6f6f6;
  border: none;
  border-radius: 3px;
`;

const P1 = styled.p`
  padding: 0px 0px 10px 20px;
  margin: 0;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: left;
  color: #ffffff;
`;
const P2 = styled.p`
  padding: 0px 20px;
  margin: 0;
  margin-top: 5px;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;

  color: #ffffff;
`;

const Title = styled.p`
  padding: 35px 0;
  margin: 0;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 39px;
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
  margin-bottom: 20px;
  background: #f6f6f6;
  border: none;
  border-radius: 3px;

  ::placeholder {
    color: rgba(24, 22, 0, 0.32);
  }
`;

const Input2 = styled.input`
  width: 73%;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  color: #045274;

  padding: 13px;
  margin-right: 7px;
  background: #f6f6f6;
  border: none;
  border-radius: 3px;

  ::placeholder {
    color: rgba(24, 22, 0, 0.32);
  }
`;

const Button1 = styled.button`
  padding: 13px;
  text-align: right;
  border: 1px solid #0b97b6;
  background-color: #ffffff;
  border-radius: 8px;

  color: #00809c;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
`;

const Button2 = styled.button`
  margin: 50px 0;
  width: 100%;
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
