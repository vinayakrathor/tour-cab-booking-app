import React, { useEffect, useState } from 'react';
import cab1 from '../assets/images/Assure Cab.png';
import cab2 from '../assets/images/Assure Cab (1).png';
import cab3 from '../assets/images/Assure Cab (2).png';

const FleetSlider = () => {
    const [activeCar, setActiveCar] = useState('sedan'); // Default active tab

    // Data structure holding all the car details
    const cars = {
        mini: {
            id: 'mini',
            title: 'MINI',
            subtitle: 'Economical Price',
            desc: 'An AC hatchback, which allows you to have a comfortable ride at the most economical price.',
            // Using a placeholder image - replace with your actual transparent car images
            // img: 'https://pngimg.com/d/hyundai_PNG11228.png',
            img: cab3
        },
        sedan: {
            id: 'sedan',
            title: 'SEDAN',
            subtitle: 'Ride with Friends and Family.',
            desc: 'An AC ride, which take your ride to next level with the best luxury car either for a weekend getaway trip or for an extended vacation away from the big city.',
            // img: 'https://pngimg.com/d/toyota_PNG1945.png',
                        img: cab1

        },
        suv: {
            id: 'suv',
            title: 'SUV',
            subtitle: 'Ride with extra large space',
            desc: 'A very comfortable AC ride with extra large space for a very relaxed ride for all long and short drives.',
            // img: 'https://pngimg.com/d/ertiga_PNG43.png',
                        img: cab2

        }
    };

    useEffect(() => {
    const carKeys = Object.keys(cars);
    const currentIndex = carKeys.indexOf(activeCar);

    // Set an interval to change the slide every 3000ms (3 seconds)
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carKeys.length;
      setActiveCar(carKeys[nextIndex]);
    }, 3000); 

    // Cleanup function: clears the timer when the component unmounts 
    // or when the user clicks a tab (which changes activeCar and re-runs this effect)
    return () => clearInterval(timer);
  },[activeCar]);

    // Helper to render the small car silhouette SVG
    const CarIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mb-2">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
    );

    return (
        <section className="py-8 bg-[#f8f9fa] flex flex-col items-center">
            {/* Header Area */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-1">
                    Swara Trips Indore.
                </h2>
                <p className="text-gray-600 text-lg">
                    Hire a cab for Local Taxi and Outstation Trip
                </p>
            </div>

            {/* Dynamic Content Area (Image + Text) */}
      {/* Adding a key based on activeCar forces React to re-render the div, triggering the CSS animation */}
      <div 
        key={activeCar} 
        className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full mx-auto px-4 min-h-[300px] mb-4 animate-[fadeIn_0.5s_ease-in-out]"
      >
        
        {/* Car Image */}
        <div className="w-full md:w-1/2 flex justify-center p-4">
          <img 
            src={cars[activeCar].img} 
            alt={cars[activeCar].title} 
            className="w-full max-w-[300px] object-contain drop-shadow-xl"
          />
        </div>

        {/* Car Details */}
        <div className="w-full md:w-1/2 p-2 text-center md:text-left">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-1">
            {cars[activeCar].title}
          </h3>
          <p className="text-gray-800 font-bold mb-4">
            {cars[activeCar].subtitle}
          </p>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            {cars[activeCar].desc}
          </p>
        </div>
        
      </div>

            {/* Tab Selectors */}
            <div className="flex justify-center gap-2 md:gap-4 px-4">
                {Object.keys(cars).map((key) => {
                    const isActive = activeCar === key;

                    return (
                        <button
                            key={key}
                            onClick={() => setActiveCar(key)}
                            className={`relative w-28 h-24 md:w-36 md:h-28 flex flex-col items-center justify-center bg-[#f4f5f6] transition-all duration-200
                ${isActive
                                    ? 'border-[3px] border-orange-500 text-orange-500 shadow-md'
                                    : 'border-[2px] border-orange-500/60 text-gray-600 hover:bg-gray-100'
                                }
              `}
                        >
                            {/* The Active Top Triangle Pointer */}
                            {isActive && (
                                <div className="absolute -top-[11px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-orange-500"></div>
                            )}

                            <div className={`p-2 rounded-full ${isActive ? 'bg-gray-100' : 'bg-transparent'}`}>
                                <CarIcon />
                            </div>
                            <span className="font-bold text-sm md:text-base mt-1">
                                {cars[key].title}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default FleetSlider;