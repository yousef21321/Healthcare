import React, { useState } from "react";
import "./Dashboard12.css";
// import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from "../Admin/lo.png";
import './search/style.css';
// import dashboard from "../svg-6.svg";
const RequestForm  = () => {
    const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/sendRequest', {
      method: 'POST',
      body: JSON.stringify({ medicineName, quantity }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setMedicineName('');
        setQuantity('');
        alert('Request sent to admin!');
      })
      .catch(() => {
        alert('Error sending request. Please try again.');
      });
  };



  return (
    <>
      <Header2 />

      <div class="container-fluid documentation">
        <div className="row">
          <div className="col-md-3 col-xl-2 left-sidebar">
            <div className="logo-wrapper">
              <img src={myImage} alt="My Image" class="logo" />
            </div>
            <h3>Welcome </h3>

            <ul className="left-menu1">
              
              <li>
                <a href="/patient1"> view medicine</a>
              </li>
            </ul>
            {/* <h6 className="left-menu-title">Installation</h6> */}
            <ul className="left-menu1">
              <li>
                <a href="/Requestpatient"> Request  </a>
              </li>
             
            </ul>
            {/* <h6 className="left-menu-title">Deployment</h6> */}
            
            {/* <h6 className="left-menu-title">Basic Structure</h6> */}
            <ul className="left-menu1">
              <li>
                <a href="/historymeds"> History medicine </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9 col-xl-10 main-panel">
            <div className="main-panel-wrapper">
              {/* <div className="video-background2">
                <video autoPlay loop muted>
                  <source src={Video} type="video/mp4" />
                </video>
              </div> */}
   <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="medicineName">Medicine Name</label>
        <input
          type="text"
          id="medicineName"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default RequestForm ;
