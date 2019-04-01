import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { userInformationReducer } from './userInformationReducer';
import { materialUITableReducer } from './materialUITableReducer';

export default combineReducers({
    appState: appReducer,
    userInformationState: userInformationReducer,
    tableState: materialUITableReducer,
    routing
});