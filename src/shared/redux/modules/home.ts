import { createAction, handleActions } from 'redux-actions';
import { format } from "date-fns";
import ja from 'date-fns/locale/ja';

/**
 * Action types
 */
const CURRENT_TIME_UPDATE = 'home/current_time_update';

/**
 * Action creators
 */
export const currentTimeUpdate = createAction(CURRENT_TIME_UPDATE);

/**
 * Initial state
 */
export type State = {
  today: string,
  time: string,
  itemList: any,
};

const INITIAL_STATE = {
  today: format(new Date(), "YYYY/MM/DD（dddd）", {locale: ja}),
  time: format(new Date(), "hh:mm:ss"),
  itemList: [
    {item: "スマホ"},
    {item: "Suica"},
    {item: "財布"},
    {item: "家の鍵"},
    {item: "ティッシュ"},
    {item: "ハンカチ"},
    {item: "飲み物"},
    {item: "腕時計"},
    {item: "ウォークマン"},
    {item: "iPad Pro"},
  ],
};

/**
 * Reducer
 */
export default handleActions(
  {
    [CURRENT_TIME_UPDATE]: (state) => ({
      ...state,
      today: format(new Date(), "YYYY/MM/DD（dddd）", {locale: ja}),
      time: format(new Date(), "hh:mm:ss"),
      // itemList: state.itemList,
    }),
  },
  INITIAL_STATE,
);
