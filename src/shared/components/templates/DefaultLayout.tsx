import React, { ReactNode } from "react";
import styled from "styled-components";
import pure from "recompose/pure";

type Props = {
  menu: ReactNode;
  main: ReactNode;
};

export default pure((props: Props) => {
  const { menu, main } = props;

  return (
    <Root>
      <Menu>{menu}</Menu>
      <Main>{main}</Main>
    </Root>
  );
});

const Root = styled.div`
  display: flex;
  /* background-color: #000; */
  background: -moz-radial-gradient(rgba(0, 0, 100), #000);
  background: -webkit-radial-gradient(rgba(0, 0, 100), #000);
  background: radial-gradient(rgba(0, 0, 100), #000);
`;
const Menu = styled.div`
  /* border: solid 2px blue; */
  width: 200px;
`;
const Main = styled.div`
  flex-grow: 1;
  /* background-color: darkgray; */
  height: 100vh;
`;
