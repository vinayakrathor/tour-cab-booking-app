import React, { useState } from 'react';
import AddVia from './AddVia';
import {  } from "lucide-react";
import { CarSelector } from './CarSelector';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('oneway');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [distance, setDistance] = useState(0);
  const [fareDetails, setFareDetails] = useState({});
  const [travelDate, setTravelDate] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const tabs = [
    { id: 'oneway', label: 'Oneway' },
    { id: 'hourly', label: 'Hourly Rental' },
    { id: 'airport', label: 'Airport/transfer' },
  ];

  const cities = [
    "Indore","Ujjain","Dewas","Khandwa","Khargone",
    "Bhopal","Khatu Shyam","Sawariya Seth","Nashik","Bhimashankar",
    "Maheshwar","Pachmarhi"
  ];

  const distanceMap = {
    Indore: {
      Ujjain: 55, Dewas: 40, Khandwa: 130, Khargone: 140,
      Bhopal: 190, "Khatu Shyam": 600, "Sawariya Seth": 300,
      Nashik: 450, Bhimashankar: 650, Maheshwar: 95, Pachmarhi: 400
    },
    Ujjain: { Indore: 55, Dewas: 35, Bhopal: 180, Maheshwar: 150, Pachmarhi: 420 },
    Dewas: { Indore: 40, Ujjain: 35, Bhopal: 160, Maheshwar: 120, Pachmarhi: 380 },
    Khandwa: { Indore: 130, Khargone: 90, Maheshwar: 70 },
    Khargone: { Indore: 140, Khandwa: 90, Maheshwar: 65 },
    Bhopal: { Indore: 190, Ujjain: 180, Dewas: 160, Pachmarhi: 210, Maheshwar: 300 },
    "Khatu Shyam": { Indore: 600, Bhopal: 650 },
    "Sawariya Seth": { Indore: 300, Ujjain: 250 },
    Nashik: { Indore: 450, Bhimashankar: 110 },
    Bhimashankar: { Nashik: 110, Indore: 650 },
    Maheshwar: { Indore: 95, Khargone: 65, Khandwa: 70, Ujjain: 150 },
    Pachmarhi: { Bhopal: 210, Indore: 400, Ujjain: 420 }
  };

  const DateAndTimeInputs = () => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-gray-800 mb-1">
      Travel Date & Time
    </label>

    <div className="flex gap-4">
      <input
        type="date"
        value={travelDate}
        onChange={(e) => setTravelDate(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500"
      />
    </div>
  </div>
);

  const calculateDistance = (from, to) => {
    if (!from || !to) return;

    if (distanceMap[from]?.[to]) {
      setDistance(distanceMap[from][to]);
    } else if (distanceMap[to]?.[from]) {
      setDistance(distanceMap[to][from]);
    } else {
      setDistance(0);
    }
  };

  // ✅ NEW: WhatsApp Handler
  const handleSearch = () => {

    if (!fromCity || !toCity || !distance) {
      alert("Please select route properly");
      return;
    }

    const phone = "919302538296"; // change if needed

    const message = `
🚖 Cab Booking Request

📍 From: ${fromCity}
📍 To: ${toCity}
📏 Distance: ${distance} KM

🚗 Car: ${fareDetails.car || "-"}
❄ Type: ${fareDetails.type || "-"}
💰 Fare: ₹${fareDetails.totalFare || "-"}

Please confirm availability.
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  
  const renderFormContent = () => {
    switch (activeTab) {

      case 'oneway':
        return (
          <div className="animate-fadeIn">

            {/* FROM CITY */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">From City</label>
              <select
                value={fromCity}
                onChange={(e) => {
                  const value = e.target.value;
                  setFromCity(value);
                  calculateDistance(value, toCity);
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
              >
                <option value="">Select city</option>
                {cities.map((city, i) => (
                  <option key={i} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* TO CITY */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Destination City</label>
              <select
                value={toCity}
                onChange={(e) => {
                  const value = e.target.value;
                  setToCity(value);
                  calculateDistance(fromCity, value);
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
              >
                <option value="">Select city</option>
                {cities.map((city, i) => (
                  <option key={i} value={city}>{city}</option>
                ))}
              </select>
            </div>

               {/* DATE & TIME */}
                <DateAndTimeInputs /> 
            {/* DISTANCE */}
            {distance > 0 && (
              <div className="mb-4 text-green-600 font-semibold">
                Distance: {distance} KM
              </div>
            )}

            {/* ✅ FIXED: PASS CALLBACK */}
            <CarSelector
              distance={distance}
              onFareChange={setFareDetails}
            />

            {/* ✅ FIXED: BUTTON CLICK */}
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition duration-200"
            >
              Enquiry
            </button>
          </div>
        );

      case 'hourly':
        return (
          <div className="animate-fadeIn">

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Pickup Location</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500">
                <option>Select city</option>
                {cities.map((city, i) => (
                  <option key={i}>{city}</option>
                ))}
              </select>
            </div>

            <CarSelector onFareChange={setFareDetails} />

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Per Hrs / Per Kms</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-orange-500">
                <option>4Hrs/40Kms</option>
                <option>8Hrs/80Kms</option>
                <option>12Hrs/120Kms</option>
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition duration-200"
            >
              Enquiry
            </button>
          </div>
        );

      case 'airport':
        return (
          <div className="animate-fadeIn">

            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="airportDir" defaultChecked />
                <span className="text-sm font-bold text-gray-800">Going To Airport</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="airportDir" />
                <span className="text-sm font-bold text-gray-800">Coming From Airport</span>
              </label>
            </div>

            <CarSelector onFareChange={setFareDetails} />

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">In City</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                {cities.map((city, i) => (
                  <option key={i}>{city}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-1">Pickup Location</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                {cities.map((city, i) => (
                  <option key={i}>{city}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition duration-200"
            >
              Enquiry
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative  w-full bg-orange-100 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 mix-blend-multiply opacity-80"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80')" }} 
      />
      <div className="absolute inset-0 bg-linear-to-r from-orange-500/80 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col lg:flex-row gap-8 items-center py-12">
        
        <div className="w-full lg:w-[500px] bg-white rounded-lg shadow-2xl p-4">
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-2 px-1.5 text-xs lg:py-2 lg:px-2.5 lg:text-sm font-bold rounded-md transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-500"></div>
                )}
              </button>
            ))}
          </div>

          <div className="min-h-100">
             {renderFormContent()}
          </div>
        </div>

        <div className="flex-1 w-full lg:pl-10 mt-10 lg:mt-0 relative">
           <div className="bg-black/35 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center lg:text-left shadow-xl relative z-20">
             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
               Ride With Confidence, Anywhere Anytime
             </h1>
             <p className="text-lg text-gray-200">
               Ride with ease and comfort. Your trusted taxi service for any destination.
             </p>
           </div>

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