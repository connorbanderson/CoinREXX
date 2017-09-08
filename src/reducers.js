import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { notificationReducer } from './notification';
import { tasksReducer } from './tasks';
import crypto from './reducers/crypto'
import accountinfo from './reducers/accountinfo'
import portfolios from './reducers/portfolios'

export default combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  routing: routerReducer,
  tasks: tasksReducer,
  crypto,
  accountinfo,
  portfolios
});
