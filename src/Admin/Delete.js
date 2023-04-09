// import React from "react";
import React, { useState } from "react";

import "./Dashboard copy.css";
import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from "./lo.png";
import dashboard from "./svg-6.svg";
function PatientList() {
  const [patients, onDelete] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ]);

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

                <table className="patient-list">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Phone Number</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr key={patient.id}>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.phoneNumber}</td>
                        <td>
                          <button onClick={() => onDelete(patient.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientList;
