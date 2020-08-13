import React from 'react';
export default class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    createSelect(){
        let {list} = this.props;
        return list.map(ele=>(
            <option key={ele.id} value={ele.id}>{ele.hobby}</option>
        ));
    }
    valueChange(e){
        let value=Number(e.target.value);
        this.props.onChange(value);
    }
    render(){
        let {value}=this.props;
        return(
            <div>
                <select value={value} onChange={(e)=>this.valueChange(e)}>
                    {this.createSelect()}
                </select>
            </div>
        );
    }
}