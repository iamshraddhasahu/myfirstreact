
export default function Careousel_Home(){

    return(
    <div className="row" >
<div className="col-sm-6">
<section>
      <div>
    <h1 style={{color:"#10546d"}}>We're determined for
    your better life.</h1>
    <p style={{color:"#10546d",fontSize:"18px",fontweight:"bold"}}>You can get the care you need 24/7 – be it online or in
    person. You will be treated by caring specialist doctors.</p>
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Make Appoinment</button>
    
    </section>
       
       </div>

       <div className="col-sm-6">
      <img src={require('../homefam.jpg')} style={{width:'400px',height:'320px'}} className="rounded-circle mt-4"/ >
         </div>



    </div>
    
    );
    
    }
    