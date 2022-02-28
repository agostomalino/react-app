import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContexto } from '../../context/CartContext';

const CartWidget = () => {

  const {carrito} = useContext(CartContexto)

  return (
  <>
      <Link to={"/cart"}className='btn btn-light'>
      <i className="fas fa-shopping-cart"></i>{carrito.lenght}
      </Link>
  </>
  )
};

export default CartWidget;
