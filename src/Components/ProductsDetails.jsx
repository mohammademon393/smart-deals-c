import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
  const product = useLoaderData();

  const {
    _id,
    title,
    price_min,
    price_max,
    category,
    created_at,
    image,
    status,
    location,
    seller_image,
    seller_name,
    condition,
    usage,
    description,
    seller_contact,
    email,
  } = product || {};

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      {/* Page Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section: Image and Description */}
        <div className="w-full lg:w-[60%] space-y-8">
          {/* Left Image */}
          <div className="bg-base-100 p-4 rounded-xl overflow-hidden h-[500px] flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Description Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#001D3D] mb-6">
              Product Description
            </h3>

            <div className="flex gap-12 mb-6 border-b pb-4 border-gray-100">
              <p className="text-sm">
                <span className="text-purple-600 font-semibold uppercase tracking-wider">
                  Condition:
                </span>
                <span className="ml-2 font-bold text-gray-800">
                  {condition}
                </span>
              </p>
              <p className="text-sm">
                <span className="text-purple-600 font-semibold uppercase tracking-wider">
                  Usage Time:
                </span>
                <span className="ml-2 font-bold text-gray-800">{usage}</span>
              </p>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>

        {/* Right Section: Info and Seller */}
        <div className="w-full lg:w-[40%] space-y-5">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-sm font-semibold text-[#001D3D] hover:opacity-70 transition-all"
          >
            <span className="mr-2">←</span> Back To Products
          </Link>

          {/* Title and Category */}
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold text-[#001D3D] leading-tight">
              {title}
            </h1>
            <span className="inline-block bg-[#E9D5FF] text-[#7C3AED] px-4 py-1 rounded-full text-xs font-bold uppercase">
              {category}
            </span>
          </div>

          {/* Price Box */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#22C55E] text-3xl font-bold">
              ${price_min} - {price_max}
            </p>
            <p className="text-gray-400 text-xs mt-1 font-medium italic">
              Price starts from
            </p>
          </div>

          {/* Product Details Box */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-[#001D3D] mb-4">
              Product Details
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-bold text-[#001D3D]">Product ID:</span>{" "}
                {_id}
              </p>
              <p>
                <span className="font-bold text-[#001D3D]">Posted:</span>{" "}
                {new Date(created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Seller Information Box */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-[#001D3D] mb-4">
              Seller Information
            </h3>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={seller_image}
                  alt={seller_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[#001D3D]">{seller_name}</p>
                <p className="text-xs text-gray-400">{email}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-bold text-[#001D3D]">Location:</span>{" "}
                {location}
              </p>
              <p>
                <span className="font-bold text-[#001D3D]">Contact:</span>{" "}
                {seller_contact}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[#001D3D]">Status:</span>
                <span className="bg-[#FBBF24] text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase">
                  {status}
                </span>
              </p>
            </div>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-200 transition-all uppercase tracking-wide">
            I Want Buy This Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
