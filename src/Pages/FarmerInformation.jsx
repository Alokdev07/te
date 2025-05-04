import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import WeightChart from "../components/WeightChart";
import WeightStackedBarChart from "../components/WeightStackedBarChart";
import { Scatter } from "recharts";
import ScatterPlotChart from "../components/ScatterPlotChart";
import DailyWeightGainChart from "../components/DailyWeightGainChart";
import PagesList from "../components/PagesList";

function FarmerInformation() {
  useEffect(() => {
    const fetchShops =  async function(){
       await axios.get("https://smart-agriculture-3.onrender.com/farmers",{withcredentials : true})
    }
    const response =  fetchShops()
    setProducts(response.data.data)
  }
  )
  return (
    <div>
      <Header />
      <div className="mt-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button className="!text-black !border !border-gray-600 !rounded-md" children="Hide Insight" />
          <select className=" border border-gray-300 rounded-md bg-indigo-500 text-white  px-3 py-[4px] text-sm focus:outline-none cursor-pointer">
            <option value="">Filter(3)</option>
          </select>
          <Button className="!text-indigo-600 !border-none !font-semibold text-xl" children="Show" />
          <Button className="!text-indigo-600 !border-none !font-semibold text-xl" children="Save Filter" />
          <Button className="!text-indigo-600 !border-none !font-semibold text-xl" children="Clear all" />
        </div>
        <div className="flex mr-2 gap-2">
        <select className=" border border-gray-300 rounded-md bg-blue-400 text-white  px-3 py-[6px] text-sm focus:outline-none cursor-pointer">
            <option value="">Record Event</option>
          </select>
          <select className=" border border-gray-300 rounded-md bg-green-500  text-white  px-3 py-[6px] text-sm focus:outline-none cursor-pointer">
            <option value="">Add animals</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between mt-5">
        {/* left box */}
        <div className="ml-9">
        <div className="w-64 h-[600px] p-4 bg-white border border-gray-300 rounded-md">
 
    <h2 className="text-lg font-bold">40 <span className="font-normal">animals</span></h2>

    <select className="w-full border border-gray-300 rounded-md bg-white text-black px-3 py-1 mt-2 text-sm focus:outline-none cursor-pointer">
        <option>Overview</option>
    </select>

  
    <h3 className="text-md font-semibold mt-6">Graph explorer</h3>
    <p className="text-gray-600 text-sm">
        Select a section of any graph to isolate animals and view their details.
    </p>

    <div className="flex space-x-2 mt-7">
        <button className="border border-gray-300 text-black px-3 py-1 rounded-md text-sm">Explore</button>
        <button className="border border-gray-300 text-black px-3 py-1 rounded-md text-sm">Clear</button>
        <button className="border border-gray-300 text-black px-3 py-1 rounded-md text-sm">Reset</button>
    </div>

    <h3 className="text-md font-semibold mt-7">Group by</h3>
    <select className="w-full border border-gray-300 rounded-md bg-white text-black px-3 py-1 text-sm focus:outline-none cursor-pointer">
        <option>Vendor</option>
    </select>

    <h3 className="text-md font-semibold mt-7">Select below to isolate:</h3>
    <ul className="mt-2 space-y-2 text-sm">
        <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-yellow-500" defaultChecked />
            <span className="text-yellow-600 font-semibold">Hudson & Sons</span>
        </li>
        <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-purple-500" defaultChecked />
            <span className="text-purple-600 font-semibold">Southern Cattle Ranch</span>
        </li>
        <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-green-500" defaultChecked />
            <span className="text-green-600 font-semibold">Kayla Creek Station</span>
        </li>
        <li className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-red-500" defaultChecked />
            <span className="text-red-600 font-semibold">Anthony Greenham</span>
        </li>
    </ul>
</div>

        </div>
         {/* right box */}
         <div className="flex flex-col mr-24">
           <div className="flex items-center gap-2">
            <WeightStackedBarChart />
            <WeightChart />
           </div>
           <div className="flex items-center gap-2">
            <DailyWeightGainChart />
             <ScatterPlotChart />
           </div>
         </div>
      </div>
      <PagesList />
    </div>
  );
}

export default FarmerInformation;
