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
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Back */}
      <Link to="/" className="text-sm text-gray-500 hover:underline">
        ← Back To Products
      </Link>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Left Image */}
        <div className="lg:col-span-2 bg-gray-100 rounded-xl h-[360px] flex items-center justify-center">
          <img src={image} alt={title} className="max-h-full object-contain" />
        </div>

        {/* Right Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>

          <span className="badge badge-secondary">{category}</span>

          {/* Price */}
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-600 text-xl font-semibold">
              ৳ {price_min} - {price_max}
            </p>
            <p className="text-sm text-gray-500">Price Range</p>
          </div>

          {/* Product Details */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <p className="text-sm">Product ID: {_id}</p>
            <p className="text-sm">
              Posted: {new Date(created_at).toLocaleDateString()}
            </p>
            <p className="text-sm">
              Status:{" "}
              <span className="capitalize font-medium text-orange-600">
                {status}
              </span>
            </p>
          </div>

          {/* Seller Info */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Seller Information</h3>

            <div className="flex items-center gap-3">
              <img
                src={seller_image}
                alt={seller_name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{seller_name}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>

            <div className="text-sm mt-3 space-y-1">
              <p>📍 Location: {location}</p>
              <p>📞 Contact: {seller_contact}</p>
            </div>
          </div>

          {/* CTA */}
          <button className="btn btn-primary w-full">
            I Want To Buy This Product
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-3">Product Description</h3>

        <div className="flex gap-6 text-sm mb-3">
          <p>
            <span className="font-medium">Condition:</span> {condition}
          </p>
          <p>
            <span className="font-medium">Usage:</span> {usage}
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductsDetails;
