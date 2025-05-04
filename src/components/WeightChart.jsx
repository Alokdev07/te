import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";


const WeightChart = () => {
  const data = useSelector((state) => state.WeightChartData?.data || [])
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-96 bg-white shadow-md">

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Live Weights Over Time</h2>
          <p className="text-gray-500 text-sm">4 Dec - 4 May (6 months)</p>
        </div>
        <button className="border border-gray-400 px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">
          Expand
        </button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="Days on farm" unit="days" />
          <YAxis name="Weight (kg)" unit="kg" />
          <Tooltip />
          <Line type="monotone" dataKey="y1" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="y2" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="y3" stroke="#ffc658" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;
