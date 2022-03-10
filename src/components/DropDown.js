import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const DropDown = ({ message, options, selected, handleDropDownClick }) => {
  return (
    <Suggest>
      <ListHeader>{message}</ListHeader>
      {options?.map((option, index) => (
        <Listitem
          className={selected === index ? 'selected' : ''}
          key={option.id}
          onClick={() => handleDropDownClick(option)}
        >
          <div>{option.name}</div>
          <SuggestIcons />
        </Listitem>
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

const SuggestIcons = styled(BiSearch)`
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 12px;
`;
