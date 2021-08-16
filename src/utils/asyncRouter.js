import React from 'react';
const routerObserveQueue = [];
export const RouterHooks = {
  // 路由组件加载之前
  beforeRouteLoad: (callback) => {
    routerObserveQueue.push({
      type: 'before',
      callback,
    });
  },
  // 路由组件加载之后
  afterRouteLoad: (callback) => {
    routerObserveQueue.push({
      type: 'after',
      callback,
    });
  } 
};
export default function asyncRouter(loadRouter){
  return class Content extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        Component: null,
      };
      this.dispatchRouterQueue('before');
    }
    dispatchRouterQueue(type){
      const { history } = this.props;
      routerObserveQueue.forEach(item => {
        if(item.type === type){
          item.callback && item.callback(history);
        }
      }); 
    }
    componentDidMount(){
      if( this.state.Component ) return;
      loadRouter().then(module => module.default).then( Component => this.setState({Component}, () => {
        this.dispatchRouterQueue('after');
      }),
      );
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
};