"use client";

import React from "react";
import { BoxIcon } from "lucide-react";

const LeftPanel = () => {
    return (
        <div className="min-h-screen w-full bg-[url('/Ecommerce.avif')] bg-cover bg-center bg-no-repeat p-0 m-0 ">
            <div 
            className="flex flex-col justify-between h-full w-full bg-[#0c223f]/70 p-10 gap-8">
                <div className="flex items-center gap-2 text-xl font-semibold text-white">
                    <BoxIcon size={28} />
                    AetherStore
                </div>
                <h1 className="text-[2em] font-bold leading-tight text-white mt-[90%]">Join the Future of <br />E-commerce,<br />With AI.</h1>
            </div>
        </div>
    );
};

export default LeftPanel;