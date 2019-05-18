import React from "react";
import styled, { keyframes } from "styled-components";
import { mainColor } from "../../utils/color";
import CurrentTime from "../../molecules/CurrentTime";
import NeedItem from "../../molecules/NeedItem";

export default function Home() {

  // ページレベルでstateをたくさん持つべきではない
  // moleculesにcomponentを分けてそっちにstateを直接渡すべき

  return (
    <Root>
      <TimeArea>
        <CurrentTime />
      </TimeArea>
      <AnimationArea>
        <Title>アニメーション</Title>
        <Box />
        <Box />
      </AnimationArea>
      <NecessitiesArea>
        <Title>持ち物リスト</Title>
        <NeedItem />
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
const rotation = keyframes`
  0% {
    transform: scale(.3);
  }

  20% {
    transform: scale(.3);
  }

  60% {
    transform: scale(.6) rotate(-45deg);
  }

  100% {
    transform: scale(1) rotate(180deg);
  }
`;
const rotationReverse = keyframes`
  0% {
    transform: scale(.3);
  }

  20% {
    transform: scale(.3);
  }

  60% {
    transform: scale(.6) rotate(45deg);
  }

  100% {
    transform: scale(1) rotate(-180deg);
  }
`;
const Box = styled.div`
  margin: 80px auto;
  width: 100px;
  height: 100px;
  background: ${mainColor};
  animation: ${rotation} 2s infinite alternate;

  &:hover {
    background-color: skyblue;
    animation-name: ${rotationReverse};
  }
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
