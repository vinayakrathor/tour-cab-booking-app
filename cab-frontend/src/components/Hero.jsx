import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('oneway');

  const tabs = [
    { id: 'oneway', label: 'Oneway' },
    { id: 'roundtrip', label: 'ROUND TRIP' },
    { id: 'hourly', label: 'Hourly Rental' },
    { id: 'airport', label: 'Airport/transfer' },
  ];

  // Helper to render standard Date & Time inputs
  const DateAndTimeInputs = () => (
    <div className="flex gap-4 mb-4">
      <div className="flex-1">
        <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500" />
      </div>
      <div className="flex-1">
        <input type="time" defaultValue="13:30" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500" />
      </div>
    </div>
  );

  const renderFormContent = () => {
    switch (activeTab) {
      case 'oneway':
        return (
          <div className="animate-fadeIn">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">From City</label>
              <input type="text" placeholder="enter from city" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Destination City</label>
              <input type="text" placeholder="enter to city" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
            </div>
            <label className="block text-sm font-bold text-gray-800 mb-1">Travel Date</label>
            <DateAndTimeInputs />
            <button className="text-blue-500 text-sm font-semibold flex items-center gap-1 mb-4 hover:text-blue-700">
              <span>+</span> Add via
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition duration-200">
              Search
            </button>
          </div>
        );

      case 'roundtrip':
        return (
          <div className="animate-fadeIn">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">From City</label>
              <input type="text" placeholder="enter from city" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Destination City</label>
              <input type="text" placeholder="enter to city" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
            </div>
            <label className="block text-sm font-bold text-gray-800 mb-1">Travel Date</label>
            <DateAndTimeInputs />
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Return Date</label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-gray-400 focus:outline-none focus:border-orange-500" />
            </div>
            <button className="text-blue-500 text-sm font-semibold flex items-center gap-1 mb-4 hover:text-blue-700">
              <span>+</span> Add via
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition duration-200">
              Search
            </button>
          </div>
        );

      case 'hourly':
        return (
          <div className="animate-fadeIn">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Pickup Location</label>
              <input type="text" placeholder="enter from city" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Per Hrs / Per Kms</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-orange-500">
                <option>4Hrs/40Kms</option>
                <option>8Hrs/80Kms</option>
                <option>12Hrs/120Kms</option>
              </select>
            </div>
            <label className="block text-sm font-bold text-gray-800 mb-1">Travel Date</label>
            <DateAndTimeInputs />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition duration-200">
              Search
            </button>
          </div>
        );

      case 'airport':
        return (
          <div className="animate-fadeIn">
            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="airportDir" defaultChecked className="text-orange-500 focus:ring-orange-500" />
                <span className="text-sm font-bold text-gray-800">Going To Airport</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="airportDir" className="text-orange-500 focus:ring-orange-500" />
                <span className="text-sm font-bold text-gray-800">Coming From Airport</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">In City</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-orange-500">
                <option>AHMEDABAD</option>
                <option>MUMBAI</option>
                <option>DELHI</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Airport</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-orange-500">
                <option>Ahmedabad Airport (AMD), Hansol, Ahmedabad, Gujarat</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Pickup Location</label>
              <input type="text" placeholder="enter pickup location" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
            </div>
            <label className="block text-sm font-bold text-gray-800 mb-1">Travel Date</label>
            <DateAndTimeInputs />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition duration-200">
              Search
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative  w-full bg-orange-100 flex items-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 mix-blend-multiply opacity-80"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80')" }} 
      />
      {/* Orange Gradient Overlay to match design */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-500/80 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col lg:flex-row gap-8 items-center py-12">
        
        {/* Left Side: Booking Form */}
        <div className="w-full lg:w-[450px] bg-white rounded-lg shadow-2xl p-4">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-bold rounded-md transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {tab.label}
                {/* Downward triangle for active tab */}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-500"></div>
                )}
              </button>
            ))}
          </div>

          {/* Form Area */}
          <div className="min-h-[400px]">
             {renderFormContent()}
          </div>
        </div>

        {/* Right Side: Text & Car Image */}
        <div className="flex-1 w-full lg:pl-10 mt-10 lg:mt-0 relative">
           <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center lg:text-left shadow-xl relative z-20">
             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
               Ride With Confidence, Anywhere Anytime
             </h1>
             <p className="text-lg text-gray-200">
               Ride with ease and comfort. Your trusted taxi service for any destination.
             </p>
           </div>
           
           {/* Car Image (Positioned to slightly overlap the box like in the design) */}
           <div className="relative mt-[-40px] z-10 hidden md:block">
             <img 
               src="https://pngimg.com/d/car_PNG12040.png" 
               alt="Premium SUV Cab" 
               className="w-full max-w-[700px] ml-auto drop-shadow-2xl"
             />
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;