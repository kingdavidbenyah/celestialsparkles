import { useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineStarPurple500 } from "react-icons/md";

const CustomerReviews = ({ data }) => {
  const [isVerified, setIsVerified] = useState(data.verified);
  const stars = Array(data.rating).fill("⭐");

  return (
    <section
      className="grid grid-cols-1 gap-1 px-5 pt-4 pb-6 border-1 rounded-2xl border-black/10"
      style={{
        width: "clamp(290px, 35vw, 350px",
        boxShadow: "0px 4px 9.6px 0px #00000017",
      }}
    >
      {/* <div className="flex">
        {stars.map((star) => (
          <span>{star}</span>
        ))}
      </div> */}
      {/* OR */}
      <div className="flex">
        {Array(data.rating)
          .fill(null)
          .map((_, index) => (
            <span className="text-yellow-300 text-sm md:text-base">
              <MdOutlineStarPurple500 />
            </span>
          ))}
      </div>

      <div className="text-black text-review flex items-center gap-2 font-medium">
        {data.name}
        {isVerified && (
          <span className="md:text-base text-green-600 text-base">
            <RiVerifiedBadgeFill />
          </span>
        )}
      </div>
      <div className="text-sub text-reviewsub">"{data.review}"</div>
    </section>
  );
};
export default CustomerReviews;
