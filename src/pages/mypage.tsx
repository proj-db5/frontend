import { NavigationPage } from "src/components/Navigation";
import styled from "styled-components";
import { Container } from "src/components/common/Container";
import router from "next/router";
import { useEffect, useState } from "react";
import { getApi, patchApi } from "src/apis";
import { useSetRecoilState } from "recoil";
import states from "src/modules";
import logoutpatchApi from "../apis/logoutpatchApi";
import signout from "../apis/signout";

const MyPage = () => {
  const [data, setData] = useState({
    msg: "",
    location: 0,
  });
  const setLocation = useSetRecoilState(states.LocationState);

  const handleEdit = async (postData: { msg: string; location: number }) => {
    const res = await patchApi.patchEditMypage({
      state_message: postData.msg,
      place: postData.location,
    });
    if (!res) {
      alert("수정 실패!");
    } else {
      setLocation(data.location);
    }
  };

  const handleLogout = async (postData: { online: number }) => {
    const res = await logoutpatchApi.logoutpatch(postData);
    if (res) {
      router.push("/login");
    } else {
      alert("로그아웃 실패!");
    }
  };

  const handleSignout = async () => {
    const res = await signout.Signout();
    if (res) {
      router.push("/login");
    } else {
      alert("회원탈퇴 실패!");
    }
  };


  useEffect(() => {
    const getUserData = async () => {
      const res = await getApi.getFriendUsers("/friend/friend/list");
      setData({
        msg: res?.userData?.state_message || "",
        location: res?.userData?.place || 0,
      });
      setLocation(res?.userData?.place || 0);
    };
    getUserData();
  }, []);

  return (
    <Container page={NavigationPage.MYPAGE}>
      <div style={{ padding: "0 28px" }}>
        <P1>상태 메시지를 입력해주세요</P1>
        <Input
          placeholder="상태 메시지"
          value={data.msg}
          onChange={(e) =>
            setData({
              ...data,
              msg: e.target.value,
            })
          }
        />

        <P1>회원 유형을 선택해주세요</P1>
        <Select
          value={data.location}
          onChange={(e) =>
            setData({
              ...data,
              location: Number(e.target.value),
            })
          }
        >
          <option value="0">공학관</option>
          <option value="1">백양관</option>
          <option value="2">학생회관</option>
          <option value="3">신촌역</option>
        </Select>

        <BtnWrap>
          <Button2 onClick={() => handleEdit(data)}>변경하기</Button2>
        </BtnWrap>

        <Button1

          onClick={() => handleLogout({ online: 0 })}>
          로그아웃</Button1>


        <Button1

          onClick={() => handleSignout()}>
          회원탈퇴</Button1>


      </div>
    </Container>
  );
};

export default MyPage;

const Select = styled.select`
  width: 100%;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  color: #045274;

  padding: 13px;
  margin-bottom: 26px;
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

  &::placeholder {
    color: rgba(24, 22, 0, 0.32);
  }
`;

const Button1 = styled.button`
  cursor: pointer;
  margin: 15px 0;
  width: 100%;
  padding: 15px;

  text-align: center;
  border: 1px solid #0b97b6;
  background-color: #ffffff;
  border-radius: 8px;

  color: #00809c;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const BtnWrap = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Button2 = styled.button`
  cursor: pointer;
  all: unset;
  box-sizing: border-box;
  padding: 14px;
  margin-right: 10px;

  text-align: center;
  background-color: #ffffff;
  border-radius: 12px;

  color: #00809c;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
`;
