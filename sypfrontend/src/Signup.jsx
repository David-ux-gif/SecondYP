import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formdata, setformdata] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted:", formdata);
    try {
      const response = await axios.post("your-api-endpoint/signup", formdata);
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-wrap items-center">
        <img
          src="src/assets/logo.png"
          alt="Hotels.com Logo"
          className="w-7 mb-4 rounded-lg"
        />
        <h1 className="text-2xl font-semibold ml-2">Hotels.com</h1>
      </div>
      <p className="text-gray-600 text-center mb-6 text-sm">
        Unlock a world of travel with one account across worldwide <br />
        booking platforms with Hotels.com.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-80 p-6 bg-white shadow-md rounded-lg"
      >
        <label className="block text-gray-700 text-sm mb-1">Name</label>
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter Name.."
        />

        <label className="block text-gray-700 text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter email.."
        />

        <label className="block text-gray-700 text-sm mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
          className="w-full border-b border-gray-400 focus:outline-none p-1 text-sm mb-4"
          placeholder="Enter password.."
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700"
        >
          Signup
        </button>
      </form>

      <div className="mt-2.5">
        <span className="text-gray-500 p-6">
          Already have an account?
          <span className="text-blue-500 cursor-pointer">
            <Link to="/signin"> Login</Link>
          </span>
        </span>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        By continuing, you agree to our
        <span className="text-blue-500"> Terms and Conditions</span>,
        <span className="text-blue-500"> Privacy Statement</span>, and
        <span className="text-blue-500">
          {" "}
          Hotels.com Rewards Terms & Conditions
        </span>
        .
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
