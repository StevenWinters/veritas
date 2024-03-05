import { useEffect } from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";

const SuspectsPage = () => {
  useEffect(() => {
    document.title = "Veritas | Suspects";
  });

  return (
    <>
      <Header>Suspects</Header>
      <Showcase />
    </>
  );
};

export default SuspectsPage;
