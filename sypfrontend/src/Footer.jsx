import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white p-6 mt-8 w-full text-center">
        <div className="flex justify-between">
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="text-sm mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="text-sm mt-2">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Cancellation Options</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <ul className="text-sm mt-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <p className="text-sm mt-4">&copy; 2025 HotelFinder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
