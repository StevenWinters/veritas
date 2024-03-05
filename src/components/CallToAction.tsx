import Button from "./Button";

const CallToAction = () => {
  return (
    <section className="flex justify--center align--center block flex--column cta">
      <h2>It's time to take action</h2>
      <p className="cta__description">
        Time is running fast. Can you lend us your help in the investigation? Or
        will you let them get away?
      </p>
      <Button path="/suspects" className="btn--primary">
        View Suspects
      </Button>
    </section>
  );
};

export default CallToAction;
