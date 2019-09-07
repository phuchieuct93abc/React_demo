import React from 'react'
import styleClasses from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <React.Fragment>
        <Toolbar></Toolbar>
        <main className={styleClasses.content}>{props.children}</main>
    </React.Fragment>
)
export default layout;