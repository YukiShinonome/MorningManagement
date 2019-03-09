import React from "react";
import styled from "styled-components";
import { mainColor, bgColor } from "../../utils/color";
import CurrentTime from "./CurrentTime";
import Item from "./Item";

type Props = {
  count: number,
  today: string,
  time: string,
  handleCurrentTimeUpdate: Function,
  itemList: any,
  handlePreparedCheck: Function,
  prepared_all_check: boolean,
};

export default function Home(props: Props) {
  const {
    count,
    today,
    time,
    handleCurrentTimeUpdate,
    itemList,
    handlePreparedCheck,
    prepared_all_check,
  } = props;

  return (
    <Root>
      <TimeArea>
        <CurrentTime today={today} time={time} handleCurrentTimeUpdate={handleCurrentTimeUpdate} />
      </TimeArea>
      <AnimationArea>
        <Title>アニメーション</Title>
      </AnimationArea>
      <NecessitiesArea>
        <Title>持ち物リスト</Title>
        <ItemListContainer>
          {Object.keys(itemList).map((idx: string) => (
            <ItemList key={idx}>
              <Item idx={idx} itemList={itemList} handlePreparedCheck={handlePreparedCheck} />
            </ItemList>
          ))}
        </ItemListContainer>
        {/* <div>count: {count}</div> */}
        <CheckOK allChecked={prepared_all_check}>準備OK!!</CheckOK>
      </NecessitiesArea>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas:
    "areaA areaA areaC areaC"
    "areaB areaB areaC areaC"
    "areaB areaB areaC areaC"
    "areaB areaB areaC areaC";
  height: 100vh;
`;
const TimeArea = styled.div`
  grid-area: areaA;
  margin: 10px;
  padding: 10px;
  border: solid 1px ${mainColor};
  box-shadow: 0 0 100px 3px ${mainColor} inset;
  overflow-y: auto;
`;
const AnimationArea = styled.div`
  grid-area: areaB;
  margin: 10px;
  padding: 10px;
  border: solid 1px ${mainColor};
  box-shadow: 0 0 100px 3px ${mainColor} inset;
  overflow-y: auto;
`;
const NecessitiesArea = styled.div`
  grid-area: areaC;
  margin: 10px;
  padding: 10px;
  border: solid 1px ${mainColor};
  box-shadow: 0 0 100px 3px ${mainColor} inset;
  overflow-y: auto;
`;
const Title = styled.h2`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
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