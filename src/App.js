import React from 'react';
import study from '@/components';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store.js';
import 'antd/dist/antd.css';
export default class App extends React.Component{
    render(){
        let {Layout} = study;
        return (
            <HashRouter>
                <Provider store={store}>
                    <Layout />
                </Provider>
            </HashRouter>
        );
    }
}