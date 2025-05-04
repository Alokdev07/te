import React from "react";
import { useSelector } from "react-redux"; // first page component

const RecentCompletions = () => {
  const tasks = useSelector((state) => state.RecentCompletion.task); 

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-2xl bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Recent Completions</h2>
        <button className="text-blue-500 hover:underline">View All</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-2">Task Name</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">By</th>
              <th className="p-2">Occurrence</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{task.name}</td>
                <td className="p-2">{task.date}</td>
                <td className="p-2 text-green-500 font-semibold">{task.status}</td>
                <td className="p-2">{task.by}</td>
                <td className="p-2">{task.occurrence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCompletions;
