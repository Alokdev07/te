import axios from "axios"; // ✅ Make sure axios is imported
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FarmerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("https://smart-agriculture-3.onrender.com/farmers", {
          withCredentials: true,
        });
        setProducts(response.data.data); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchShops();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addProduct");
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Farmer Dashboard</h1>
      <button
        onClick={handleClick}
        className="mb-6 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Add Product
      </button>
      <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product List</h2>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-gray-600">Price: {product.price}</p>
                <p className={product.stock === "Available" ? "text-green-600" : "text-red-500"}>
                  Stock: {product.stock}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
