import React, { useContext } from 'react';
import google from './../../../images/logos/google-icon.png';
import './Login.css';
import logo from './../../../images/logos/logo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
           const {displayName,email} = result.user;
           const signedInUser = {name:displayName,email}
            setLoggedInUser(signedInUser);
            history.replace(from)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <login className="row">
        <div className="col-md-4"></div>

        <div className="col-4">
            <div className="creativeLogo d-flex justify-content-center ">
            <img src={logo} width={'200px'} alt=""/>
            </div>
        <form>
        <div className="card ">
        <h5>Login With</h5>
        <div className="socialIcon">
        <img src={google} alt="" />
        <h5 onClick={handleGoogleSignIn}>Continue With Google</h5>
        </div>
        <h6 className="createAcc">Don't you have account? <span>Create an account</span></h6>   
        </div>              
        </form>
        </div>

        <div className="col-md-4"></div>
    </login>
        
    );
};

export default Login;