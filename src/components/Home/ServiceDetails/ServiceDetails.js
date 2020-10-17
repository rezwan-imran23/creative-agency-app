import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
       <div className="col-md-4 text-center ">
          
        <div className="serviceBox">
         <Link to='/order'>
           <div>
            <img src={service.img} alt=""/>
           <h2>{service.name}</h2>
           </div>
        </Link>
       
           <p>{service.description}</p>
        </div>

       </div>
    );
};

export default ServiceDetails;