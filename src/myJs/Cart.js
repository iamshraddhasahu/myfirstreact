import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';

const Cart = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const Increase = (id) => {
    dispatch(increaseQuantity(id));
  };

  const Decrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const Remove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="card widget-card border-light shadow-sm">
          <div className="card-body p-4">
            <h5 className="card-title widget-card-title mb-4">Card</h5>
            <div className="table-responsive">

      <table className="table  align-middle">
      <thead>
                  <tr>
                    <th>Product id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product quantity</th>
                    <th>Add</th>
                    <th>Decrease</th>
                    <th>Remove</th>
                  </tr>
                </thead>        
      <tbody>
      {items.length === 0 ? (
         <tr className="col-sm-12"> <td></td><td></td><td><h5>Your card is empty</h5></td><td></td><td></td><td></td><td></td></tr>
        ) : ( items.map(item => (
           <tr>
            <td className="cart-item">{item.id}</td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td> <button onClick={() => Increase(item.id)}>+</button></td>
            <td><button onClick={() => Decrease(item.id)}>-</button></td>
            <td> <button onClick={() => Remove(item.id)}>Remove</button>
            </td>
            
            </tr>    
                ))
            )}  
    </tbody>

</table>
      <h5>Total: ${totalAmount.toFixed(2)}</h5>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cart;

