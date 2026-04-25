import React, { useRef } from 'react';
import ahmedabad from '../assets/images/Ahmedabad.png';
import bhavanagar from '../assets/images/Bhavanagar.jpg';
import bhuj from '../assets/images/bhuj.jpg';
import jamnagar from '../assets/images/jamnagar-1.jpg';
// import mumbai from '../assets/images/mumbai.jpg';
import pune from '../assets/images/pune.jpg';

const RentalsSlider = () => {
  const sliderRef = useRef(null);

  // Destinations data matching your image
  const destinations = [
    {
      id: 1,
      name: 'Ahmedabad',
      // Using placeholder images - replace with your actual architecture photos
      img: ahmedabad,
    },
    {
      id: 2,
      name: 'Bhavanagar',
      img: bhavanagar,
    },
    {
      id: 3,
      name: 'Bhuj',
      img: bhuj,
    },
    {
      id: 4,
      name: 'Jamnagar',
      img: jamnagar,
    },
    {
      id: 5,
      name: 'Mumbai',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww&w=1000&q=80',
    },
    {
      id: 6,
      name: 'Pune',
      img: pune,
    }
  ];

  // Function to handle the left/right scrolling
  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Adjust this value to scroll more or less per click
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-black mb-10">
          Explore Rentals in
        </h2>

        {/* Slider Container Wrapper */}
        <div className="relative group">
          
          {/* Left Navigation Arrow */}
          <button 
            onClick={() => slide('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-colors focus:outline-none hidden md:flex"
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Scrollable Track */}
          {/* The "hide-scroll-bar" custom class is used here to keep it clean */}
          <div 
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 hide-scroll-bar"
          >
            {destinations.map((city) => (
              <div 
                key={city.id} 
                className="snap-center shrink-0 w-[80vw] sm:w-[280px] md:w-[220px] lg:w-[230px] flex flex-col bg-white rounded-lg shadow-[0_2px_10px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                {/* City Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={city.img} 
                    alt={`Rentals in ${city.name}`} 
                    className="w-full h-full  hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* City Name */}
                <div className="py-4 text-center bg-white">
                  <h3 className="text-orange-500 font-bold text-lg">
                    {city.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={() => slide('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-colors focus:outline-none hidden md:flex"
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};

export default RentalsSlider;