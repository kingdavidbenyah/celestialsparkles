import ShopCard from "./ShopCard";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
function Shop() {
  const [shopItems, setShopItems] = useState([]);
  const fetchShopItems = async () => {
    const shopItems = await fetch("/Shop.json");
    const shopItemsJson = await shopItems.json();
    setShopItems(shopItemsJson);
  };
  useEffect(() => {
    fetchShopItems();
  }, []);
  const finalShopItems = shopItems.filter(
    (item) => item.group == "shop" || item.group == "newarrivals"
  );
  console.log(finalShopItems)
  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("shuffledShopProducts");

    if (saved) {
      setShuffledItems(JSON.parse(saved));
    } else if (finalShopItems.length > 0) {
      const shuffled = [...finalShopItems].sort(() => Math.random() - 0.5);
      localStorage.setItem("shuffledShopProducts", JSON.stringify(shuffled));
      setShuffledItems(shuffled);
    }
  }, [finalShopItems]);

  const sortedShuffledItems = shuffledItems.sort((a, b) => b.availability - a.availability);


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

  // const handleAddToCart = (id) => {

  //   setAddedProducts((prev) => {
  //     const isCurrentlyAdded = !!prev[id];
  //     const updated = { ...prev };

  //     if (isCurrentlyAdded) {
  //       delete updated[id]; //remove from cart
  //       handleCartCount(false); //decrease cart count
  //     } else {
  //       updated[id] = true;
  //       handleCartCount(true);
  //     }
  //     return updated;
  //   });
  // };

  // const handleAddToCart = (id) => {
  //   setAddedProducts((prev) => {
  //     const isCurrentlyAdded = !!prev[id];
  //     const updated = { ...prev };
  //     if (isCurrentlyAdded) {
  //       delete updated[id];
  //     } else {
  //       updated[id] = true;
  //     }
  //     return updated;
  //   });

  //   // Move this OUTSIDE the setState block
  //   setAddedProducts((prev) => {
  //     if (prev[id]) {
  //       handleCartCount(false); // item was removed
  //     } else {
  //       handleCartCount(true); // item was added
  //     }
  //     return prev;
  //   });
  // };

  // const randomItems = shopItems.sort(() => Math.random() - 0.5);

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
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-center gap-5 space-y-5 tier2:gap-7 px-2 md:px-10 py-10">
          {sortedShuffledItems.slice(0, 12).map((shopitem) => (
            <ShopCard
              key={shopitem.id}
              product={shopitem}
              handleAddToCart={handleAddToCart}
              isAdded={!!addedProducts[shopitem.id]}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
export default Shop;
