import ShopCard from "./ShopCard";
import { useState, useEffect } from "react";
function Shop() {
  const [shopItems, setShopItems] = useState([]);
  const fetchShopItems = async () => {
    const shopItems = await fetch("Shop.json");
    const shopItemsJson = await shopItems.json();
    setShopItems(shopItemsJson);
  };
  useEffect(() => {
    fetchShopItems();
  }, []);

  const randomItems = shopItems.sort(() => Math.random() - 0.5);

  return (
    <section className="pt-25 font-poppins text-body">
      {/*SHOP */}
      <section className="min-w-[320px] max-w-8xl mx-auto pt-20 pb-12">
        {/* Intro */}
        <div className="flex flex-col gap-1 text-center">
          <p className="font-raleway text-pagetitle font-bold xl:font-extrabold">
            OUR SHOP
          </p>
          <p className="text-sub font-medium tier2:font-semibold text-sectiontitlesub">
            Explore our collection of stunning accessories
          </p>
        </div>
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-center gap-5 space-y-5 tier1:gap-7 px-2 md:px-10 py-10">
          {randomItems.slice(0, 12).map((shopitem) => (
            <ShopCard key={shopitem.id} product={shopitem} />
          ))}
        </div>
      </section>
    </section>
  );
}
export default Shop;
