import React from 'react';

class Form extends React.Component {
  state = { name: "",}

  handleSubmit = (event) => {
    event.preventDefault();
    // stops the page from reloading
    this.props.addItem(this.state.name);
    // calls a function, addItem, passed to the class from props, with the parameter name from the state object
    this.setState({ name: "" });
    // resets the state to be blank, clearing the input
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
    // when the input is typed in, this sets the name key in state to be that value
  }

  render() {
    const { name } = this.state;
    // object destructuring; grabs name from state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        name="name"
        value={name}
        onChange={this.handleChange}
        required
        placeholder="Add an Item"
        />
      </form>
    )
  }
}

export default Form;