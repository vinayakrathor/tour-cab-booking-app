import React, { useState } from 'react';
import { Trash } from "lucide-react";

const AddVia = () => {
  const [stops, setStops] = useState([]);

  const addStop = () => {
    setStops([...stops, { id: Date.now(), value: '' }]);
  };

  const removeStop = (idToRemove) => {
    setStops(stops.filter(stop => stop.id !== idToRemove));
  };

  const handleInputChange = (id, newValue) => {
    setStops(stops.map(stop => 
      stop.id === id ? { ...stop, value: newValue } : stop
    ));
  };

  return (
    <div className="mb-4">
      {stops.map((stop, index) => (
        <div key={stop.id} className="flex items-center gap-2 mb-3 p-1 border border-gray-200 rounded-md bg-white shadow-sm">
          
          {/* Stop Number Badge */}
          <div className="bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-md min-w-[80px] text-center text-sm">
            Stop {index + 1}
          </div>
          
          {/* Input Field */}
          <input
            type="text"
            placeholder="enter via location"
            value={stop.value}
            onChange={(e) => handleInputChange(stop.id, e.target.value)}
            className="flex-1 px-3 py-2 outline-none text-gray-700 bg-transparent text-sm"
          />
          
          {/* Add Button */}
          <button
            type="button"
            onClick={addStop}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 text-gray-800 text-lg transition-colors"
            title="Add another stop"
          >
            +
          </button>
          
          {/* Remove Button */}
          <button
            type="button"
            onClick={() => removeStop(stop.id)}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-md hover:bg-red-200 text-gray-800 text-lg transition-colors"
            title="Remove this stop"
          >
            <Trash size={16}/>
          </button>
          
        </div>
      ))}

      {/* Initial '+ Add via' trigger button. Only shows if there are no stops yet. */}
      {stops.length === 0 && (
        <button
          type="button"
          onClick={addStop}
          className="text-blue-500 text-sm font-semibold flex items-center gap-1 hover:text-blue-700 transition-colors w-max"
        >
          <span>+</span> Add via
        </button>
      )}
    </div>
  );
};

export default AddVia;