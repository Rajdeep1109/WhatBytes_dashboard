"use client";
import React, { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";
import PercentileChart from "./LineChart";

const MainSection = ({setScore}) => {
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  useEffect(() => {
    setScore(formData.score);
  }, [formData.score, setScore]);
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <>
     <div className="flex flex-col w-full">
     <div className="flex flex-col">
        <h3 className="mx-2">Skill Test</h3>
        <div className="flex border-1 items-center h-30 border-gray-300 rounded-lg justify-between m-2">
        <img src="/html.png" className="w-19 mx-2" />
          <div className="flex flex-col justify-center">
          <h4 className="font-bold">Hyper Text Markup Language</h4>
          <p className="text-l">Questions: 8 | Duration: 15 minutes | Submitted on 5 June 2024</p>
          </div>
        <button
          className="bg-blue-900 h-fit w-fit p-3 rounded-lg text-amber-50 mx-2 cursor-pointer"
          onClick={() => setDisplayForm(true)}  
        >
          Update
        </button>
        </div>
      </div>
    
      {displayForm && (
          <UpdateForm formData={formData} setFormData={setFormData} setDisplayForm={setDisplayForm} />
        )}
      <div className="flex w-100vw justify-evenly gap-2 border-1 rounded-lg border-gray-300 m-2 h-19 items-center font-bold">
        <div className="flex">
        <div className="bg-amber-100 w-10 h-10 text-2xl flex justify-center items-center rounded-full mx-5">🏆</div>
        <div className="flex flex-col justify-evenly h-max items-center">
        {formData.rank}
        <p> YOUR RANK</p>
        </div>
        </div>
        <div className="flex">
        <div className="bg-amber-100 w-10 h-10 text-2xl flex justify-center items-center rounded-full mx-5">🗒️</div>
        <div className="flex flex-col justify-evenly h-max items-center">
        {formData.percentile}%
        <p> YOUR PERCENTILE</p>
        </div>
        </div>
        <div className="flex">
        <div className="bg-amber-100 w-10 h-10 text-2xl flex justify-center items-center rounded-full mx-5">✅</div>
        <div className="flex flex-col justify-evenly h-max items-center">
        {formData.score}
        <p> YOUR SCORE</p>
        </div>
        </div>
      </div>
      <PercentileChart userPercentile={formData.percentile}/>
     </div>
    </>
  );
};

export default MainSection;
