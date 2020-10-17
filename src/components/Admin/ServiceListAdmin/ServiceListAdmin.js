import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import orderLogo from './../../../images/logos/logo.png';
import { faUserPlus, faListAlt,faPlus} from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';

const ServiceListAdmin = () => {
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
          <h3>Service List</h3>
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
          <form onSubmit={handleSubmit(onSubmit)}>
             
        
        
             
              
            </form>
          </div>
          </div>
        
        </div>
        </div>
    );
};

export default ServiceListAdmin;