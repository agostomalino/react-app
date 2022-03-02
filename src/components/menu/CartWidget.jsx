import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContexto } from '../../context/CartContext';

const CartWidget = () => {

  const {cantidadItems} = useContext(CartContexto)
 
  
  return (
  <>
      <Link to={"/cart"}className='btn btn-light'>
      <i className="fas fa-shopping-cart"></i>{cantidadItems}
      </Link>
  </>
  )
};

export default CartWidget;
