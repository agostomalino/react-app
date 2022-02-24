import React, { useState } from 'react';

import './styles/ItemCount.css'

const ItemCount = ({ stock, initial, onClick }) => {
  const [contador, setContador] = useState(initial);
  
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
      <button className='btn btn-primary' onClick={handleClick}>Agregar al carrito</button>
    </div>
  </>;
};

export default ItemCount;
