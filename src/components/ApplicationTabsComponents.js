import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppGlobalDateRange from '../containers/AppGlobalDateRange';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import UserInformation from '../containers/UserInformation';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import MaterialUITable from '../containers/MaterialUITable';
import MaterialUITableComponent from './MaterialUITableComponent';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  tabsIndicator: {
    backgroundColor: 'white',
  },
  rowPadding: {
    margin: '5px 0'
  }
});

class ApplicationTabsComponent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <BrowserRouter>
            <div className={classes.root}>
                    <Route 
                    path = "/"
                    render={({ location }) => (
                        <Fragment>
                            <AppBar position="static">
                                <Toolbar>
                                    <Tabs value={location.pathname} onChange={this.handleChange} className={classes.grow} classes={{indicator: classes.tabsIndicator }}>
                                        <Tab label="User Information" component={Link} to="/userInformation" />
                                        <Tab label="Material UI Table Example" component={Link} to="/materialTableExample" />
                                    </Tabs>
                                    <AppGlobalDateRange></AppGlobalDateRange>
                                    <Button color="inherit">Download Excel</Button>
                                </Toolbar>
                            </AppBar>
                            <Switch>
                                <Route path="/userInformation" render={() => <div><UserInformation></UserInformation></div>} />
                                <Route path="/materialTableExample" render={() => <div><MaterialUITableComponent></MaterialUITableComponent></div>} />
                            </Switch>
                        </Fragment>
                )} />
            </div>
        </BrowserRouter>
      
    );
  }
}

ApplicationTabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationTabsComponent);