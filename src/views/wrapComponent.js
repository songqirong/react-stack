import React from 'react';
import hoc from '@/utils/hoc';
class WrapComponent extends React.Component{
    render(){
        return (
            <div><h3>我是被装饰的子组件</h3></div>
        );
    }
}
export default hoc(WrapComponent);