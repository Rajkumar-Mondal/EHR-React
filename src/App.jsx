import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "./containers/login/Login"
import Admin from './containers/admin/Admin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Login/> } />
        <Route path="admin" element={ <Admin/> } />
      </Routes>
    </div>
  )
}

export default App