import React from 'react';
import {Button} from 'antd';
import {inject,observer} from 'mobx-react';
// @inject('store')
// @observer
class Status extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:"",
            msg1:''
        };
    }
    countChange(arg){
        let {testStore} = this.props.store;
        if(arg=="add"){
            testStore.addCount(100);
        }else{
            testStore.subCount(50);
        }
    }
    delTask(idx){
        let {todoStore} = this.props.store;
        todoStore.subTodo(idx);
    }
    msg1Change(idx,e){
        let {todoStore} = this.props.store;
        todoStore.updTodo({idx,task:e.target.value});
    }
    createTask(){
        let {todoStore} = this.props.store;
        return todoStore.list.map((ele,idx)=>(
            <div key={ele.id} style={{marginBottom:"5px"}}>
                <span>{ele.id}</span>
                <span>——</span>
                <input type="text"
                value={ele.task}
                onChange={this.msg1Change.bind(this,idx)}
                style={{marginRight:"50px",border:"1px,solid,#ccc"}}
                ></input>
                <Button type="primary" danger onClick={this.delTask.bind(this,idx)}>删除</Button>
            </div>
            )
        );
    }
    msgChange(e){
        this.setState({
            msg:e.target.value
        });
    }
    clsTask(){
        let {todoStore} = this.props.store;
        todoStore.clsTodo();
    }
    addTask(e){
        // console.log(e.keyCode);
        let {todoStore} = this.props.store;
        if(e.keyCode == 13){
            todoStore.addTodo(this.state.msg);
            this.setState({
                msg:""
            });
        }
        
    }
    render(){
        // console.log(this.props);
        // let {testStore} = this.props.store;
        return(
            <div>
                {/* <span>{testStore.count}</span><br/> */}
                <Button type="primary" onClick={this.countChange.bind(this,"add")}>加</Button>
                <Button type="primary" danger onClick={this.countChange.bind(this)}>减</Button>
                <hr/>
                <div className="todo">
                    <span>共有{this.props.store.todoStore.leng}条任务</span>
                    <input 
                    value={this.state.msg}
                    type="text" 
                    onChange={this.msgChange.bind(this)}
                    onKeyUp={this.addTask.bind(this)}
                    ></input>
                    <ul className="task" style={{border:"1px solid #ccc",padding:"20px",marginTop:"20px"}}>
                        {this.createTask()}
                    </ul>
                    <Button type="primary" danger onClick={this.clsTask.bind(this)}>清空</Button>
                </div>
            </div>
        );
    }
}
export default Status;
