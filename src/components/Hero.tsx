import veritasposter1 from "../assets/posters/veritas-poster-1.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="flex justify--between align--center gap--lg block container hero__container">
        <div className="hero__description">
          <span className="headline">A Show by the Grade 11 TVL/ABM</span>
          <h1>Veritas</h1>
          <p className="tagline">
            Uncover the truths of the case with one clue at a time.
          </p>
          <Button className="btn--primary" path="/guide">
            Enter
          </Button>
        </div>
        <img className="img hero__img" src={veritasposter1} alt="" />
      </div>
    </section>
  );
};

export default Hero;
