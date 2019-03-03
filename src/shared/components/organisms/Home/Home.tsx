import React from "react";
import styled from "styled-components";
import { mainColor, bgColor } from "../../utils/color";
import CurrentTime from "./CurrentTime";

type Props = {
  today: string,
  time: string,
  handleCurrentTimeUpdate: Function,
  itemList: any,
};

export default function Home(props: Props) {
  const { today, time, handleCurrentTimeUpdate, itemList } = props;

  return (
    <Root>
      <TimeArea>
        <CurrentTime today={today} time={time} handleCurrentTimeUpdate={handleCurrentTimeUpdate} />
      </TimeArea>
      <WeatherArea>weather</WeatherArea>
      <NecessitiesArea>
        <Title>持ち物リスト</Title>
        <ItemListContainer>
          {Object.keys(itemList).map((idx: string) => (
            <ItemList>{itemList[idx].item}</ItemList>
          ))}
        </ItemListContainer>
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
  box-shadow: 0 0 50px 3px ${mainColor} inset;
`;
const WeatherArea = styled.div`
  grid-area: areaB;
  margin: 10px;
  padding: 10px;
  border: solid 1px ${mainColor};
  box-shadow: 0 0 50px 3px ${mainColor} inset;
`;
const NecessitiesArea = styled.div`
  grid-area: areaC;
  margin: 10px;
  padding: 10px;
  border: solid 1px ${mainColor};
  box-shadow: 0 0 50px 3px ${mainColor} inset;
`;
const Title = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;
const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemList = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: ${bgColor};
  }
`;