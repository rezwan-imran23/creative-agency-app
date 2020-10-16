import React from 'react';
import './MainHeader.css';
import headImg from './../../../images/logos/Frame.png'
import slack from './../../../images/logos/slack.png'
import google from './../../../images/logos/google.png'
import uber from './../../../images/logos/uber.png'
import netflix from './../../../images/logos/netflix.png'
import airbnb from './../../../images/logos/airbnb.png'


const MainHeader = () => {
    return (
        <main class="mainHead">
            <div className="row d-flex align-items-center ">
                <div class="col-md-5">
                <h1>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus ipsam <br/> dolores nemo eum iste officia beatae voluptatum dolorum, suscipit nobis amet quos tempore impedit?suscipit nobis amet quos tempore impedit.</p>
                <br/>
                <button class="hireBtn">Hire Us</button>
                </div>

                <div class="col-md-7 headImg ">
                    <img src={headImg} alt="" width="800px" className="img-fluid"/>
                </div>
            </div>
            <div className="d-flex justify-content-center allLogos">
            <div>
                <img src={slack} alt="" width="180px" className="img-fluid m-5"/>
                <img src={google} alt="" width="180px" className="img-fluid m-5"/>
                <img src={uber} alt="" width="180px" className="img-fluid m-5"/>
                <img src={netflix} alt="" width="180px" className="img-fluid m-5"/>
                <img src={airbnb} alt="" width="180px" className="img-fluid m-5"/>
            </div>
            </div>
           
           
        </main>
    );
};

export default MainHeader;