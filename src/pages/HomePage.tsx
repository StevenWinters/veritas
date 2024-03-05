import { useEffect } from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  useEffect(() => {
    document.title = "Veritas | A Show By The Grade 11 TVL/ABM";
  });

  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;
