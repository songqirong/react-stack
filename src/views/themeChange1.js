import React from 'react';
import theme from "@/utils/theme";
class son extends React.Component{
    render(){
        return(
           <theme.Consumer>
                {(ctx)=>(
                    <div><h4 style={{color:ctx.color,backgroundColor:ctx.backgroundColor}}>我是子组件</h4></div>
                )}
           </theme.Consumer>    
        );
    }
}
// const ctx = this.context;
// son.contextType = theme;
export default son;
