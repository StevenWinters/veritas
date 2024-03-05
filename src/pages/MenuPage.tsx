import { useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

const MenuPage = () => {
  useEffect(() => {
    document.title = "Veritas | Menu";
  });

  return (
    <>
      <Header>Menu</Header>
      <Menu />
    </>
  );
};

export default MenuPage;
