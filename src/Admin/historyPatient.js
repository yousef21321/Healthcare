import "./Dashboard.css";
import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from "./lo.png";
import dashboard from "./svg-6.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";



const Dashboard = () => {
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchRequests = async () => {
        try {
          const response = await axios.get("/api/patient-requests");
          setRequests(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchRequests();
    


  return (
    <>
      <Header2 />

      <div class="container-fluid documentation">
        <div className="row">
          <div className="col-md-3 col-xl-2 left-sidebar">
            <div className="logo-wrapper">
              <img src={myImage} alt="My Image" class="logo" />
            </div>
            <h3>Welcome Admin</h3>

            <ul className="left-menu">
              <li>
                <a href="#introduction"> Introduction </a>
              </li>
              <li>
                <a href="/form"> Manage Patient </a>
              </li>
            </ul>
            {/* <h6 className="left-menu-title">Installation</h6> */}
            <ul className="left-menu">
              <li>
                <a href="/request"> Request Patient </a>
              </li>
              <li>
                <a href="/managemedicine"> Manage medicines </a>
              </li>
            </ul>
            {/* <h6 className="left-menu-title">Deployment</h6> */}
            <ul className="left-menu">
              <li>
                <a href="http://localhost:3000/form3"> Categories medicines </a>
              </li>
            </ul>
            {/* <h6 className="left-menu-title">Basic Structure</h6> */}
            <ul className="left-menu">
              <li>
                <a href="/history_of_patient"> History Patient </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9 col-xl-10 main-panel">
            <div className="main-panel-wrapper">
              
       



            <div>
    <h1>Patient Request History</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Patient Name</th>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Date Requested</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.patientName}</td>
              <td>{request.medicineName}</td>
              <td>{request.quantity}</td>
              <td>{request.status}</td>
              <td>{request.dateRequested}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>


       
              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Dashboard;
