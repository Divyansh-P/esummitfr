
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './containers/Events/Events';
import Navbar from './containers/Navbar/Navbar';
import Sponsers from './containers/Sponsers/Sponsers';
import Contact from './containers/contact/component/contact/Contact'
import Register from './containers/Register/RegisterCards/Register';
import Register1 from './containers/Register/Register1';
import Home from './containers/Home/Home';
import Speakers from './containers/speakers/Speakers';
import Team from './containers/Team/Team';
import Cube from './containers/Cube/Cube';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [loading,setloading]=useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setloading(false);
    }, 1500);
    
  },[])
  return (
    <Router>
      <div className="app">
      {loading?<div className="loading1"><ClipLoader loading={loading} color={'#f37a24'} size={60}/></div> :
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/events" ><Events /></Route>
          <Route path="/speakers" ><Speakers /></Route>
          <Route path="/sponsers" ><Sponsers /></Route>
          <Route path="/contact-us" ><Contact /></Route>
          <Route path="/form"><Register1 />  </Route>
          <Route path="/register"><Register /></Route>
          <Route path="/teams"><Team/></Route>
        </Switch>
        </React.Fragment>
  }
        {/* <Cube /> */}
       
      </div>
    
    </Router>
  );
}

export default App;
