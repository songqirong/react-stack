import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '@/views';
export default class Aside extends React.Component{
    createLink(){
        return routes.map(ele=>{
            return <NavLink to={ele.path} key={ele.id}>{ele.icon}{ele.name}</NavLink>;
        });
    }
    render(){
        return (
            <div className="aside">
                {this.createLink()}
            </div>
        );
    }
}