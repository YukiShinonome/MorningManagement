import React from "react";
import { Route, IndexRoute } from "react-router";
// non chunked components
import {
  App,
  Error,
  Home,
  SideMenuLeft,
  Main,
  NotFound,
  DefaultLayout,
} from "./main";

// chunked components
import {
  loadFoo,
} from "./misc";

export default function getRoutes(store: any) {
  const $Route: any = Route; // avoid type check

  return (
    <Route path="/" component={App}>
      <Route component={DefaultLayout}>
        <Route components={{ menu: SideMenuLeft, main: Main }}>
          <IndexRoute component={Home} />
          <Route path="foo" getComponent={loadFoo} />
          <$Route path="error" component={Error} status={500} />
          <$Route path="*" component={NotFound} status={404} />
        </Route>
      </Route>
    </Route>
  );
}
