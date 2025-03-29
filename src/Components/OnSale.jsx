import { useState, useEffect } from "react";
import OnSalesCard from "./OnSalesCard.jsx";

// export const CountdownTimer = () => {
//   // Set the end time for 3 days from now
//   const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

//   const calculateTimeLeft = () => {
//     const now = new Date().getTime();
//     const difference = endTime - now;

//     if (difference <= 0) {
//       return { days: "00", hours: "00", minutes: "00", seconds: "00" };
//     }

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / 1000 / 60) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return {
//       days: String(days).padStart(2, "0"),
//       hours: String(hours).padStart(2, "0"),
//       minutes: String(minutes).padStart(2, "0"),
//       seconds: String(seconds).padStart(2, "0"),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       className="flex items-center space-x-2 font-medium font-poppins"
//       style={{ fontSize: "clamp(20px, 3.5vw, 27px" }}
//     >
//       <span className="font-semibold">Ends In</span>
//       <span className="bg-black/85 text-white px-2 py-1 rounded">
//         {timeLeft.days}
//       </span>
//       <span style={{ fontSize: "clamp(15px, 3.5vw, 23px" }}>d</span>
//       <span className="bg-black/85 text-white px-2 py-1 rounded">
//         {timeLeft.hours}
//       </span>
//       <span style={{ fontSize: "clamp(15px, 3.5vw, 23px" }}>:</span>
//       <span className="bg-black/85 text-white px-2 py-1 rounded">
//         {timeLeft.minutes}
//       </span>
//       <span style={{ fontSize: "clamp(15px, 3.5vw, 23px" }}>:</span>
//       <span className="bg-black/85 text-white px-2 py-1 rounded">
//         {timeLeft.seconds}
//       </span>
//     </div>
//   );
// };

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    // Get stored end time from localStorage
    let endTime = localStorage.getItem("countdownEndTime");

    if (!endTime) {
      // Set the end time for 3 days from now
      endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem("countdownEndTime", endTime);
    }

    // Calculate time difference
    const now = new Date().getTime();
    const difference = endTime - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Convert to days, hours, minutes, seconds
    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }

  return (
    <div
      className="flex items-center space-x-2 font-medium font-poppins"
      style={{ fontSize: "clamp(18px, 3.5vw, 25px" }}
    >
      <span className="font-semibold">Ends In</span>
      <span className="bg-black/85 text-white px-2 py-1 rounded">
        {timeLeft.days}
      </span>
      <span style={{ fontSize: "clamp(15px, 3.5vw, 23px" }}>d</span>
      <span className="bg-black/85 text-white px-2 py-1 rounded">
        {timeLeft.hours}
      </span>
      <span style={{ fontSize: "clamp(15px, 3.5vw, 23px" }}>:</span>
      <span className="bg-black/85 text-white px-2 py-1 rounded">
        {timeLeft.minutes}
      </span>
      <span style={{ fontSize: "clamp(15px, 3.5vw, 23px" }}>:</span>
      <span className="bg-black/85 text-white px-2 py-1 rounded">
        {timeLeft.seconds}
      </span>
    </div>
  );
};

export function OnSale() {
  // fetching On Sales
  const [onSales, showOnSales] = useState([]);
  const fetchOnSales = async () => {
    const onsale = await fetch("OnSale.json");
    const onsalejson = await onsale.json();
    showOnSales(onsalejson);
  };

  useEffect(() => {
    fetchOnSales();
  }, []);
  return (
    <>
      <section className="pt-25">
        {/* on sale */}
        <section className="min-w-[320px] max-w-8xl mx-auto pt-20 pb-12">
          <p className="flex gap-2 items-center justify-center font-raleway text-center text-pagetitle font-bold xl:font-extrabold  px-5 lg:px-24">
            ON SALE <span className="text-primary font-semibold" style={{fontSize:"clamp(18px, 3.5vw, 25px)"}}>- Limited!</span>
          </p>
          <p className="py-5 mx-auto w-fit">
            <CountdownTimer />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 space-y-5 tier1:gap-10 px-10 py-10">
            {onSales.map((onSale) => (
              <OnSalesCard key={onSale.id} product={onSale} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}



