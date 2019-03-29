// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from "react-router";
import App from './containers/App';
import UserInformation from './containers/UserInformation';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={UserInformation} />
  </Route>
)