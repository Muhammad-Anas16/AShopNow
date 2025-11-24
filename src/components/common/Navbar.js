"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-blue-500 text-xl">✦</span>
          <span>AetherStore</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/about">About Us</Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full w-64">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent ml-2 w-full outline-none text-sm"
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white border-t">
          <div className="flex flex-col gap-3 text-gray-700 text-base">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          </div>

          {/* Search Mobile */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-full">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent ml-2 w-full outline-none text-sm"
            />
          </div>

          {/* Icons Mobile */}
          <div className="flex items-center gap-6 pt-2 text-gray-700">
            <Heart className="w-5 h-5 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
