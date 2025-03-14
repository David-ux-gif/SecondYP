import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formdata, setformdata] = useState({
    email: "",
    username: "",
    password: ""
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img
        src="src/assets/logo.jpg"
        alt="Hotels.com Logo"
        className="w-16 mb-4"
      />
      <h1 className="text-2xl font-semibold mb-2">Hotels.com</h1>
      <p className="text-gray-600 text-center mb-6 ">
        Unlock a world of travel with one account across worldwide <br />
        booking platforms with Hotels.com.
      </p>
      <div className="w-80 p-6 bg-white shadow-md rounded-lg">
        <label className="block text-gray-700 text-sm mb-1">Name</label>
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={(e) => setformdata({ ...formdata, username: e.target.value })}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter Name.."
        />

        <label className="block text-gray-700 text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter email.."
        />

        <label className="block text-gray-700 text-sm mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={(e) => setformdata({ ...formdata, password: e.target.value })}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter password.."
        />

        <button
          className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700"
        >
          Signup
        </button>
      </div>
      <div className="mt-2.5">
        <span className="text-gray-500 p-6">Already have an account? 
          <span className="text-blue-500 cursor-pointer"><Link to="/signin"> Login</Link></span></span>
      </div>
      <p className="text-xs text-gray-500 mt-6 text-center">
        By continuing, you have read and agree to our
        <span className="text-blue-500"> Terms and Conditions</span>,
        <span className="text-blue-500"> Privacy Statement</span>, and
        <span className="text-blue-500"> Hotels.com Rewards Terms & Conditions</span>.
      </p>
      <div className="flex mt-6 space-x-2">
        <img src="src/assets/logo1.jpg" alt="Expedia" className="w-16" />
        <img src="src/assets/logo2.jpg" alt="Hotels" className="w-16" />
        <img src="src/assets/logo3.jpg" alt="Vrbo" className="w-16" />
      </div>
    </div>
  );
};

export default Signup;
