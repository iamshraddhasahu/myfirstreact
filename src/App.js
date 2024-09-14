import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar,Footer} from './myJs/FunctionComponent.js';
import './bootstrap.css'; 


const ProductList = lazy(() => import('./myJs/ProductList.js'));
const Cart = lazy(() => import('./myJs/Cart.js'));

function App() {

  let title=" E-commerce Product List and Cart ";
 
  return (
   <>
    <div class="container-fluid text-center">
    <div class="row">
      
    </div>
    <div class="row" style={{ marginTop:"150px"}}>

    <Provider store={store}>
      <Router>
      <div class="col">
      <Navbar Name={title} />

      </div>
        <Suspense fallback={<div>Loading...</div>}>

    <Routes>
         
        
          <Route path="products" element={<ProductList />} />
          <Route path="card" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
          
         
      </Routes>
      


        </Suspense>
      </Router>
    </Provider>

    </div>



    
<div className='row justify-content-between'>
<div class="col-4">
     
    </div>
    <div class="col-6">
  

    </div>
</div>


  </div>
  </>
  );
}

export default App;
