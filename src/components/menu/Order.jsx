import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Order.css'



const Order = () => {

  const {state} = useLocation();


    return (
    <div className='containerOrder'>
    <i className="fa-thin fa-check"></i>
    <h2 className="titleOrder">Tu compra ha sido realizada con éxito.</h2>
    <p>Código de orden: <b>{state.orderId}</b></p>
    <h4 className='textOrder'>Gracias por comprar arte local!</h4>

    </div>
  )
}

export default Order