import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
function Layout() {
  const [cartCount, setCartCount] = useState(0);
  const handleCartCount = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <>
      <Navbar count={cartCount} />
      <Outlet context={{ handleCartCount }} />
      <Footer />
    </>
  );
}
export default Layout;
