"use client";
import React, { useState } from "react";
import Sidenav from "./components/sidenav";
import MainSection from "./components/MainSection";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
import QuestionChart from "./components/PieChart";
import Header from "./components/Header";

const page = () => {
  const [score, setScore] = useState("");
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidenav />
        <MainSection setScore={setScore} />
        <div className="flex flex-col w-2/5">
          <SyllabusAnalysis />
          <QuestionChart score={score} />
        </div>
      </div>
    </div>
  );
};

export default page;
