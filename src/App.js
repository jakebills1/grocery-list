import React, { Component } from 'react';
import List from './List'
import Form from './Form'
import EditForm from './EditForm'
import './App.css';

class App extends Component {
  state = {
    listItems: []
  }

  addItem = (name) => {
    const { listItems } = this.state;
    // object destructuring; gets listItems from the state object
    const newItem = { name, id: this.getID(), complete: this.defaultStatus(), }
    // creates the newItem object, with th passed parameter, the getID function, and the default complete
    this.setState({ listItems: [...listItems, newItem, ]})
  }

  defaultStatus = () => {
    return false
  }

  getID = () => {
    return Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1)
  }

  handleClick = (id) => {
    const { listItems } = this.state;
    this.setState({
      listItems: listItems.map( item => {
        if ( item.id === id){
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
    // loops through listItems looking for the passed in id
  }

  deleteItem = (id) => {
    const listItems = this.state.listItems.filter( item => item.id !== id)
    this.setState({listItems})
  }

  editItem = (id, name) => {
    const { listItems } = this.state;
    debugger
    this.setState({
      listItems: listItems.map( item => {
        if ( item.id === id){
          return (
            <EditForm id={id} name={name} />
          )
        }
        return item
      })
    })
  }


  render() {
    const { listItems } = this.state;
    return (
      <div className="App">
          <List name="Grocery List" items={listItems} itemClick={this.handleClick} deleteItem={this.deleteItem} editItem={this.editItem} />
          <hr />
          <h3>Add an Item:</h3>
          <Form addItem={this.addItem} />
          {/* passes the additem function to the form class */}
      </div>
    );
  }
}

export default App;
