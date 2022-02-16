import React from 'react';


const Item = ({itemInfo}) => {
  console.log(itemInfo)
 
  return<> 
  <div>
  <div>
    <img src={itemInfo.img}/>
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
