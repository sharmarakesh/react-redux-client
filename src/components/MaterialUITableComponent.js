import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Collapse from '@material-ui/core/Collapse';
import SimpleCard from './SimpleCard';
import collapseComponent from './CollaspeComponent';

const actionsStyles = theme => ({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
    },
  });
  
  class TablePaginationActions extends Component {
    handleFirstPageButtonClick = event => {
      this.props.onChangePage(event, 0);
    };
  
    handleBackButtonClick = event => {
      this.props.onChangePage(event, this.props.page - 1);
    };
  
    handleNextButtonClick = event => {
      this.props.onChangePage(event, this.props.page + 1);
    };
  
    handleLastPageButtonClick = event => {
      this.props.onChangePage(
        event,
        Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
      );
    };
    
  
    render() {
      const { classes, count, page, rowsPerPage, theme } = this.props;
  
      return (
        <div className={classes.root}>
          <IconButton
            onClick={this.handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="First Page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={this.handleBackButtonClick}
            disabled={page === 0}
            aria-label="Previous Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={this.handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Next Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={this.handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Last Page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
      );
    }
  }
  
  TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
  );
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    tableRowGap: {
      borderCollapse: 'separate',
      // borderSpacing: '0 20px'
      marginBottom: '10px'
    },
    tableRow: {
      borderRadius: '4px',
      borderBottom: '5px solid transparent',
      borderTop: '1px solid rgba(224, 224, 224, 1)', 
      borderLeft: '1px solid rgba(224, 224, 224, 1)',
      borderRight: '1px solid rgba(224, 224, 224, 1)',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
    },
    fragementMargin: {
      marginTop: '10px'
    }
  });
  
  class MaterialUITableComponent extends Component {

    componentDidMount() {
        console.log("[MaterialUITableComponent > componentDidMount]");
        this.props.fetchTableData();
    }
  
    handleChangePage = (event, page) => {
      this.props.setPage(event, page);
    };
  
    handleChangeRowsPerPage = event => {
        this.props.changeRowsPerPage(0, +event.target.value);
    };

    handleDateChange = (date) => {
      // this.setState({ selectedDate: date });
      console.log(date);
      this.props.startDateChange(date);
    };

    handleTableRowClick = (id, isCollaspable) => {
      console.log(id, isCollaspable);
      this.props.toggleCromiumWindow(id, !isCollaspable);
    }
  
    render() {
      console.log(this.props.mappedTableState);
      const { classes } = this.props;
      const { tablesData, rowsPerPage, page } = this.props.mappedTableState;
      const rows = tablesData;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    
      return (
        
      <div>
        <Paper className={classes.root} style={{ marginTop: '-32px', backgroundColor: '#585eb1', boxShadow: 'none'}}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell style={{color: 'white'}}>ID #</TableCell>
                    <TableCell style={{color: 'white'}} align="center">First Name</TableCell>
                    <TableCell style={{color: 'white'}} align="center">Last Name</TableCell>
                  </TableRow>
                </TableHead>
            </Table>
          </div>
        </Paper>

        {/* style={{ boxShadow: 'none' }} */}
        <Paper className={classes.root} style={{ boxShadow: 'none' }}>
          <div className={[classes.tableWrapper].join(' ')}>
            <Table className={[classes.table, classes.tableRowGap].join(' ')}>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <Fragment key={row.id}>
                    <TableRow className={classes.tableRow}
                    onClick={() => this.handleTableRowClick(row.id, row.collapsedRow)}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                  </TableRow>
                    <Collapse
                      in={row.collapsedRow}
                      timeout="auto"
                      component={collapseComponent}
                      unmountOnExit>
                      {'some content to be collapse'}
                      </Collapse>
                      <tr><td colSpan={3} style={{color: 'transparent', height: '15px'}}></td></tr>
                  </Fragment>

                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows, margin: '10px 0'}}>
                    <TableCell colSpan={3} style={{marginTop: '30px'}}/>
                  </TableRow>
                )}
              </TableBody>  
            </Table>
          </div>
      </Paper>
      <div style={{ marginTop: '25px', textAlign: "right" }}>
      <Table className={classes.table}>
        <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  native: true,
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActionsWrapped}
              />
            </TableRow>
          </TableFooter>
          </Table>
      </div>
      </div>
      );
    }
  }
  
  MaterialUITableComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MaterialUITableComponent);
  