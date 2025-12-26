import React, { use } from "react";
import Product from "./Product";
import { Link } from "react-router";

const LatestProducts = ({ LatestProductsPromise }) => {
  const products = use(LatestProductsPromise);
  console.log(products);

  return (
    <div className="max-w-7xl mx-auto mb-14">
      <h1 className=" mt-10 mb-5 text-5xl font-bold text-center ">
        Recent <span className="text-primary">Products</span>
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link to={"/allProducts"} className="btn text-white bg-primary-gradient">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
