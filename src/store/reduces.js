import { combineReducers } from 'redux';
import { homeReduces } from './reduces/home/reducer';
export default combineReducers({
  home: homeReduces
});