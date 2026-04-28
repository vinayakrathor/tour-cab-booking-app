import { useState } from "react";





export const CarSelector = (routeDistance) => {
  // ✅ NEW: Car Pricing Data
 const carOptions = [
  { name: "Swift / Baleno", nonAc: 10, ac: 11 },
  { name: "Ertiga", nonAc: 13, ac: 14 },
  { name: "Innova", nonAc: 15, ac: 16 },
  { name: "Innova Crysta", nonAc: 18, ac: 19 },
  { name: "Traveller", nonAc: 25, ac: 27 },
];
console.log("route dist:",routeDistance.distance);

 // ✅ NEW: Car Selector UI (NO CSS CHANGED)
// ✅ NEW: States
const [selectedCar, setSelectedCar] = useState(carOptions[0]);
const [isAc, setIsAc] = useState(true);
  
  const [distance, setDistance] = useState(routeDistance.distance || 0);
  const [toll, setToll] = useState(0);

  const rate = isAc ? selectedCar.ac : selectedCar.nonAc;

  // ✅ Driver allowance logic
  const driverAllowancePerDay = 300;
  const estimatedDays = distance ? Math.ceil(distance / 300) : 0;
  const driverAllowance = estimatedDays * driverAllowancePerDay;

  // ✅ Night charge (10PM - 6AM)
  const currentHour = new Date().getHours();
  const isNight = currentHour >= 22 || currentHour < 6;
  const nightMultiplier = isNight ? 1.1 : 1;

  // ✅ Base fare
  const baseFare = distance ? distance * rate : 0;

  // ✅ Final fare
  const totalFare = Math.round((baseFare + driverAllowance + Number(toll)) * nightMultiplier);

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-800 mb-2">Select Car</label>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {carOptions.map((car, index) => (
          <button
            key={index}
            onClick={() => setSelectedCar(car)}
            className={`border border-gray-300 rounded px-3 py-2 text-xs font-semibold ${
              selectedCar.name === car.name
                ? 'bg-orange-500 text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {car.name}
          </button>
        ))}
      </div>

      <div className="flex gap-3 mb-2">
        <button
          onClick={() => setIsAc(false)}
          className={`px-3 py-1 rounded text-sm ${
            !isAc ? 'bg-orange-500 text-white' : 'bg-gray-200'
          }`}
        >
          Non-AC
        </button>
        <button
          onClick={() => setIsAc(true)}
          className={`px-3 py-1 rounded text-sm ${
            isAc ? 'bg-orange-500 text-white' : 'bg-gray-200'
          }`}
        >
          AC
        </button>
      </div>

      {/* Distance */}
      <input
        type="number"
        placeholder="Enter distance (km)"
        value={routeDistance.distance}
        onChange={(e) => setDistance(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
      />
      <input
        type="number"
        placeholder="Cab fare per km (₹)"
        value={rate}
        disabled
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
      />

      {/* Toll */}
      <input
        type="number"
        placeholder="Enter toll (₹)"
        value={toll}
        onChange={(e) => setToll(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
      />

      {/* Pricing Breakdown */}
      <div className="text-xs text-gray-600 space-y-1">
        <div>Base Fare: ₹{baseFare}</div>
        <div>Driver Allowance: ₹{driverAllowance}</div>
        <div>Toll: ₹{toll}</div>
        {isNight && <div>Night Charge: +10%</div>}
      </div>

      {/* Final Fare */}
      <div className="text-lg font-bold text-green-600 mt-2">
        Total Fare: ₹{totalFare}
      </div>
    </div>
  )};