import React from 'react';

const Middle = () => {
  return (
    <div className="flex justify-between p-4 h-36">
      {/* First div */}
      <div className="flex-col w-[45%] bg-white">
        
        <p className="m-2 text-sm ">Online Order</p>
        <p className="m-2 text-lg font-bold">233</p>
        
        {/* Add content for online order */}
      </div>

      {/* Second div */}
      <div className="flex-col w-[45%] bg-white">
        
        <p className="m-2 text-sm ">Amount Received</p>
        <p className="m-2 text-lg font-bold">23,92,312.19</p>
        
        {/* Add content for online order */}
      </div>
    </div>
  );
};

export default Middle;
