import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../CartLength.css';

const CartLength = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartLength;
