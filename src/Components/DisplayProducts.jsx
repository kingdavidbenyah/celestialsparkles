import { IoBagAddOutline } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import { FaCediSign } from "react-icons/fa6";

const DisplayProducts = ({ product }) => {
  const newprice = ((100 - product.discount) / 100) * product.price;
  return (
    <div
      className="grid grid-cols-1 gap-5"
      style={{ width: "clamp(200px, 19vw, 250px)" }}
    >
      <div className="relative">
        <img
          src={product.image}
          className="rounded-[20px] object-center"
          style={{
            width: "clamp(200px, 19vw, 250px)",
            height: "clamp(200px, 19vw, 250px)",
            boxShadow: "0px 4px 9.6px 0px #00000017",
          }}
          alt={product.name}
        />
        <p className="absolute  z-10 opacity-0 hover:opacity-100 "></p>
        <p
          style={{ fontSize: "clamp(12px,1.5vw,16px)" }}
          className="absolute  flex items-center justify-center  gap-2 text-gray-100 font-medium bg-black/20 inset-0 rounded-[20px] opacity-0 hover:opacity-100 w-full h-full transition duration-300 ease-in-out  hover:cursor-pointer z-10"
        >
          Buy Now
          <span>
            <TbExternalLink />
          </span>
        </p>
      </div>
      <div className=" grid grid-cols-1 gap-5">
        <ul className="grid grid-cols-1 gap-2 px-3">
          <li
            className="font-mont font-semibold"
            style={{ fontSize: "clamp(16px,1.7vw,22px)" }}
          >
            {product.brand}
          </li>
          <li style={{ fontSize: "clamp(14px,1.2vw,18px)" }}>{product.name}</li>
          <li
            className="flex items-center gap-2 font-medium text-black"
            style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
          >
            <img src="assets/svg/star.svg" alt="star svg" />

            <span className="text-black">
              {product.rating}
              <span className="text-sub">/5</span>
            </span>
          </li>

          <ul className="flex gap-3 items-center font-semibold">
            <li
              style={{ fontSize: "clamp(18px,3vw,20px)" }}
              className="text-black flex items-center"
            >
              <FaCediSign />
              {newprice.toLocaleString()}
            </li>
            <li
              style={{ fontSize: "clamp(15px, 2vw, 16px)" }}
              className="text-[rgb(0,0,0,0.4)] line-through flex items-center"
            >
              <FaCediSign />
              {product.price.toLocaleString()}
            </li>
            <li
              style={{ fontSize: "clamp(10px, 2vw, 12px)" }}
              className="py-[4px] px-3 rounded-2xl text-[#FF3333] bg-[#FF3333]/10 font-medium"
            >
              {product.discount}%
            </li>
          </ul>
        </ul>
        <button className="bg-black hover:cursor-pointer hover:bg-black/80 py-2 w-full text-white rounded-md flex justify-center items-center gap-2">
          <span className="text-base">
            <IoBagAddOutline />
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default DisplayProducts;
