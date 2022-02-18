import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  
  function onAdd(){
   console.log("Gracias por su compra")
  }
  

  return <>
    <button className='btn btn-light' onClick={()=> contador < stock ? setContador(contador+1) : console.log("No hay stock disponible")}>Sumar</button>
    <p>{contador}</p>
    <button className='btn btn-dark' onClick={() => contador > initial ?  setContador(contador-1) : console.log("No puede seguir realizando esta operacion") }>Restar</button>
    <button>Agregar al carrito</button>
  </>;
};

export default ItemCount;
