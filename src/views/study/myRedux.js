import React, { createContext } from 'react';
import { createStore, Provider, connect } from '@/store/myRedux/index';
const store = createStore((state, action) => {
  switch (action.type){
    case 'he': 
     return { ...state, user: action.payload };
    case 'hello': 
     return { name: '李四', age: 20 };
    default: 
     return state;
  }
}, { user: { name: 'zhangsan', age: 18 } });

class MyRedux extends React.PureComponent{
  constructor(props){
    super(props);
  }
  changeUser = (e) => {
    console.log(e, 'e');
    this.setState({
      user: {
        name: e.target.value,
        age: 18 
      }
    });
  }
  render(){
    return <> 
      <Son1Warp />
      <Son2Warp />
      <Son3Warp />
     </>;
  }
}

class Son1 extends React.PureComponent{
  constructor(props){
    super(props);
    console.log(props, 'props');
  }
  render(){
    console.log('son1');
    return <span>{this.props.user.name}</span>;
  }
}

class Son3 extends React.PureComponent{
  constructor(props){
    super(props);
    console.log(props, 'son3');
  }

  render(){
    console.log('hello');
    return <span>松</span>;
  }
}
class Son2 extends React.PureComponent{
  constructor(props){
    super(props);
  }
  onChange(e){
    this.props.fetchUser({ name: e.target.value, age: 20 });
  }
  render(){
    console.log('son2');
    return <input type="text"  value={this.props.user.name} onChange={this.onChange.bind(this)} />
    ;
  }
}
function mapStateToProps(state){
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchUser: (payload) => dispatch({ type: 'he', payload })
  };
}

const Son1Warp = connect(mapStateToProps, mapDispatchToProps)(Son1);
const Son2Warp = connect(mapStateToProps, mapDispatchToProps)(Son2);
const Son3Warp = connect()(Son3);

export default MyRedux;