import React from 'react';
import ItemCount from '../ItemCount';

const ItemListContainer = ({greeting}) => {
  return <div>
      <h5>{greeting}</h5>
      <ItemCount stock={5} initial={1}/>
  </div>;
};

export default ItemListContainer;
