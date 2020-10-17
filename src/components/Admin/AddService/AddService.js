import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faListAlt,faPlus } from '@fortawesome/free-solid-svg-icons'
import orderLogo from './../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
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
      <h3>Add Service</h3>
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
          <div className="row ">
          <div className="col-md-6">
        <div class="form-group ">
        <div className=""></div>
        <label><h5>Service Title</h5></label>
        <input type="text" ref={register({ required: true })} class="form-control serviceInput w-100 " name="name" placeholder="Your name"/>
        {errors.name && <span className="text-danger">This field is required</span>}
        </div>
    
      <div class="form-group">
          <label><h5>Description</h5></label>
        <input type="text" ref={register({ required: true })} class="form-control  projectBox w-100" name="project" placeholder="Enter Designation"/>
        {errors.name && <span className="text-danger">This field is required</span>}
      </div>
    
        </div>
        <div className="col-md-6">
        <label><h5>Upload Your File</h5></label>
            <div className="uploadFile w-50">
                <input type="file"/>
            </div>
        </div>
          </div>
    
    
      <div className="row ">
          <div className="col-md-10">
          
          </div>
          <div className="col-md-2 sbmtbtn">
          <input type="submit"/>
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
    


export default AddService;