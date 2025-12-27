import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
    const {_id, title, image, price_min, price_max} = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-4">
        <img src={image} alt={title} className="rounded-xl h-55 w-full" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-primary">
          ${price_min} - {price_max}
        </p>
        <div className="card-actions w-full">
          <Link
            to={`/productDetails/${_id}`}
            className="btn btn-primary btn-outline w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
