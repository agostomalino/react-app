import React, { useContext } from 'react'
import { CartContexto } from '../../../../context/CartContext'

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContexto)

      return (
        <div className='contenedor-producto' id={item.item.id} style={{backgroundColor:'white', margin:"10px"}}>
          <h5>{item.item.title}</h5>
          <p>Precio:{item.item.precio}</p>
          <p>Cantidad:{item.cantidad}</p>
          <button className='btn btn-danger' id={item.item.id} onClick={()=> removeItem(item.item.id)}> Eliminar producto </button>   
        </div>
      )
  }


export default CartItem