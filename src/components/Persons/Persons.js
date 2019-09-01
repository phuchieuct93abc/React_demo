import React from "react";
import Person from '../Person/Person';


const Persons = (props) => {

    return (
        props.persons.map(p => (
            <Person name={p.name}></Person>
        ))

    )


}
export default Persons;
