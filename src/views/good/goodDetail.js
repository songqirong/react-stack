import React from 'react'; 
import {fetchGetGoodDetail} from '@/utils/api';
export default class Nav1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            good:{}
        };
    }
    componentDidMount(){
        fetchGetGoodDetail({_id:this.props.match.params.id}).then(res=>{
            console.log(res.data[0]);
            this.setState({
                good:res.data[0]
            });
        });
    }
    render(){
        // console.log(this.props);
        let {good} = this.state;
        return (
            <div>
               <div>
                    <img src={"http://localhost:3000"+good.img}></img>
               </div>
               <h3>{good.name}</h3>
               <h3>{good.desc}</h3>
               <h3>{good.price}</h3>
            </div>
        );
    }
}