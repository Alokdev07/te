import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"; //1st page component



const TaskViolations = ({options = ["2000","2001","2003"]}) => {
  const data = useSelector((state) => state.TaskData.data)
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-72 shadow-md bg-white">
     
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Task Violations</h2>
        <select className="border border-gray-400 rounded px-2 py-1 text-sm">
         {options.map((option) => (
          <option key={option} value={option}>{option}</option>
         ))}
        </select>
      </div>

   
      <h2 className="text-2xl font-bold">25</h2>

      {/* Pie Chart */}
      <div className="flex justify-center items-center">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      
      <div className="flex flex-col mt-2 space-y-1 text-sm">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></div>
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskViolations;
