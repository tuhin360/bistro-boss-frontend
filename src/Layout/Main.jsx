import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import FloatingContactButtons from "../components/FloatingContactButtons/FloatingContactButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
const Main = () => {
  const location = useLocation();
  //   console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("signup");

  return (
    <div>
      <ScrollToTop/>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />} 
      <FloatingContactButtons/>
    </div>
  );
};

export default Main;
