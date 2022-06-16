import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "./containers/login/Login"
import Admin from './containers/admin/Admin'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import Doctor from './containers/doctor/Doctor';
import Receptionist from './containers/receptionist/Receptionist';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Login/> } />
        <Route path="admin" element={ <Admin/> } />
        <Route path="doctor" element={ <Doctor/> } />
        <Route path="receptionist" element={ <Receptionist/> } />
      </Routes>
    </div>
  )
}

export default App