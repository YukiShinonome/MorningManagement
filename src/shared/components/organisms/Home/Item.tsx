import React from "react";
import styled from "styled-components";
import { bgColor } from "../../utils/color";

type Props = {
  idx: string,
  itemList: any,
};

export default function CurrentTime(props: Props) {
  const { idx, itemList } = props;

  return (
    itemList[idx].prepared ? (
      <PreparedItem>{itemList[idx].item}</PreparedItem>
    ) : (
      <Item>{itemList[idx].item}</Item>
    )
  );
};

const Item = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: ${bgColor};
  }
`;
const PreparedItem = styled(Item)`
  color: ${bgColor};
`;