import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" bg-[#babfff2c] ">
      <div className="  max-w-7xl mx-auto">
      <nav className="  flex justify-between items-center">
        <div className="py-5 text-purple-500 font-bold text-4xl">
          <Link to="/">
            <span className="text-black">Job</span>HunterBD
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500"
                    : "hover:text-purple-500 ease-in duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500"
                    : "hover:text-purple-500 ease-in duration-200"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appliedjobs"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500"
                    : "hover:text-purple-500 ease-in duration-200"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500"
                    : "hover:text-purple-500 ease-in duration-200"
                }
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <Link to="/appliedjobs">
              <button className="bg-purple-500 text-white px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                Start Applying
              </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Screen */}
        <div className="lg:hidden cursor-pointer ml-10 z-50">
          <button
            title={!isMenuOpen ? "Open Menu" : "Close Menu"}
            aria-label={!isMenuOpen ? "Open Menu" : "Close Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <Bars3BottomRightIcon className="h-6 w-6 text-black" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800 h-96 opacity-90 absolute inset-0 z-30 text-white">
            <ul className=" grid place-items-center py-20">
              <li className="font-semibold mt-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500"
                      : "hover:text-purple-500 ease-in duration-200"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500"
                      : "hover:text-purple-500 ease-in duration-200"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/appliedjobs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500"
                      : "hover:text-purple-500 ease-in duration-200"
                  }
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500"
                      : "hover:text-purple-500 ease-in duration-200"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <button className="bg-purple-500 px-4 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200 mt-3">
                  Start Applying
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
    </div>
  );
};

export default Header;
