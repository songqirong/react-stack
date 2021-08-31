import React, { useState, useEffect } from 'react';
let state, reducer;
const subscribeList = [];
const store = { 
  getState: () => state,
  dispatch: (action) => {
    // 修改state
    state = reducer(state, action);
    subscribeList.map(fn => fn());
  },
  subscribe: (fn) => {
    subscribeList.push(fn);
    return () => {
      const index = subscribeList.indexOf(fn);
      subscribeList.splice(index, 1);
    };
  }
};
export const createStore = (reducers, initState) => {
  reducer = reducers;
  state = initState;
  return store;
};


const stateDiff = (state, newState) => {
  for(let key in state){
    if(state[key] !== newState[key]){
      return true;
    }
  }
  return false;
};

export const connect = (mapStateToProps, mapDispatchToProps) => (Component) => (props) => {
  const [, update] = useState({});
  const data = mapStateToProps ? mapStateToProps(state) : {state};
  const dispatchers = mapDispatchToProps ?  mapDispatchToProps(store.dispatch) : { dispatch: store.dispatch };
  useEffect(() => store.subscribe(()  => {
    const newState = mapStateToProps ? mapStateToProps(state) : { state };
    if(stateDiff(data, newState)){
      update({});
    }
  }), [mapStateToProps]);

  return <Component {...props} {...data} { ...dispatchers } />;
  
};

export const Provider = ({store, children}) => children;