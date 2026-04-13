import React from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";


function Products() {
    const navigate = useNavigate();

    return (
        <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 py-10">

            <h1 className="text-3xl font-bold mb-8">
                Our Products
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">

                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white transition duration-300 group relative rounded-xl p-3 sm:p-4 cursor-pointer shadow-sm hover:shadow-lg border border-gray-100"
                    >

                       

                        {/* Product Image */}
                        <div
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="h-32 sm:h-44 flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="max-h-28 sm:max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Product Title */}
                        <h3 className="text-sm sm:text-lg font-semibold mt-3 line-clamp-1">
                            {item.title}
                        </h3>

                        {/* Brand */}
                        <p className="text-gray-500 text-xs sm:text-sm">
                            {item.brand}
                        </p>

                        {/* Price */}
                        <p className="text-base sm:text-xl font-bold text-green-600 mt-1 sm:mt-2">
                            ₹{item.price}
                        </p>

                        {/* Add to Cart */}
                        <button
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md font-semibold text-sm sm:text-base transition"
                        >
                            Add to Cart
                        </button>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Products;