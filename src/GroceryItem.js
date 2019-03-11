import React from 'react';

const GroceryItem = ({id, name, complete, itemClick, deleteItem }) => {
  const styles = {
    completed: {textDecoration: 'line-through', },
    toBuy: { color: 'blue', }
  }
  
    if (complete) {
      return (
        <div >
          <li style={styles.completed} onClick={ () => itemClick(id) }> {name}  </li>  
          <button onClick={ () => deleteItem(id)} >Delete</button> 
        </div>
      ) 
    } else {
      return (
        <div>
          <li style={styles.toBuy} onClick={ () => itemClick(id) }> {name}  </li>  
          <button onClick={ () => deleteItem(id)} >Delete</button> 
        </div>
      )
    }
    // the onclick function passes the id through the list class, to app, to the click handler function
  }
  
  export default GroceryItem;


