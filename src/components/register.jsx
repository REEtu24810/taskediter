import React from 'react';
import user from "./user.png";
import email from "./email.png";
import password from "./password.png";
import "../register.css"

const Register = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underscore'></div>
      
        <div className='input_box'>
  <div className='input_with_icon'>
    <img src={user} alt="user" style={{width:"40px"}} />
    <input type='text' placeholder='enter user name' className='input' />
  </div>
  <div className='input_with_icon'>
    <img src={email} alt="email" style={{width:"40px"}} />
    <input type='email' placeholder='enter user email id' className='input' />
  </div>
  <div className='input_with_icon'>
    <img src={password} alt="password" style={{width:"40px"}} />
    <input type='password' placeholder='enter password' className='input' />
  </div>
</div>
        </div>
        <div className='submit_data'>
          <button type='submit'>Login</button>
          <button type="submit">Register</button>
        </div>
      </div>
    
  );
}

export default Register;
