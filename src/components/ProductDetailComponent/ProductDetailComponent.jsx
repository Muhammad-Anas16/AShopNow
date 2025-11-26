"use client";

import { useState } from "react";
// import Link from "next/link";

const ProductDetailComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const product = {
    id: "x1",
    title: "Modern Smartwatch X1",
    description:
      "Stay connected and track your fitness with our next-gen smartwatch, powered by AI.",
    price: 249.99,
    currency: "USD",
    rating: {
      score: 4.5,
      reviewsCount: 125,
      breakdown: {
        5: 75,
        4: 15,
        3: 5,
        2: 3,
        1: 2,
      },
    },
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJNxkinGkNDsESGiZt1wHepH2zMxliIYp6Y6m7lSx_QTeCh3ILZo-sZ_yzJH92a88CymXnrGUi0B-_ASkcqiyEd1bKeZ4TO9UoALlOda_1kb5byjIIibLrN5WzOsfw3Y3mw5RuqHpD-jIEurWT7_FPNYY3B9uFl4CDunZf1nb1_GLKwRBB4wuuGCrRc9BerLs3Lc3UCmswlaaMR45X7NMuG5KFOHZpQGnt1d_E-20pHh8DJhS-mV9HG03EdkuoyeZ4jTzKSI4aifE",
    images: [
      {
        alt: "Side view of the smartwatch",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeWTZUYmvaW9vVksdV5GFONNJGJDM5it_kD4pUUwca5ZoP0b9HY1qcRTnQj4pIDXTs1G66snfEa0_DrohyPejaf51qJWrS_bZm1bgA0kWSrYDT6Z0tjrhLpgu_MEnKU8YRB6rO2SyMw5eMXMC0ukWXFCcKgU5dDE0svyBFj9Nue6RP3HX3tCEJ5yEvS511a826TGgOQYt1x_52wSM1p5RK5QuyChyXwSy4uJmsJ6A-Ob4Qmsfllfo40LapaoDAc2S-vxurxg9-AJQ",
        isPrimary: true,
        classes: "ring-2 ring-primary",
      },
      {
        alt: "Close-up of the smartwatch screen",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsiYCwpMeqdfcLWC8z6GsgpSmM-ASedzAIj8A0Bq-YjMprcArWIq7JxVGKPtLOwZpG1zOXtb_vd87bqumuU8ivM1jVycjhoz5hB35grsFxLHbEezYym3dfQE75hv6Emy1KKIJ3J3pOVl4TiV4VUXeRR5fbg1iI4bSHDs0ucUoX9-4j8upaioT8s1vmxouENEzS0oY-Qt4UlQuoxuAbi6_dy_dEjZYqquD9eWxdlUu_4CkzEotLm8hYoUwWG-4KNrrOw2Jr1jC7VNU",
        isPrimary: false,
        classes: "opacity-70 hover:opacity-100 transition-opacity",
      },
      {
        alt: "Smartwatch on a wrist",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPs7LWhmaF1aVYDjgCxP1Ue0GnbwUwvf8qna1SBggYMyFvOmobm1idFLXNmpbJJwa3q2hkDD3XqOGRtGWB8FvtZrYU1k69Pw48kdYqNW5Hls4KXV39_V-8-IpSbWGjEQL4zaLyGnC9CNL7R6YCMTfdutO3_vHOICagH3KctiTovdrARS5oZ2u7nN6_kRRLXatTKgNwxelFVwIwgSCCmvYmhrijvhPb0XmfpQXEvIt7Hy2VLL7XgLGEi89PABSrCLk1ig35QQw-4go",
        isPrimary: false,
        classes: "opacity-70 hover:opacity-100 transition-opacity",
      },
      {
        alt: "Smartwatch with charging cable",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8FLA0wyH7-RxHRSepIr6aFq2IphrW8mF0fyE5GWKYe07GbBE8JgY2jfOFp5NCI_RsIiYFvm8B6BK7-3VBHL_ff6bgVccyQj3VbiDLDZuY4K7eMvkh4SLOq1T-veiyIVjIZW_eLEx-WHa1cmN6F7-9TQpd4m90KXloBh-0F02bJhHh9JGu8ttLPyXyrUHYMRpQ8El5LpUZtsW1rLXimeEbHvWRRl2BnueI9wrzkvP316-NRAzqt4r0Wjut3Qw2nSCL3Y_FmkHjGuQ",
        isPrimary: false,
        classes: "opacity-70 hover:opacity-100 transition-opacity",
      },
    ],
    variants: {
      colors: [
        { name: "Midnight Black", code: "#1f2937" },
        { name: "Silver", code: "#e5e7eb" },
        { name: "Rose Red", code: "#f43f5e" },
      ],
      sizes: ["40mm", "44mm"],
    },
    details: [
      {
        title: "Product Details",
        content:
          "The Modern Smartwatch X1 features a brilliant always-on display, advanced health sensors, and seamless integration with your devices. Our custom AI chip optimizes battery life and provides predictive fitness coaching tailored just for you. Built with premium, durable materials, it's designed for both elegance and endurance.",
      },
      {
        title: "Specifications",
        content:
          "Case: Aerospace-grade aluminum. Display: 1.9-inch LTPO OLED Retina display. Water Resistance: 50 meters. Connectivity: GPS, Wi-Fi, Bluetooth 5.3. Battery: Up to 36 hours on a single charge.",
      },
      {
        title: "Shipping & Returns",
        content:
          "Free 2-day shipping on all orders. We offer a 30-day no-questions-asked return policy. If you're not satisfied, simply return it for a full refund.",
      },
    ],
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-text-light dark:text-text-dark">
              <span className="material-symbols-outlined text-primary text-2xl">
                Products /{" "}
              </span>
              <h2 className="text-xl font-bold">{product.title}</h2>
            </div>
          </div>
        </div>
      </header>

      <main className="layout-container flex flex-col grow py-8 sm:py-12">
        <div className="layout-content-container flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div className="flex flex-col gap-4">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl shadow-sm"
                style={{ backgroundImage: `url(${product.mainImage})` }}
              ></div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-full bg-center bg-no-repeat bg-cover aspect-square rounded-lg cursor-pointer ${img.classes}`}
                    style={{ backgroundImage: `url(${img.url})` }}
                    alt={img.alt}
                  ></div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl sm:text-4xl font-black">
                {product.title}
              </h1>
              <p className="text-text-muted-light">{product.description}</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-xl"
                      style={{
                        fontVariationSettings:
                          star <= Math.floor(product.rating.score)
                            ? "'FILL' 1"
                            : "'FILL' 0",
                      }}
                    >
                      {star <= Math.floor(product.rating.score)
                        ? "star"
                        : star - product.rating.score < 1
                        ? "star_half"
                        : "star"}
                    </span>
                  ))}
                </div>
                {/* <Link href="/reviews" className="text-sm text-text-muted-light hover:text-primary transition-colors">
                  ({product.rating.reviewsCount} Reviews)
                </Link> */}
                <span className="text-sm text-text-muted-light hover:text-primary transition-colors">
                  ({product.rating.reviewsCount} Reviews)
                </span>
              </div>
              <p className="text-4xl font-bold">${product.price}</p>

              {/* Variants */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-bold mb-2 block">Color:</label>
                  <div className="flex gap-2">
                    {product.variants.colors.map((c, i) => (
                      <button
                        key={i}
                        className="size-8 rounded-full"
                        style={{ backgroundColor: c.code }}
                      ></button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    className="text-sm font-bold mb-2 block"
                    htmlFor="size"
                  >
                    Size:
                  </label>
                  <select
                    id="size"
                    className="form-select w-full max-w-xs rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary focus:ring-primary/50"
                  >
                    {product.variants.sizes.map((s, i) => (
                      <option key={i}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quantity + CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-text-muted-light hover:text-text-light"
                  >
                    <span className="material-symbols-outlined text-xl">
                      remove
                    </span>
                  </button>
                  <input
                    className="w-12 text-center border-0 bg-transparent focus:ring-0"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-text-muted-light hover:text-text-light"
                  >
                    <span className="material-symbols-outlined text-xl">
                      add
                    </span>
                  </button>
                </div>
                <button className="flex-1 flex items-center justify-center rounded-lg h-12 bg-primary text-white gap-2">
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Details Accordion */}
          <div className="mt-16 sm:mt-24 space-y-16 max-w-4xl mx-auto">
            {product.details.map((d, i) => (
              <details
                key={i}
                className="group rounded-lg bg-white dark:bg-gray-800/50 p-6 border border-gray-200 dark:border-gray-700/50"
                open={i === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold">{d.title}</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-text-muted-light">{d.content}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailComponent;
