import React, { useState } from 'react'
import validator from 'validator';
import './register.css';

function register(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [city,setCity]=useState('');
    const [college,setCollege]=useState('');
    const [checkSubmit,setChecksubmit]=useState(false);
    // const [errormsg,setErrormsg]=useState('');

    function validateForm (){
      if(!validator.isEmail(email))
      {
        alert('Email is Invalid');
        return;
      }
      if(!validator.isMobilePhone(mobile))
      {
        alert('Mobile number is Invalid');
        return;
      }
      for(let i=0;i<mobile.length;i++)
      {
        if(mobile[i]-'0'<0 || mobile[i]-'0'>9)
        {
          alert('Mobile number is Invalid');
          return;
        }
      }
        setChecksubmit(true);
    }
  return (
    <>
    {!checkSubmit && (
      <>
      <div>
      <br />  <h2><u>Register here</u></h2>
      </div>
      <form onSubmit={validateForm} style={{marginTop:"30px"}}>
      <input type="text" 
      placeholder='name' 
      value={name}
      onChange={(ev)=>{setName(ev.target.value)}}
      required/>
      <input type="email" 
      placeholder='email' 
      value={email}
      onChange={(ev)=>{setEmail(ev.target.value)}}
      required/>
      <input type="text"
      placeholder='Mobile No.' 
      value={mobile} 
      onChange={(ev)=>{setMobile(ev.target.value)}}
      required/>
      <input type="text" 
      placeholder='City'
      value={city}
      onChange={(ev)=>{setCity(ev.target.value)}}
      required/>
      <input type="text" 
      placeholder='College'
      value={college}
      onChange={(ev)=>{setCollege(ev.target.value)}}
      required/>
      
      <button>Submit</button>
  </form></>
    )}
    {checkSubmit && (
      <>
      <div><br />
        <h2>Thanks for Registering</h2>
      </div>
      <div className="display">
        <center><table>
        <tr>
            <td><b>Name : </b></td> 
            <td>{name}</td>
          </tr>
          <tr>
            <td><b>Email : </b></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><b>Mobile : </b></td>
            <td>{mobile}</td>
          </tr>
          <tr>
            <td><b>City : </b></td>
            <td>{city}</td>
          </tr>
          <tr>
            <td><b>College : </b></td>
            <td>{college}</td>
          </tr>
        </table></center>
      </div>
      </>
    )}
    </>
  )
}

export default register;
