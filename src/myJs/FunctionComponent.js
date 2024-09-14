import { Link } from "react-router-dom";

export  function Navbar(props){

return(

<nav className="navbar navbar-expand-lg bg-light fixed-top ">
  <div className="container ">
  <a className="navbar-brand" href="#"><span>{props.Name}</span></a>

    <div className="collapse navbar-collapse justify-content-end " id="navbarTogglerDemo01">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link to="/products" className="nav-link  "><span>Product</span></Link>
        </li>
        <li className="nav-item">
           <Link to="/card" className="nav-link  "><span>Card</span></Link>
      
        </li>
        
        
      </ul>
    
    </div>
  </div>
</nav>


);

}


export function Footer(props){
  const today=props.Tdate.getDate();
  const tomonth =props.Tdate.getMonth()+1;
  const toyear =props.Tdate.getFullYear();
return(<>
<br></br>
<footer>
  <p>Today's Date : {today}/{tomonth}/{toyear}</p>
  <p></p>
</footer>
</>);

}