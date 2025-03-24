import { useState, useEffect } from "react";
import ProductSection from "./ProductSection";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CustomerReviews from "./CustomerReviews.jsx";
function Homepage() {
  const [datas, setDatas] = useState([]);
  const fetchReviews = async () => {
    const reviews = await fetch("CustomerReviews.json");
    const items = await reviews.json();
    console.log(items);
    setDatas(items);
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const handleCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="text-body font-poppins">
      {/* Hero Section */}
      <section className="min-w-[320px] pt-[150px] tier1:pt-[165px] tier2:pt-[180px] xl:pt-[50px] bg-gradient-to-r from-[#ffffff] to-[#9668f3]  flex flex-col xl:flex-row gap-5 lg:gap-0 items-center justify-around">
        {/* Info */}
        <div className="pb-10 space-y-5 w-fit max-w-[680px] order-1 lg:order-0">
          <ul className="text-center xl:text-left space-y-5 px-6 tier1:px-10 w-fit">
            {/* heading */}
            <li
              className="font-raleway font-bold tier2:font-extrabold leading-8 md:leading-15  tracking-wide "
              style={{ fontSize: "clamp(28px, 6.5vw, 55px)" }}
            >
              Welcome to Celestial Sparkles
            </li>
            <li className="max-w-[545px] text-sub">
              Explore our exclusive collection of premium jewelry, wigs, and
              accessories designed for the modern queen. Elevate your style with
              elegance.
            </li>
            {/* CTA */}
            <li className="text-btn w-full flex justify-center xl:justify-start">
              <button className="py-[14px] tier1:py-4 px-14 w-full tier2:w-auto rounded-4xl bg-black hover:bg-[rgb(0,0,0,0.8)] hover:cursor-pointer text-white">
                Shop Now
              </button>
            </li>
          </ul>
          <ul className="text-center xl:text-left tier1:px-10 flex flex-wrap justify-center items-center gap-4 xl:gap-7 px-3 lg:px-10 lg:justify-start">
            <li className="text-stat grid grid-cols-1 font-medium ">
              150+
              <span
                className="text-sub text-body
            "
              >
                International Brands
              </span>
            </li>
            <li>
              <img src="assets/svg/Line.svg" alt="line svg" />
            </li>
            <li className="text-stat grid grid-cols-1 font-medium">
              2,000+
              <span
                className="text-sub text-body
            "
              >
                High-Quality Products
              </span>
            </li>
            <li>
              <img
                src="assets/svg/Line.svg"
                alt="line svg"
                className="line-svg"
              />
            </li>
            <li className="text-stat grid grid-cols-1 font-medium">
              3,000+
              <span
                className="text-sub text-body
            "
              >
                Happy Customers
              </span>
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="lg:h-screen flex items-center">
          <div className="flex flex-col items-center justify-center gap-2 max-w-400 w-fit">
            <div className="flex hexcover">
              <div>
                <img
                  src="assets/pics/hex1.jpg"
                  alt="hex 1"
                  className=" object-cover object-center hexclip"
                />
              </div>
              <div>
                <img
                  src="assets/pics/hex2.jpg"
                  alt="hex 2"
                  className=" object-top object-cover hexclip"
                />
              </div>
            </div>
            <div>
              <img
                src="assets/pics/hex3.jpg"
                alt="hex 3"
                className="object-top object-cover hexclip hex3"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section */}
      <ul className="min-w-[320px] px-2 md:px-5 flex flex-wrap bg-black py-7 lg:pt-8 lg:pb-5  justify-center items-center space-x-8 tier1:space-x-7 md:space-x-16 space-y-2 md:space-y-3 xl:space-x-24">
        <li>
          <img
            src="assets/svg/gucci.svg"
            alt="gucci svg"
            className="tier2:px-0 w-24 tier1:w-28 md:w-30 lg:w-32 xl:w-40"
          />
        </li>
        <li className="text-[30px] text-white">CHANEL</li>
        <li className="text-[30px] text-white tracking-widest font-raleway">
          BVLGARI
        </li>
        <li className="text-[40px] text-white font-italianno">Cartier</li>
        <li className="text-[30px] text-white font-playfair tracking-wider">
          KENDRA SCOTT
        </li>
      </ul>

      <section className="min-w-[320px] max-w-7xl mx-auto">
        {/* New Collection */}
        <ProductSection
          sectionTitle="NEW COLLECTION"
          json="Rings.json"
          button="false"
          handleCartCount={handleCartCount}
          cartCount={cartCount}
        />
        <div className="border-1 border-black/10 mx-auto w-[65%]"></div>
        {/* Top Selling
        <ProductSection
          sectionTitle="BEST SELLING"
          json="TopSelling.json"
          button="true"
        /> */}
      </section>

      {/* ALL New Arrivals */}
      {/* <ProductSection
        sectionTitle="ALL NEW ARRIVALS"
        json="newarrivals.json"
        extrajson="allnewarrivals.json"
      /> */}
      {/* ALL Top Selling */}
      {/* <ProductSection
        sectionTitle="ALL TOP SELLING"
        json="topselling.json"
        extrajson="alltopselling.json"
      /> */}

      {/* Browse dress style */}
      <section className="min-w-[320px] py-2 px-5 lg:px-20 ">
        <div className="bg-gradient-to-r from-[#ffffff] to-[#9668f3] py-12 rounded-4xl">
          <p className="font-mont text-center text-sectiontitle font-extrabold">
            EXPLORE BY CATEGORY
          </p>

          <div className="px-5 mx-auto max-w-5xl py-10 flex justify-center flex-wrap gap-5 md:gap-3 text-stat text-black font-medium">
            <div
              className="relative hover:cursor-pointer  w-full tier2:w-auto bg-white rounded-2xl overflow-hidden"
              style={{
                height: "clamp(190px,20vw,289px)",
                width: "clamp(290px, 32vw,400px)",
              }}
            >
              <p className="absolute top-5 lg:top-1 left-5 text-white tracking-wider z-20">
                Necklace
              </p>

              <img
                src="https://www.mytheresa.com/content/652/466/65/88eae79b-2be8-4b6c-af1e-6d6b53391d3e.jpg"
                alt="necklace img"
                className="object-cover"
              />
              <p className="absolute inset-0 bg-black/30"></p>
            </div>
            <div
              className="relative hover:cursor-pointer bg-white rounded-2xl overflow-hidden"
              style={{
                height: "clamp(190px,20vw,289px)",
                width: "clamp(290px, 40vw,680px)",
              }}
            >
              <p className="absolute top-5 lg:top-1 left-5 text-white tracking-wider z-20">
                Earrings
              </p>

              <img
                src="https://www.mytheresa.com/content/652/466/65/6a0d0143-d2df-4361-8bbf-eed528415928.jpg"
                alt="earrings img"
                className="object-cover"
              />
              <p className="absolute inset-0 bg-black/30"></p>
            </div>
            <div
              className="relative hover:cursor-pointer bg-white rounded-2xl overflow-hidden"
              style={{
                height: "clamp(190px,20vw,289px)",
                width: "clamp(290px, 40vw,680px)",
              }}
            >
              <p className="absolute top-5 lg:top-1 left-5 text-white tracking-wider z-20">
                Rings
              </p>

              <img
                src="https://www.mytheresa.com/content/652/466/65/284b2773-7012-4f61-9f14-b368dc31a657.jpg"
                alt="Rings img"
                className="object-cover"
              />
              <p className="absolute inset-0 bg-black/30"></p>
            </div>
            <div
              className="relative hover:cursor-pointer bg-white rounded-2xl overflow-hidden"
              style={{
                height: "clamp(190px,20vw,289px)",
                width: "clamp(290px, 32vw,400px)",
              }}
            >
              <p className="absolute top-5 lg:top-1 left-5 text-white tracking-wider z-20">
                Bracelets
              </p>

              <img
                src="https://www.mytheresa.com/content/652/466/65/725d4302-ad03-45f7-8064-6595f74bd750.jpg"
                alt="bracelets img"
                className="object-cover"
              />
              <p className="absolute inset-0 bg-black/30"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="my-20">
        {/* Heading */}
        <div className="flex items-center justify-between px-5 lg:px-24">
          <p className="font-mont text-sectiontitle font-extrabold">
            OUR HAPPY CUSTOMERS
          </p>
          <ul className="flex items-center gap-3 text-3xl text-sub">
            <li className="hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
              <FaAngleLeft />
            </li>
            <li className="hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
              <FaAngleRight />
            </li>
          </ul>
        </div>
        {/* testimonial */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-8 px-4">
          {datas.map((data) => (
            <CustomerReviews key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Homepage;
