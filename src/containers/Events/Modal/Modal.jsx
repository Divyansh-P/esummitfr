import React, { useState } from 'react';
import './Modal.css';
const Modal = (props) => {
    
    const closehandler=()=>{
    props.close(false)  
    }
    return (
        <div className="container88">
        <div className="modal1">
        <div className="headingm">
        <i class="fas fa-window-close close1" onClick={closehandler}></i>
        <h1 className="headmo">{props.name}</h1>
        
        </div>
        <div className="edesc">{props.desc}</div>
        <a href={props.link} target="_blank"><div className="registerev">Register</div></a>
        </div>
        </div>
      );
}
 
export default Modal;