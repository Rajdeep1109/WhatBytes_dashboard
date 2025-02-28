"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const data = [
  { percentile: 0, frequency: 1 },
  { percentile: 10, frequency: 3 },
  { percentile: 20, frequency: 8 },
  { percentile: 30, frequency: 20 },
  { percentile: 40, frequency: 40 },
  { percentile: 50, frequency: 60 },
  { percentile: 60, frequency: 80 },
  { percentile: 70, frequency: 50 },
  { percentile: 80, frequency: 30 },
  { percentile: 90, frequency: 10 },
  { percentile: 100, frequency: 3 },
];

const avgPercentile= 72
const PercentileChart = ({userPercentile}) => {
  return (
    <div className="p-5 border-1 border-gray-300 m-2 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Comparison Graph</h2>
      <p className="text-gray-600">
        <strong className="text-black">You scored {userPercentile}% percentile</strong> which is {userPercentile > avgPercentile ? "higher" : "lower"} than the 
        average percentile <strong>72%</strong> of all the engineers who took this assessment.
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} >
          <XAxis type="number" dataKey="percentile" domain={[0, 100]} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="frequency" stroke="#4230e2"  strokeWidth={2} />
          <ReferenceLine x={userPercentile} stroke="gray" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentileChart;
