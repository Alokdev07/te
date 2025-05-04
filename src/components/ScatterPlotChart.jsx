import React from "react";
import { useSelector } from "react-redux";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const ScatterPlotChart = () => {
  const data = useSelector((state) => state.ScatterData.data)
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-96 bg-white shadow-md">

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Weight vs Age</h2>
          <p className="text-gray-500 text-sm">as of 4 May 2020</p>
        </div>
        <button className="border border-gray-400 px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">
          Expand
        </button>
      </div>

  
      <ResponsiveContainer width="100%" height={200}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="Weight (kg)" unit="kg" />
          <YAxis dataKey="y" name="Age (days)" unit="days" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Weight vs Age" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterPlotChart;
