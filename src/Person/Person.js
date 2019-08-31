import React from 'react';
import classes from "./Person.module.css";
class Person extends React.Component {

    render() {
        return (
            <div className={classes.person} onClick={() => this.props.onSelect(this.props.name)}>
                {this.props.name}
            </div>
        )
    }
};
export default Person;