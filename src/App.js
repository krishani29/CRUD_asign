import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import AddUser from './components/pages/AddUser';
import ViewList from './components/pages/ViewList';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages//NotFound';
import EditUser from './components/pages/EditUser';
import User from './components/pages/User';

function App() {
   
  return(
    <Router>
      <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/viewuserlist" component={ViewList} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/edituser/:id" component={EditUser} />
        <Route exact path="/user/:id" component={User} />

        <Route component={NotFound} />

      </Switch>
      

      
    </div>
    </Router>
  );
}



export default App;
