import React from 'react';
// jsx是什么？
// 1、jsx是一个变量
// 2、jsx是一个对象
// 3、jsx是一个表达式，他的内部也可以注入表达式
// 4、jsx会对用户输入的信息进行转义，可以有效防止注入攻击
// 5、jsx可以使用静态属性
// 6、jsx也可以使用动态属性
// 7、jsx可以相互嵌套
// 8、jsx中的注释也是变量，必须用大括号包起来

var ele = <div>我是外界的元素节点</div>;
export default class TestJSX extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:"我是state中的msg",
            red:"red",
            message:"修改颜色",
            color:"red",
            style:{color:'blue',backgroundColor:'grey'}
        };
    }
    createChild(){
        return(
           <div>
                <h5 style={{color:this.state.red,fontSize:"50px"}}>{this.state.msg}</h5>
                {ele}
           </div>
        );
    }
    changeClass(){
        this.setState({
           color:"green" 
        });
    }
    render(){
        return(
            <div>
                <h2>我是一个jsx变量</h2>
                <h3>{this.state.msg}</h3>
                {this.createChild()}
                <p  className={this.state.color}>我是p标签</p>
                <div><button onClick={this.changeClass.bind(this)}>{this.state.message}</button></div>
                <h5 style={this.state.style}>{this.state.msg}</h5>
            </div>
        );
    }
}