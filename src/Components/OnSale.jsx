import { useState, useEffect } from "react";
import OnSalesCard from "./OnSalesCard.jsx";
import { useOutletContext } from "react-router-dom";

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
      const updatedTime = getTimeLeft();
      setTimeLeft(updatedTime);
      // setTimeLeft(getTimeLeft());

      // Stop interval if time is up
      if (
        updatedTime.days === "00" &&
        updatedTime.hours === "00" &&
        updatedTime.minutes === "00" &&
        updatedTime.seconds === "00"
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    // Get stored end time from localStorage
    let endTime = localStorage.getItem("countdownEndTime");

    if (!endTime) {
      // Set the end time for 3 days from now
      endTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("countdownEndTime", endTime);
    }

    // Calculate time difference
    const now = new Date().getTime();
    const difference = endTime - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

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
  const [shopItems, setShopItems] = useState([]);
  const fetchShopItems = async () => {
    const shopItems = await fetch("/Shop.json");
    const shopItemsJson = await shopItems.json();
    setShopItems(shopItemsJson);
  };
  useEffect(() => {
    fetchShopItems();
  }, []);
  const onSales = shopItems.filter((item) => item.group == "onsale");

  //handling cart count
  const { handleCartCount } = useOutletContext();
  const [addedProducts, setAddedProducts] = useState({});
  const [lastChangedId, setLastChangedId] = useState(null);
  const [wasAdded, setWasAdded] = useState(null);

  const handleAddToCart = (id) => {
    setAddedProducts((prev) => {
      const isCurrentlyAdded = !!prev[id];
      const updated = { ...prev };

      if (isCurrentlyAdded) {
        delete updated[id];
        setWasAdded(false); // mark for effect
      } else {
        updated[id] = true;
        setWasAdded(true); // mark for effect
      }

      setLastChangedId(id); // trigger effect
      return updated;
    });
  };
  // SIDE EFFECT for cart count
  useEffect(() => {
    if (lastChangedId !== null && wasAdded !== null) {
      handleCartCount(wasAdded);
      setLastChangedId(null);
      setWasAdded(null);
    }
  }, [lastChangedId, wasAdded, handleCartCount]);

  return (
    <>
      <section className="pt-25">
        {/* on sale */}
        <section className="min-w-[320px] max-w-8xl mx-auto pt-20 pb-12">
          <p className="flex gap-2 items-center justify-center font-raleway text-center text-pagetitle font-bold xl:font-extrabold  px-5 lg:px-24">
            ON SALE
            <span
              className="text-primary font-semibold"
              style={{ fontSize: "clamp(18px, 3.5vw, 25px)" }}
            >
              - Limited!
            </span>
          </p>
          <div className="py-5 mx-auto w-fit">
            <CountdownTimer />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 space-y-5 tier1:gap-7 px-10 py-10">
            {onSales.map((onSale) => (
              <OnSalesCard
                key={onSale.id}
                product={onSale}
                handleAddToCart={handleAddToCart}
                isAdded={!!addedProducts[onSale.id]}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
