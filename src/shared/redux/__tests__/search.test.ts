import assert from "assert";
import Fetchr from "fetchr";
import { FetchrStatic } from "./types";

import { findSalonById } from "../modules/search";
import { createStore } from "./lib/storeUtils";

const searchedItems = [
  {
    name: "hello, world!",
    urls: {
      pc: "localhost",
    },
  },
];
let needFailure = false;
(Fetchr as FetchrStatic).registerService({
  name: "search",
  read(req, resource, params, config, cb) {
    const result = { search: searchedItems };
    return needFailure ? cb(new Error("failure")) : cb(null, result);
  },
});

test("search: findSalonById success", async () => {
  const store = createStore({ cookie: {} });
  const findSalonByIdAction = findSalonById("salon-id");
  await store.dispatch(findSalonByIdAction);
  const searchState = store.getState().page.search;

  assert.deepStrictEqual(searchState, {
    loading: false,
    loaded: true,
    item: searchedItems[0],
  });
});

test("search: findSalonById fail", async done => {
  needFailure = true;
  const store = createStore({ cookie: {} });
  const findSalonByIdAction = findSalonById("salon-id");
  try {
    await store.dispatch(findSalonByIdAction);
    done.fail();
  } catch (e) {
    const searchState = store.getState().page.search;
    assert.strictEqual(searchState.error, true);
    assert.strictEqual(e.message, "failure");
    done();
  }
});
