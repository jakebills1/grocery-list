import React, { Component } from 'react';
import List from './List'
import Form from './Form'
import './App.css';

class App extends Component {
  state = {
    listItems: [
      { id: Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1), name: "Milk", complete: false},
      { id: Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1), name: "Eggs", complete: false},
      { id: Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1), name: "Butter", complete: false},
    ]
  }

  addItem = (name) => {
    const { listItems } = this.state;
    // object destructuring; gets listItems from the state object
    const newItem = { name, id: this.getID(), complete: this.defaultStatus(), }
    // creates the newItem object, with th passed parameter, the getID function, and the default complete
    this.setState({ listItems: [newItem, ...listItems ]}) 
  }

  defaultStatus = () => {
    return false
  }

  getID = () => {
    return Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1)
  }

  render() {
    const { listItems } = this.state;
    return (
      <div className="App">
          <List name="Grocery List" items={listItems}/>
          <hr />
          <h3>Add an Item:</h3>
          <Form addItem={this.addItem} />
          {/* passes the additem function to the form class */}
      </div>
    );
  }
}

export default App;
