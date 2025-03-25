import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: ""
  });
  const [popup, setPopup] = useState({ message: "", isError: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signin", formdata);

      if (res.data === "Success") {
        setPopup({ message: "Sign-in Successful!", isError: false });

        setTimeout(() => {
          setPopup({ message: "", isError: false });
          navigate("/");
        }, 1500);
      } else {
        setPopup({ message: "Incorrect email or password!", isError: true });

        setTimeout(() => {
          setPopup({ message: "", isError: false });
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      setPopup({ message: "An error occurred. Please try again!", isError: true });

      setTimeout(() => {
        setPopup({ message: "", isError: false });
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      {/* Popup Message */}
      {popup.message && (
        <div
          className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg ${
            popup.isError ? "bg-red-500" : "bg-green-500"
          } text-white`}
        >
          {popup.message}
        </div>
      )}

      <div className="flex flex-wrap items-center">
        <img src="src/assets/logo.png" alt="Hotels.com Logo" className="w-7 mb-4 rounded-lg" />
        <h1 className="text-2xl font-semibold ml-2">Hotels.com</h1>
      </div>
      <p className="text-gray-600 text-center mb-6 text-sm">
        Unlock a world of travel with one account across worldwide <br />
        booking platforms with Hotels.com.
      </p>

      <form onSubmit={handleSubmit} className="w-80 p-6 bg-white shadow-md rounded-lg">
        <label className="block text-gray-700 text-sm mb-1">Email</label>
        <input
          type="text"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter Email.."
        />

        <label className="block text-gray-700 text-sm mb-1">Password</label>
        <input
          type="Password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter password.."
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700"
        >
          Signin
        </button>
      </form>

      <div className="mt-2.5">
        <span className="text-gray-500 p-6">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer">
            <Link to="/signup">Signup</Link>
          </span>
        </span>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        By continuing, you have read and agree to our
        <span className="text-blue-500"> Terms and Conditions</span>,
        <span className="text-blue-500"> Privacy Statement</span>, and
        <span className="text-blue-500"> Hotels.com Rewards Terms & Conditions</span>.
      </p>
    </div>
  );
};

export default Signin;