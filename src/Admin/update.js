// import React from "react";
import React, { useState } from 'react';

 import "./Dashboard copy.css";
 import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from './lo.png';
import dashboard from "./svg-6.svg";
function PatientList() {
    const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

 

  return (
    <>
    <Header2/>

    <div class="container-fluid documentation">
      <div className="row">
    <div className="col-md-3 col-xl-2 left-sidebar">
  <div className="logo-wrapper">

  <img src={myImage} alt="My Image" class= "logo"  />
  </div>
  <h3>Welcome Admin</h3>


      <ul className="left-menu">
    <li><a href="http://localhost:3000/form/request">Add</a></li>
    <li><a href="/update-patient">Update</a></li>
    <li><a href="/delete-patient">Delete</a></li>
    <li>
                <a href="/list-patient">list</a>
              </li>
  </ul>

  {/* <ul className="left-menu">
    <li><a href="#introduction"> Introduction </a></li>
    <li><a href="/form"> Manage Patient </a></li>
  </ul> */}
  {/* <h6 className="left-menu-title">Installation</h6> */}
  <ul className="left-menu">
    <li><a href="/request"> Request Patient </a></li>
    <li><a href="/managemedicine"> Manage medicines </a></li>
  </ul>

  
  {/* <h6 className="left-menu-title">Deployment</h6> */}
  <ul className="left-menu">
    <li><a href="http://localhost:3000/form3"> Categories medicines </a></li>
  </ul>
  {/* <h6 className="left-menu-title">Basic Structure</h6> */}
  <ul className="left-menu">
    <li><a href="/history_of_patient"> History Patient </a></li>
   </ul>
</div>

<div className="col-md-9 col-xl-10 main-panel">
  <div className="main-panel-wrapper">
  <div className="video-background2">
      {/* <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video> */}
    <form onSubmit='' className="patient-form">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />

      <button type="submit">Update</button>
      <button type="button" onClick="">
        Cancel
      </button>
    </form>
   
    </div>
    </div>
    </div>
    </div>
    </div>


    
    
    
    
    
    </>
  );
};






export default PatientList;
