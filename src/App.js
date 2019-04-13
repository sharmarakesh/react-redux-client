import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
// import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

// eslint-disable-next-line
// import * as browserHistory from 'react-router';
import configureStore from './store/configureStore';
// eslint-disable-next-line

import ApplicationTabsComponents from './components/ApplicationTabsComponents';

const store = configureStore();
// eslint-disable-next-line
// const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <div> */}
          <ApplicationTabsComponents storeData={store}></ApplicationTabsComponents>
        {/* </div> */}
      </Provider>
    );
  }
}

export default App;
