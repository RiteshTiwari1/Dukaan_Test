import React from 'react';

const Header = () => {
  return (
    <div className="flex w-full h-24">
      
      <div className="flex-col w-[11%] bg-cyan-100">
        <img src="" alt="err"></img>
        <p className="text-lg font-bold">Ritesh</p>
        <span>Wait Store</span>
      </div>

      
    <div className="p-4 flex justify-between items-center w-[89%]">

      <div className=''>
        <span className="text-lg font-bold m-2">Payments</span>
        <span className="text-lg">How it works</span>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search features, tutorial, etc"
          className="px-4 py-2 border rounded mr-2 focus:outline-none focus:border-blue-500 w-96"
        />
      </div>
      
      <div>
      <div className="flex items-center">
  <span className="text-xl mr-2 inline-block rounded-full bg-gray-500 p-1">
    <img
      src="path_to_your_card_image.jpg"
      alt="Credit Card"
      className="w-6 h-6 object-cover rounded-full"
    />
  </span>
  <span className="text-xl inline-block rounded-full bg-gray-500 p-1">
    <img
      src="path_to_your_cash_image.jpg"
      alt="Cash"
      className="w-6 h-6 object-cover rounded-full"
    />
  </span>
</div>

      </div>
    </div>

    </div>
  );
};

export default Header;
