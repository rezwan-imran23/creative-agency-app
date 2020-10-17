import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListAlt,faStar } from '@fortawesome/free-solid-svg-icons'
import orderLogo from './../../../images/logos/logo.png';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ServiceList = () => {
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
             
        
        
             
              
            </form>
          </div>
          </div>
        
        </div>
        </div>
    );
};

export default ServiceList;