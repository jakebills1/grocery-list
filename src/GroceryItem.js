import React from 'react';

const GroceryItem = ({id, name, complete, itemClick, }) => {
  const styles = {
    completed: {textDecoration: 'line-through', },
    toBuy: { color: 'blue', }
  }
  
    if (complete) {
      return <li style={styles.completed} onClick={ () => itemClick(id) }> {name} </li>
    } else {
      return <li style={styles.toBuy}  onClick={ () => itemClick(id) }> {name} </li>
    }
  }
  
  export default GroceryItem;


