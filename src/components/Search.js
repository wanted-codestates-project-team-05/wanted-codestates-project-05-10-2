import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { DropDown } from './DropDown';
import { useGetDiseaseNameQuery } from '../services/diseaseApi';
import useDebounce from '../hooks/useDebounce';

function Search() {
  const [keyword, setKeyword] = useState('');
  const debounced = useDebounce(keyword, 1000);
  const [hasText, setHasText] = useState(false);

  const [selected, setSelected] = useState(-1);
  const { data, isLoading } = useGetDiseaseNameQuery(debounced, { skip: !debounced });

  // 검색어 유무 확인
  useEffect(() => {
    if (keyword === '') {
      setHasText(false);
    }
  }, [keyword]);
  // onChange 이벤트
  const handleInputChange = (event) => {
    const { value } = event.target;
    value ? setHasText(true) : setHasText(false);
    setKeyword(value);
  };
  // onClick 이벤트
  const handleDropDownClick = (clickedOption) => {
    setKeyword(clickedOption.name);
  };
  //  키보드로 키워드 탐색
  const handleKeyUp = (e) => {
    if (e.keyCode === 40 && data?.length - 1 > selected) {
      setSelected(selected + 1);
    }
    if (e.keyCode === 38 && selected >= 0) {
      setSelected(selected - 1);
    }
    if (e.code === 'Enter' && selected >= 0) {
      handleDropDownClick(data[selected]);
      setSelected(-1);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Notice>국내 모든 임상시험 검색하고</Notice>
        <Notice>온라인으로 참여하기</Notice>
        <SearchForm>
          <SearchBar>
            <InputBox
              type="text"
              value={keyword}
              placeholder="질환명을 입력해 주세요."
              onChange={handleInputChange}
              onKeyDown={handleKeyUp}
            />
            <SearchIcon />
            <SearchBtn>검색</SearchBtn>
          </SearchBar>
        </SearchForm>
        {hasText && (
          <DropDown
            isLoading={isLoading}
            options={data?.slice(0, 7)}
            selected={selected}
            handleDropDownClick={handleDropDownClick}
          />
        )}
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
  flex-direction: column;
  max-width: 1040px;
  width: 100%;
  height: 50vh;
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
const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-top: 40px;
`;
const SearchBar = styled.div`
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
const InputBox = styled.input`
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
const SearchIcon = styled(BiSearch)`
  position: absolute;
  cursor: pointer;
  @media screen and (min-width: 820px) {
    left: 12px;
  }
  @media screen and (max-width: 820px) {
    right: 12px;
  }
`;
