import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SelectUserType() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-2xl font-bold text-gray-700"
        >
          Loading...
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-8">Select Your Type</h1>
          <div className="flex gap-6">
            <Link to="/login">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-40 h-40 flex justify-center items-center bg-green-500 text-white text-xl font-semibold rounded-lg shadow-lg cursor-pointer"
              >
                Farmer
              </motion.div>
            </Link>
            <Link to="/shopkeeper">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-40 h-40 flex justify-center items-center bg-blue-500 text-white text-xl font-semibold rounded-lg shadow-lg cursor-pointer"
              >
                Shopkeeper
              </motion.div>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
