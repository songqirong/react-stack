import React from "react";
export default function hoc(WrapComponent){
    return class extends React.Component{
        render(){
            return (
                <React.Fragment>
                    <WrapComponent />
                    <h3>装饰品</h3>
                </React.Fragment>
            );
        }
    };
}
