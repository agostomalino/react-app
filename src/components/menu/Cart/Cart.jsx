import {useContext} from 'react'
import { CartContexto } from '../../../context/CartContext'
import CartItem from './CartItem.jsx/CartItem';

const Cart = () => {

  const{carrito , clear} = useContext(CartContexto);

  
  return ( 
  <>
    <div className='carritoContainer' style={{margin:"20px", padding:"20px", backgroundColor:"gray", width:"auto", height:"auto"}}>
      {carrito && carrito.map((item, index) =><CartItem item={item} key={index}/>)}
        <button className="btn btn-danger" style={{margin:"auto"}} onClick={() => clear() }>Eliminar todos los productos del Carrito</button>
    </div>
  </>

  )
}

export default Cart