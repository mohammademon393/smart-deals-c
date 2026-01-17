import React from "react";

const CreateProduct = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center ">
        Create <span className="text-primary">A Product</span>
      </h2>

      <div className=" flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-10">

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="label">Title</label>
              <input
                type="text"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                className="input input-bordered w-full"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">Category</label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select a Category
                </option>
                <option>Electronics</option>
                <option>Musical Instruments</option>
                <option>Furniture</option>
                <option>Others</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="label">Min Price you want to Sale ($)</label>
              <input
                type="number"
                placeholder="e.g. 18.5"
                className="input input-bordered w-full"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="label">Max Price you want to Sale ($)</label>
              <input
                type="number"
                placeholder="Optional (default = Min Price)"
                className="input input-bordered w-full"
              />
            </div>

            {/* Product Condition */}
            <div>
              <label className="label">Product Condition</label>
              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    className="radio radio-primary"
                    defaultChecked
                  />
                  <span>Brand New</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    className="radio radio-primary"
                  />
                  <span>Used</span>
                </label>
              </div>
            </div>

            {/* Product Usage Time */}
            <div>
              <label className="label">Product Usage time</label>
              <input
                type="text"
                placeholder="e.g. 1 year 3 month"
                className="input input-bordered w-full"
              />
            </div>

            {/* Product Image URL */}
            <div className="md:col-span-2">
              <label className="label">Product Image URL</label>
              <input
                type="text"
                placeholder="https://..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Seller Name */}
            <div>
              <label className="label">Seller Name</label>
              <input
                type="text"
                placeholder="e.g. Artisan Roasters"
                className="input input-bordered w-full"
              />
            </div>

            {/* Seller Email */}
            <div>
              <label className="label">Seller Email</label>
              <input
                type="email"
                placeholder="seller@email.com"
                className="input input-bordered w-full"
              />
            </div>

            {/* Seller Contact */}
            <div>
              <label className="label">Seller Contact</label>
              <input
                type="text"
                placeholder="e.g. +1-555-1234"
                className="input input-bordered w-full"
              />
            </div>

            {/* Seller Image */}
            <div>
              <label className="label">Seller Image URL</label>
              <input
                type="text"
                placeholder="https://..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2">
              <label className="label">Location</label>
              <input
                type="text"
                placeholder="City, Country"
                className="input input-bordered w-full"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="label">
                Simple Description about your Product
              </label>
              <textarea
                rows="4"
                placeholder="e.g. I bought this product 3 months ago..."
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button className="btn w-full bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-xl">
                Create A Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
