import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ShopkeeperPage() {
  // const shops = useSelector((state) => state.shopkeeper.shops);

  const [shops,setShops] = useState('');
  useEffect(() => {
    const fetchShops =  async function(){
     const response =  await axios.get("https://smart-agriculture-3.onrender.com/shopkeepers",{
        withCredentials : true
      })
    }
    const response = fetchShops()
    setShops(response.data.data)
  }
  
  )
  const loaded = shops.length > 0; 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
    
      <nav className="w-full bg-green-600 p-4 text-white text-center text-xl font-semibold shadow-md">
         Shops
      </nav>
      
      <div className={`w-full max-w-6xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        {shops.map((shop, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col transform transition-transform duration-700 ease-out scale-95 hover:scale-100">
            <h2 className="text-2xl font-semibold text-gray-700">{shop.storeName}</h2>
            <p className="text-gray-500">📍 {shop.location}</p>
            <div className="mt-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-600">Products:</h3>
              <ul className="mt-2 space-y-2">
                {shop.products.map((product, idx) => (
                  <li key={idx} className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                      <p className="text-gray-600">Quantity: {product.quantity} kg</p>
                      <p className="text-gray-600">Price: ${product.price}</p>
                    </div>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                      Buy
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
