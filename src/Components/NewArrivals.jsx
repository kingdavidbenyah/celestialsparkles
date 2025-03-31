import ShopCard from "./ShopCard";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function NewArrival() {
  // fetching newarrivals
  const [newarrivals, showNewArrivals] = useState([]);
  const fetchNewArrivals = async () => {
    const newarrivals = await fetch("NewArrivals.json");
    const newarrivalsjson = await newarrivals.json();
    showNewArrivals(newarrivalsjson);
  };
  useEffect(() => {
    fetchNewArrivals();
  }, []);

  // const randomItems = newarrivals.sort(() => Math.random() - 0.5);
  const { handleCartCount } = useOutletContext();
  const [addedProducts, setAddedProducts] = useState({});

  const handleAddToCart = (id) => {
    setAddedProducts((prev) => ({ ...prev, [id]: true }));
    handleCartCount(); // Increment cart count
  };

  return (
    <section className="pt-25 font-poppins text-body">
      {/* NEW ARRIVALS */}
      <section className="min-w-[320px] max-w-8xl mx-auto pt-20 pb-12">
        {/* Intro */}
        <div className="flex flex-col gap-1 text-center">
          <p className="font-raleway text-pagetitle font-bold xl:font-extrabold">
            NEW ARRIVALS
          </p>
          <p className="text-sub font-medium tier2:font-semibold text-sectiontitlesub">
            Discover the Latest Trends & Redefine Your Style
          </p>
        </div>
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-center gap-5 space-y-5 tier1:gap-7 px-2 md:px-10 py-10">
          {newarrivals.map((newarrival) => (
            <ShopCard
              key={newarrival.id}
              product={newarrival}
              handleAddToCart={handleAddToCart}
              isAdded={!!addedProducts[newarrival.id]}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
export default NewArrival;
