"use client";
import React from "react";

const QuestionChart = ({ score }) => {
  const data = [
    { name: "Correct", value: score },
    { name: "Incorrect", value: 15 - score },
  ];

  return (
    <>
    <div className="flex flex-col items-center p-4 border-1 h-full border-gray-300 rounded-l mt-2">
      <div>
      <h3 className="font-bold text-lg">Question Analysis</h3>
      <p className="text-gray-600">
        You scored <span className="font-bold">{score} questions correct out of 15. {score<13? "However it still needs some improvements.":"Well done"}</span>.
      </p>
      </div>
    <div  className="w-40 h-40 rounded-full"  style={{
            background: `conic-gradient(#4230e2 ${score * (360 / 15)}deg, #ece6e6 0deg)`,
    }}>
    </div>
    </div>
</>
  );
};

export default QuestionChart;
