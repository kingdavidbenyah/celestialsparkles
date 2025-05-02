import { useOutletContext, useParams } from "react-router-dom";
import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";
import OnSalesCard from "./OnSalesCard";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const BrandPage = () => {
  const { brandName } = useParams();

  const [shopItems, setShopItems] = useState([]);
  //   const fetchShopItems = async () => {
  //     const shopItems = await fetch("Shop.json");
  //     const shopItemsJson = await shopItems.json();
  //     setShopItems(shopItemsJson);
  //   };

  const fetchShopItems = async () => {
    try {
      const response = await fetch("/Shop.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const shopItemsJson = await response.json();
      setShopItems(shopItemsJson);
    } catch (error) {
      console.error("Failed to fetch shop items: ", error);
    }
  };
  useEffect(() => {
    fetchShopItems();
  }, []);

  console.log("brandName from URL:", brandName);
  console.log("All shopItems:", shopItems);

  const filteredProducts = shopItems.filter(
    (item) => item.brand.trim().toLowerCase() === brandName.toLowerCase()
  );
  //   const filteredProducts = Array.isArray(shopItems)

  //     ? shopItems.filter(
  //         (item) =>
  //           item.brand &&
  //           item.brand.trim().toLowerCase() === brandName.toLowerCase()
  //       )
  //     : [];

  console.log("Filtered products:", filteredProducts);

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
  useEffect(() => {
    if (lastChangedId !== null && wasAdded !== null) {
      handleCartCount(wasAdded);
      setLastChangedId(null);
      setWasAdded(null);
    }
  }, [lastChangedId, wasAdded, handleCartCount]);

  return (
    <section className="pt-45 font-poppins text-body">
      {/* Intro */}
      <div className="text-center px-5">
        <p className="font-raleway text-pagetitle font-bold tracking-wider ">
          {brandName.toUpperCase()}
        </p>
        <p className="text-review text-sub">
          Featured items from{" "}
          {brandName.charAt(0).toUpperCase() + brandName.slice(1)}
        </p>
      </div>
      <p className="max-w-[1220px] mx-auto text-primary text-review px-5 pt-5  flex justify-end  items-center font-medium tracking-wider">
        {filteredProducts.length} {filteredProducts.length > 1 ? "items" : "item"}
        <MdOutlineKeyboardDoubleArrowLeft className="text-[28px]" />
      </p>
      {filteredProducts.length > 0 ? (
        <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-center gap-5 space-y-5 tier2:gap-7 px-2 md:px-10 py-4 pb-15">
          {filteredProducts
            .sort((a, b) => b.availability - a.availability)
            .sort((a, b) => (b.group === "onsale") - (a.group === "onsale"))
            .map((item) => {
              if (item.group === "onsale") {
                return (
                  <OnSalesCard
                    key={item.id}
                    product={item}
                    handleAddToCart={handleAddToCart}
                    isAdded={!!addedProducts[item.id]}
                  />
                );
              } else if (
                item.group === "shop" ||
                item.group === "newarrivals"
              ) {
                return (
                  <ShopCard
                    key={item.id}
                    product={item}
                    isAdded={!!addedProducts[item.id]}
                    handleAddToCart={handleAddToCart}
                  />
                );
              } else return null;
            })}
        </div>
      ) : (
        <p className="text-base md:text-lg text-center px-3">
          No products found for {brandName}
        </p>
      )}
    </section>
  );
};
export default BrandPage;
