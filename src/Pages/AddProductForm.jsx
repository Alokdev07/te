import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Store/addProductSlice ";
export default function AddProductForm({ onAddProduct }) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    onAddProduct(data);
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Product Name</label>
          <input {...register("name", { required: true })} className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300" placeholder="Enter product name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Quantity</label>
          <input {...register("quantity", { required: true })} className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300" placeholder="Enter quantity (e.g., 50 kg)" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Price</label>
          <input {...register("price", { required: true })} className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300" placeholder="Enter price (e.g., $30)" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Stock Availability</label>
          <select {...register("stock", { required: true })} className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300">
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
        <button type="submit" className="w-full px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Add Product
        </button>
      </form>
    </div>
  );
}