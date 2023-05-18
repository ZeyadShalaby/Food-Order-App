import React from "react";
import * as ReactDOM from 'react-dom';

import classes from "./Modal.module.css";

function Backdrop (props){
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

function ModalOverlay (props){
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

function Modal (props) {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(
        <ModalOverlay> 
            {props.children} 
        </ModalOverlay>,
        portalElement)}
    </React.Fragment>
};

export default Modal;