import React from 'react'; 
import {inject,observer} from 'mobx-react';
@inject('store')
@observer
class Nav1 extends React.Component{
    componentDidMount(){
        let list = [1,2,3,4,5];
        let arr2 = list.map(ele=>{
            return ele = ele+1;
        });
        console.log(list);
        console.log(arr2);
    }
    render(){
        return (
            <div className="nav1">
                <h4>《清平调·其一》</h4>
                <h3>【唐】 李白</h3>
                <h1>云想衣裳花想容，春风拂槛露华浓。</h1>
                <div className="app-wrap">
                    <h2>若非群玉山头见，会向瑶台月下逢。</h2>
                </div>
                <span>{this.props.store.testStore.count}</span>
            </div>
        );
    }
}
export default Nav1;