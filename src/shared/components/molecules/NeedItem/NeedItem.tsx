import React, { useCallback } from "react";
import styled from "styled-components";
import { bgColor } from "../../utils/color";

type Props = {
  itemList: {item: string, prepared: boolean}[],
  prepared_all_check: boolean,
  handlePreparedCheck: (idx: number) => void,
};

export default function CurrentTime(props: Props) {
  const {
    itemList,
    handlePreparedCheck,
    prepared_all_check,
  } = props;

  const memorizedPreparedCheck = useCallback(handlePreparedCheck, [])


  return (
    <Root>
      <ItemListContainer>
        {Object.keys(itemList).map((val, idx) => (
          <ItemList key={idx}>
            <Item prepared={itemList[idx].prepared} onClick={() => memorizedPreparedCheck(idx)}>{itemList[idx].item}</Item>
          </ItemList>
        ))}
      </ItemListContainer>
      <CheckOK allChecked={prepared_all_check}>準備OK!!</CheckOK>
    </Root>
  );
};

const Root = styled.div``;
type ColorProps = {
  prepared: boolean,
}
const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemList = styled.div``;
interface CheckProps {
  allChecked: boolean,
}
const CheckOK = styled.div`
  text-align: center;
  font-size: 80px;
  color: ${(props: CheckProps) => props.allChecked ? "#fff" : bgColor};
`;
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
