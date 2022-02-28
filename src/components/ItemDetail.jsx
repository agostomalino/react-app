import React, {useState} from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';

import "./styles/ItemDetail.css";

const ItemDetail = ({ itemInfo }) => {

  const [terminarMiCompra, setTerminarMiCompra] = useState(false);

  const handleClick = (cantidad) => {
    setTerminarMiCompra(true)
  }

  return itemInfo ? (
    <div className="card">
      <img width="200px" src={itemInfo.img} alt={itemInfo.title} />
      <div>
        <h5>{itemInfo.title}</h5>
        <p>{itemInfo.description}</p>
        <p>{itemInfo.precio}</p>
        <p>Stock: {itemInfo.stock} </p>
        {terminarMiCompra ? (
          <Link to={`/cart`} className="btn btn-primary">Terminar mi compra</Link>
        ) : (
          <ItemCount stock={itemInfo.stock} initial={1} onClicko={handleClick} item={itemInfo}/>
        )}
      </div>
    </div>
  ) : null;
};

export default ItemDetail;
