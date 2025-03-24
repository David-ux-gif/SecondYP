import React from "react";

const Foot = () => {
  return (
    <>
      <footer className="shadow-2xl w-full my-10 mx-9">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center">
            <div>
              <h1 className="font-bold text-lg mb-4">About Us</h1>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-lg mb-4">Follow Us</h1>
              <ul className="space-y-2">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-lg mb-4">Trip-Advisor Sites</h1>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
          <div className="font-semibold flex justify-center w-full p-3">
          <p className="text-sm mt-4">&copy; 2025 HotelFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Foot;
