import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const DropDown = ({ isLoading, options, selected, handleDropDownClick }) => {
  return (
    <Suggest>
      <Header>{isLoading ? '로딩 중...' : options?.length < 1 ? '검색어 없음' : '추천 검색어'}</Header>
      {options?.map((option, index) => (
        <List
          className={selected === index ? 'selected' : ''}
          key={option.id}
          onClick={() => handleDropDownClick(option)}
        >
          <div>{option.name}</div>
          <SearchIcons />
        </List>
      ))}
    </Suggest>
  );
};

const Suggest = styled.ul`
  width: 60%;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 20px;
  list-style: none;
  padding-left: 0px;
  padding-bottom: 10px;
  @media screen and (max-width: 820px) {
    width: 95%;
  }
`;

const Header = styled.li`
  padding: 15px 0 0 20px;
  font-size: 14px;
  color: rgb(106, 115, 123);
  line-height: 1.6;
  margin-bottom: 10px;
`;
const List = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgba(230, 230, 230, 0.6);
  }
  &.selected {
    background-color: rgba(230, 230, 230, 0.6);
  }

  div {
    margin-left: 36px;
    font-weight: 500;
    line-height: 32px;
  }
`;

const SearchIcons = styled(BiSearch)`
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 12px;
`;
