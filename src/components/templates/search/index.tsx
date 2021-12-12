import { NavigationPage } from "src/components/Navigation";
import { Container } from "src/components/common/Container";
import { ContentDivider } from "src/components/common/ContentDivider";
import { FriendProfile } from "src/components/frientlist/FriendProfile";
import { UserDataProps } from "src/interfaces";
import styled from "styled-components";
import { useState } from "react";
import { Content } from "src/components/common/Content";

interface SearchProps {
  searchList: UserDataProps[];
  handleSearch: (e: string) => Promise<void>;
  handleAddFriend?: (id: string) => Promise<void>;
  handleRemoveFriend?: (id: string) => Promise<void>;
  initData?: () => void;
}
const Search = ({
  searchList,
  handleSearch,
  handleAddFriend,
  handleRemoveFriend,
  initData,
}: SearchProps) => {
  const [value, setValue] = useState("");

  return (
    <Container page={NavigationPage.SEARCH} initData={initData}>
      <Content>
        <Input
          placeholder="id 또는 이름을 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch(value)}
        />
        <div style={{ height: "30px" }} />
        <ContentDivider text="검색 결과" />
        {searchList.map((sl) => (
          <FriendProfile
            key={sl.id}
            data={sl}
            isSearch
            isFriend={sl.isFriend}
            handleAddFriend={handleAddFriend}
            handleRemoveFriend={handleRemoveFriend}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Search;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 14px;
  background: var(--gray_1);
  border: 2px solid var(--gray_2);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--gray_9);
  &::placeholder {
    font-weight: 400;
  }
`;
