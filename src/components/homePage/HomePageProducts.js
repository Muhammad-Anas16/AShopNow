// "use client";

// import React from "react";
// import Link from "next/link";
// import { FaStar, FaStarHalf } from "react-icons/fa";

// const HomePageProducts = ({ heading }) => {
//   const products = [
//     {
//       title: "Chronos Watch",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuCmOiVkE8VQtI1CTdZJbvv81-apfYVk3x1Jb7hT4kkbg7ZKrAogWfqXaJa-RugsO3egGP1XOcigAOSor2Jnm-r6ybriaoypDlZeT6en1Pu-s3t_Be2vZErZLNbE2zQeMTUEENNg1ySJfcBQP_G0teZMei9iwvSaKonnAt_VaIJbHtJc5LvKLUFZmwQQvjD2nGfnazVUNZRoNmUuFejpk74Gx8L0srqWpTuCXQqoPeiZYnHbimXMloPKzjwP5DonPgkngWDu8sRg8Ak",
//       price: "$199.00",
//       rating: 4,
//       reviews: 124,
//     },
//     {
//       title: "Velocity Runners",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuB4ueT3L-Oip5xSKe5wvzoJjdVpI6gw_d2rO_-RMLFpJEIwx8vH0hPZNPElvW-haDciDashB0AyxOCkSG-fX1dmi6IxxXX4vPw4aPo07ELmz357klS3SSwcbOiGtsF1jtr1cMW1tdRST0q4tBET_HOcGhe51y6tXmVA_ex9LqkTqlgqPs0LFNOIl7UsbQpw1wqzgIi6Pdaye4I8e5wtoLBzx_61q0ekOIWPRZB2usLfLLhBScSkSz2xQBaUzPFBONqvCibncnMfsJM",
//       price: "$120.00",
//       rating: 5,
//       reviews: 302,
//     },
//     {
//       title: "AcousticPro Headphones",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuDAcaG1q96FtGXlTRdz1zDNRha8ghoyJVYYtEvsdZxj6hRdx6EKYQoSUBalt6EFYAnqXlnffgtF23RIQbmKif1dL6jQ8bGpl7djKdkK2XvVJkEAasbiqIVKbSfufVNx8OSs71mCeqSfocGgaoge7m07GEcHuG3KgXmg9uPkffes1dgA31FOS-xnFjlmv-J-I5lposI5_F4_gP-p87NGH5-vd7A0TXGTP63IaF_nWhs6Z01XLT0beoGhEnJwQGRr-OpdpnoFZ6GEsUM",
//       price: "$249.00",
//       rating: 5,
//       reviews: 512,
//     },
    
//   ];

//   // Function to render stars
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(rating)) {
//         stars.push(<FaStar key={i} className="text-yellow-700 w-4 h-4" />);
//       } else if (i - rating < 1) {
//         stars.push(<FaStarHalf key={i} className="text-yellow-700 w-4 h-4" />);
//       } else {
//         stars.push(<FaStar key={i} className="text-gray-500 dark:text-gray-800 w-4 h-4" />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <section className="w-full pb-7 px-4 sm:px-6 md:px-8">
//       {/* Section Header */}
//       <h2 className="text-text-light dark:text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] pb-4 pt-16 mb-4">
//         {heading}
//       </h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
//         {products.map((product, index) => (
//           <div key={index} className="group relative">
//             <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-surface-dark">
//               <img
//                 className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
//                 src={product.image}
//                 alt={product.title}
//               />
//             </div>
//             <div className="mt-4 flex flex-col gap-1">
//               <h3 className="text-sm font-medium text-text-light dark:text-text-dark">
//                 <Link href="#">{product.title}</Link>
//               </h3>
//               <div className="flex items-center gap-1">
//                 {renderStars(product.rating)}
//                 <span className="text-xs text-subtle-light dark:text-subtle-dark ml-1">
//                   ({product.reviews})
//                 </span>
//               </div>
//               <p className="text-base font-semibold text-text-light dark:text-text-dark mt-1">
//                 {product.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HomePageProducts;


"use client";

import React from "react";
import Link from "next/link";
import { FaStar, FaStarHalf } from "react-icons/fa";

const HomePageProducts = ({ heading }) => {
  const products = [
    {
      title: "Chronos Watch",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmOiVkE8VQtI1CTdZJbvv81-apfYVk3x1Jb7hT4kkbg7ZKrAogWfqXaJa-RugsO3egGP1XOcigAOSor2Jnm-r6ybriaoypDlZeT6en1Pu-s3t_Be2vZErZLNbE2zQeMTUEENNg1ySJfcBQP_G0teZMei9iwvSaKonnAt_VaIJbHtJc5LvKLUFZmwQQvjD2nGfnazVUNZRoNmUuFejpk74Gx8L0srqWpTuCXQqoPeiZYnHbimXMloPKzjwP5DonPgkngWDu8sRg8Ak",
      price: "$199.00",
      rating: 4,
      reviews: 124,
    },
    {
      title: "Velocity Runners",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB4ueT3L-Oip5xSKe5wvzoJjdVpI6gw_d2rO_-RMLFpJEIwx8vH0hPZNPElvW-haDciDashB0AyxOCkSG-fX1dmi6IxxXX4vPw4aPo07ELmz357klS3SSwcbOiGtsF1jtr1cMW1tdRST0q4tBET_HOcGhe51y6tXmVA_ex9LqkTqlgqPs0LFNOIl7UsbQpw1wqzgIi6Pdaye4I8e5wtoLBzx_61q0ekOIWPRZB2usLfLLhBScSkSz2xQBaUzPFBONqvCibncnMfsJM",
      price: "$120.00",
      rating: 5,
      reviews: 302,
    },
    {
      title: "AcousticPro Headphones",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDAcaG1q96FtGXlTRdz1zDNRha8ghoyJVYYtEvsdZxj6hRdx6EKYQoSUBalt6EFYAnqXlnffgtF23RIQbmKif1dL6jQ8bGpl7djKdkK2XvVJkEAasbiqIVKbSfufVNx8OSs71mCeqSfocGgaoge7m07GEcHuG3KgXmg9uPkffes1dgA31FOS-xnFjlmv-J-I5lposI5_F4_gP-p87NGH5-vd7A0TXGTP63IaF_nWhs6Z01XLT0beoGhEnJwQGRr-OpdpnoFZ6GEsUM",
      price: "$249.00",
      rating: 5,
      reviews: 512,
    },
    // Add more products here...
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-700 w-4 h-4" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalf key={i} className="text-yellow-700 w-4 h-4" />);
      } else {
        stars.push(
          <FaStar key={i} className="text-gray-500 dark:text-gray-800 w-4 h-4" />
        );
      }
    }
    return stars;
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <h2 className="text-text-light dark:text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] pb-4 pt-16 mb-4">
        {heading}
      </h2>

      {/* Scrollable Product Row */}
      <div className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/4 group relative"
          >
            <div className="bg-gray-100 dark:bg-surface-dark rounded-lg overflow-hidden aspect-[3/4] transition-transform duration-300 group-hover:scale-105">
              <img
                className="h-full w-full object-cover object-center"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <h3 className="text-sm font-medium text-text-light dark:text-text-dark">
                <Link href="#">{product.title}</Link>
              </h3>
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="text-xs text-subtle-light dark:text-subtle-dark ml-1">
                  ({product.reviews})
                </span>
              </div>
              <p className="text-base font-semibold text-text-light dark:text-text-dark mt-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageProducts;