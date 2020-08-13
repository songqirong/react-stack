import React from 'react';
export default class Child1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }
    langChange(id){
        this.props.onChange(id);
    }
    createList(){
        let {lang,list} = this.props;
        return list.map(item=>{
            return <span 
                key={item.id} 
                className={item.id==lang?"on":""}
                onClick={this.langChange.bind(this,item.id)}
            >{item.language}</span>;
        });
    }
    render(){
        let {lang,list} = this.props;
        return(
            <div className="child1">
                {list.map(item=><span 
                    key={item.id} 
                    className={item.id==lang?"on":""}
                    onClick={this.langChange.bind(this,item.id)}
                >{item.language}</span>)}
                {/*this.createList()*/}
            </div>
        );
        
    }
}