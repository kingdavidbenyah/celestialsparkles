import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="font-poppins">
      <div className=" mt-45 md:mt-32 pb-5 relative px-3 tier1:px-[20px] w-full bg-gradient-to-r from-[#ffffff] to-[#9668f3] ">
        <ul className="absolute left-[5%] right-[5%] md:right-[8%] lg:right-[3%] xl:right-[10%] md:left-[8%] lg:left-[3%] xl:left-[10%] top-[-20%] tier3:top-[-13.5%] bg-black flex flex-col tier3:flex-row gap-5 justify-between items-center px-5 tier1:px-10 tier2:px-12  lg:px-16 py-7 md:py-8 max-w-6xl rounded-4xl">
          <li
            style={{ fontSize: "clamp(23px, 2.8vw, 35px)" }}
            className="leading-10 font-mont font-extrabold text-white w-full md:max-w-[500px] text-left"
          >
            BE THE FIRST TO KNOW ABOUT HOT OFFERS!
          </li>
          <ul className="grid grid-cols-1 gap-2 w-full lg:w-auto">
            <ul className="relative">
              <li className="absolute left-4 top-1/3 text-base text-black/40">
                <TfiEmail />
              </li>
              <li
                className="text-reviewsub  text-black/90  font-normal bg-white rounded-3xl"
                style={{ fontSize: "clamp(13.5px, 1.2vw, 14.5px)" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="px-10 py-3 outline-none w-full md:w-auto"
                />
              </li>
            </ul>
            <li>
              <button
                style={{ fontSize: "clamp(13.5px, 1.2vw, 14.5px)" }}
                className="w-full  lg:px-25 py-3 hover:cursor-pointer hover:bg-white/93  text-center text-black font-medium bg-white rounded-3xl"
              >
                Subscribe & Save!
              </button>
            </li>
          </ul>
        </ul>
        <div className="pt-38 pb-15 flex flex-col xl:flex-row  items-center w-fit gap-10 max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 gap-2">
            {/* Logo */}
            <Link to="/">
              <div>
                <img
                  src="../../public/assets/svg/CS logo.svg"
                  alt="CS logo"
                  style={{
                    width: "clamp(65px, 20vw, 100px)",
                    height: "clamp(55px, 20vw, 85px)",
                  }}
                />
              </div>
            </Link>
            <li className="text-sub max-w-[400px]">
              Wear what you love, love what you wear—fashion made just for you,
              no matter your style!
            </li>
            <ul className="flex items-center gap-3 py-3 text-2xl">
              <li className="p-2 bg-white rounded-full hover:cursor-pointer hover:scale-105 transition ease-in-out">
                <FaXTwitter />
              </li>
              <li className="p-2 bg-white rounded-full hover:cursor-pointer hover:scale-105 transition ease-in-out">
                <FaFacebookF />
              </li>

              <li className="p-2 bg-white rounded-full hover:cursor-pointer hover:scale-105 transition ease-in-out">
                <FaInstagram />
              </li>
              <li className="p-2 bg-white rounded-full hover:cursor-pointer hover:scale-105 transition ease-in-out">
                <FaGithub />
              </li>
            </ul>
          </ul>
          <div className="flex flex-wrap gap-10">
            <ul className="text-sub text-reviewsub space-y-2 tracking-wide">
              <li className="text-black font-bold mb-2 text-body tracking-wider">
                COMPANY
              </li>
              <li className="hover:cursor-pointer hover:text-black">About</li>
              <li className="hover:cursor-pointer hover:text-black">
                Features
              </li>
              <li className="hover:cursor-pointer hover:text-black">Works</li>
              <li className="hover:cursor-pointer hover:text-black">Career</li>
            </ul>
            <ul className="text-sub text-reviewsub space-y-2 tracking-wide">
              <li className="text-black font-bold mb-2 text-body tracking-wider">
                HELP
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                Customer Support
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                Delivery Details
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                Terms & Condition
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                Privacy Policy
              </li>
            </ul>
            <ul className="text-sub text-reviewsub space-y-2 tracking-wide">
              <li className="text-black font-bold mb-2 text-body tracking-wider">
                FAQ
              </li>
              <li className="hover:cursor-pointer hover:text-black">Account</li>
              <li className="hover:cursor-pointer hover:text-black">
                Manage Delivieries
              </li>
              <li className="hover:cursor-pointer hover:text-black">Orders</li>
              <li className="hover:cursor-pointer hover:text-black">
                Payments
              </li>
            </ul>
            <ul className="text-sub text-reviewsub space-y-2 tracking-wide">
              <li className="text-black font-bold mb-2 text-body tracking-wider">
                RESOURCES
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                Free eBooks
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                Development Tutorial
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                How to -Blog
              </li>
              <li className="hover:cursor-pointer hover:text-black">
                Youtube Playlist
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex items-center justify-between py-10 max-w-6xl mx-auto border-t-2 border-black/10">
          <li className="text-sub text-reviewsub">
            Urban|Fits @1995-2025, All Rights Reserved
          </li>
          <ul className="flex items-center gap-3">
            <li className="bg-white py-2 px-3 rounded-md hover:cursor-pointer">
              <img
                src="../../public/assets/svg/visa.svg"
                alt="visa svg"
                className="lg:w-15"
              />
            </li>
            <li className="bg-white py-2 px-3 rounded-md hover:cursor-pointer">
              <img
                src="../../public/assets/svg/mastercard.svg"
                alt="mastercard svg"
                className="lg:w-9"
              />
            </li>
            <li className="bg-white py-2 px-3 rounded-md hover:cursor-pointer">
              <img
                src="../../public/assets/svg/paypal.svg"
                alt="paypal svg"
                className="lg:w-16"
              />
            </li>
            <li className="bg-white py-2 px-3 rounded-md hover:cursor-pointer">
              <img
                src="../../public/assets/svg/applepay.svg"
                alt="applepay svg"
                className="lg:w-11"
              />
            </li>
            <li className="bg-white py-2 px-3 rounded-md hover:cursor-pointer">
              <img
                src="../../public/assets/svg/googlepay.svg"
                alt="googlepay svg"
                className="lg:w-11"
              />
            </li>
          </ul>
        </ul>
      </div>
    </section>
  );
}
export default Footer;
