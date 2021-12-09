import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { getApi } from "src/apis";
import signin from "src/apis/signin";
import { BackIcon } from "src/assets/common";
import styled from "styled-components";
import React from "react";


const Subscription: NextPage = () => {
  const router = useRouter();

  const [uniqueId, setUniqueId] = useState(false);
  const [data, setData] = useState({
    id: "",
    password: "",
    password2: "",
    type: 0,
    name: "",
  });

  const handleSignin = async (postData: { id: string; password: string; password2: string; name: string, type: number }) => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!uniqueId) {
      alert("ID 중복 확인을 해주세요.");
    } else if (data.id.length > 20) {
      alert("ID는 20자 미만이어야 합니다");
    } else if (data.id.length < 1) {
      alert("ID는 최소 한 글자 이상이어야 합니다");
    } else if (data.password2 !== data.password) {
      alert("두 개의 비밀번호가 일치하지 않습니다");
    } else if (format.test(data.id)) {
      alert("ID에는 특수 문자가 포함되지 않아야 합니다");
    } else {
      const res = await signin.PostSignin(postData);
      if (res?.status === 200) {
        alert("가입 성공!");
        router.push("/login");
      } else {
        alert(res?.message || "가입 중 오류가 발생했습니다.");
      }
    }
  };

  const handleGetid = async (postData: { id: string }) => {
    const res = await getApi.getID(`/user/signin/${postData.id}`);
    if (res?.message.includes("사용가능")) {
      Availability(true);
    } else {
      Availability(false);
    }
  };

  const Availability = (isAvailable: boolean) => {
    setUniqueId(isAvailable);
    return <>{isAvailable ? alert("사용가능한 ID 입니다!") : alert("이미 존재하는 ID 입니다!")}</>;
  };

  return (
    <Wrapper>
      <Container>
        <BackIcon
          style={{ position: "fixed", left: "30px", top: "40px" }}
          onClick={() => router.back()}
        />
        <Title>연세톡 회원가입</Title>

        <P1>ID를 입력주세요</P1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Input2
            type="username"
            placeholder="예: yonseiDB"
            value={data.id}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                id: e.target.value,
              }))
            }
          />

          <Button1 onClick={() => {
            handleGetid(data);
          }}>중복확인</Button1>
        </div>

        <div style={{ height: "20px" }} />

        <P1>비밀번호 입력해주세요</P1>
        <Input
          type="password"
          placeholder="비밀번호 입력해주세요"
          value={data.password}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />

        <P1>비밀번호 다시 입력해주세요</P1>

        <Input
          type="password"
          placeholder="비밀번호 다시 입력해주세요"
          value={data.password2}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              password2: e.target.value,
            }))
          }
        />

        <P1>원하는 닉네임을 입력해주세요</P1>

        <Input
          placeholder="예: 시누"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />

        <P1>회원 유형을 선택해주세요</P1>

        <Select
          value={data.type}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              type: Number(e.target.value),
            }))
          }
        >
          <option value="0">일반</option>
          <option value="1">학생</option>
          <option value="2">강사</option>
          <option value="3">기업</option>
        </Select>

        <Button2 onClick={() => {
          handleSignin(data);
        }}>
          회원가입</Button2>
      </Container>
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

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
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
  margin: 30px 0;
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
