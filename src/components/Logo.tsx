import { Link } from "react-router-dom";
import VeritasLogo from "../assets/images/veritas-logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex gap--sm align--center">
      <img src={VeritasLogo} alt="Veritas Logo" className="img img--logo" />
      <span className="logo__heading">Veritas</span>
    </Link>
  );
};

export default Logo;
