import React from 'react'; 
import {inject,observer} from 'mobx-react';

@inject('store')
@observer
class Goodlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    componentDidMount(){
        let {todoStore} = this.props.store;
        todoStore.getGoods({});
    }
    linkToDetail(ele){
        // console.log("props",this.props);
        this.props.history.push('/good/detail/'+ele._id);
    }
    createList(){
        let {todoStore} = this.props.store;
        return todoStore.goodlist.map(ele=>{
            return (<div key={ele._id} style={{backgroundColor:"pink",padding:"10px",border:"1px solid #ccc",margin:"10px"}} onClick={this.linkToDetail.bind(this,ele)}>
            <span>{ele.name}</span>
            <span style={{marginLeft:"50px"}}>价格：</span>
            <span style={{color:"red"}}>{ele.price.toFixed(2)}</span>
            </div>);
        });
    }
    render(){
        return (
            <div>
            <h2>共有{this.props.store.todoStore.total}种商品</h2>
                { this.createList()}
            </div>
        );
    }
}
export default Goodlist;