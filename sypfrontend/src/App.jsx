import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signin from "./Signin";
import Home from "./Home";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Hotel from "./Hotel";
import Aboutus from "./Aboutus";
import HotelList from "./HotelList";

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/hotels" element={<Hotel/>} />
          <Route path="/hotellist/:id" element={<HotelList/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
