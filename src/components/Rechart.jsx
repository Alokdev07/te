import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { RechartSlice } from "../Store/RechartSlice";


const Rechart = () => {
  const data = useSelector((state) => state.Rechart.data)
  return (
    <div className="w-full h-60 flex justify-center items-center">
      <ResponsiveContainer width="90%" height="100%">
        <BarChart data={data} barSize={15}>
          <XAxis dataKey="month" />
          <YAxis hide /> {/* Hides Y-axis for a cleaner look */}
          <Tooltip />
          <Bar dataKey="value" fill="#2c7a7b" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
