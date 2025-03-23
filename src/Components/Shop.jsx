import ProductSection from "./ProductSection";
function Shop() {
  return (
    <div className="pt-20">
      {/* New Arrivals */}
      <ProductSection
        sectionTitle="Shop"
        json="../../public/NewArrivals.json"
        // extrajson="https://api.escuelajs.co/api/v1/products/extra"
      />
      {/* Top Selling */}
      <ProductSection
        json="../../public/TopSelling.json"
        // extrajson="https://api.escuelajs.co/api/v1/products/extra/topselling"
      />
    </div>
  );
}
export default Shop;
