"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Shield, Truck, Heart } from "lucide-react"

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Step Into Style
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover premium footwear that combines comfort, style, and performance. Your perfect pair is waiting.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25">
                Shop Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-900 rounded-xl font-semibold text-lg transition-all duration-300">
                View Collection
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="text-cyan-400" size={32} />,
                title: "Premium Quality",
                description: "Handcrafted shoes made from the finest materials",
              },
              {
                icon: <Shield className="text-cyan-400" size={32} />,
                title: "Warranty",
                description: "1-year warranty on all our premium footwear",
              },
              {
                icon: <Truck className="text-cyan-400" size={32} />,
                title: "Fast Delivery",
                description: "Free shipping on orders over $100",
              },
              {
                icon: <Heart className="text-cyan-400" size={32} />,
                title: "Customer Love",
                description: "Thousands of satisfied customers worldwide",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-300">Discover our most popular styles</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Urban Runner",
                price: "$129",
                image: "/placeholder.svg?height=300&width=300",
                category: "Running",
              },
              {
                name: "Classic Leather",
                price: "$189",
                image: "/placeholder.svg?height=300&width=300",
                category: "Casual",
              },
              {
                name: "Sport Elite",
                price: "$159",
                image: "/placeholder.svg?height=300&width=300",
                category: "Athletic",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">{product.category}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                  <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-900 rounded-xl font-semibold text-lg transition-all duration-300">
              View All Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">Get the latest updates on new arrivals and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
