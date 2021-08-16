import React from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {inject,observer} from 'mobx-react';
import { createAction } from 'redux-actions';
import { count_add } from '@/store/reduces/home/reducer.js';
// @inject('store')
// @observer
class Nav1 extends React.Component{
    componentDidMount(){
        let list = [1,2,3,4,5];
        let arr2 = list.map(ele=>{
            return ele = ele+1;
        });
        console.log(list);
        console.log(arr2);
        // this.permutate('123');
        
        // window.addEventListener("click", this.listenTop, false);
    }
    permutate = (str) => {
        var array = str.split('');
        function loop(array, pre = []) {
            if (array.length == 1) {
                return [pre.concat(array).join('')];
            }
            let res = [];
            for (let index = 0; index < array.length; index++) {
                var first = array.pop();
                res = res.concat(loop(array, [...pre, first]));
                array.unshift(first);
            }
            console.log('res', res);
            return res;
        }
        return Array.from(new Set(loop(array)));
    }
    // listenTop = () => {
    //     console.log(this.refs.nav1.getBoundingClientRect().top);
    //     console.log(document.documentElement.clientHeight);
    // }
    // componentWillUnmount(){
    //     window.removeEventListener('click', this.listenTop, false);
    // }
    async addCount(){
        // this.props.dispatch({type:  'count/add'});
        const res = await this.props.addCount();
        console.log(res, 'res1');
    }
    render(){
        return (
            <div className="nav1">
                <h4 onClick={this.addCount.bind(this)}>《清平调·其一》</h4>
                <h3>【唐】 李白</h3>
                <h1>云想衣裳花想容，春风拂槛露华浓。</h1>
                <div className="app-wrap">
                    <h2>若非群玉山头见，会向瑶台月下逢。</h2>
                </div>
                {/* <span>{this.props.store.testStore.count}</span> */}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addCount: count_add.request.action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav1);