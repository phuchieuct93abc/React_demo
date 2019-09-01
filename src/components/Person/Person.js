import React from 'react';
import styleClasses from "./Person.module.css";
class Person extends React.Component {


    render() {
        return (
            <div className={styleClasses.person} >

                <div className={styleClasses.content}>
                    <button className={styleClasses.button}>Click me!</button>
                    {this.props.name}
                </div>

            </div>
        )
    }
};
export default Person;