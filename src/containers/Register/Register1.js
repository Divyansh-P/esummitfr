import React from 'react';
import Form from './Form/Form';
import p2 from '../../images/p1.svg';
import './Register.css';
const Register1 = () => {
    return ( 
        <div className="register">
        <img className='draw' src={p2} alt="aah ye" />
        <Form/>
        </div>
        
     );
}
 
export default Register1;