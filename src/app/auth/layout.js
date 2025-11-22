"use client";
import LeftPanel from "@/components/authComponent/LeftPanel";
import React from "react";

export default function AuthLayout({ children }) {
    return (
        <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">

            {/* LEFT SIDE */}
            <div className="hidden md:block h-full">
                <LeftPanel />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center bg-white h-full py-10">
                <div className="w-full max-w-md px-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
