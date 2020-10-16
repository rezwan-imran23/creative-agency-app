import React from 'react';
import './Navbar.css';
import logo from './../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    
<div className="navSection">
<nav class="navbar navbar-expand-lg navbar-light">
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <div className="logo-img">
    <img src={logo} width="200px"  alt=""/>
  </div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item mr-5">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item mr-5">
      <a class="nav-link" href="#">Our Team</a>
        
      </li>
      <li class="nav-item mr-5">
      <a class="nav-link" href="#">Contact Us</a>
      </li>
    </ul>

    <Link to="/login"><button class="loginBtn">Login</button></Link>
    
</div>
</nav>
</div>
    );
};

export default Navbar;