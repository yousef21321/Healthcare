import React, { useState, useEffect } from "react";
import "./Dashboard12.css";
// import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from "../Admin/lo.png";
import './search/style.css';
import data from "./search/TemplateData.json";
// import dashboard from "../svg-6.svg";
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

<div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Dashboard;
