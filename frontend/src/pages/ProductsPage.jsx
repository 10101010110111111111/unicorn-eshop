import { useEffect } from "react";
import { useProductStore } from "../stores/useProductSore";
import { Filters } from "../components/Filters";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

export const ProductsPage = () => {
  const { products, fetchProducts } = useProductStore();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryParams = {};
    searchParams.forEach((value, key) => {
      if (queryParams[key]) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [value];
      }
    });
    fetchProducts(queryParams);
  }, [fetchProducts, searchParams]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-8 pt-24 flex gap-4">
      <aside className="w-1/5 sticky top-24 h-[calc(100vh-6rem)] border-r border-[#2a2a2a] pr-4">
        <Filters />
      </aside>

      <main className="w-4/5 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product._id}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    {product.description.split(" ").slice(0, 15).join(" ") +
                      "…"}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-cyan-400">
                    ${product.price}
                  </span>
                  <Link
                    to={`/product/${product._id}`}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-md text-sm transition-colors"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};
