import Button from "./Button";

const Callout = () => {
  return (
    <section className="block block--dark flex justify--center align--center">
      <div className="grid grid--1x2 grid--center align--center gap--lg callout__container">
        <div>
          <h3>Craving Something?</h3>
          <p>
            Elevate your experience in this exclusive opportunity, accompanied
            by our expertly-made culinary menu.
          </p>
        </div>
        <Button path="/menu" className="btn--sm btn--primary">
          View Menu
        </Button>
      </div>
    </section>
  );
};

export default Callout;
