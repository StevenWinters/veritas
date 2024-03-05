import { NavLink } from "react-router-dom";
import { navListsData } from "../data/navLIstsData";

interface Props {
  setMenuActive: () => void;
}

const NavLists = ({ setMenuActive }: Props) => {
  return (
    <ul className="flex align--center gap nav__lists">
      {navListsData.map((data) => (
        <li key={data.id} className="list nav__list">
          <NavLink
            to={data.path}
            className={`flex align--center nav__link ${
              data.name === "Menu" && "popular"
            }`}
            onClick={setMenuActive}
          >
            {data.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLists;
