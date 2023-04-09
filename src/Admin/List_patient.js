// import React from "react";
import React, { useState, useEffect } from 'react';

import "./Dashboard copy.css";
import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from "./lo.png";
import dashboard from "./svg-6.svg";
function PatientList() {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
  
    useEffect(() => {
      fetch('/api/patients')
        .then((response) => response.json())
        .then((data) => setPatients(data))
        .catch(() => alert('Error fetching patients. Please try again.'));
    }, []);
  
    const handleViewDetails = (patient) => {
      setSelectedPatient(patient);
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
            <h3>Welcome Admin</h3>

            <ul className="left-menu">
              <li>
                <a href="http://localhost:3000/form/request">Add</a>
              </li>
              <li>
                <a href="/update-patient">Update</a>
              </li>
              <li>
                <a href="/delete-patient">Delete</a>
              </li>
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
              <div className="video-background2">
                {/* <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video> */}
<div>
      <h2>Patient List</h2>
      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <>
          <ul>
            {patients.map((patient) => (
              <li key={patient.id}>
                <p>Name: {patient.name}</p>
                <p>Age: {patient.age}</p>
                <p>Address: {patient.address}</p>
                <button onClick={() => handleViewDetails(patient)}>
                  View Details
                </button>
              </li>
            ))}
          </ul>
          {selectedPatient && (
            <div>
              <h2>Patient Details</h2>
              <p>Name: {selectedPatient.name}</p>
              <p>Age: {selectedPatient.age}</p>
              <p>Address: {selectedPatient.address}</p>
              <p>Medical History: {selectedPatient.medicalHistory}</p>
            </div>
          )}
        </>
      )}
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientList;
