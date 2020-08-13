import React from 'react';
export default class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    checkChange(e){
        let {checkArr} = this.props;
        if(e.target.checked){
            checkArr.push(Number(e.target.value));
        }else{
            let idx = checkArr.indexOf(Number(e.target.value));
            checkArr.splice(idx,1);
        }
        this.props.onChange(checkArr);
    }
    createCheckbox(){
        let {list,checkArr} = this.props;
        return list.map(ele=>{
            ele.checked=checkArr.includes(ele.id)?true:false;
            return (<span key={ele.id}>
                        <input type="checkbox" value={ele.id} checked={ele.checked} onChange={this.checkChange.bind(this)}></input>
                        <span>{ele.hobby}</span>
                    </span>);
        });
    }
    render(){
        return(
            <div className="checkbox">
                {this.createCheckbox()}
            </div>
        );
    }
}