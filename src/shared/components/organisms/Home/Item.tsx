import React from "react";
import styled from "styled-components";
import { bgColor } from "../../utils/color";

type Props = {
  idx: number,
  itemList: {item: string, prepared: boolean}[],
  memorizedPreparedCheck: (idx: number) => void,
};

export default function CurrentTime(props: Props) {
  const { idx, itemList, memorizedPreparedCheck } = props;

  return (
    <Item prepared={itemList[idx].prepared} onClick={() => memorizedPreparedCheck(idx)}>{itemList[idx].item}</Item>
  );
};

type ColorProps = {
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
