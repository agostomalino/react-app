import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
  <>
      <Link to={"/cart"}className='btn btn-light'>
      <i className="fas fa-shopping-cart"></i>
      </Link>
  </>
  )
};

export default CartWidget;
