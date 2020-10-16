import React from 'react';
import './Feedback.css';
import ClientComment from '../ClientComment/ClientComment';
import customer1 from './../../../images/customer-1.png';
import customer2 from './../../../images/customer-2.png';
import customer3 from './../../../images/customer-3.png';

const feedbackData = [
    {
        name:'Nash Patrik',
        title:'CEO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer1
    },
    {
        name:'Miriam Barron',
        title:'CEO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer2
    },
    {
        name:'Bria Malone',
        title:'CEO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer3
    }
]

const Feedback = () => {
    return (
        
            <section className="feedbackSection">
            <h1 className="text-center">Clients <span style={{color:"green"}}>Feedback</span> </h1>

            <div className="d-flex justify-content-center">
            <div className="row">
        
                {
                    feedbackData.map(comment => <ClientComment comment={comment}></ClientComment> )
                } 
           
            </div>
            </div>
            
        </section>
            
    );
};

export default Feedback;