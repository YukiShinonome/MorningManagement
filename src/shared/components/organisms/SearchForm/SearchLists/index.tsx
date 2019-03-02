import React from "react";
import styled from "styled-components";

import SearchList from "../../../molecules/SearchList";

type Props = {
  page: number;
  items: any;
  onInnerWindow: Function;
  shouldAdjustScroll: boolean;
  forceScrollTo: { x: number; y: number } | null;
  linkURL: string;
};

export default React.memo(function SearchLists(props: Props) {
  const {
    items,
    onInnerWindow,
    shouldAdjustScroll,
    forceScrollTo,
    linkURL,
  } = props;

  return (
    <Root>
      {Object.keys(items).map(page => (
        <SearchList
          items={items[page]}
          linkURL={linkURL}
          page={+page}
          onInnerWindow={onInnerWindow}
          heightRatio={1.0}
          key={page}
          shouldAdjustScroll={+page === props.page && shouldAdjustScroll}
          forceScrollTo={forceScrollTo}
        />
      ))}
    </Root>
  );
});

export const Root = styled.div`
  text-align: center;
  margin: 0 auto;
`;
