import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);
  const product = useLoaderData();

  // Destructure product data
  const { _id, title, price_max, image, email, seller_image, seller_name } =
    product || {};
  console.log('token', user.accessToken);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`,{
        headers: {
          authorization: `bearer ${user.accessToken}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setBids(data);
        });
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingBids = bids.filter((bid) => bid._id !== _id);
              setBids(remainingBids);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      {/* bids details here */}
      <div className="my-10 bg-white p-5 rounded-2xl max-w-7xl mx-auto">
        {/* page title */}
        <h2 className="text-2xl font-bold mt-5 mb-6 text-center">
          My Bids:
          <span className="text-primary">{bids.length}</span>
          {/* bids tables */}
          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* table head */}
              <thead>
                <tr>
                  <th>SL NO.</th>
                  <th>Products</th>
                  <th>Seller</th>
                  <th>Bid Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  bids.map((bid, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        {/* product image */}
                        <div className="avatar">
                          <div className="mask rounded h-12 w-24">
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        {/* product details */}
                        <div>
                          <div className="font-bold">{title}</div>
                          <div className="text-sm opacity-50">${price_max}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          {/* seller image */}
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={seller_image} alt={seller_name} />
                          </div>
                        </div>
                        <div>
                          {/* seller details */}
                          <div className="font-bold">{seller_name}</div>
                          <div className="text-sm opacity-50">{email}</div>
                        </div>
                      </div>
                      {/* price bid */}
                    </td>
                    <td>${bid.bid_price}</td>
                    <th>
                      <div className="badge badge-warning">{bid.status}</div>
                    </th>
                    <th>
                      {/* <div className="btn cursor-pointer badge badge-outline badge-primary">
                        Edit
                      </div> */}
                      <button
                        onClick={() => handleDelete(bid._id)}
                        className="btn cursor-pointer badge badge-outline badge-error ml-2"
                      >
                        Remove Bid
                      </button>
                      {/* <div className="btn cursor-pointer badge badge-outline badge-success ml-2">
                        Make Sold
                      </div> */}
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

export default MyBids;
