import React ,{useState} from "react";
import "../Dashboard.css";
import Header2 from "../Header2";
import myImage from "../lo.png";
import dashboard from "../svg-6.svg";
const Dashboard = () => {


  const [Name_MEDS, setName] = useState('');
  const [NUM, setAge] = useState('');
  const [Price, setGender] = useState('');

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
              <ul className="left-menu">
              <li>
                <a href="http://localhost:3000/form1">Add</a>
              </li>
              <li>
                <a href="/update-patient1">Update</a>
              </li>
              <li>
                <a href="/delete-patient1">Delete</a>
              </li>
            </ul>
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
 <form onSubmit='' className="patient-form">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      <label htmlFor="name">Name_MEDS</label>
      <input
        type="text"
        id="name"
        value={Name_MEDS}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="age">NUM</label>
      <input
        type="number"
        id="NUM"
        value={NUM}
        onChange={(event) => setAge(event.target.value)}
      />

      <label htmlFor="gender">Price</label>
      <input
        id="gender"
        value={Price}
        onChange={(event) => setGender(event.target.value)}
      >
       
      </input>

      

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


export default Dashboard;
