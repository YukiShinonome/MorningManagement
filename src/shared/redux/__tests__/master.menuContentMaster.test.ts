import assert from "assert";
import Fetchr from "fetchr";
import { FetchrStatic, FetchrService } from "./types";

import Immutable from "seamless-immutable";
import {
  INITIAL_STATE,
  loadAllMasters,
  loadMenuContentMaster,
} from "../modules/masters";
import { createStore } from "./lib/storeUtils";
import { isSameObject } from "./lib/assertUtils";

/**
 * mock loadMaster service
 */
let menuContentMaster = ["menu"];
const services: FetchrService[] = [
  {
    name: "areaMaster",
    read(req, resource, params, config, cb) {
      cb(null, ["tokyo", "saitama", "kanagawa"]);
    },
  },
  {
    name: "hairColorMaster",
    read(req, resource, params, config, cb) {
      cb(null, ["black", "brown", "blond"]);
    },
  },
  {
    name: "genderMaster",
    read(req, resource, params, config, cb) {
      cb(null, ["male", "female"]);
    },
  },
  {
    name: "hairLengthMaster",
    read(req, resource, params, config, cb) {
      cb(null, ["long", "short", "middle"]);
    },
  },
  {
    name: "menuContentMaster",
    read(req, resource, params, config, cb) {
      cb(null, menuContentMaster);
    },
  },
];

services.forEach((Fetchr as FetchrStatic).registerService);

test("master: hairLengthMaster success", async () => {
  const loadAllMastersAction = loadAllMasters();
  const loadMenuContentMasterAction = loadMenuContentMaster();
  const initialState = Immutable({ app: { masters: INITIAL_STATE } });
  const store = createStore({
    initialState,
  });
  let prevMastersState = {};
  return store
    .dispatch(loadAllMastersAction)
    .then(() => {
      prevMastersState = store.getState().app.masters;
      menuContentMaster = ["menu2"];
      return store.dispatch(loadMenuContentMasterAction);
    })
    .then(() => {
      const mastersState = store.getState().app.masters;
      assert.deepStrictEqual(mastersState.menuContentMaster, {
        loading: false,
        loaded: true,
        items: menuContentMaster,
      });
      isSameObject(prevMastersState, mastersState, ["menuContentMaster"]);
    });
});
