import React from "react";
import styled from "styled-components";
import { bgColor } from "../../utils/color";
import { sendAnalytics } from "react-redux-analytics";
import { string } from "prop-types";

type Props = {
  idx: string,
  itemList: any,
  handlePreparedCheck: any,
};

export default function CurrentTime(props: Props) {
  const { idx, itemList, handlePreparedCheck } = props;

  return (
    <Item prepared={itemList[idx].prepared} onClick={() => handlePreparedCheck(idx)}>{itemList[idx].item}</Item>
  );
};

interface ColorProps {
  prepared: boolean,
}
const Item = styled.div`
  color: ${(props: ColorProps) => props.prepared ? bgColor : "#fff"};
  font-size: 20px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 150px;
  margin: 0 auto;
  transition: 0.3s ease-out;

  &:hover {
    width: 100%;
    background-color: ${bgColor};
  }
`;
