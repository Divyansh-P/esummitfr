import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';
const Button = () => {
    return ( 
        <Link to="/register" className="noname"><div className="r-btn">Register</div></Link>
     );
}
 
export default Button;

