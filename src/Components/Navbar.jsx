import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoSparklesSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(true);
  return (
    <section className="fixed w-full z-40">
      {isShowing && (
        // black signup pop up
        <div
          className="bg-[#000000]  text-white py-[6.5px] px-3 flex items-center gap-10 tier1:justify-center"
          style={{ fontSize: "clamp(9px, 2.3vw, 12px)" }}
        >
          <p className=" flex gap-1 tier1:gap-3">
            Sign up and get 20% off to your first order.
            <span className="underline hover:cursor-pointer hover:text-[#bf9fff]">
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
              src="../../public/assets/svg/close.svg"
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
              <Link to="/">
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
                <li className="hover:text-primary hover:cursor-pointer">
                  Shop
                </li>

                <li className="hover:text-primary hover:cursor-pointer">
                  On Sale
                </li>
                <li className="hover:text-primary hover:cursor-pointer">
                  New Arrivals
                </li>
                <li className="hover:text-primary hover:cursor-pointer">
                  Brands
                </li>
              </ul>
            </div>

            {/* Nav Links for sm & md screens */}
            {isOpen && (
              <div className="lg:hidden mt-5 bg-gray-100 p-4 rounded-lg text-gray-600 order-1 w-full ">
                <ul className="space-y-4 text-center text-body">
                  <li>
                    <a href="#" className="block hover:text-[#8c53ff]">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-[#8c53ff]">
                      On Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-[#8c53ff]">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-[#8c53ff]">
                      Brands
                    </a>
                  </li>
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
                <button className=" hover:bg-slate-50 hover:cursor-pointer  hover:rounded-full p-2">
                  <img
                    src="assets/svg/cart.svg"
                    alt="cart svg"
                    className="w-5 tier1:w-6"
                  />
                </button>

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
