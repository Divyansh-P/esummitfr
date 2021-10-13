import React from 'react';
import Esummit from '../Esummit/Esummit';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../contact/component/contact/Contact';

import Speakers from '../speakers/Speakers';


import './Home.css';
const Home=()=>{
    return(
        
    
  <div className="home-container">
  <Esummit/>
  <AboutUs/>
  
  <Speakers />
  <Contact/>
  
<div className="lob">With ❤️ from Ecell NITH</div>
  
</div>
    )
}
export default Home;