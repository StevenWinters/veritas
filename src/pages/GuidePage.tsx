import CallToAction from "../components/CallToAction";
import Callout from "../components/Callout";
import Clip from "../components/Clip";
import Mission from "../components/Mission";
import Objectives from "../components/Objectives";
import VeritasIntro from "../assets/clips/veritas-opening.mp4";

const GuidePage = () => {
  return (
    <>
      <Clip src={VeritasIntro} />
      <Mission />
      <Objectives />
      <Callout />
      <CallToAction />
    </>
  );
};

export default GuidePage;
