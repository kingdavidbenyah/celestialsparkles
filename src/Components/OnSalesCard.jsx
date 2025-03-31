import { IoBagAddOutline, IoBagCheckOutline } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import { FaCediSign } from "react-icons/fa6";
import { BsFillLightningFill } from "react-icons/bs";

const OnSalesCard = ({ product, handleAddToCart, isAdded }) => {
  const newprice = ((100 - product.discount) / 100) * product.price;
  const percentleft = 100 - product.amountsold;
  return (
    <div
      className="min-w-[250px] grid grid-cols-1 gap-2 bg-white/10 shadow-md hover:cursor-pointer font-poppins text-body pt-2"
      style={{ width: "clamp(250px, 100vw,300px)" }}
    >
      {/* image */}
      <div
        className="relative rounded-[15px] overflow-hidden mx-auto "
        style={{
          width: "clamp(230px, 70vw, 270px)",
          height: "clamp(230px,70vw, 270px)",
          boxShadow: "0px 4px 9.6px 0px #00000017",
        }}
      >
        <img
          src={product.image}
          className="object-center w-full h-full"
          alt={product.name}
        />
        <p className="absolute bg-black/50 z-10 opacity-0 hover:opacity-100 "></p>
        {product.availability == true ? (
          <p
            style={{ fontSize: "clamp(16px,2.5vw,18px)" }}
            className="absolute  flex items-center justify-center  gap-2 text-gray-100 font-medium bg-black/20 inset-0 rounded-[15px] opacity-0 hover:opacity-100 w-full h-full transition duration-300 ease-in-out  hover:cursor-pointer z-10"
          >
            Buy Now
            <span>
              <TbExternalLink />
            </span>
          </p>
        ) : (
          <p
            style={{ fontSize: "clamp(20px,2.5vw,25px)" }}
            className="absolute  flex items-center justify-center  gap-2 text-gray-100 font-medium bg-black/20 inset-0 rounded-[15px] w-full h-full transition duration-300 ease-in-out  hover:cursor-pointer z-10"
          >
            OUT OF STOCK
          </p>
        )}
        <p
          style={{
            fontSize: "clamp(13px, 2vw, 16px)",
          }}
          className="flex items-center gap-1 italic absolute top-0 left-0  py-1.5 px-5 rounded-br-[25px] rounded-tl-[10px] text-[#FF3333] bg-[#FF3333]/10 font-medium"
        >
          <BsFillLightningFill />
          Flash Sale
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
            <ul className="flex justify-between items-center">
              <li
                className="font-mont font-semibold max-w-2/3 uppercase"
                style={{ fontSize: "clamp(15px,1.5vw,18px)" }}
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
            <li style={{ fontSize: "clamp(14px,1.2vw,16px)" }}>
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

        {/* flash sale status */}
        <div className="mt-0.5 flex flex-col gap-1 text-[#FF3333]">
          <p
            style={{
              fontSize: "clamp(13px, 2vw, 15px)",
            }}
          >
            {product.amountleft} items left
          </p>
          <div className="flex gap-0 h-1">
            <p
              className="rounded-l-full bg-[#FF3333]/40"
              style={{ width: `${product.amountsold}%` }}
            ></p>
            <p
              className="rounded-r-full bg-black/10"
              style={{ width: `${percentleft}%` }}
            ></p>
          </div>
        </div>
        {/* add to cart */}
        <button
          onClick={() => handleAddToCart(product.id)}
          disabled={isAdded}
          className={`${
            isAdded
              ? "bg-black/80"
              : "bg-black hover:bg-black/70 hover:cursor-pointer"
          } mt-3 py-2 w-full text-white rounded-md`}
        >
          {isAdded ? (
            <p className="flex justify-center items-center">
              <span className="text-base md:text-[18px] pr-2 -mt-1">
                <IoBagCheckOutline />
              </span>
              Added to Cart
            </p>
          ) : (
            <p className="flex justify-center items-center">
              <span className="text-base md:text-[18px] pr-2 -mt-1">
                <IoBagAddOutline />
              </span>
              Add to Cart
            </p>
          )}
        </button>
      </div>
    </div>
  );
};
export default OnSalesCard;
