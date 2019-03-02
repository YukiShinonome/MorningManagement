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
};

const INITIAL_STATE = {
  today: format(new Date(), "YYYY/MM/DD（dddd）", {locale: ja}),
  time: format(new Date(), "hh:mm:ss"),
};

/**
 * Reducer
 */
export default handleActions(
  {
    [CURRENT_TIME_UPDATE]: (state) => ({
      today: format(new Date(), "YYYY/MM/DD（dddd）", {locale: ja}),
      time: format(new Date(), "hh:mm:ss"),
    }),
  },
  INITIAL_STATE,
);
