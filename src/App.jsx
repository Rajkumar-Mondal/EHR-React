import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './containers/doctor/Dashboard/Dashboard'
import Login from "./containers/login/Login"


// import About from "./About"
// import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/dashboard" element={ Dashboard } />


        {/* <Route path="about" element={ <About/> } /> */}
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  )
}

export default App