import { createBrowserRouter } from "react-router-dom";
import Login from "./login.js";
import SignUp from "./sign/signup.js";
import App from "./App";
import Patient from "./components/Patient";
import About from "./components/About";
import Dashboard from "./Admin/Dashboard.js";
import Form1 from "./Admin/Dashboard copy.js";
import Delete from "./Admin/Delete.js";
import Update from "./Admin/update.js";
import Form2 from "./Admin/medicine/Add.js";
import Update1 from "./Admin/medicine/update1.js";
import Delete1 from "./Admin/medicine/delete.js";
import Form3 from "./Admin/Categ_Meds/Addcat.js";
import Update2 from "./Admin/Categ_Meds/updatecat.js";
import Delete2 from "./Admin/Categ_Meds/deletecat.js";
import History from "./Admin/historyPatient.js"
import Dashboard3 from "./patient/Dashboardpatient.js";
import AcceptRequrst from "./Admin/AcceptRequrst.js"
import Dashboard1 from "./Admin/medicine/Dashboardmedicine.js";
import Requestpatient from "./patient/requestmeds.js";
import Historymeds from "./patient/history.js";
import PatientList from "./Admin/List_patient.js";
import SignUp2 from "./sign/signup2.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <div>contact</div>,
  },
  {
    path: "/Patient",
    element: <Patient/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/signUp2",
    element: <SignUp2/>,
  },
  
  {
    path: "/Admin",
    element: <Dashboard/>,
  },
  {
    path: "/form",
    element: <Form1/>,
  },

  {
    path: "/update-patient",
    element: <Update/>,
  },
  {
    path: "/delete-patient",
    element: <Delete/>,
  },
  {
    path: "/request",
    element: <AcceptRequrst/>,
  },
  {
    path: "/managemedicine",
    element: <Dashboard1/>,
  },
  {
    path: "/form1",
    element: <Form2/>,
  },

  {
    path: "/update-patient1",
    element: <Update1/>,
  },
  {
    path: "/delete-patient1",
    element: <Delete1/>,
  },
  {
    path: "/form3",
    element: <Form3/>,
  },

  {
    path: "/update-patient2",
    element: <Update2/>,
  },
  {
    path: "/delete-patient2",
    element: <Delete2/>,
  },
  {
    path: "/history_of_patient",
    element: <History/>,
  },
  {
    path: "/patient1",
    element: <Dashboard3/>,
  },
  {
    path: "/Requestpatient",
    element: <Requestpatient/>,
  },
  {
    path: "/historymeds",
    element: <Historymeds/>,
  },
  {
    path: "/list-patient",
    element: <PatientList/>,
  },
]);
