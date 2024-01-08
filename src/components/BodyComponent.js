import React from 'react'
import Navbar from './Navbar'
import DashBoard from './DashBoard'

const BodyComponent = () => {
  return (
    <div className="flex">
      <div className="w-[11%] bg-cyan-100">
        {<Navbar/>}
      </div>
      <div className="w-[89%] bg-gray-300">
        {<DashBoard/>}
      </div>
    </div>
  )
}

export default BodyComponent