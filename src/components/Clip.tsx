interface Props {
  src: string;
}

const Intro = ({ src }: Props) => {
  return (
    <section>
      <video src={src} autoPlay className="clip"></video>
    </section>
  );
};

export default Intro;
