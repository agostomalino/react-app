import {useContext} from 'react'
import { CartContexto } from '../../../context/CartContext'
import CartItem from './CartItem.jsx/CartItem';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout';
import '../../styles/Cart.css'

const Cart = () => {

  const{carrito , clear, totalPrice,cantidadItems} = useContext(CartContexto);

    

    if(carrito.length === 0){
      return(
        <div className='cartEmpty'>
          <h4>No hay productos en el carrito</h4>
          <Link to={'/'} className='btn btn-secondary'>Volver a la Tienda</Link>
        </div>

      )
    }
  
    return ( 
      <>

        <div className='carritoContainer w-100 d-flex justify-content-around' style={{margin:"20px", padding:"20px", height:"auto"}}>

            <Checkout carrito={carrito} totalPrice={totalPrice}/>

            <div className='d-flex flex-column contenedor-carro'>
              
              {carrito && carrito.map((item, index) =><CartItem item={item} key={index}/>)}
              <p>Cantidad de productos: {cantidadItems}</p>
              <h6>Precio total: ${totalPrice}</h6>
              <button className="btn btn-danger" style={{margin:"auto"}} onClick={() => clear() }>Eliminar todos los productos del Carrito</button>
            
            </div>
        </div>

      </>
  )
}

export default Cart