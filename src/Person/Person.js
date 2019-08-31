import React from 'react';

class Person extends React.Component {
 
   
    render() {
        return (
            <div onClick={()=>this.props.onSelect(this.props.name)}>
                    {this.props.name}
            </div>
        )
    }
};
export default Person;