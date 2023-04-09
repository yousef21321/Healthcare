import React, { useState, useEffect } from "react";
import "./Dashboard12.css";
// import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from "../Admin/lo.png";
import './search/style.css';
// import dashboard from "../svg-6.svg";
const RequestForm  = () => {
    const [searches, setSearches] = useState([]);

    useEffect(() => {
      fetch(`/api/searchHistory/${"userId"}`)
        .then((response) => response.json())
        .then((data) => setSearches(data))
        .catch(() => alert('Error fetching search history. Please try again.'));
    }, ["userId"]);


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
   <h1>Welcome to Medicine Search</h1>
      <p>Search for medicines to see their availability and pricing.</p>
      <div>
        <h2>Search History</h2>
        {searches.length === 0 ? (
          <p>No search history found.</p>
        ) : (
          <ul>
            {searches.map((search) => (
              <li key={search.id}>
                <p>Medicine Name: {search.medicineName}</p>
                <p>Search Date: {search.searchDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default RequestForm ;
