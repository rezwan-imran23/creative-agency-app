import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faListAlt,faPlus } from '@fortawesome/free-solid-svg-icons'
import orderLogo from './../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'


const MakeAdmin = () => {

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
      <h3>Make Admin</h3>
    </div>
    </div>
    
    
    
    
    <div className="row">
    
    <div className="col-md-3">
       
       
        
    <Link to='/list'><div className="sidebar d-flex">
            <div><FontAwesomeIcon className="mr-2" icon={faListAlt}></FontAwesomeIcon></div>
              <div>Service list</div>
            </div></Link>

                <Link to='/add service'>
            <div className="sidebar d-flex">
            <div><FontAwesomeIcon className="mr-2" icon={faPlus}></FontAwesomeIcon></div>
            <div>Add Service</div>
            </div></Link>
           
            <Link to='/make'>
            <div className="sidebar d-flex">
            <div><FontAwesomeIcon className="mr-2" icon={faUserPlus}></FontAwesomeIcon></div>
              <div>Make Admin</div>
            </div>
            </Link> 
       
    
    </div>    
    
    <div className="col-md-9">
      <div className="formBox">
      <div className="innerBox">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-md-8">
            <div class="form-group ">
             <label><h5>Email</h5></label>
         <input type="email" ref={register({ required: true })} class="form-control emailInput  " name="name" placeholder="Your email"/>
         {errors.name && <span className="text-danger">This field is required</span>}
         </div>
         
            </div>
            <div className="col-md-4">
       <div className="">
            <input type="submit"/>
       </div>
            </div>
       
       </div>
    
         
           
         </form>
      </div>
      
      </div>
      </div>
    
    </div>
    </div>
    );
};

export default MakeAdmin;