import { Link } from "react-router-dom";
import CartLength from '../myJs/Cartlength.js';

export  function Navbar(props){

return(

<nav className="navbar navbar-expand-lg bg-light fixed-top ">
  <div className="container ">
  <a className="navbar-brand" href="#"><span>{props.Name}</span></a>

    <div className="collapse navbar-collapse justify-content-end " id="navbarTogglerDemo01">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link to="/products" className="nav-link"><span>Product</span></Link>
        </li>
       
        <li className="nav-item" style={{ marginTop:"-8px"}}>
        <Link to="/card" className="nav-link  "><span >Cart </span><span><CartLength/></span></Link>
        
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>


);

}


