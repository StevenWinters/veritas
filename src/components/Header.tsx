interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return (
    <header className="flex justify--center align--center block block--dark header">
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
