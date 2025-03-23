import ProductSection from "./ProductSection";
function Shop() {
  return (
    <div className="pt-20">
      {/* New Arrivals */}
      <ProductSection
        sectionTitle="Shop"
        json="Rings.json"
        // extrajson="https://api.escuelajs.co/api/v1/products/extra"
      />
      {/* Top Selling */}
      <ProductSection
        json="TopSelling.json"
        // extrajson="https://api.escuelajs.co/api/v1/products/extra/topselling"
      />
    </div>
  );
}
export default Shop;
