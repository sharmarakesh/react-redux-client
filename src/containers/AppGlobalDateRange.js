
// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as appGlobalDateRangeActions from '../actions/appGlobalDateRangeActions';
import AppGlobalDateRangeComponent from '../components/AppGlobalDateRangeComponent';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedDateRangeState: state.dateRangeState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    setStartDate: (date) => dispatch(appGlobalDateRangeActions.setStartDate(date)),
    setEndDate: (date) => dispatch(appGlobalDateRangeActions.setEndDate(date))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppGlobalDateRangeComponent);