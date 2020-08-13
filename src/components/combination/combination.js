import PropTypes from 'prop-types';
import React from 'react';
function Combination(props){
    return(
        <div style={{position:"absolute",left:0,top:0,backgroundColor:"rgba(128,128,128,.7)",height:"100%",width:"100%",display:props.show?"block":"none"}}>
            <div style={{position:"absolute",left:"50%",top:"50%",marginLeft:"-200px",boxSizing:"border-box",marginTop:"-150px",backgroundColor:"#fff",width:"400px",borderRadius:"5px"}}>
                <div style={{padding:"10px",lineHeight:"40px",fontSize:"20px",color:"#000",overflow:"hidden"}}>
                    <span>{props.title}</span>
                    <span style={{float:"right",cursor:"pointer",color:"#ccc",fontSize:"16px"}} onClick={props.onClose}>X</span>
                </div>
                <div style={{padding:"30px"}}>
                    {props.content}
                </div>
                <div style={{overflow:"hidden"}}>
                    <button style={{backgroundColor:"#409EFF",color:"#fff",float:"right",padding:"5px 15px",margin:"10px",outline:"none"}} onClick={props.onConfirm}>{props.btns.confirmButtonText}</button>
                    <button style={{float:'right',padding:"5px 15px",margin:"10px",outline:"none"}} onClick={props.onCancel}>{props.btns.cancelButtonText}</button>
                </div>
            </div>
        </div>
    );
}
Combination.propTypes={
    title:PropTypes.string.isRequired,
    content:PropTypes.object.isRequired,
    btns:PropTypes.object.isRequired,
    show:PropTypes.bool.isRequired,
    onClose:PropTypes.func.isRequired,
    onConfirm:PropTypes.func.isRequired,
    onCancel:PropTypes.func.isRequired,
};
export default Combination;