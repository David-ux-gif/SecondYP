import React from "react";
import { useParams } from "react-router-dom";
import { hotels } from "./Hotel";
import Footer from "./Foot";

const HotelList = () => {
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

  if (!hotel) {
    return <p className="text-center text-red-500 mt-10">Hotel not found.</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Hotel Details Section */}
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-xl mt-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Hotel Image Section */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Hotel Information Section */}
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">{hotel.name}</h2>
              <p className="text-xl font-medium text-gray-600 mb-6">{hotel.location}</p>
              <p className="text-lg text-gray-700 mb-8">{hotel.description}</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">About the Hotel</h3>
            <p className="text-lg text-gray-700 mb-6">{hotel.details}</p>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>
            <div className="space-y-4">
              {/* Review 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-xl font-medium text-gray-800">John Doe</p>
                <p className="text-gray-600 italic mt-2">
                  "Amazing experience! The location was perfect and the service was excellent."
                </p>
                <p className="text-yellow-500 mt-2">Rating: ⭐⭐⭐⭐⭐</p>
              </div>

              {/* Review 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-xl font-medium text-gray-800">Jane Smith</p>
                <p className="text-gray-600 italic mt-2">
                  "Comfortable stay with great service and beautiful surroundings."
                </p>
                <p className="text-yellow-500 mt-2">Rating: ⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default HotelList;
