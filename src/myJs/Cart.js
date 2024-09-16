import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import '../Cart.css'; // Import custom CSS for styling

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
    <div className="container mt-0">
      <h5 className="text-center mb-4">Cart</h5>
      <div className="row">
        {items.length === 0 ? (
          <div className="col-12">
            <div className="card border-light shadow-sm">
              <div className="card-body text-center">
                <h5>Your cart is empty</h5>
              </div>
            </div>
          </div>
        ) : (
          items.map(item => (
            <div className="col-md-3 mb-3" key={item.id}>
              <div className="card border-light shadow-sm fancy-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top product-image"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() => Increase(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => Decrease(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => Remove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="text-center mt-4">
          <h5>Total: ${totalAmount.toFixed(2)}</h5>
        </div>
      )}
    </div>
  );
};

export default Cart;
