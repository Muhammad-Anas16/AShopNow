// src/app/shop/page.js
"use client";

import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Classic Crewneck Tee",
        price: 29.99,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbGiZdUWrGmz4igy3_2RyFYGlfSpigj7JoXFtjZCQLpXIlOlfgdxFB8Nz-0eRAnCCRgfOXLaeLM0JfPHgIma4qqMWxKp3ZlwZXnH7fc75nWvRAUvn6b6_91l76LQE0T_qO4uhTLeO5KOlpfF7OwtvUiy4M7N4RG6WfVmLbNo40H0DX1w4GmVklLKVXshUkwLzOPvY8p3lb3LUro-TjjvdypwuuVuKrwmQgHtwbfVQ4Vlk5Sy3MG9uKtw6xHjSDw8O2JIJTQ6Mn_fo",
    },
    {
        id: 2,
        name: "Graphic Print Tee",
        price: 34.99,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkRj85rx8Fjb31Lsdl7l3F8itVwAowZGRCLSYrDF0zGcPeIo58oUd1sK9yxTLoTr82Fe0v5ZDC2B55Hp40V_C6mupVMrSMy_GonjES-hB8sU8CabuQUyCmSYHHZlbzSxm6Yt5bpwIZEZcCQbOShWwNp5fUYlANvTsHas0XYgAXFlNWrPXzrZtDF3W5ABQbrIXmnmpd3NCfZ_-YSpjNMTYSXZcDy8THpiQtp4C3l5BK5tYr-Pz0PEz5Bak6Qite5qsNQZHcDb_2ijo",
    },
    {
        id: 3,
        name: "Vintage Wash Tee",
        price: 39.99,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCecCsOQzKP61hKUa4fDp2HIES9kjvXtOOt4vOH0q-Hu368bTxx3QGyfDm-IV3Z20oVEcUOcY8rB0-LWQESn3Gl6CDpaRbdtXD_odjx1AR7WEdw-t3dtKMKXZ9eGB-wr-lq9ZgkG9wg8VozK9BSum9WxTx9gjiBbaAyRkn3lvxaRmCN8r57djAbF_l7tMyi1_b1Lig2pI9m6WVQll1maPUZt0e6o_anHruc3XBEHZqRS_aY_vrkpJ7whoPlnPQagGADJ1sWt29o-6w",
    },
    {
        id: 4,
        name: "Premium Cotton Tee",
        price: 45.0,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY8YmCg05fiGWIjGsg5yMU0Av8-j0N5N5qmmWejQgiBytVxNS8VdIzGlJFkaLYGCI4T82GvtRcY1pIcP2Nd8z7a5IP1mItCa3CyBFsa-nmgyDaBmKFRP2blcJywlEyINs-H-6ReRTjg2vSQik1V8baBxsdgzNKpmS-tkdSCMK3uXr5QaFBZmgHG-ZRRbGTi9rq5dhTtt5oWxSBHL6LKK8Juv1gOKWAHOXW2xOE69WtpaKellBT5y6LgjK6qjgZeGB79_uh_6PzrsU",
    },
];

export default function ShopPage() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (
                <Link href={"/product_details"} key={product.id} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                    <div className="w-full h-48 bg-gray-100">
                        <img
                            src={product.image}
                            className="w-full h-full object-cover"
                            alt={product.name}
                        />
                    </div>

                    <div className="p-4">
                        <h3 className="font-semibold text-gray-800">
                            {product.name}
                        </h3>
                        <p className="mt-1 text-blue-600 font-bold">${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
