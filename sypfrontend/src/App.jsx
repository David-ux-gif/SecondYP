import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signin from "./Signin";
import Home from "./Home";
import Signup from "./Signup";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
