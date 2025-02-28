"use client";
import React from "react";

const SyllabusAnalysis = () => {
  const syllabusData = [
    { title: "HTML Tools, Forms, History", percentage: 80, color: "bg-blue-500" },
    { title: "Tags & References in HTML", percentage: 60, color: "bg-orange-500" },
    { title: "Tables & References in HTML", percentage: 24, color: "bg-red-500" },
    { title: "Tables & CSS Basics", percentage: 96, color: "bg-green-500" },
  ];

  return (
    <div className=" border-1 border-gray-300 rounded-l p-6 w-full">
      <h2 className="font-bold text-lg mb-4">Syllabus Wise Analysis</h2>
      {syllabusData.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-700 font-medium">{item.title}</p>
          <div className="relative w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              className={`${item.color} h-2.5 rounded-full`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
          <p className="text-right font-bold">
            {item.percentage}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
