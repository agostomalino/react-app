import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Item.css'

const Item = ({itemInfo}) => {
 
  return<> 
  <div className='card'>
  <div>
    <img className='itemImg'src={itemInfo.img} width="200px" alt={itemInfo.description}/>
    <h5 className='itemTitle'>{itemInfo.title}</h5>
    <p className='itemDescription'>{itemInfo.description}</p>
    <p className='itemCategory'>{itemInfo.category}</p>
    <p className='itemPrecio'>{itemInfo.precio}</p>
    <p className='itemStock'>Stock: {itemInfo.stock} </p>
    <Link to={`/item/${itemInfo.id}`} className='btn btn-light'>Ver detalle del producto</Link>

  </div>
  </div>
  </>
};

export default Item;
