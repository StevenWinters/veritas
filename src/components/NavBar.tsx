import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavLists from "./NavLists";

interface Props {
  isNavActive: boolean;
}

const NavBar = ({ isNavActive }: Props) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [scrollToggle, setScrollToggle] = useState(false);

  console.log(scrollToggle);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollToggle]);

  const handleScroll = (e: any) => {
    const window = e.currentTarget;
    if (window.scrollY >= 1) return setScrollToggle(true);
    setScrollToggle(false);
  };

  return (
    <>
      {isNavActive && (
        <header className="flex justify--center">
          <nav
            className={`flex justify--between align--center nav__bar ${
              isMenuActive && "active"
            } ${scrollToggle && "scroll-active"}`}
          >
            <Logo />
            <NavLists setMenuActive={() => setMenuActive(false)} />
            <HamburgerMenu setMenuActive={() => setMenuActive(!isMenuActive)} />
          </nav>
        </header>
      )}
    </>
  );
};

export default NavBar;
