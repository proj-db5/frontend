import {NavigationPage } from "src/components/Navigation";
import styled from "styled-components";
import { Container } from "src/components/common/Container";
import router from "next/router";

const MyPage = () => {
  return (

  
  <Container page={NavigationPage.MYPAGE}>
    <Center>
    <form>

                <P1>상태 메시지를 입력해주세요</P1>
                <div><Input
                placeholder="상태 메시지">
                </Input></div>


                <P1>회원 유형을 선택해주세요</P1>
               
                <Select>
                    <option value="공학관">공학관</option>
                    <option value="백양관">백양관</option>
                    <option value="학생회관">학생회관</option>
                    <option value="신촌역">신촌역</option>
                </Select>
                
                <div>
                <Button2>변경하기</Button2>
                <Button3>취소</Button3>
                </div>

                <div>
                <Button1 onClick={
                    () => router.push("/login")
                }>로그아웃</Button1>
                <Button1 onClick={
                    () => router.push("/login")
                }>회원탈퇴</Button1>

                </div>
                
        </form>
        </Center>
  </Container>
    );
};

export default MyPage;




const Select = styled.select`
  width: 423px;
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


const Center = styled.div`
margin: auto;
width: 60%;
border: 5px solid #0B97B6;
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


const Input = styled.input`
  width: 423px;
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
  margin: 15px 0;
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

const Button2 = styled.button`
  margin-left: 190px;
  margin-right: 10px;
  margin-bottom: 150px;
  width: 110px;
  padding: 20px;
  
  text-align: center;
  border: 1px solid #0B97B6;
  background-color: #FFFFFF;
  border-radius: 12px;

  font-family: Source Sans Pro;
  color: #00809C;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const Button3 = styled.button`
  margin: 0px 1px;
  width: 110px;
  padding: 20px;
  
  text-align: center;
  border: 1px solid #0B97B6;
  background-color: #00809C;
  border-radius: 12px;

  font-family: Source Sans Pro;
  color: #4BACCB;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;