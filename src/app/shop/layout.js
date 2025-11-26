// src/app/shop/layout.js
"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function ShopLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (Left Filters) */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-white shadow-lg z-40 w-72 p-6 transform 
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 
        transition-transform`}
      >
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-xl font-semibold">Filters</h2>
          <FaTimes
            onClick={() => setOpen(false)}
            className="text-xl cursor-pointer"
          />
        </div>

        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        {/* Category */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Category</h4>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="cat" defaultChecked /> T-Shirts
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="cat" /> Polos
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="cat" /> Long-Sleeve
            </label>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Clear Filters
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* Content (Product Listing) */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}