
// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as materiaTableActions from '../actions/materiaTableActions';
import MaterialUITable from '../components/MaterialUITableComponent';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTableState: state.tableState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchTableData: () => dispatch(materiaTableActions.fetchTableData()),
    setPage: (event, page) => dispatch(materiaTableActions.setPage(event, page)),
    changeRowsPerPage: (page, rowsPerPage) => dispatch(materiaTableActions.changeRowsPerPage(page, rowsPerPage))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MaterialUITable);