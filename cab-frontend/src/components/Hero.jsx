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
    Nashik: 450, Bhimashankar: 650, Maheshwar: 95, Pachmarhi: 400, Omkareshwar: 80
  },

  Ujjain: {
    Indore: 55, Dewas: 35, Khandwa: 160, Khargone: 170,
    Bhopal: 180, "Khatu Shyam": 620, "Sawariya Seth": 250,
    Nashik: 480, Bhimashankar: 670, Maheshwar: 150, Pachmarhi: 420, Omkareshwar: 150
  },

  Dewas: {
    Indore: 40, Ujjain: 35, Khandwa: 150, Khargone: 160,
    Bhopal: 160, "Khatu Shyam": 610, "Sawariya Seth": 270,
    Nashik: 470, Bhimashankar: 660, Maheshwar: 120, Pachmarhi: 380, Omkareshwar: 120
  },

  Khandwa: {
    Indore: 130, Ujjain: 160, Dewas: 150, Khargone: 90,
    Bhopal: 260, "Khatu Shyam": 700, "Sawariya Seth": 350,
    Nashik: 300, Bhimashankar: 500, Maheshwar: 70, Pachmarhi: 300, Omkareshwar: 70
  },

  Khargone: {
    Indore: 140, Ujjain: 170, Dewas: 160, Khandwa: 90,
    Bhopal: 270, "Khatu Shyam": 710, "Sawariya Seth": 360,
    Nashik: 320, Bhimashankar: 520, Maheshwar: 65, Pachmarhi: 320, Omkareshwar: 60
  },

  Bhopal: {
    Indore: 190, Ujjain: 180, Dewas: 160, Khandwa: 260, Khargone: 270,
    "Khatu Shyam": 650, "Sawariya Seth": 400,
    Nashik: 600, Bhimashankar: 750, Maheshwar: 300, Pachmarhi: 210, Omkareshwar: 250
  },

  "Khatu Shyam": {
    Indore: 600, Ujjain: 620, Dewas: 610, Khandwa: 700, Khargone: 710,
    Bhopal: 650, "Sawariya Seth": 350,
    Nashik: 900, Bhimashankar: 1000, Maheshwar: 650, Pachmarhi: 700, Omkareshwar: 650
  },

  "Sawariya Seth": {
    Indore: 300, Ujjain: 250, Dewas: 270, Khandwa: 350, Khargone: 360,
    Bhopal: 400, "Khatu Shyam": 350,
    Nashik: 700, Bhimashankar: 800, Maheshwar: 250, Pachmarhi: 450, Omkareshwar: 260
  },

  Omkareshwar: {
    Indore: 80, Ujjain: 150, Dewas: 120, Khandwa: 70, Khargone: 60,
    Bhopal: 250, "Khatu Shyam": 650, "Sawariya Seth": 260,
    Nashik: 400, Bhimashankar: 600, Maheshwar: 70, Pachmarhi: 350
  },

  Nashik: {
    Indore: 450, Ujjain: 480, Dewas: 470, Khandwa: 300, Khargone: 320,
    Bhopal: 600, "Khatu Shyam": 900, "Sawariya Seth": 700,
    Bhimashankar: 110, Maheshwar: 400, Pachmarhi: 650, Omkareshwar: 400
  },

  Bhimashankar: {
    Indore: 650, Ujjain: 670, Dewas: 660, Khandwa: 500, Khargone: 520,
    Bhopal: 750, "Khatu Shyam": 1000, "Sawariya Seth": 800,
    Nashik: 110, Maheshwar: 600, Pachmarhi: 800, Omkareshwar: 600
  },

  Maheshwar: {
    Indore: 95, Ujjain: 150, Dewas: 120, Khandwa: 70, Khargone: 65,
    Bhopal: 300, "Khatu Shyam": 650, "Sawariya Seth": 250,
    Nashik: 400, Bhimashankar: 600, Pachmarhi: 350, Omkareshwar: 70
  },

  Pachmarhi: {
    Indore: 400, Ujjain: 420, Dewas: 380, Khandwa: 300, Khargone: 320,
    Bhopal: 210, "Khatu Shyam": 700, "Sawariya Seth": 450,
    Nashik: 650, Bhimashankar: 800, Maheshwar: 350, Omkareshwar: 350
  }
};
const formatDate = (date) => {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
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
    console.log("whatsapp details:",travelDate,fareDetails.carName,fareDetails);
    
    const phone = "919302538296"; // change if needed

    const message = `
🚖 Cab Booking Request

📍 From: ${fromCity}
📍 To: ${toCity}
📏 Distance: ${distance} KM
📅 Date: ${formatDate(travelDate) || "-"}

🚗 Car: ${fareDetails.carName}
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