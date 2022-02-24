import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Item.css'

const Item = ({itemInfo}) => {
 
  return<> 
  <div className='card'>
  <div>
    <img src={itemInfo.img} width="200px"/>
    <h5>{itemInfo.title}</h5>
    <p>{itemInfo.description}</p>
    <p>{itemInfo.category}</p>
    <p>{itemInfo.precio}</p>
    <p>Stock: {itemInfo.stock} </p>
    <Link to={`/item/${itemInfo.id}`} className='btn btn-primary'>Ver detalle del producto</Link>

  </div>
  </div>
  </>
};

export default Item;
