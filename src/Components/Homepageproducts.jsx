import { IoBagAddOutline } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import { FaCediSign } from "react-icons/fa6";

const Homepageproducts = ({ product }) => {
  const newprice = ((100 - product.discount) / 100) * product.price;
  return (
    <div
      className="hover:scale-[101%] transition-transform ease-in-out grid grid-cols-1 gap-2 bg-white/10 shadow-md hover:cursor-pointer font-poppins text-body pt-2"
      style={{ width: "clamp(165px, 34vw, 210px)" }}
    >
      {/* image */}
      <div
        className="relative rounded-[12px] overflow-hidden mx-auto "
        style={{
          width: "clamp(145px, 30vw, 180px)",
          height: "clamp(145px,30vw, 180px)",
          boxShadow: "0px 4px 9.6px 0px #00000017",
        }}
      >
        <img
          src={product.image}
          className="object-center w-full h-full"
          alt={product.name}
        />
        <p className="absolute bg-black/50 z-10 opacity-0 hover:opacity-100 inset-0 "></p>
        {product.availability == true ? (
          <p
            style={{ fontSize: "clamp(12px,1.5vw,15.5px)" }}
            className="absolute  flex items-center justify-center  gap-2 text-gray-100 font-medium bg-black/20 inset-0 rounded-[12px] opacity-0 hover:opacity-100 w-full h-full transition duration-300 ease-in-out  hover:cursor-pointer z-10"
          >
            Buy Now
            <span>
              <TbExternalLink />
            </span>
          </p>
        ) : (
          <p
            style={{ fontSize: "clamp(13px,1.5vw,18px)" }}
            className="absolute  flex items-center justify-center  gap-2 text-gray-100 font-medium bg-black/20 inset-0 rounded-[12px] w-full h-full transition duration-300 ease-in-out  hover:cursor-pointer z-10"
          >
            OUT OF STOCK
          </p>
        )}
        <p
          style={{ fontSize: "clamp(10px, 1.825vw, 14px)" }}
          className=" absolute top-2 right-2 py-[4px] px-3 rounded-2xl text-[#FF3333] bg-[#FF3333]/10 font-medium"
        >
          -{product.discount}%
        </p>
      </div>
      {/* details */}
      <div className="px-3 pb-3">
        <div
          className={`mt-3 grid grid-cols-1 gap-1 md:gap-2 ${
            product.availability == true ? "text-black" : "text-sub"
          } `}
        >
          {/* brand, rating, and name */}
          <ul className="flex flex-col gap-0.5 md:gap-1">
            {/* brand and rating */}
            <ul className="flex flex-wrap space-y-1 justify-between items-center">
              <li
                className="font-mont font-semibold max-w-2/3 uppercase"
                style={{ fontSize: "clamp(15px,1.5vw,17px)" }}
              >
                {product.brand}
              </li>
              <li
                className="flex items-center gap-1 font-medium"
                style={{ fontSize: "clamp(11px, 1.6vw, 13px)" }}
              >
                <img
                  src="assets/svg/star.svg"
                  alt="star svg"
                  className="w-3.5 md:w-4"
                />

                <span>
                  {product.rating}
                  <span className="text-sub">/5</span>
                </span>
              </li>
            </ul>
            {/* name */}
            <li style={{ fontSize: "clamp(14px,1.2vw,15px)" }}>
              {product.name}
            </li>
          </ul>
          {/* actual price and discounted price */}
          <ul className="flex gap-1 items-center font-semibold">
            <li
              style={{ fontSize: "clamp(18px,3vw,20px)" }}
              className=" flex items-center"
            >
              <span className="text-sm tier2:text-[15px]">
                <FaCediSign />
              </span>
              {newprice.toLocaleString()}
            </li>
            <li
              style={{ fontSize: "clamp(13px, 2vw, 14px)" }}
              className="text-[rgb(0,0,0,0.4)] font-medium line-through flex items-center"
            >
              <span className="text-[10px] tier2:text-[12px]">
                <FaCediSign />
              </span>
              {product.price.toLocaleString()}
            </li>
          </ul>
        </div>

        {/* add to cart */}
        {/* <button className="bg-black mt-3 hover:cursor-pointer hover:bg-black/80 py-2 md:py-2.5 w-full text-white rounded-md flex justify-center items-center gap-2">
          <span className="text-base">
            <IoBagAddOutline />
          </span>
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};
export default Homepageproducts;
