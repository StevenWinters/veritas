import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { footerData } from "../data/footerData";

interface Props {
  isFooterActive: boolean;
}

const Footer = ({ isFooterActive }: Props) => {
  return (
    <>
      {isFooterActive && (
        <footer>
          <div className="block block--dark">
            <div className="container">
              <div className="flex gap--lg justify--between align--center footer__container">
                <Logo />
                <Button path="/menu" className="btn--sm btn--accent">
                  Menu
                </Button>
              </div>
              <div className="grid grid--1x3 grid--center gap">
                {footerData.map((data) => (
                  <div
                    key={data.id}
                    className="flex flex--column footer__categories"
                  >
                    <h4 className="footer__heading">{data.heading}</h4>
                    {data.children.map((children) => (
                      <ul key={children.id}>
                        <li>
                          <Link to={children.path} className="footer__link">
                            {children.name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sub__footer">
            <p>
              Copyright &copy; 2023. Powered by the PWU ICT/HE/ABM Students.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
