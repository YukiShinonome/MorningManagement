import React from "react";
import styled from "styled-components";

type Props = {
  today: string,
  time: string,
  memorizedCurrentTimeUpdate: Function,
};

export default function CurrentTime(props: Props) {
  const { today, time, memorizedCurrentTimeUpdate } = props;

  setInterval(memorizedCurrentTimeUpdate, 1000);

  return (
    <Root>
      <DateData>{today}</DateData>
      <TimeData>{time}</TimeData>
    </Root>
  );
};

const Root = styled.div``;
const DateData = styled.div`
  font-size: 30px;
  margin-left: 20px;
`;
const TimeData = styled.div`
  font-size: 80px;
  text-align: center;
  margin-top: -10px;
`;