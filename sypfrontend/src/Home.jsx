import React, { useRef, useState } from "react";
import hotelImage from "./assets/hotel1.png";


const Hotel = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed (adjustable)
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const destinations = [
    {
      name: "Kathmandu",
      location: "Bagmati Province, Nepal",
      image: "src/assets/ktm.jpg",
    },
    {
      name: "Pokhara",
      location: "Gandaki Province, Nepal",
      image: "src/assets/pokhara.jpg",
    },
    {
      name: "Chitwan",
      location: "Bagmati Province, Nepal",
      image: "src/assets/chitwan.jpg",
    },
    {
      name: "Mustang",
      location: "Gandaki Province, Nepal",
      image: "src/assets/mustang.jpg",
    },
    {
      name: "Sagarmatha",
      location: "Koshi Province, Nepal",
      image: "src/assets/sagarmatha.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center ml-25 mr-25">
      <main
        className="relative mt-5 rounded-md bg-cover bg-center w-full h-96 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${hotelImage})` }}
      >
        <h2 className="text-4xl font-semibold mb-4">
          Find your perfect somewhere™
        </h2>
        <div className="bg-white p-4 rounded-md shadow-md flex gap-4 items-center text-gray-700 w-3/4">
          <input
            type="text"
            placeholder="Where to?"
            className="border p-2 rounded-md w-1/3"
          />
          <input type="date" className="border p-2 rounded-md w-1/3" />
          <input
            type="text"
            placeholder="2 travellers, 1 room"
            className="border p-2 rounded-md w-1/3"
          />
          <button className="bg-blue-500 text-250px py-2 rounded-md">
            Search
          </button>
        </div>
      </main>

      <section className="bg-yellow-100 p-4 w-full text-center">
        <p className="text-gray-800 font-medium">
          Members save 10% or more on over 100,000 hotels worldwide when signed
          in
        </p>
      </section>

      <section className="flex gap-4 justify-center mt-4">
        <button className="bg-red-600 text-white px-6 py-3 rounded-md">
          Find and book your perfect stay
        </button>
        <button className="bg-red-600 text-white px-6 py-3 rounded-md">
          Earn rewards on every night you stay
        </button>
        <button className="bg-red-600 text-white px-6 py-3 rounded-md">
          Save more with Member Prices
        </button>
        <button className="bg-red-600 text-white px-6 py-3 rounded-md">
          Free cancellation options if plans change
        </button>
      </section>

      <section className="mt-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Discover your new favourite stay
          </h3>
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scrollbar-hidden scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <img
              src="src/assets/villa.jpg"
              className="w-[250px] h-[270px] object-cover rounded-lg"
              alt="Villa"
            />

            <img
              src="src/assets/apart.jpg"
              className="w-[250px] h-[270px] object-cover rounded-lg"
              alt="Apartment"
            />
            <img
              src="src/assets/family.jpg"
              className="w-[250px] h-[270px] object-cover rounded-lg"
              alt="Family"
            />
            <img
              src="src/assets/apartment.jpg"
              className="w-[250px] h-[270px] object-cover rounded-lg"
              alt="Apartment"
            />
            <img
              src="src/assets/resort.jpg"
              className="w-[250px] h-[270px] object-cover rounded-lg"
              alt="Resort"
            />
            <img
              src="src/assets/lake.jpg"
              className="w-[250px] h-[270px] object-cover rounded-lg"
              alt="Lake"
            />
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Explore stays in popular destinations
        </h3>

        <div className="grid grid-cols-4 gap-4 ">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden border"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h2 className="text-lg font-semibold">{dest.name}</h2>
                <p className="text-sm text-gray-500">{dest.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hotel;
