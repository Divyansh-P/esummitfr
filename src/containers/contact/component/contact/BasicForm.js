import useInput from '../../hooks/use-input';
import './BasicForm.css'
import {BiMailSend} from "react-icons/bi";
import React, { useState,useEffect } from 'react';
import axios from 'axios';
 
const BasicForm = (props) => {
  const [status,setstatus]=useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/msg", {
      name: userData.Name,
      email: userData.Email,
      message: userData.Message
    }).then(res=>{setstatus(res); console.log(status);}
      ).catch(err=>{console.log(err)});

  }

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');
  

  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  }=useInput(value=> value.includes('@'));


  const {
    value:enteredMessage,
    isValid:enteredmessageIsValid,
    hasError:messageInputHasError,
    valueChangeHandler:messageChangeHandler,
    inputBlurHandler:messageBlurHandler,
    reset:resetmessageInput
  }=useInput(value=> value.trim()!=='');


  let formIsValid = false;
  let [userData,setuserData] = useState({Name:'', Email:'', Message:''});

  if (enteredNameIsValid && enteredEmailIsValid&&enteredmessageIsValid) {
    formIsValid = true;
    userData = {
      "Name":enteredName,
      "Email":enteredEmail,
      "Message":enteredMessage,
    }
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();   

    if (!formIsValid) {
      return;
    }
    console.log(userData);

    resetNameInput();
    resetEmailInput();
    resetmessageInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const messageInputClasses = messageInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <React.Fragment>
    <form className="forma"  onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          placeholder="Enter Your Name"
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>


      <div className={emailInputClasses}>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          placeholder="Enter Your Email"
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>


      <div className={messageInputClasses}>
        <textarea
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
          placeholder="Enter Your Message"
        />
        {messageInputHasError && (
          <p className='error-text'>Please enter a valid message.</p>
        )}
      </div>

      
      <div className='form-actions'>
        <button  onClick={submitHandler}  >
          <BiMailSend className="buttonA" />
        </button>
      </div>

        {/* <button disabled={!formIsValid}>Submit</button> */}
      
    </form>
    <div>{status.status===201?<div style={{color:'green',textAlign:'center',fontWeight:'bold'}} > Message sent successfully </div>:null }</div>
    </React.Fragment>
  );
};

export default BasicForm;