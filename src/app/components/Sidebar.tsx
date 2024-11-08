// components/Sidebar.tsx
import React from 'react';
import { FaHome, FaPizzaSlice, FaCalendarAlt, FaHeart, FaList } from 'react-icons/fa';


const Sidebar: React.FC = () => {
  return (
    <div className="w-20 bg-red-400 text-white min-h-screen flex flex-col items-center py-4">
      <div className="mb-8">
        <FaHome size={24} className="mb-4 cursor-pointer" />
        <FaPizzaSlice size={24} className="mb-4 cursor-pointer" />
        <FaCalendarAlt size={24} className="mb-4 cursor-pointer" />
        <FaList size={24} className="mb-4 cursor-pointer" />
        <FaHeart size={24} className="mb-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
