import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const product = useLoaderData();
  const { user } = use(AuthContext);
  const [ bids, setBids ] = useState([]);

  // Destructure product data
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

  useEffect(() => {
    fetch(`http://localhost:3000/product/bids/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for this products", data);
        setBids(data);
      });
  }, [_id]);

  

  const bidsRef = useRef(null);
  const handleBidsModal = () => {
    bidsRef.current.showModal();
  };
  const handleBidsSubmite = (e) => {
    e.preventDefault();
    // add your submit logic here
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;

    const newBid = {
      product: _id,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidsRef.current.close();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your bids has been placed",
            showConfirmButton: false,
            timer: 1500,
          });

          // add the new bid to the bids state
          newBid._id = data.insertedId; 
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => b.bid_price - a.bid_price); 
          setBids(newBids);
        }
      });
  };

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
          <button
            className="btn w-full bg-primary text-white font-bold"
            onClick={handleBidsModal}
          >
            I want to buy this product
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog ref={bidsRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              {/* Title */}
              <h2 className="text-2xl font-semibold text-center mb-6">
                Give Seller Your Offered Price
              </h2>

              {/* Form */}
              <form onSubmit={handleBidsSubmite}>
                {/* Name & Email */}
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Email</label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input"
                    name="name"
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                    className="input"
                    name="email"
                  />
                  {/* bids */}
                  <label className="label">Your Bid</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Bids"
                    name="bid"
                  />
                  <button className="btn btn-neutral mt-4">
                    Please Your Bid
                  </button>
                </fieldset>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Cencel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      {/* bids details here */}
      <div className="mt-10 bg-white p-5 rounded-2xl">
        <h2 className="text-2xl font-bold mt-5 mb-6">
          Bids For This Products:
          <span className="text-primary">{bids.length}</span>
          {/* bids tables */}
          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL NO.</th>
                  <th>Products</th>
                  <th>Buyer</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bids.map((bid, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded h-12 w-24">
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{title}</div>
                          <div className="text-sm opacity-50">${price_max}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={bid.buyer_image}
                              alt={bid.buyer_name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{bid.buyer_name}</div>
                          <div className="text-sm opacity-50">
                            {bid.buyer_email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>${bid.bid_price}</td>
                    <th>
                      <div className="btn cursor-pointer badge badge-outline badge-success">
                        Accept Offer
                      </div>
                      <div className="btn cursor-pointer badge badge-outline badge-error ml-2">
                        Reject offer
                      </div>
                    </th>
                  </tr>
                ))}
                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default ProductsDetails;
