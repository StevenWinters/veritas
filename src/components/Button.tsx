import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  className: string;
  path: string;
  children: ReactNode;
}

const Button = ({ className, path, children }: Props) => {
  return (
    <Link to={path}>
      <button className={`btn ${className}`}>{children}</button>
    </Link>
  );
};

export default Button;
