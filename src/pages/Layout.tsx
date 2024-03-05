import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  const [isNavActive, setNavActive] = useState(true);
  const [isFooterActive, setFooterActive] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (location.pathname === "/") {
      setNavActive(false);
      setFooterActive(false);
    } else {
      setNavActive(true);
      setFooterActive(true);
    }
  }, [pathname]);
  return (
    <>
      <NavBar isNavActive={isNavActive} />
      <Outlet />
      <Footer isFooterActive={isFooterActive} />
    </>
  );
};

export default Layout;
