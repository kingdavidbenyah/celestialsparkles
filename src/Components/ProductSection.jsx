import { useEffect, useState } from "react";

function ProductSection({ sectionTitle, json, button }) {
  const [products, setProducts] = useState([]);
  const [showbutton, setShowButton] = useState({ button });

  const fetchData = async () => {
    const res = await fetch(`${json}`);
    const products = await res.json();
    setProducts(products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
}
export default ProductSection;
