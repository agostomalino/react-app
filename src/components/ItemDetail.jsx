import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'



const ItemDetail = ({itemInfo}) => {
  return  <div className='card' style="width: 18rem;">
              <img with="200px" src={itemInfo.img} alt={itemInfo.title}/>
              <div>
              <h5>{itemInfo.title}</h5>
              <p>{itemInfo.description}</p>
              <p>{itemInfo.precio}</p>
              <p>Stock: {itemInfo.stock} </p>
              <Link to="/" className='btn btn-primary'>Ver detalle del Producto</Link>
              <ItemCount stock={itemInfo.stock} initial={1}/>
              </div>
          </div>
}

export default ItemDetail