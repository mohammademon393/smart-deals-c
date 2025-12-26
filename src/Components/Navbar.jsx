import React, { useContext } from "react";
import { CgLogIn } from "react-icons/cg";
import { FaGavel, FaUser } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";
import { MdCreateNewFolder, MdInventory2, MdProductionQuantityLimits } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {

  const { user, signOutGoogle } = useContext(AuthContext);

  // sign out handler
  const handleSignOut = () => {
    signOutGoogle()
      .then((result) => { 
        console.log(result.user);
       })
      .catch((error) => {
        console.log(error.message);
      })};


  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#00C2FF] underline font-bold"
              : "hover:text-[#00C2FF]"
          }
        >
          {" "}
          <IoIosHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            isActive
              ? "text-[#00C2FF] underline font-bold"
              : "hover:text-[#00C2FF]"
          }
        >
          <MdProductionQuantityLimits />
          All Products
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/myProducts"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00C2FF] underline font-bold"
                  : "hover:text-[#00C2FF]"
              }
            >
              <MdInventory2 />
              My Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBids"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00C2FF] underline font-bold"
                  : "hover:text-[#00C2FF]"
              }
            >
              <FaGavel />
              My Bids
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createProduct"
              className={({ isActive }) =>
                isActive
                  ? "text-[#00C2FF] underline font-bold"
                  : "hover:text-[#00C2FF]"
              }
            >
              <MdCreateNewFolder />
              Create Product
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#010811] via-[#0a3a6e] to-[#010811]">
      <div className="navbar max-w-7xl mx-auto text-white shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gradient-to-r from-[#010811] via-[#0a3a6e] to-[#010811] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to={'/'} className="cursor-pointer font-semibold text-3xl">
            {" "}
            Smart
            <span className="text-primary ml-[-5px]">Deals</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            ""
          ) : (
            <Link
              to={"/singUp"}
              className="btn btn-outline btn-primary border-2 mr-2 text-white"
            >
              <FiLogOut />
              Register
            </Link>
          )}
          {user ? (
            <Link
              onClick={handleSignOut}
              className="btn btn-outline btn-primary border-2 mr-2 text-white"
            >
              <FiLogOut />
              Log Out
            </Link>
          ) : (
            <Link
              className="btn bg-primary-gradient border-0 text-white"
              to={"/login"}
            >
              <CgLogIn />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
