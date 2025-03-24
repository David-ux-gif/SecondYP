import React, { useState } from "react";
import Footer from "./Foot";
import { Link } from "react-router-dom";
import resort from "./assets/resort1.jpg";
import hotelview from "./assets/hotelview.jpg";
import lakefront from "./assets/lakefront.jpg";
import lodge from "./assets/lodge.jpg";
import heritage from "./assets/heritage.jpg";
import hilltop from "./assets/hilltop.jpg";

const hotels = [
  {
    id: 1,
    name: "Sunset Paradise Resort",
    location: "Pokhara, Gandaki Province, Nepal",
    image: resort,
    description:
      "A luxurious resort offering stunning views of the mountains and serene lakeside experience. Enjoy the perfect blend of comfort and nature, with a variety of activities like boating, hiking, and bird watching right at your doorstep.",
    details:
      "Sunset Paradise Resort features spacious rooms, an outdoor pool, a spa, and fine dining restaurants with breathtaking views. It’s an ideal retreat for both adventure enthusiasts and those seeking relaxation.",
  },
  {
    id: 2,
    name: "Mountain View Hotel",
    location: "Kathmandu, Bagmati Province, Nepal",
    image: hotelview,
    description:
      "Located in the heart of the city, offering a perfect blend of urban comfort and scenic views. A perfect place for business and leisure travelers who want to be close to the city’s top attractions while enjoying a peaceful environment.",
    details:
      "Mountain View Hotel boasts modern amenities such as free Wi-Fi, conference rooms, a fitness center, and a rooftop bar with panoramic views of the city. Ideal for travelers seeking convenience and comfort in Kathmandu.",
  },
  {
    id: 3,
    name: "Lakefront Retreat",
    location: "Chitwan, Bagmati Province, Nepal",
    image: lakefront,
    description:
      "Experience the peaceful ambiance with a beautiful view of the lake and close proximity to wildlife. A perfect blend of nature, tranquility, and adventure, located near Chitwan National Park.",
    details:
      "Lakefront Retreat offers luxurious lake-view cottages, an in-house restaurant, and guided wildlife safaris. Ideal for nature lovers and those looking to experience the rich wildlife and culture of Chitwan.",
  },
  {
    id: 4,
    name: "Eco Lodge",
    location: "Mustang, Gandaki Province, Nepal",
    image: lodge,
    description:
      "An eco-friendly hotel set in the rugged mountains, perfect for adventure lovers and nature enthusiasts. Enjoy sustainable living in the heart of the Himalayas while minimizing your environmental footprint.",
    details:
      "Eco Lodge features solar-powered rooms, organic farm-to-table meals, and outdoor activities like trekking, rock climbing, and cultural tours. It’s a sustainable yet comfortable destination for the adventurous traveler.",
  },
  {
    id: 5,
    name: "Heritage Palace Hotel",
    location: "Sagarmatha, Koshi Province, Nepal",
    image: heritage,
    description:
      "A heritage hotel offering a blend of traditional architecture and modern luxury. Located in a peaceful, scenic area, it's a perfect spot for those who appreciate history and cultural richness.",
    details:
      "Heritage Palace Hotel offers elegantly designed rooms, a traditional Nepali restaurant, a wellness center, and easy access to cultural landmarks. It’s ideal for history buffs and travelers who enjoy cultural exploration.",
  },
  {
    id: 6,
    name: "Hilltop Suites",
    location: "Bhedetar, Koshi Province, Nepal",
    image: hilltop,
    description:
      "Offering panoramic views of the valley, this hotel is perfect for a relaxing getaway. Whether you're looking to unwind or explore, Hilltop Suites offers a perfect balance of serenity and adventure.",
    details:
      "Hilltop Suites features luxurious rooms with private balconies, a restaurant with local delicacies, and activities such as nature walks and bird watching. It’s a tranquil retreat ideal for those seeking peace away from the bustle of city life.",
  },
];


const Hotel = () => {
  // Function to truncate description
  const truncateDescription = (description, maxLength = 75) => {
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };

  const [expandedId, setExpandedId] = useState(null);

  // Function to toggle the description
  const toggleDescription = (id) => {
    if (expandedId === id) {
      setExpandedId(null); // Collapse if already expanded
    } else {
      setExpandedId(id); // Expand the clicked hotel
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center ml-25 mr-25">
      <main>
        <h2 className="text-4xl font-semibold mb-4 mt-6">Find Your Perfect Stay</h2>
      </main>

      <section className="bg-gray-100 p-4 w-full text-center">
        <p className="text-gray-800 font-medium">
          Discover amazing hotels in beautiful destinations across Nepal
        </p>
      </section>

      <section className="mt-8 w-full flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-4">Explore Our Top Hotels</h3>
        <div className="grid grid-cols-3 gap-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="rounded-2xl shadow-lg overflow-hidden border">
              <Link
                to={`/hotellist/${hotel.id}`}
                className="block"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <h2 className="text-lg font-semibold">{hotel.name}</h2>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                </div>
              </Link>
              <div
                className="p-2 cursor-pointer"
                onClick={() => toggleDescription(hotel.id)} // Toggle description on text click
              >
                <p className=" text-gray-700">
                  {expandedId === hotel.id
                    ? hotel.description
                    : truncateDescription(hotel.description)}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click event from triggering both actions
                      toggleDescription(hotel.id);
                    }}
                    className="text-blue-500 ml-2 cursor-pointer"
                  >
                    {expandedId === hotel.id ? "See Less" : "See More"}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotel;
export { hotels };
