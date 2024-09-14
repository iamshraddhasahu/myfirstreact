import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
   
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="card widget-card border-light shadow-sm">
          <div className="card-body p-4">
            <h5 className="card-title widget-card-title mb-4">Product List</h5>
            <div className="table-responsive">
              <table className="table  align-middle">
                <thead>
                  <tr>
                    <th>Product id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Add</th>
                   
                  </tr>
                </thead>
                <tbody>
                { products.map(product => (
                  <tr className="product-list">
                    <td className="product-item">
                      
                      <span className="text-secondary fs-7">{product.id}</span>
                    </td>
                    <td>
                       <span className="text-secondary fs-7">{product.title}</span>
                    </td>
                    <td>
                     
                      <span className="text-secondary fs-7">${product.price}</span>
                    </td>
                    
                     <td><button  classNameName="text-secondary fs-7" onClick={() => handleAddToCart(product)}>Add to Cart</button></td>
                      
                    
                  </tr>

))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ProductList;
