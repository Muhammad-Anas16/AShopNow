"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaArrowLeftLong, FaLock } from "react-icons/fa6";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "AI-Enhanced Smartwatch",
      color: "Midnight Black",
      size: "44mm",
      price: 499,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBoeyhOm1c-uwsiH3iyEu9fmEasxTEmthZE2hkQbzFgBemYLsXpHjm5kr2U5E5p1D2ZyTJNQLXMH83kKDkRANx-5tgS-NuDhpiXh-Drm-lqYnt_bT32EWAax1AECwARirAZ70r35c49ZEJgZByPjW4_BzCYazCI-5mkjPS9j_jYWr2hCqQ1MVUSTx4Ybb94oBWTWzVI8Hn5qK-XZIaRItSSnsRDcmbZiBuXsMeciATDWnp7syLE0Fd40fpqE4ojqcRssgPFOsJIEn4",
    },
    {
      id: 2,
      name: "Wireless Noise-Cancelling Headphones",
      color: "Silver",
      price: 249,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRiGmQUZNAHW1xfutMQepo12eOeh8FUN_kIgPg3xV0IipzSWA6vlZuVruiVvWkj-GuCYO8BPwM8pJAB3Oxl7hfWXbFzmXenuHovNNS3OYpryuVaABkhvQAOxgczgjUADc2p8pIV_20l35Fk5QTkI7Jcou8T9lFQd6Tm9wAS_eL1AHeY5yEUnjc1nbuDvB0qEyWNNNEDvRLiEQ6kW8LTNLHFkrYdZ7AdEoeiQsjxIUH55abUhVUMGakpJ9XDrQVbD3yQauxpAmk7jk",
    },
  ]);

  const handleQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 px-4 md:px-6 py-10">

      {/* LEFT SIDE */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-5 mb-4 bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Item Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600 text-sm">
                  Color: {item.color}
                  {item.size && `, Size: ${item.size}`}
                </p>

                <p className="text-blue-600 font-semibold text-sm">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Quantity + Price */}
            <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
              {/* Quantity Counter */}
              <div className="flex items-center border rounded-full px-3 py-1 gap-3">
                <button
                  className="text-lg"
                  onClick={() => handleQuantity(item.id, "dec")}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="text-lg"
                  onClick={() => handleQuantity(item.id, "inc")}
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <div className="font-semibold text-gray-800 whitespace-nowrap">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Delete */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeItem(item.id)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}

        {/* Continue Shopping */}
        <Link href={"/"} className="mt-4 flex items-center gap-2 text-blue-600 hover:underline">
          <FaArrowLeftLong /> Continue Shopping
        </Link>
      </div>
    </div>
  );
}