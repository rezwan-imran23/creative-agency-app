import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';

import Order from './components/Order/Order/Order';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Order/Review/Review';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import ServiceList from './components/Order/ServiceList/ServiceList';

import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ServiceListAdmin from './components/Admin/ServiceListAdmin/ServiceListAdmin';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/list">
        <ServiceListAdmin></ServiceListAdmin>
        </Route>
        <Route path="/add service">
        <AddService></AddService>
        </Route>
        <Route path="/make">
        <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/admin">
        <Admin></Admin>
        </Route>
        <PrivateRoute path="/order">
        <Order></Order>
        </PrivateRoute>
        <Route path="/review">
        <Review ></Review>
        </Route>
        <Route path="/service">
        <ServiceList></ServiceList>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
      </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
