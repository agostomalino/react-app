import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  function onAdd(){
    setContador(contador+1) 
}

  return <>
    <button className='btn btn-light' onClick={()=> contador <= stock ? onAdd(): console.log("No hay stock disponible")}>Sumar+</button>
    <p>{contador}</p>
    <button className='btn btn-dark' onClick={() => contador >= initial ? console.log("No puede seguir realizando esta operacion")  : setContador(contador-1) }>Restar-</button>
  </>;
};

export default ItemCount;
