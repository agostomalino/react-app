import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({itemInfo}) => {
  return  <div>
              <img with="300px" src={itemInfo.img} alt={itemInfo.title}/>
              <h5>{itemInfo.title}</h5>
              <p>{itemInfo.description}</p>
              <p>{itemInfo.precio}</p>
              <a href="/">Ver detalle del Producto</a>
              <p>Stock: {itemInfo.stock} </p>
              <ItemCount stock={itemInfo.stock} initial={1}/>
          </div>
}

export default ItemDetail