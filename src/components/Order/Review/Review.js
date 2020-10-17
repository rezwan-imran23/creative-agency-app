import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListAlt,faStar } from '@fortawesome/free-solid-svg-icons'
import orderLogo from './../../../images/logos/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{}
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
   
   <Link to='/order'><div className="sidebar d-flex">
    <div><FontAwesomeIcon className="mr-2" icon={faShoppingCart}></FontAwesomeIcon></div>
      <div>Order</div>
    </div></Link>
    
    <Link to='/service'>
            <div className="sidebar d-flex">
            <div><FontAwesomeIcon className="mr-2" icon={faListAlt}></FontAwesomeIcon></div>
            <div>Service list</div>
            </div></Link>
    <Link to='/review'>
    <div className="sidebar d-flex">
    <div><FontAwesomeIcon className="mr-2" icon={faStar}></FontAwesomeIcon></div>
      <div>Review</div>
    </div>
    </Link> 

</div>    

<div className="col-md-9">
  <div className="formBox">
  <form onSubmit={handleSubmit(onSubmit)}>
     


    <div class="form-group " onSubmit={handleSubmit(onSubmit)}>
    <input type="text" ref={register({ required: true })} class="form-control OrderInput w-50 " name="name" placeholder="Your name"/>
    {errors.name && <span className="text-danger">This field is required</span>}
    </div>
    <div class="form-group " onSubmit={handleSubmit(onSubmit)}>
    <input type="text" ref={register({ required: true })} class="form-control OrderInput w-50 " name="name" placeholder="Company’s name, Designation"/>
    {errors.name && <span className="text-danger">This field is required</span>}
    </div>

  


  <div class="form-group">
    <input type="text" ref={register({ required: true })} class="form-control  projectBox w-50" name="project" placeholder="Description"/>
    {errors.name && <span className="text-danger">This field is required</span>}
  </div>

 


  <div className="">
       <input type="submit"/>
  </div>
      
    </form>
  </div>
  </div>

</div>
</div>

    );
};

export default Review;