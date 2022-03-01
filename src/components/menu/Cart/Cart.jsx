import {useContext} from 'react'
import { CartContexto } from '../../../context/CartContext'
import CartItem from './CartItem.jsx/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const{carrito , clear} = useContext(CartContexto);




    if(carrito.length === 0){
      console.log("El carrito NO tiene items")
      return(
        <div className='cartEmpty'>
          <h4>No hay productos en el carrito</h4>
          <Link to={'/'} className='btn btn-primary'>Volver a la Tienda</Link>
        </div>

      )
    }
     
    


  
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