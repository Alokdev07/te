import React from 'react';
import Rechart from './Rechart'; // 1st page compnent

function Taskbar({ options = ["abc", "def", "xyz"] }) {
  return (
    <div className="m-2 w-[900px] border border-black p-4 flex flex-col space-y-4">
      

      <div className="flex w-full justify-between">
        <h2 className="font-semibold">Task Completion</h2>
        <select className="border border-black rounded-full text-center px-3 py-1">
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <Rechart />
      </div>

    </div>
  );
}

export default Taskbar;
