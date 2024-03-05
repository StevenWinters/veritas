interface Props {
  setMenuActive: () => void;
}

const HamburgerMenu = ({ setMenuActive }: Props) => {
  return (
    <div
      className="flex flex--column justify--center align--center hamburger__menu"
      onClick={setMenuActive}
    >
      <span className="hamburger__block"></span>
      <span className="hamburger__block"></span>
    </div>
  );
};

export default HamburgerMenu;
