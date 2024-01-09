import React from 'react';
import Navbar from './Navbar';
import DashBoard from './DashBoard';
import NavbarUpdated from './NavbarUpdated';

const BodyComponent = () => {
  return (
    <div className="flex h-full">
      <div className="w-[15%]" style={{ backgroundColor: 'rgba(30, 38, 64, 1)' }}>
        <NavbarUpdated />
      </div>
      <div className="w-[85%] " style={{ backgroundColor: 'rgba(250, 250, 250, 1)' }}>
        <DashBoard />
      </div>
    </div>
  );
};

export default BodyComponent;
