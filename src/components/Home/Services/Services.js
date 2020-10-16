import React from 'react';
import './Services.css';
import service1 from './../../../images/icons/service1.png'
import service2 from './../../../images/icons/service2.png'
import service3 from './../../../images/icons/service3.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name:'Web & Mobile design',
        description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: service1
    },
    {
        name:'Graphic design',
        description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: service2
    },
    {
        name:'Web development',
        description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: service3
    }
]
const Services = () => {
    return (
        <section className="serviceSection">
            <h1 className="text-center">Provide awesome <span style={{color:"green"}}>services</span> </h1>

            <div className="d-flex justify-content-center">
            <div className="row">
        
                {
                    serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
           
            </div>
            </div>
            
        </section>
    );
};

export default Services;