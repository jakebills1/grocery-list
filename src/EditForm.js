import React from 'react';

class EditForm extends React.Component {

  render() {
    // const { name } = this.state;
    // object destructuring; grabs name from state
    return (
      <form >
        <h3>Edit</h3>
        <input
        // name="name"
        // value={name}
        // onChange={this.handleChange}
        required
        placeholder="Edit"
        />
      </form>
    )
  }
}

export default EditForm;
