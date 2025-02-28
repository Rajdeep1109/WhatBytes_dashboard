import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-12 px-4">
      <p className="text-xl font-bold">WhatBytes</p>
      <div className="flex items-center bg-[#f5f5f5] rounded-full px-3 py-1  hover:bg-[#e0e0e0] transition">
        <img src="/user.jpg" className="w-8 h-8 rounded-full border border-gray-300" />
        <p className="ml-2 font-medium text-gray-700">User</p>
      </div>
    </div>
  );
};

export default Header;
