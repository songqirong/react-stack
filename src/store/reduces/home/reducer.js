import { action } from 'mobx';
import { combineReducers } from 'redux';
import { handleActions, createAction } from 'redux-actions';
import { initCount } from './state';
const update_state = (state, payload) => ({ ...state, ...payload });
const cloneDeep = (data) => JSON.parse(JSON.stringify(data));
export const COUNT_ADD = 'count/add';
const create_fetch_action = (action_type) => ({
  request: {
    action: createAction(action_type),
    type: action_type
  },
  success: {
    action: createAction(`${action_type}_success`),
    type: `${action_type}_success`
  }
}); 
const handle_count = (state, action) => update_state(state, action.payload);
export const count_add = create_fetch_action(COUNT_ADD);

export const countReducer = handleActions({
  [count_add.success.type]: handle_count,
}, cloneDeep(initCount));


export const homeReduces = combineReducers({
  count: countReducer
});