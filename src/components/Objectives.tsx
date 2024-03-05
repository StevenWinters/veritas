import Objective1 from "../assets/images/objective-1.png";
import Objective2 from "../assets/images/objective-2.png";
import Objective3 from "../assets/images/objective-5.png";
import Objective4 from "../assets/images/objective-4.png";
import Objective5 from "../assets/images/objective-3.png";

const Objectives = () => {
  return (
    <section className="block container">
      <h2 className="objective__heading">Objectives</h2>
      <div className="flex flex--wrap justify--center align--center gap--lg objective__container">
        <img
          src={Objective1}
          className="img img--300 objective__img"
          alt="Problem"
        />
        <img
          src={Objective2}
          className="img img--300 objective__img"
          alt="Problem"
        />
        <img
          src={Objective3}
          className="img img--300 objective__img"
          alt="Problem"
        />
        <img
          src={Objective4}
          className="img img--300 objective__img"
          alt="Problem"
        />
        <img
          src={Objective5}
          className="img img--300 objective__img"
          alt="Problem"
        />
      </div>
    </section>
  );
};

export default Objectives;
