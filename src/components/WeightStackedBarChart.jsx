import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const WeightStackedBarChart = () => {
  const data = useSelector((state) => state.WeightStackData.data)
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-96 bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Live Weight</h2>
          <p className="text-gray-500 text-sm">as of 4 May 2020</p>
        </div>
        <button className="border border-gray-400 px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">
          Expand
        </button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weight" label={{ value: "Number of head / Weight (kg)", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "Count", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="a" stackId="stack" fill="#82ca9d" />
          <Bar dataKey="b" stackId="stack" fill="#ffcc00" />
          <Bar dataKey="c" stackId="stack" fill="#8a2be2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightStackedBarChart;
