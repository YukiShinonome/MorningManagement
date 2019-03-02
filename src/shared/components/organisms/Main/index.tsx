import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = { children: ReactNode };

export default React.memo(function Main(props: Props) {
  const { children } = props;
  return <Root>{children}</Root>;
});

const Root = styled.div`
  color: #fff;
`;
