import React,{useState,useEffect}from 'react';
import {Button} from 'antd';
export default function Hook(props){
    let timer = null;
    let [count,setCount] = useState(500);
    let [list,setList] = useState([]);
    function add(){
        count++;
        setCount(count);
    }
    function createList(){
        return(list.map((ele,index)=><div key={index}>{ele}</div>));
    }
    useEffect(()=>{
        console.log("count更新了");
        timer = setTimeout(()=>{
            console.log("timer启动了");
            setList([1,2,3,4,5]);
        },3000);
        return()=>{
            clearTimeout(timer);
        };
    },[count]);
    return (
        <div>
            <span>{count}</span><br/>
            <Button type="primary" onClick={add}>加一</Button>
            {createList()}
        </div>
    );
}