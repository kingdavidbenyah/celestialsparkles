import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import { OnSale } from "./Components/OnSale";
import NewArrivals from "./Components/NewArrivals";
import Brands from "./Components/Brands";
import { BsEmojiFrown } from "react-icons/bs";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/onsale" element={<OnSale />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/brands" element={<Brands />} />
          <Route
            path="*"
            element={
              <div className="h-screen flex flex-col justify-center items-center gap-10">
                <BsEmojiFrown className="text-[100px] tier3:text-[200px] w-fit" />
                <p className="text-black font-semibold text-xl tier3:text-4xl justify-center flex gap-5 items-center">
                  <span className="text-4xl tier3:text-7xl text-red-500">
                    404
                  </span>
                  Sorry, Page Not Found!
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <div className="text-body font-poppins">
    //     <Navbar />
    //     <Homepage />
    //   </div>
    // </>
  );
}

export default App;
