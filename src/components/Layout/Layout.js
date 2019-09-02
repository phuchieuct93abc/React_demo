import React from 'react'
import styleClasses from './Layout.module.css';
const layout = (props) => (
    <React.Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styleClasses.content}>{props.children}</main>
    </React.Fragment>
)
export default layout;