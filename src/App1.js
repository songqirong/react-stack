import React from 'react';
import TestJSX from './views/test';
import Study from '@/components';
import theme from '@/utils/theme';
import Theme from '@/views/themeChange';
import WrapComponent from '@/views/wrapComponent';

// 定义一个根组件
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list1:[
                {id:1,language:"中文"},
                {id:2,language:"英语"},
                {id:3,language:"日文"},
                {id:4,language:"德语"}
            ],
            list2:[
                {id:1,hobby:"读书"},
                {id:2,hobby:"敲代码"},
                {id:3,hobby:"唱歌"},
                {id:4,hobby:"跳舞"},
                {id:5,hobby:"打篮球"},
            ],
            combination:{
                title:"警告",
                content:<span>此操作将永久删除该文件, 是否继续?</span>,
                btns:{
                    confirmButtonText:"确定",
                    cancelButtonText:"取消",
                },
            },
            show:false,
            themes:[
                {id:1,hobby:"dark",style:{color: '#000',backgroundColor: '#eee'}},
                {id:2,hobby:"pink",style:{color: 'pink',backgroundColor: '#ccc'}},
                {id:3,hobby:"blue",style:{color: 'blue',backgroundColor: 'orange'}},
                {id:4,hobby:"green",style:{color: 'green',backgroundColor: '#999'}},
                {id:5,hobby:"light",style:{color: '#fff',backgroundColor: '#222'}},
            ],
            values:{
                value:1,
                value1:1,
                value2:1,
                checkArr:[1,3],
                lang:1,
                value3:true
            }
        };
    }
    // langChange(id){
    //     // console.log(id);
    //     this.setState({
    //         lang:id
    //     });
    // }
    keyUp(e){
        console.log(e.keyCode);
    }
    // checkArrChange(checkArr){
    //     this.setState({
    //         checkArr
    //     });
    // }
    // radioChange(value){
    //     this.setState({
    //         value
    //     });
    // }
    // selectChange(value){
    //     this.setState({
    //         value1:value
    //     });
    // }
    selectChange(key,value){
        let {values} = this.state;
        if(key=="value3"){
            value=value.target.checked;
        }
        values[key]=value;
        this.setState({
            values
        });    
    }
    close(){
        console.log("关闭");
        this.setState({
            show:false
        });
    }
    open(){
        this.setState({
            show:true
        });
    }
    cancel(){
        console.log("取消");
        this.setState({
            show:false
        });
    }
    confirm(){
        console.log("确定");
        this.setState({
            show:false
        });
    }
    createElement(){
        let {value3} = this.state.values;
        return (
            <div>
                <input type="checkbox" checked={value3} onChange={(e)=>this.selectChange("value3",e)}/> 
                <span>我已阅读并同意此协议</span> 
            </div>
        );
    }
    render(){
        let {list1,list2,combination,show,themes,values} = this.state;
        let {Child1,Checkbox,Radiobox,Selectbox,Combination} = Study;
        return(
            <React.Fragment>
                <input onKeyUp={this.keyUp.bind(this)}></input>
                {this.createElement()}
                <Child1 list={list1} lang={values.lang} onChange={this.selectChange.bind(this,"lang")}/>
                <Checkbox list={list2} checkArr={values.checkArr} onChange={this.selectChange.bind(this,"checkArr")}/>
                <Radiobox list={list2}  value={values.value} onChange={this.selectChange.bind(this,"value")} />
                <Selectbox list={list2}  value={values.value1} onChange={this.selectChange.bind(this,"value1")} />
                <button onClick={this.open.bind(this)}>点击我</button>
                <Combination 
                    {...combination}
                    show={show}
                    onClose={this.close.bind(this)}
                    onConfirm={this.confirm.bind(this)}
                    onCancel={this.cancel.bind(this)}
                />
                <theme.Provider value={themes[values.value2-1].style}>
                    <Theme />
                </theme.Provider>
                <Selectbox list={themes}  value={values.value2} onChange={this.selectChange.bind(this,"value2")} />
                <WrapComponent />
                <h4>清平调·其一</h4>
                <h3>【唐】 李白</h3>
                <h1>云想衣裳花想容，春风拂槛露华浓。</h1>
                <div className="app-wrap">
                    <h2>若非群玉山头见，会向瑶台月下逢。</h2>
                </div>
            </React.Fragment>
        );
    }
}






