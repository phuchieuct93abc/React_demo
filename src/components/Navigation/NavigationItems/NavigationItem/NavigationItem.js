import React from 'react'
import classes from './NavigationItem.module.css';
const navigationItem = props => {

    let activeClass = null;
    if (props.active) {
        activeClass = "active"
    }
    return (<li className={[classes.navigationItem, classes[activeClass]].join(" ")} >
        <a href={props.link}>{props.children}</a>
    </li>)
}

export default navigationItem;
