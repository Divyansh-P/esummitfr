import React from 'react';
import './AboutUs.css';
import ProfileCard2 from '../speakers/ProfileCard2/ProfileCard2';
const AboutUs = () => {
    return ( 
  <div className="btn-container">
    <div className={"submit-btn"}>
                      {/* <Button2
                        className={"submit-btn-text"}
                        label="ABOUT US"
                        type="submit"
                      /> */}
                    </div> 
                    
   {/* <div className="card bg-white text-white">
  <img src={img1} className="card-img" alt="yolo" />
  <div className="card-img-overlay"> 
  
    
    <p className="card-text">INNOVARIUM is the very first edition of the virtual entrepreneurial extravaganza E-Summit organized by E-Cell NIT Hamirpur. 
    With the belief that innovation and entrepreneurship go hand in hand, we aim to provide a worldwide experience to young, aspiring entrepreneurs by bringing together various 
    professionals, entrepreneurs, intelligentsia, and innovators on the same platform. </p>
    
  </div>
</div> */}
<ProfileCard2 />

</div>  
     );
}
 
export default AboutUs;