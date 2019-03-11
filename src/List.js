import React from 'react';
import GroceryItem from './GroceryItem'
const List = ({items, name, itemClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <GroceryItem key={item.id} {...item} itemClick={itemClick} />)}
        {/* GroceryItem is passed the key, name, and complete properties */}
    </ul>
  </div>
)
export default List;
