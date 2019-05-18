import { connect } from 'react-redux'
import NeedItem from './NeedItem'
import { preparedCheck } from '../../../redux/modules/home'
import { homeSelector } from '../../../redux/modules/reducer';

export default connect(
  (state) => ({
    itemList: homeSelector(state as any).itemList,
    prepared_all_check: homeSelector(state as any).prepared_all_check,
  }),
  (dispatch) => ({
    handlePreparedCheck: (idx: number) => dispatch(preparedCheck(idx)),
  }),
)(NeedItem);