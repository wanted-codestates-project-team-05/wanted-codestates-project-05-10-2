import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const dummi = [
  { name: "Klatskin's tumor", id: 125 },
  { name: '간세포암', id: 133 },
  { name: '갑상선암종', id: 187 },
  { name: '고환암', id: 335 },
  { name: '뼈암', id: 375 },
  { name: '구강암', id: 445 },
  { name: '치은암', id: 449 },
  { name: '기저세포상피종', id: 642 },
  { name: '상피성악성종양', id: 648 },
  { name: '뇌암', id: 812 },
  { name: '담관암종', id: 893 },
  { name: '결장암', id: 975 },
  { name: '대장악성종양', id: 976 },
  { name: '대장의 악성신생물', id: 978 },
];

function Search() {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(['추천 검색어', '검색 중...', '내용 없음']);
  const [data, setData] = useState([...dummi]);
  const keywordHandler = (event) => {
    event.preventDefault();
    console.log(keyword);
  };
  const inputHandler = (keyword) => {
    setKeyword(keyword.target.value);
  };
  if (loading) {
    return <div>로딩중...</div>;
  }
  return (
    <Wrapper>
      <Container>
        <Notice>국내 모든 임상시험 검색하고</Notice>
        <Notice>온라인으로 참여하기</Notice>
        <SearchSection>
          <SearchBar onSubmit={keywordHandler}>
            <SearchInput
              type="text"
              defaultValue={keyword}
              placeholder="질환명을 입력해 주세요."
              onChange={inputHandler}
            />
            <Icons />
            <SearchBtn>검색</SearchBtn>
          </SearchBar>
        </SearchSection>
        <Suggest>
          <ListHeader>{message[0]}</ListHeader>
          {data.map((list) => (
            <Listitem key={list.id}>
              <div>{list.name}</div>
              <SuggestIcons />
            </Listitem>
          ))}
        </Suggest>
      </Container>
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 120px);
  background-color: #cae9ff;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;
const Notice = styled.p`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 0.6;
  margin-bottom: 20px;
  text-align: center;
`;
const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-top: 40px;
`;
const SearchBar = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
const SearchInput = styled.input`
  border-radius: 42px 0 0 42px;
  width: 80%;
  height: 100%;
  font-size: 16px;
  border-width: 0;
  padding: 0 36px;
  box-shadow: 0px 2px 2px rgb(30 32 37 / 10%);
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    border-radius: 42px;
  }
`;
const SearchBtn = styled.button`
  border-width: 0;
  border-radius: 0 42px 42px 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.018em;
  padding: 0 32px;
  height: 100%;
  width: 100px;
  box-shadow: 0px 2px 2px rgb(30 32 37 / 10%);
  background-color: #007be9;
  color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const Icons = styled(BiSearch)`
  position: absolute;
  @media screen and (min-width: 820px) {
    left: 12px;
  }
  @media screen and (max-width: 820px) {
    right: 12px;
  }
`;

const Suggest = styled.ul`
  width: 60%;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 20px;
  list-style: none;
  padding-left: 0px;
  padding-bottom: 10px;
`;

const ListHeader = styled.li`
  padding: 15px 0 0 20px;
  font-size: 14px;
  color: rgb(106, 115, 123);
  line-height: 1.6;
  margin-bottom: 10px;
`;
const Listitem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;

  div {
    margin-left: 36px;
    font-weight: 500;
    line-height: 32px;
  }
`;

const SuggestIcons = styled(BiSearch)`
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 12px;
`;
