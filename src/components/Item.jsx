import React from 'react';


const Item = ({itemInfo}) => {
  console.log(itemInfo)
  // return <div>soy un item, mi nombre es {itemInfo.nombre}, precio es {itemInfo.precio} y mi stock {itemInfo.stock}</div>;
  return<> 
  <div>
  <div>
    <h5>{itemInfo.title}</h5>
    <p>{itemInfo.description}</p>
    <p>{itemInfo.precio}</p>
    <a href="#">Ver detalle del Producto</a>
    <p>Stock: {itemInfo.stock} </p>
  </div>
  </div>
  </>
};

export default Item;
