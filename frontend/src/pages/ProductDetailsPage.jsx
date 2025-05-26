import { useEffect } from "react";
import { useProductStore } from "../stores/useProductSore";
import { useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { currentProduct: product, fetchProduct } = useProductStore();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct(id);
  }, [fetchProduct, id]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-[7%] px-4 pb-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl shadow-2xl p-10 transition-all duration-300">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt="Product"
            className="w-96 h-96 object-cover rounded-2xl border border-zinc-700 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-between gap-8">
          <div>
            <p className="text-sm text-cyan-400 uppercase tracking-widest mb-2">
              {product.gender}
            </p>
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-xl">
              {product.name || "ON W CLOUD X 4"}
            </h1>
            <p className="text-2xl text-cyan-300 font-semibold mb-4">
              ${product.price}
            </p>
            <p className="text-gray-300 leading-relaxed tracking-wide text-lg">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <span className="font-semibold text-cyan-400">Size:</span>
            <span className="text-white">{product.size} EU</span>
          </div>

          <button
            disabled={!isSignedIn}
            className={`w-full py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
              isSignedIn
                ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                : "bg-zinc-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isSignedIn ? "Add to Cart" : "Sign in to purchase"}
          </button>
        </div>
      </div>
    </div>
  );
};
