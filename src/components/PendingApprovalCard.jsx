import React from "react";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const PendingApprovalCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-80 bg-white shadow-md">
    
      <h2 className="text-lg font-semibold">Pending Approval (5)</h2>
      <p className="text-gray-500 text-sm">ID: 7893</p>

      
      <h3 className="font-semibold mt-2">Site Health Inspection</h3>

   
      <div className="flex items-center text-gray-600 text-sm mt-2">
        <FaUser className="mr-2" />
        <span className="mr-4">Julio Hermes</span>
        <FaCalendarAlt className="mr-2" />
        <span>May 10, 2023</span>
      </div>

     
      <div className="flex items-center text-gray-600 text-sm mt-2">
        <FaMapMarkerAlt className="mr-2" />
        <span>Helena, Montana, USA</span>
      </div>
    </div>
  );
};

export default PendingApprovalCard;
