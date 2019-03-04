import { connect } from 'react-redux'
import Home from './Home'
import { currentTimeUpdate } from '../../../redux/modules/home'
import { homeSelector } from '../../../redux/modules/reducer';

export default connect(
  (state) => ({
    today: homeSelector(state as any).today,
    time: homeSelector(state as any).time,
  }),
  (dispatch) => ({
    handleCurrentTimeUpdate: () => dispatch(currentTimeUpdate()),
  }),
)(Home);