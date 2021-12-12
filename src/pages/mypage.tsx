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
    state_message: "",
    place: 0,
  });
  const setLocation = useSetRecoilState(states.LocationState);

  const handleEdit = async (postData: {
    state_message: string;
    place: number;
  }) => {
    const res = await patchApi.patchEditMypage({
      state_message: postData.state_message,
      place: postData.place,
    });
    if (!res) {
      alert("수정을 실패하였습니다");
    } else {
      setLocation(data.place);
      alert("수정을 완료하였습니다");
    }
  };

  const handleLogout = async (postData: { online: number }) => {
    const res = await logoutpatchApi.logoutpatch(postData);
    if (res) {
      router.push("/login");
    } else {
      alert("로그아웃을 실패하였습니다");
    }
  };

  const handleSignout = async () => {
    const res = await signout.Signout();
    if (res) {
      router.push("/login");
    } else {
      alert("회원탈퇴를 실패하였습니다");
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const res = await getApi.getFriendUsers("/friend/list");
      setData({
        state_message: res?.userData[0]?.state_message || "",
        place: res?.userData[0]?.place || 0,
      });
      setLocation(res?.userData[0]?.place || 0);
    };
    getUserData();
  }, []);

  return (
    <Container page={NavigationPage.MYPAGE}>
      <InnerWrap>
        <P1>상태 메시지를 입력해주세요</P1>
        <Input
          placeholder="상태 메시지"
          value={data.state_message}
          onChange={(e) =>
            setData({
              ...data,
              state_message: e.target.value,
            })
          }
          maxLength={20}
        />

        <P1>회원 유형을 선택해주세요</P1>
        <Select
          value={data.place}
          onChange={(e) =>
            setData({
              ...data,
              place: Number(e.target.value),
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

        <Button1 onClick={() => handleLogout({ online: 0 })}>로그아웃</Button1>

        <Button1 onClick={() => handleSignout()}>회원탈퇴</Button1>
      </InnerWrap>
    </Container>
  );
};

export default MyPage;

const InnerWrap = styled.div`
  width: 100%;
  padding: 0 28px;
  max-width: 600px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
