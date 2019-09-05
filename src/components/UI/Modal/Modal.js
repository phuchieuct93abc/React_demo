import React from 'react';
import classes from './Modal.module.css'
const modal = (props) => (
    <div className={classes.modalWrapper} onClick={props.onClose}>
        <div className={classes.modal} onClick={(event)=>event.stopPropagation()}>
            <div className={classes.title}>Title here</div>
            <div className={classes.content}>{props.children}</div>
        </div>
    </div>
)
export default modal;