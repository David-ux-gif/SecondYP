import React from "react";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <footer className=" w-full my-10 mx-9 shadow-2xl rounded-2xl ">
      <div className="w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ml-22">About Us</h3>
            <p className=" text-lg">
              We are your gateway to discovering Nepal. From the mountains to
              the valleys, we help you find the perfect accommodation to suit
              your needs. Let us guide you through your unforgettable Nepalese
              journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ml-16">Useful Resources</h3>
            <ul className="space-y-2 ml-22">
              <li>
                <Link to="/aboutus" className="hover:text-neutral-900">
                  About Us
                </Link>
              </li>
              <li>Contact</li>
              <li>Destinations</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ml-12">Contact Us</h3>
            <ul className="">
              <li className="mb-2">Phone: +977-1234567890</li>
              <li className="mb-2">Email: devit@gmail.com</li>
              <li className="mb-2">
                Address: Itahari, Koshi Province, Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold  mb-4">Follow Us</h3>
        </div>

        {/* Copyright */}
        <div className="font-semibold flex justify-center w-full p-3">
          <p className="text-sm mt-4">
            &copy; 2025 HotelFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
