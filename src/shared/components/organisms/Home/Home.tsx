import React from "react";
import styled from "styled-components";
import { mainColor } from "../../utils/color";

type Props = {
  today: string,
  time: string,
  itemList: any,
  handleCurrentTimeUpdate: Function,
};

export default function Home(props: Props) {
  const { today, time, itemList, handleCurrentTimeUpdate } = props;

  setInterval(handleCurrentTimeUpdate, 1000);

  return (
    <Root>
      <TimeArea>
        <DateData>{today}</DateData>
        <TimeData>{time}</TimeData>
      </TimeArea>
      <WeatherArea>weather</WeatherArea>
      <NecessitiesArea>
        <Title>持ち物リスト</Title>
        <ItemListContainer>
          {/* {Object.values(itemList).map((item: any) => (
            <div>{item}</div>
          ))} */}
          {/* <div>{itemList.item}</div> */}
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
const DateData = styled.div`
  font-size: 30px;
`;
const TimeData = styled.div`
  font-size: 80px;
  text-align: center;
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
`;
const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;