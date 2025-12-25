import React from "react";
import { CgLogIn } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#00C2FF] font-bold" : "hover:text-[#00C2FF]"
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
            isActive ? "text-[#00C2FF] font-bold" : "hover:text-[#00C2FF]"
          }
        >
          <MdProductionQuantityLimits />
          All Products
        </NavLink>
      </li>

      {/* <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-[#00C2FF] font-bold" : "hover:text-[#00C2FF]"
          }
        >
          <FaDiagramProject />
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-[#00C2FF] font-bold" : "hover:text-[#00C2FF]"
          }
        >
          <GiSkills />
          Skills
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? "text-[#00C2FF] font-bold" : "hover:text-[#00C2FF]"
          }
        >
          <GrServices />
          Service
        </NavLink>
      </li> */}
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
          <a className="btn btn-ghost text-xl">
            {" "}
            Smart
            <span className="text-[#00C2FF] ml-[-5px]">Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            className="btn bg-primary-gradient border-0 text-white"
            to={"/login"}
          >
            <CgLogIn />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
