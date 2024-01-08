import React from 'react';

const Navbar = () => {
  return (
    <div className="flex-col h-full flex justify-between">
        <div>
      <p className="p-2">Home</p>
      <p className="p-2">Order</p>
      <p className="p-2">Product</p>
      <p className="p-2">Delivery</p>
      <p className="p-2">Marketing</p>
      <p className="p-2">Analytics</p>
      <p className="p-2">Payments</p>
      <p className="p-2">Tools</p>
      <p className="p-2">Discounts</p>
      <p className="p-2">Audience</p>
      <p className="p-2">Appearances</p>
      <p className="p-2">Plugins</p>
        </div>
      
      <div>
      <button className="m-2 p-2 bg-yellow-500 text-white">
        Available Credits
      </button>
      </div>
    </div>
  );
};

export default Navbar;
