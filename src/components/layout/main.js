import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import routes from '@/views';
import asyncRouter, { RouterHooks } from '@/utils/asyncRouter.js'; 
const { beforeRouteLoad } = RouterHooks;
export default class Main extends React.Component{
    componentDidMount(){
        beforeRouteLoad((history) =>  {
            console.log('将加载的路由为' + history.location.pathname);
        });
    }
    createRoute(){
        let arr=[];
        routes.map(ele=>{
            arr.push(<Route path={ele.path} component={ele.component} key={ele.id} exact></Route>);
            if(ele.Children){
                ele.Children.map(ele=>{
                    arr.push(<Route path={ele.path} component={ele.component} key={ele.id} exact></Route>);
                });
            } 
        });
        return arr;
    }
    render(){
        return (
            <div className="main">
                <Switch>
                    {this.createRoute()}
                    <Redirect from="/*" to="/nav1"/>
                </Switch>
            </div>
        );
    }
}