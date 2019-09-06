import React from 'react'
import classes from './Toolbar.module.css';
import logo from '../../../assets/burger.png'
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = props => (
    <header className={classes.header}>
        <span>Menu</span>
        <span>
            <img className={classes.logo} src={logo} />
        </span>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)
export default toolbar;