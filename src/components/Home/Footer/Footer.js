import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footerSection">
          <div className="footerBox">
    <div className="row d-flex">
                <div className="col-md-6 title">
                    <h1>Let us handle your <br/> project, professionally.</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officia nobis nesciunt quibusdam, obcaecati fuga sequi! </p>
                </div>
  <div className="col-md-6">
 <form>
  <div class="form-group">
  <input type="email" class="form-control inputBox" placeholder="Your email address" aria-describedby="emailHelp"/>
        
  </div>

  <div class="form-group">
    <input type="text" class="form-control inputBox " placeholder="Your name / company’s name"/>
  </div>

  <div class="form-group">
    <input type="text" class="form-control  messageBox" placeholder="Your message"/>
  </div>

  <button class="submitBtn">Login</button>
</form>
</div>
</div>
</div>
            
<p className="text-center">copyright Orange labs 2020</p>
</section>
    );
};

export default Footer;