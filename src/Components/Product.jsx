import React from "react";

const Product = ({ product }) => {
    const { title, image, price_min, price_max} = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-4">
        <img src={image} alt={title} className="rounded-xl h-55 w-full" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>
          Price: ${price_min} - {price_max}
        </p>
        <div className="card-actions w-full">
          <button className="btn btn-primary btn-outline w-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
