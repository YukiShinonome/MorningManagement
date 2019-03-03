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
    {item: "スマホ", prepared: false},
    {item: "Suica", prepared: true},
    {item: "財布", prepared: false},
    {item: "家の鍵", prepared: false},
    {item: "ティッシュ", prepared: false},
    {item: "ハンカチ", prepared: false},
    {item: "飲み物", prepared: false},
    {item: "腕時計", prepared: false},
    {item: "ウォークマン", prepared: false},
    {item: "iPad Pro", prepared: false},
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
