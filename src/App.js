import React from 'react';
import study from '@/components';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'mobx-react';
import store from '@/store';
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