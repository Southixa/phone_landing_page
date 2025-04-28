"use client"

import React from 'react'
import Image from 'next/image';
import logo from '../../public/images/homepage/logo.png'; // Adjusted path

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
      <div className="flex items-center space-x-8">
        <Image src={logo} alt="Uifry Logo" width={100} height={40} />
        <ul className="flex space-x-6">
          <li><a href="#" className="text-red-500 font-bold">Home</a></li>
          <li><a href="#" className="hover:text-red-500">About Us</a></li>
          <li><a href="#" className="hover:text-red-500">Pricing</a></li>
          <li><a href="#" className="hover:text-red-500">Features</a></li>
        </ul>
      </div>
      <button className="bg-black text-white px-6 py-2 rounded">Download</button>
    </nav>
  )
}

export default Navbar 