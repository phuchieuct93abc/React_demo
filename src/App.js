import React from 'react';
import './App.css';
import Person from './Person/Person';



export default class App extends React.Component {
  state = {
    persons: [
      { name: "Hieu" },
      { name: "Thuy" }
    ],
    selectedPerson: null
  }
  addNewPerson = () => {
    this.setState({
      persons: [...this.state.persons, { name: "New" }]
    })
  }
  changeName = () => {
    let persons = [...this.state.persons];
    persons[0].name = "change";
    this.setState({
      persons
    })
  }
  selectPerson = selectedPerson => {
    this.setState({
      selectedPerson
    })
  }
  render() {
    return (
      <div>
        Selected: -{this.state.selectedPerson}-
        <button onClick={this.selectPerson}>Change</button>
        <button onClick={this.addNewPerson}>Add new</button>
        <button onClick={this.changeName}>Change name</button>
        {this.state.persons.map((p, index) => {
          return (
            <Person onSelect={this.selectPerson} key={index} name={p.name} />
          )
        })}
      </div>
    )
  }
};
