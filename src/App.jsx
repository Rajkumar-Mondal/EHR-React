import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "./containers/login/Login"
import Admin from "./containers/admin/Admin"

// import About from "./About"
// import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/Dashboard" element={ <Admin/> } />

        {/* <Route path="about" element={ <About/> } /> */}
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  )
}

export default App