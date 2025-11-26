"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "@/Model_Schema/authSchema";

export default function CheckoutPage() {
  const [products, setProducts] = useState([
    {
      id: 2,
      name: "Black Sweatshirt",
      color: "Black",
      size: "L",
      price: 32.0,
      quantity: 1,
      image:
        "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/24/HLdKlgtW_d2829fda0cd14631a28573c5193608af.jpg",
    },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema), // <— uses your external schema
  });

  const updateQuantity = (id, amount) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);

    // Reset inputs after submit
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">

          {/* Shipping Form */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h2 className="text-xl font-semibold mb-3">Shipping Information</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("firstName")}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("lastName")}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("address")}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Address"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("city")}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("postalCode")}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Postal Code"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.postalCode.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-3 bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800"
              >
                Submit Shipping Info
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-4">
              {products.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-4 border-b">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.color} • {item.size}
                    </p>
                    <p className="font-semibold mt-1">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-4 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800">
              Proceed to Payment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}