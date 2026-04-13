import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
    const { id } = useParams();

    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <h2 className="text-center text-2xl mt-10 font-semibold">
                Product not found
            </h2>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-xl p-6">

                {/* Product Image */}
                <div className="flex justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-w-sm object-contain"
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        {product.description}
                    </p>

                    <p className="text-lg mb-2">
                        <span className="font-semibold">Brand:</span> {product.brand}
                    </p>

                    <h2 className="text-3xl font-bold text-green-600 mb-6">
                        ₹{product.price}
                    </h2>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-md font-semibold">
                            Add to Cart
                        </button>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductDetail;