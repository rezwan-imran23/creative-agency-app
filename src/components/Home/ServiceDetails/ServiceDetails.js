import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
       <div className="col-md-4 text-center ">

        <div className="serviceBox">
        <img src={service.img} alt=""/>
           <h2>{service.name}</h2>
           <p>{service.description}</p>
        </div>

       </div>
    );
};

export default ServiceDetails;