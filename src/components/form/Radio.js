import React from 'react';
export default class Radio extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    radioChange(e){
        let id = Number(e.target.value);
        // console.log(value);
        this.props.onChange(id);
    }
    createRadioBox(){
        let {list,value} = this.props;
        return list.map(ele=>{
            return(
                <span key={ele.id}>
                    <input type="radio" checked={ele.id==value} value={ele.id} onChange={(e)=>this.radioChange(e)}/>
                    <span>{ele.hobby}</span>
                </span>
            );
        });
    }
    render(){
        return(
            <div className="radiobox">
                {this.createRadioBox()}
            </div>
        );
    }
}