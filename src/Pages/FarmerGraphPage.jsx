import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function FarmerGraphPage() {
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(
          "https://smart-agriculture-3.onrender.com/sensorData",
          { withCredentials: true }
        );
        setCropData(response.data.data); 
      } catch (error) {
        console.error("Error fetching crop data:", error);
      }
    };

    fetchShops();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Crop Yield Statistics
      </h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(cropData) &&
          cropData.map((cropItem, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {cropItem.crop} Yield (Monthly)
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={cropItem.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="#4A5568" />
                  <YAxis stroke="#4A5568" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="quantity"
                    stroke="#34D399"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
      </div>
    </div>
  );
}
