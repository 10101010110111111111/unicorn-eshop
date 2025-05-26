import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fakeCartItems = [
      { id: 1, name: 'Product A', price: 10.99, quantity: 2 },
      { id: 2, name: 'Product B', price: 5.49, quantity: 1 },
      { id: 3, name: 'Product C', price: 7.99, quantity: 3 },
    ];

    setTimeout(() => {
      setCartItems(fakeCartItems);
    }, 500);
  }, []);

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-10 border-b pb-4">Your Cart</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-6">
          {error}
        </div>
      )}

      {cartItems.length === 0 && !error ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-300 pb-4"
            >
              <div className="sm:flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-1">
                  Quantity: <span className="font-medium">{item.quantity}</span> • ${item.price.toFixed(2)} each
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="mt-3 sm:mt-0 text-red-600 hover:text-red-800 font-semibold transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-2xl font-extrabold mt-6">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
