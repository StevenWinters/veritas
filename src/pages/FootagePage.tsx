import Clip from "../components/Clip";
import Witnesses from "../assets/clips/witnesses.mp4";
import { useEffect } from "react";

const FootagePage = () => {
  useEffect(() => {
    document.title = "Veritas | Footage";
  });

  return (
    <>
      <Clip src={Witnesses} />
    </>
  );
};

export default FootagePage;
