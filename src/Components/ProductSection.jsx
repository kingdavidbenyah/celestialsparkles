import { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";

function ProductSection({ sectionTitle, json, extrajson, button }) {
  const [products, setProducts] = useState([]);
  const [extraproducts, setExtraProducts] = useState([]);
  const [showbutton, setShowButton] = useState({ button });

  const fetchData = async () => {
    const res = await fetch(`${json}`);
    const products = await res.json();
    setProducts(products);
  };
  const fetchextraproduct = async () => {
    const extrares = await fetch(`${extrajson}`);
    const extraproducts = await extrares.json();
    setExtraProducts(extraproducts);
  };
  useEffect(() => {
    fetchData();
    fetchextraproduct();
  }, []);
  return (
    <>
      <section className="pt-20 pb-12">
        <p className="font-raleway text-center text-sectiontitle font-bold  px-5 lg:px-24">
          {sectionTitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 py-10">
          {products.slice(0, 4).map((product) => (
            <DisplayProducts key={product.id} product={product} />
          ))}
          {extraproducts.map((product) => (
            <DisplayProducts key={product.id} product={product} />
          ))}
        </div>
        {showbutton && (
          <div className="flex justify-center">
            <button className=" hover:cursor-pointer hover:bg-black/5 px-13 py-3 text-black font-medium border border-black/10 rounded-4xl">
              View All
            </button>
          </div>
        )}
      </section>
    </>
  );
}
export default ProductSection;
