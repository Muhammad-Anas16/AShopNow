"use client";

import { useState } from "react";

const HeroSection = () => {

  const [heroImage, setHeroImage] = useState("");
  
  return (
    <section className="mb-16 w-full px-0 sm:px-6 md:px-8 py-4">
      <div>
        <div
          className={`relative flex flex-col min-h-[480px] lg:min-h-[560px] gap-6 sm:gap-8 sm:rounded-xl bg-cover bg-center bg-no-repeat items-start justify-end px-4 sm:px-10 md:px-12  pb-10 sm:pb-14 md:pb-16 bg-[linear-gradient(rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.5)_100%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFnR5VLgELvh7s7RhH8HL1uX7EfgbputAGUONnHG16P3Rd8GeVdZ6me3NDep-YFGRjm8h-kGpmqbgihvHXIo3B55nZR2n1zEzdajHPJj8kfWMOxkWfbF0VlmWnLRsdn4Jm9kXHgReJEdqoBqOvXVgfLg_97PcCKDFe-V1WaHo9FFcmg8uuRiRztWb1wbVpTijadn6VVdX3YKivST7lzxQKkRlRX1NoKwcrVIIAi3WUgQaFMDWo1qzJPXUrRm4TEBNqgM45CNo97j0')]`}
        >
          {/* Text */}
          <div className="flex flex-col gap-4 text-left max-w-xl">
            <h1
              className="
                text-white text-3xl sm:text-4xl md:text-5xl
                font-black leading-tight tracking-[-0.033em]
              "
            >
              Smarter Shopping, Curated for You
            </h1>

            <p
              className="
                text-gray-200 text-sm sm:text-base md:text-lg leading-normal
              "
            >
              Discover products {"you'll"} love with our AI-powered recommendations
              and seamless shopping experience.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="
              flex px-6 py-4 rounded-lg
              bg-primary text-white text-base font-bold
              hover:bg-primary/90 transition-colors
              mt-4
            "
          >
            Shop New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;