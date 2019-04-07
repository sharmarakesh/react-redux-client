import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
// import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// eslint-disable-next-line
// import * as browserHistory from 'react-router';
import configureStore from './store/configureStore';
// eslint-disable-next-line
import {ConnectedRouter} from 'react-router-redux';
// eslint-disable-next-line
import Appp from './containers/App';
import UserInformation from './containers/UserInformation';

import MaterialUITable from './containers/MaterialUITable';
import AppGlobalDateRange from './containers/AppGlobalDateRange';

const store = configureStore();
// eslint-disable-next-line
// const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Router>
          {/* <div style={{ display: "flex" }}>
          <div
            style={{
              width: "100%",
              background: "#f0f0f0"
            }}
          >
              <ul style={{ listStyleType: "none", padding: 0, display: "flex", justifyContent: 'flex-start', background: 'blue'}}>
                <li style={{padding: "10px", backgroundColor: "#ccc", margin: "5px"}}>
                  <Link to="/userInfo">UserInfo</Link>
                </li>
                <li style={{padding: "10px", backgroundColor: "#ccc", margin: "5px"}}>
                  <Link to="/tableExample">Material UI Table Example</Link>
                </li>
              </ul>
                
                <div className="content">
                  <Route path="/userInfo" exact={true} component={UserInformation} />
                  <Route path="/tableExample" exact={true} component={MaterialUITable} />
                </div>
          </div>
      </div> */}
      <div style={{ display: "flex", justifyContent: 'space-between'}}>
      <div className="content-area">
      <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', height: '80px' }}>
      <div>
        <NavLink exact={true} className='link' activeClassName='is-active' to='/userInfo'>User Information</NavLink>
        <NavLink className='link' activeClassName='is-active' to='/tableExample'>Material UI Table Example</NavLink>
      </div>
      <div style={{ display: "flex", justifyContent: 'flex-end', alignItems: 'center' }}>
        <AppGlobalDateRange></AppGlobalDateRange>
        <svg width="24" height="24" className='excel'><path d="M 14 3 L 2 5 L 2 19 L 14 21 L 14 19 L 21 19 C 21.552 19 22 18.552 22 18 L 22 6 C 22 5.448 21.552 5 21 5 L 14 5 L 14 3 z M 12 5.3613281 L 12 18.638672 L 4 17.306641 L 4 6.6933594 L 12 5.3613281 z M 14 7 L 16 7 L 16 9 L 14 9 L 14 7 z M 18 7 L 20 7 L 20 9 L 18 9 L 18 7 z M 5.1757812 8.296875 L 7.0605469 11.994141 L 5 15.703125 L 6.7363281 15.703125 L 7.859375 13.308594 C 7.934375 13.079594 7.9847656 12.908922 8.0097656 12.794922 L 8.0253906 12.794922 C 8.0663906 13.032922 8.1162031 13.202109 8.1582031 13.287109 L 9.2714844 15.701172 L 11 15.701172 L 9.0058594 11.966797 L 10.943359 8.296875 L 9.3222656 8.296875 L 8.2929688 10.494141 C 8.1929688 10.779141 8.1257969 10.998625 8.0917969 11.140625 L 8.0664062 11.140625 C 8.0084063 10.902625 7.9509531 10.692719 7.8769531 10.511719 L 6.953125 8.296875 L 5.1757812 8.296875 z M 14 11 L 16 11 L 16 13 L 14 13 L 14 11 z M 18 11 L 20 11 L 20 13 L 18 13 L 18 11 z M 14 15 L 16 15 L 16 17 L 14 17 L 14 15 z M 18 15 L 20 15 L 20 17 L 18 17 L 18 15 z"></path></svg>
      </div>
      </div>
        
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
