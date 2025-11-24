"use client";

import React from "react";
import Link from "next/link";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Electronics",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDC6OISSQtryPkZkgBDY_u_4fkHBe7oOjjYWH8okyLyILwxdzyDnnuJ7OQbuJ-6N6ksrnoR_H6gC9VA7K5T0kkFYf6nXi8q6qM6RuF6FnBp_-gzA89q-CZXWYHZefbnS26n1oX1Yk35VogrutK3aOhf7Ma1LzbPVEeCEmSTWrmLn8FLbQzdi5qazYVM2IbbcWQP-Mts_-pQad0os5AQGLyzgkNmAOFWaDr_kPjjk77YcPuLrgYX4eywQh8cvclAcLprlmx0h6qcujI",
    },
    {
      title: "Apparel",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBUfADhyHpD4KU8aJiIVQRBS3u5klhGIuxbKXBoUozM21XQPMIyDGZHb1D8A24lA5PfpY4apw_ypv16wE27JgmxalZq51KNwXbMD8g6G78JibpGF0fCY3iTP4BxQFeXEUV59VRL3Mhb0UCPOIFUM5w5sXiJQh1fPRhAEt0lT9FSzGNCifbBVDwjrC8CcQvRDf_fw2nkRI8tnzCcF0W1R0vIu3D1c7MKCpte3rS3z00WybF9xy",
    },
    {
      title: "Home Goods",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo9G-blVNHuPP561sq4ly2x4E90uvkV6osaHoM-bcY-LuBiVGQC2Dz3s0Jy9uCX6m1BUquEjNXpeL87cOqy64yw2XTl1B1xBSICEraUzFzxL8jan5Rma0e9nc1tnmNz0kPLcNcD_0MpVY1fT2VVc3v0wwIfg7QUVB0NT5-bc6m5rwhaIOrpjxBba0o6bRAzRGjh20ZNhrhM4AMUO6vrtDF5dHYr3JWg1zr5u2iuw0Mh5TK3FeFExQLEeo1WG0umh0lpPUiuzQwFUY",
    },
    {
      title: "Outdoor Gear",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD1OXsv6jjINQDMnzRbemG-9Il9SeXo3prXCOAmHvR9nsaseDtwhiLG9akN2bz7fq1Mw_5C_8VJnDJz_w2etuMiOyEWjS0FdSuEEeDD_gl7OBF-9oh3M-TXrYAhC4y6bpcMulGz88hLahSF3vzxQdK0sMJP1OgS_GsPdacltbtKJ-pJowCPPtJxAOyaqRC0z4-ZpV_V-uzbzi2SzyB_pj-r3QuVcFZoODpi0YMHpWrp9IwRocz95on_X0YRGstmVzMEVurcrKSh92o",
    },
    {
      title: "Books",
      image: "https://via.placeholder.com/400x500.png?text=Books",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <h2 className="text-text-light dark:text-text-dark text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] py-4">
        Shop by Category
      </h2>

      {/* Scrollable row */}
      <div className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar touch-pan-x -mx-4 px-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href="#"
            className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/5"
          >
            <div
              className="bg-cover bg-center flex flex-col justify-end p-6 aspect-[4/5] rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%), url('${category.image}')`,
              }}
            >
              <p className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight">
                {category.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;