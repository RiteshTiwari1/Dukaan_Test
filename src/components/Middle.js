import React from 'react';

const Middle = () => {
  return (
    <div className="flex justify-between p-4 h-36">
      {/* First div */}
      <div className="px-5 py-2 flex-col w-[45%] bg-white">
        
        <p className="m-2 text-[16px] ">Online Order</p>
        <p className="m-2 text-[32px] font-medium ">233</p>
        
        {/* Add content for online order */}
      </div>

      {/* Second div */}
      <div className="px-5 py-2 flex-col w-[45%] bg-white">
        
        <p className="m-2 text-[16px] ">Amount Received</p>
        <p class="text-[32px] font-medium">₹ 23,92,312.19</p>
        
        {/* Add content for online order */}
      </div>
    </div>
  );
};

export default Middle;
