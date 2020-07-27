import { combineReducers } from 'redux'
import selectData from './selectData';

export default combineReducers({
  rootdata: selectData
});