import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoSparklesSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
function Navbar({ count }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(true);

  const location = useLocation(); // Get the current route

  return (
    <section className="fixed w-full z-40 font-poppins">
      {isShowing && (
        // black signup pop up
        <div
          className="bg-[#000000]  text-white py-2 px-3 flex items-center gap-10 tier1:justify-center"
          style={{ fontSize: "clamp(10.5px, 2.3vw, 13px)" }}
        >
          <p className=" flex gap-1 tier1:gap-3">
            Sign up and get 20% off to your first order.
            <span className="underline hover:cursor-pointer hover:text-[#bf9fff] focus:text-[#bf9fff]">
              Sign Up Now
            </span>
          </p>
          <p
            className="absolute right-5 md:right-[90px]"
            onClick={() => {
              setIsShowing(!isShowing);
            }}
          >
            <img
              src="assets/svg/close.svg"
              alt="close svg"
              className="hover:cursor-pointer w-[9.5px] tier1:w-3 hover:scale-105 transition 0.5s ease-in-out"
            />
          </p>
        </div>
      )}
      <nav className=" min-w-[320px] bg-white shadow-md  w-full py-2 lg:py-0">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              {/* hamburger */}
              <div onClick={() => setIsOpen(!isOpen)}>
                <img
                  src="assets/svg/navhamburger.svg"
                  alt="hamburger svg "
                  className="mt-2 lg:hidden hover:cursor-pointer w-5 tier1:w-6 md:w-7  focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm h-fit"
                />
              </div>

              {/* Logo */}
              <Link
                to="/"
                onClick={() => {
                  setIsOpen((isOpen = false));
                }}
              >
                <div className=" text-[#8c53ff]">
                  <img
                    src="assets/svg/CS logo.svg"
                    alt="CS logo"
                    style={{
                      width: "clamp(65px, 20vw, 100px)",
                      height: "clamp(55px, 20vw, 85px)",
                    }}
                  />
                </div>
              </Link>

              {/* Nav Links for lg screens */}
              <ul className="hidden lg:flex space-x-6 text-gray-700">
                <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>
                  <li
                    className={`${
                      location.pathname === "/shop" ? "" : "hover:text-primary"
                    } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                  >
                    {" "}
                    Shop
                    {location.pathname === "/shop" && (
                      <span className="w-2.5 h-0.5 rounded-full bg-primary"></span>
                    )}
                  </li>
                </Link>
                <Link to="/onsale" onClick={() => window.scrollTo(0, 0)}>
                  <li
                    className={`${
                      location.pathname === "/onsale"
                        ? ""
                        : "hover:text-primary"
                    } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                  >
                    {" "}
                    On Sale
                    {location.pathname === "/onsale" && (
                      <span className="w-2.5 h-0.5 rounded-full bg-primary"></span>
                    )}
                  </li>
                </Link>
                <Link to="newarrivals" onClick={() => window.scrollTo(0, 0)}>
                  <li
                    className={`${
                      location.pathname === "/newarrivals"
                        ? ""
                        : "hover:text-primary"
                    } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                  >
                    {" "}
                    New Arrivals
                    {location.pathname === "/newarrivals" && (
                      <span className="w-2.5 h-0.5 rounded-full bg-primary"></span>
                    )}
                  </li>
                </Link>
                <Link to="brands" onClick={() => window.scrollTo(0, 0)}>
                  <li
                    className={`${
                      location.pathname === "/brands"
                        ? ""
                        : "hover:text-primary"
                    } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                  >
                    Brands
                    {location.pathname === "/brands" && (
                      <span className="w-2.5 h-0.5 rounded-full bg-primary"></span>
                    )}
                  </li>
                </Link>
              </ul>
            </div>

            {/* Nav Links for sm & md screens */}
            {isOpen && (
              <div
                className="lg:hidden mt-5 mb-3 bg-gray-100 p-4 rounded-lg text-gray-600 order-1 w-full "
                style={{ fontSize: "clamp(13px, 2vw, 15px)" }}
              >
                <ul className="grid grid-cols-1 gap-3 md:gap-4 text-center">
                  <Link
                    to="/shop"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <li
                      className={`${
                        location.pathname === "/shop"
                          ? ""
                          : "hover:text-primary"
                      } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                    >
                      Shop
                      {location.pathname === "/shop" && (
                        <span className="w-3 h-0.5 rounded-full bg-primary"></span>
                      )}
                    </li>
                  </Link>
                  <Link
                    to="/onsale"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <li
                      className={`${
                        location.pathname === "/onsale"
                          ? ""
                          : "hover:text-primary"
                      } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                    >
                      {" "}
                      On Sale
                      {location.pathname === "/onsale" && (
                        <span className="w-3 h-0.5 rounded-full bg-primary"></span>
                      )}
                    </li>
                  </Link>
                  <Link
                    to="newarrivals"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <li
                      className={`${
                        location.pathname === "/newarrivals"
                          ? ""
                          : "hover:text-primary"
                      } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                    >
                      New Arrivals
                      {location.pathname === "/newarrivals" && (
                        <span className="w-3 h-0.5 rounded-full bg-primary"></span>
                      )}
                    </li>
                  </Link>
                  <Link
                    to="brands"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <li
                      className={`${
                        location.pathname === "/brands"
                          ? ""
                          : "hover:text-primary"
                      } hover:cursor-pointer flex flex-col gap-[1px] items-center`}
                    >
                      Brands
                      {location.pathname === "/brands" && (
                        <span className="w-3 h-0.5 rounded-full bg-primary"></span>
                      )}
                    </li>
                  </Link>
                </ul>
              </div>
            )}

            <div className="flex items-center space-x-5">
              {/* Search Bar */}
              <div className="px-3 hidden md:flex items-center gap-2 bg-gray-100  rounded-full w-72 xl:w-88  focus:ring-2 focus:ring-gray-300">
                <button className="w-4 h-5 text-gray-400">
                  <img src="assets/svg/navsearch.svg" alt="nav search svg" />
                </button>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-gray-100 text-gray-600 py-2 w-full outline-none "
                />
              </div>

              {/* Icons */}
              <div className="flex space-x-1 md:space-x-2">
                <button className="text-black hover:bg-slate-50 hover:cursor-pointer  hover:rounded-full p-2 text-[20px] tier1:text-[24px] font-bold md:hidden">
                  <FiSearch />
                </button>
                <div className="relative">
                  <button className="hover:bg-slate-50 hover:cursor-pointer  hover:rounded-full p-2">
                    <img
                      src="assets/svg/cart.svg"
                      alt="cart svg"
                      className="w-5 tier1:w-6"
                    />
                  </button>
                  <p className="absolute top-[-2px] left-1/2 text-gray-700 bg-primary h-4.5 w-4.5 xl:h-5 xl:w-5 flex justify-center items-center rounded-full text-[11px] xl:text-[12px] font-medium">
                    <span className="w-fit">{count}</span>
                  </p>
                </div>

                <button className="text-black hover:bg-slate-50 hover:cursor-pointer  hover:rounded-full p-2">
                  <img
                    src="assets/svg/navprofile.svg"
                    alt="profile svg"
                    className="w-5 tier1:w-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
