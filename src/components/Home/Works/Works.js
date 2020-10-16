
import React from 'react';
import './Works.css';
import carousel1 from './../../../images/carousel-1.png'
import carousel2 from './../../../images/carousel-2.png'
import carousel3 from './../../../images/carousel-3.png'
import Carousel from 'react-bootstrap/Carousel' 




const Works = () => {
    return (
        <section className="workSection">
    <h1 className="text-center">Here are some of <span style={{color:"green"}}>our works</span> </h1>

     <div>  
        <div className='container-fluid carousel' >  
        <Carousel>  
                <Carousel.Item style={{'height':"700px"}} ><img  className=" carimg w-50" src={carousel1} /></Carousel.Item  >
                <Carousel.Item style={{'height':"700px"}}> <img  className=" carimg w-50" src={carousel2}    /></Carousel.Item> 
                <Carousel.Item style={{'height':"700px"}}> <img  className=" carimg w-50" src={carousel3}   /></Carousel.Item>  
        </Carousel>  
                                        
    </div>  
</div>  
    
</section>
  
    );
};

export default Works;