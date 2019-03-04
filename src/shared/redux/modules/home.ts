import { createAction, handleActions } from 'redux-actions';
import { format } from "date-fns";
import ja from 'date-fns/locale/ja';

/**
 * Action types
 */
const CURRENT_TIME_UPDATE = 'home/current_time_update';
const PREPARED_CHECK = 'home/prepared_check';

/**
 * Action creators
 */
export const currentTimeUpdate = createAction(CURRENT_TIME_UPDATE);
export const preparedCheck = createAction(PREPARED_CHECK, (idx: any) => idx);
// console.log(preparedCheck(5));

/**
 * Initial state
 */
export type State = {
  today: string,
  time: string,
  itemList: any,
  count: number,
};

const INITIAL_STATE = {
  count: 0,
  today: format(new Date(), "YYYY/MM/DD（dddd）", {locale: ja}),
  time: format(new Date(), "hh:mm:ss"),
  itemList: [
    {item: "スマホ", prepared: false},
    {item: "Suica", prepared: false},
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
export default handleActions<State, any>(
  {
    [CURRENT_TIME_UPDATE]: (state) => ({
      ...state,
      today: format(new Date(), "YYYY/MM/DD（dddd）", {locale: ja}),
      time: format(new Date(), "hh:mm:ss"),
    }),
    [PREPARED_CHECK]: (state, action) => {
      console.log(action);
      const itemListCopy = state.itemList.slice();
      itemListCopy[action.payload].prepared = itemListCopy[action.payload].prepared ? false : true;
      // itemListCopy[0].prepared = itemListCopy[0].prepared ? false : true;
      console.log(itemListCopy);

      return {
        ...state,
        count: state.count + 1,
        itemList: itemListCopy,
      }
    },
  },
  INITIAL_STATE,
);
