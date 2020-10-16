import React from 'react';
import './Order.css';
import orderLogo from './../../images/logos/logo.png';

const Order = () => {


const handleSend =()=>{
 
}


return (
<div className="">
<div className="row">

<div className="col-md-3">
    <div className="topside">
        <img src={orderLogo} width="220px" alt=""/>
   </div>
</div>    
<div className="col-md-9 topTitle">
  <h3>Order</h3>
</div>
</div>




<div className="row">

<div className="col-md-3">

    <div className="sidebar d-flex">
      <div>1</div>
      <div>Order</div>
    </div>
    <div className="sidebar d-flex">
      <div>2</div>
    <div>Service list</div>
    </div>
    <div className="sidebar d-flex">
      <div>3</div>
      <div>Review</div>
    </div>

</div>    

<div className="col-md-9">
  <div className="formBox">
  <form>
  <div class="form-group">
    <input type="text" class="form-control OrderInput w-50 " placeholder="Your name / company’s name"/>
  </div>

  <div class="form-group">
  <input type="email" class="form-control OrderInput w-50" placeholder="Your email address" />
        
  </div>
  <div class="form-group">
  <input type="email" class="form-control OrderInput w-50" placeholder="Category"/>
        
  </div>

  <div class="form-group">
    <input type="text" class="form-control  projectBox w-50" placeholder="Your message"/>
  </div>


  <div className="d-flex justify-content-between w-50">
  <div class="form-group">
  <input type="email" class="form-control OrderInput w-100" placeholder="Price"/>
  </div>


  <div class="form-group ">
  <input type="file" class="  w-100 loadFile " placeholder=""/>
  </div>
        
  </div>
  <button class="sendBtn" onClick={handleSend}>Send</button>
  </form>
  </div>
  </div>

</div>
</div>

   
    );
};

export default Order;