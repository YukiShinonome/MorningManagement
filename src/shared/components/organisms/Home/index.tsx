import { connect } from 'react-redux'
import Home from './Home'
import { currentTimeUpdate, preparedCheck } from '../../../redux/modules/home'
import { homeSelector } from '../../../redux/modules/reducer';

export default connect(
  (state) => ({
    today: homeSelector(state as any).today,
    time: homeSelector(state as any).time,
    itemList: homeSelector(state as any).itemList,
    prepared_all_check: homeSelector(state as any).prepared_all_check,
  }),
  (dispatch) => ({
    handleCurrentTimeUpdate: () => dispatch(currentTimeUpdate()),
    handlePreparedCheck: (idx: any) => dispatch(preparedCheck(idx)),
  }),
)(Home);