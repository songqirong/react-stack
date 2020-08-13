import React from 'react';
import Child1 from './themeChange1';
export default class father extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div><h3>我是父组件</h3></div>
                <Child1 />
            </React.Fragment>
        );
    }
}