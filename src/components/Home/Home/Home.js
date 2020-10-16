import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <section>
            <div className="headSection"> 
            <Header></Header>
            <Services></Services>
            <Works></Works>
            <Feedback></Feedback>
            <Footer></Footer>
            </div>
        </section>
       
    );
};

export default Home; 