import React from 'react'
import { useParams } from 'react-router-dom'
import useFireStore from '../../hooks/useFireStore'


const Order = () => {
    const {params} = useParams()
    console.log(params)
    const { orderId } = useFireStore()
    return (
    <div>
    <i class="fa-thin fa-check"></i>
    <h2 className="title">Tu compra ha sido realizada con éxito.</h2>
    <p>Código de orden:{orderId}</p>
    <h4 className='text'>Gracias por comprar arte local!</h4>

    </div>
  )
}

export default Order