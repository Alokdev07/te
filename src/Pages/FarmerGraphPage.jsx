import { useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function FarmerGraphPage() {
  const {cropData,setCropData} = useState('')
  useEffect(() => {
    const fetchShops =  async function(){
      return await axios.get("https://smart-agriculture-3.onrender.com/sensorData",{withcredentials : true})
    }
    const response =  fetchShops()
    setCropData(response.data.data)
  }
  )
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Crop Yield Statistics</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cropData.map((cropItem, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{cropItem.crop} Yield (Monthly)</h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={cropItem.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#4A5568" />
                <YAxis stroke="#4A5568" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="quantity" stroke="#34D399" strokeWidth={3} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
}