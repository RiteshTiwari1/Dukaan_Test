import React from 'react';

const Upper = () => {
  return (
    <div className="p-4 flex justify-between ">
      {/* Overview Section on Top Left */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        {/* Add your content for the Overview section here */}
      </div>

      {/* Time Options (Dropdown) on Top Right */}
      <div className="relative">
        <label htmlFor="timeOptions" className="sr-only">
          Select Time
        </label>
        <select
          id="timeOptions"
          className="block appearance-none w-full bg-white border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
        >
          <option>Last Day</option>
          <option>Last Month</option>
          <option>Last Year</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* Arrow icon or other indicator can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Upper;
