import React, { useState, useEffect, useRef } from "react";
import { DiVim } from "react-icons/di";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const fetchShopBrands = async () => {
    const shopBrands = await fetch("/Shop.json");
    const shopBrandsJson = await shopBrands.json();
    setBrands(shopBrandsJson);
  };
  useEffect(() => {
    fetchShopBrands();
  }, []);

  const countBrands = new Set(
    brands.map((item) => item.brand.trim().toLowerCase())
  );
  const groupedBrands = [...countBrands].reduce((acc, brand) => {
    const firstLetter = brand[0];
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand);

    return acc;
  }, {});
  const sectionRefs = {};

  [..."abcdefghijklmnopqrstuvwxyz"].forEach((letter) => {
    sectionRefs[letter] = sectionRefs[letter] || React.createRef();
  });
  return (
    <section className="pt-25 font-poppins text-body">
      {/*SHOP */}
      <section className="min-w-[320px] max-w-8xl mx-auto pt-20 pb-12">
        {/* Intro */}
        <section>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-raleway text-pagetitle font-bold xl:font-extrabold">
              BRANDS
            </p>
            <p className="text-sub font-medium tier2:font-semibold text-sectiontitlesub">
              Find your favorite brands here
            </p>
          </div>

          <div className="border-y border-gray-300 text-review flex justify-end py-4.5 tier1:py-5 tier3:px-8 px-6 md:px-8 mt-10">
            <span className="text-sub font-medium">
              {countBrands.size} Brands
            </span>
          </div>
          {/* A - Z */}
          <div className="max-w-[1300px] mx-auto scrollbar-hide whitespace-nowrap font-semibold font-raleway text-base flex gap-9 justify-start min-w-[320px] px-5 md:px-10 py-5 overflow-x-scroll">
            {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => {
              const lower = letter.toLowerCase();
              const hasBrands = groupedBrands[lower];

              return hasBrands ? (
                <span
                  key={letter}
                  onClick={() => {
                    const el = sectionRefs[lower]?.current;
                    if (el) {
                      const yOffset = -160; // <-- Change this value if your navbar is taller/shorter
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="hover:cursor-pointer text-black"
                >
                  {letter}
                </span>
              ) : (
                <span
                  key={letter}
                  className="text-gray-300 cursor-default"
                  title="No brands available"
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-10 py-10 px-5 md:px-10">
            {Object.entries(groupedBrands)
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(
                ([letter, brands]) =>
                  brands.length > 0 && (
                    <div key={letter} className="space-y-4 text-review">
                      <p className="text-4xl" ref={sectionRefs[letter]}>
                        {letter.toUpperCase()}
                      </p>
                      <ul className="flex flex-wrap gap-5 md:gap-20">
                        {brands.map((brand) => (
                          <li key={brand}>
                            <Link
                              to={`/brands/${brand}`}
                              onClick={() => {
                                window.scrollTo(0, 0);
                              }}
                              className="py-2 hover:underline text-sub"
                            >
                              {brand.charAt(0).toUpperCase() + brand.slice(1)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Brands;
