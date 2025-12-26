import React from "react";
import bgLeft from "../assets/bg-hero-left.png";
import bgRight from "../assets/bg-hero-right.png";
import { FaBeer, FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-[linear-gradient(128.29deg,_#FFE6FD_0%,_#E0F8F5_100%)] ">
      {/* Left Background Image */}
      <img
        src={bgLeft}
        alt="bg left"
        className="absolute left-0 top-0 h-full object-contain"
      />

      {/* Right Background Image */}
      <img
        src={bgRight}
        alt="bg right"
        className="absolute right-0 top-0 h-full object-contain"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5 h-full text-center items-center justify-center">
        <h1 className="text-5xl font-bold">
          Deal your <span className="text-primary">products</span> <br /> in a{" "}
          <span className="text-primary">smart</span> way !
        </h1>
        <p className="text-[#627382]">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        <div className="join w-[500px]">
          <input
            className="input input-bordered join-item w-full rounded-l-2xl"
            placeholder="search For Products, Categoriees..."
          />
          <button className="btn btn-primary join-item rounded-r-2xl">
            <FaSearch />
          </button>
        </div>
        <div>
          <Link className="btn bg-primary-gradient text-white mr-2">
            Watch All Products
          </Link>
          <Link className="btn btn-primary btn-outline">Post an Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
