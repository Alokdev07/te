import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function PagesList() {
   const isOpen = useSelector((state) => state.HamData.isOpen)
  return (
    <div 
    className={`h-screen bg-green-800 p-3 text-white fixed top-0 left-0 transition-all duration-300 
        ${isOpen ? "w-48 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"}`}

    >
      <h2 className="text-3xl">Eco <span className="font-semibold">Docs</span></h2>
      <ul className="ml-4 mt-4 flex flex-col gap-2">
        <li>
          <NavLink 
            to="/Home" 
            className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "text-white"}
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/FarmerInformation"
            className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "text-white"}
          >
            Farmer Information
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/farmerDashboard"
            className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "text-white"}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/farmerGraph"
            className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : "text-white"}
          >
            GraphInformation
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PagesList;
