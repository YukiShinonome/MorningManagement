import React from "react";
import {
  Link as ReactRouterLink,
  IndexLink as ReactRouterIndexLink,
} from "react-router";
import styled from "styled-components";
import { mainColor, bgColor } from "../../utils/color";

type Props = {
  location: {
    pathname: string;
  };
};

type MenuLink = {
  key: string;
  to: string;
  label: string;
  index?: boolean;
};

const links: MenuLink[] = [
  { key: "home", to: "/", label: "Home", index: true },
  { key: "foo", to: "/foo", label: "Foo" },
];

export default React.memo(function Header(props: Props) {
  return (
    <Root>
      <NavLinks>
        <Items>
          {links.map(({ key, to, label, index }) => (
            <Item key={key}>
              {index ? (
                <IndexLink to={to} selected={to === props.location.pathname}>
                  {label}
                </IndexLink>
              ) : (
                <Link to={to} selected={to === props.location.pathname}>
                  {label}
                </Link>
              )}
            </Item>
          ))}
        </Items>
      </NavLinks>
      {/* <ColorList>
        <ColorTitle>Color</ColorTitle>
        <Color>blue</Color>
        <Color>aqua</Color>
      </ColorList> */}
    </Root>
  );
} as any);

const Root = styled.header`
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* position: fixed; */
`;
const NavLinks = styled.nav``;
const Items = styled.ul``;
const Item = styled.li``;
const Link = styled(ReactRouterLink)`
  display: block;
  color: #fff;
  background-color: ${props => (props.selected ? bgColor : "transparent")};
  padding: 12px 0;
  border-bottom: solid 1px ${mainColor};

  &:hover {
    background-color: ${bgColor};
  }
`;
const IndexLink = styled(ReactRouterIndexLink)`
  color: #fff;
  background-color: ${props => (props.selected ? bgColor : "transparent")};
  border-bottom: solid 1px ${mainColor};
  display: block;
  padding: 12px 0;

  &:hover {
    background-color: ${bgColor};
  }
`;
// const ColorList = styled.div`
//   margin-top: auto;
//   margin-bottom: 10px;
//   border-top: solid 1px ${mainColor};
// `;
// const ColorTitle = styled.div`
//   font-size: 20px;
//   padding: 10px 0;
// `;
// const Color = styled.div`
//   padding: 12px 0;
//   cursor: pointer;

//   &:hover {
//     background-color: ${bgColor};
//   }
// `;
