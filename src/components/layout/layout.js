import React from 'react';
import Aside from './aside';
import Main from './main';
import '@/assets/layout.scss';
export default class Layout extends React.Component{
    render(){
        return (
            <div className="layout">
                <Aside />
                <Main />
            </div>
        );
    }
}