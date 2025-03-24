import React from 'react';
import hotelImage from './assets/aboutus.jpg';
import Footer from './Foot';

const Aboutus = () => {
  return (
    <div className="flex flex-col items-center min-h-screen ml-25 mr-25">
      {/* Hero Section with Our Story */}
      <section
        className="relative w-full h-[600px] rounded-lg mt-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${hotelImage})` }}
      >
        <div className="absolute  bg-black opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg font-medium max-w-2xl mx-auto">
            Explore Nepal's breathtaking destinations and discover the perfect stay. From the Himalayas to the plains, we bring you the best accommodations.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-5xl w-full px-6 py-16 bg-white shadow-lg -mt-20 z-10 relative">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
          Based in Nepal, we specialize in offering personalized travel experiences that connect you to the best stays across the country. Whether you're trekking in the Annapurna range, exploring Kathmandu's rich history, or relaxing by the serene lakes in Pokhara, our platform ensures a seamless booking experience for all travelers.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="max-w-5xl w-full px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Statement */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to make travel in Nepal easier and more rewarding for everyone. Whether you're here for adventure, relaxation, or cultural exploration, we connect you with accommodations that reflect the rich diversity of Nepal’s landscapes and cultures. From the peaks of the Himalayas to the vibrant streets of Kathmandu, our platform ensures you a memorable stay.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision Nepal as a global hub for cultural and adventure tourism, offering the perfect blend of nature, history, and hospitality. By providing top-notch accommodation options and personalized services, we aim to help travelers create unforgettable memories while experiencing the warmth and beauty of Nepal's people and landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl w-full px-6 py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          With our expertise in Nepalese travel, we bring you more than just a place to stay. We offer an experience — an opportunity to immerse yourself in the culture, the landscape, and the spirit of Nepal. Enjoy exclusive deals, flexible booking options, and a platform that’s easy to use, whether you’re booking for a single night or a multi-week adventure.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutus;
