import React from "react";
import styled from "styled-components";
import { bgColor } from "../../utils/color";
import { sendAnalytics } from "react-redux-analytics";

type Props = {
  idx: string,
  itemList: any,
  handlePreparedCheck: any,
};

export default function CurrentTime(props: Props) {
  const { idx, itemList, handlePreparedCheck } = props;

  return (
    itemList[idx].prepared ? (
      <PreparedItem onClick={() => handlePreparedCheck(idx)}>{itemList[idx].item}</PreparedItem>
    ) : (
      <Item onClick={() => handlePreparedCheck(idx)}>{itemList[idx].item}</Item>
    )
  );
};

const Item = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:hover {
    background-color: ${bgColor};
  }
`;
const PreparedItem = styled(Item)`
  color: ${bgColor};
`;