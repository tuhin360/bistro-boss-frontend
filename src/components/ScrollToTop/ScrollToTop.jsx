import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
  }, [pathname, search]); // scroll when route OR query param changes

  return null;
};

export default ScrollToTop;
