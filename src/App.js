import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
// import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// eslint-disable-next-line
// import * as browserHistory from 'react-router';
import configureStore from './store/configureStore';
// eslint-disable-next-line
import {ConnectedRouter} from 'react-router-redux';
// eslint-disable-next-line
import Appp from './containers/App';
import UserInformation from './containers/UserInformation';

import MaterialUITable from './containers/MaterialUITable';

const store = configureStore();
// eslint-disable-next-line
// const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      
      
        <div>
        <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "100%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0, display: "flex", justifyContent: 'flex-end'}}>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li style={{padding: "10px", backgroundColor: "#ccc", margin: "5px"}}>
              <Link to="/userInfo">UserInfo</Link>
            </li>
            <li style={{padding: "10px", backgroundColor: "#ccc", margin: "5px"}}>
              <Link to="/tableExample">Material UI Table Example</Link>
            </li>
          </ul>

            {/* <Route path="/" exact={true} component={Appp} /> */}
            
            <div className="content">
            <Route path="/userInfo" exact={true} component={UserInformation} />
            <Route path="/tableExample" exact={true} component={MaterialUITable} />
            
            </div>
        </div>
        
      </div>
    </Router>
        </div>
      </Provider>
    );
  }
}

// App.propTypes = {
//   store: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// }

export default App;
