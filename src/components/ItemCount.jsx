import React, { useState, useContext } from 'react';
import { CartContexto } from '../context/CartContext';

import './styles/ItemCount.css'

const ItemCount = ({ stock, initial, onClick,item}) => {
  const [contador, setContador] = useState(initial);

  // USE CONTEXT
  const {carrito, addItem} = useContext(CartContexto)
  
  
  function handleClick(){
    onClick(contador);
  }

  return <>
    <div className='itemCount'>
      <div className='setCount'>
        <button className='btn btn-dark' onClick={() => contador > initial ?  setContador(contador-1) : console.log("No puede seguir realizando esta operacion") }>Restar</button>
        <p className='contador'>{contador}</p>
        <button className='btn btn-secondary' onClick={()=> contador < stock ? setContador(contador+1) : console.log("No hay stock disponible")}>Sumar</button>
      </div>
      <button className='btn btn-primary' onClick={handleClick} onClick={()=>addItem(item,contador)}>Agregar al carrito</button>
    </div>
  </>;
};

export default ItemCount;
