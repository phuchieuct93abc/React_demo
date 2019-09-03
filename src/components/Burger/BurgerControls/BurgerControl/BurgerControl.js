import React from 'react';
import styleClasses from "./BurgerControl.module.css"
const burgerControl = (props) => {
     return (
        <div className={styleClasses.burgerControl}>
            <div className={styleClasses.label}>{props.label}</div>
            <button className={styleClasses.button} onClick={props.more}>More</button>
            <button className={styleClasses.button} onClick={props.less} disabled={props.disabled}>Less</button>

        </div>)
}
export default burgerControl;