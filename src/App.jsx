import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import NoPage from "./Components/NoPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
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
