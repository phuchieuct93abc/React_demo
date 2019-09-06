import React from 'react'
import styleClasses from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <React.Fragment>
        <Toolbar></Toolbar>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styleClasses.content}>{props.children}</main>
    </React.Fragment>
)
export default layout;