import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import p1 from '../../../images/p2.svg';
const Form = () => {

  const [formdata, setformdata] = useState({ name: '', email: '', number: '' });
  console.log(formdata);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/users", {
      name: formdata.name,
      email: formdata.email,
      number: formdata.number
    }).then(res => {
      if (res.status === 200) {
        setTimeout(() => {
          window.location = "/";
        }, 4000);
      }
    }
    );

  }
  const changeHandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });

  }




  return (
    <div className='box'>
      <form className="formbx">
        <img className="ppic" src={p1} alt="login" />
        <h2>Register</h2>
        <input type="text" name="name" className="info" placeholder="Name" onChange={e => changeHandler(e)} required />
        <input type="email" name="email" className="info" placeholder="Email" onChange={e => changeHandler(e)} required />
        <input type="text" name="number" className="info" placeholder="Mobile Number" onChange={e => changeHandler(e)} required />

        <label className="upi" htmlFor="payment info">Upload payment screenshot here upi id:</label>
        <input type="file" className="inputt" />
        <input type="submit" onClick={e => submitHandler(e)} />

      </form>
    </div>
  );
}

export default Form;