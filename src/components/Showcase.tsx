import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { suspectsData } from "../data/suspectsData";
import { useState } from "react";

const Showcase = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState({
    id: 1,
    src: "",
    name: "",
  });

  const handlePrevImg = () => {
    setImgIndex(imgIndex === 0 ? suspectsData.length - 1 : imgIndex - 1);
  };

  const handleNextImg = () => {
    setImgIndex(imgIndex === suspectsData.length - 1 ? 0 : imgIndex + 1);
  };
  return (
    <section className="block container">
      <div className="grid grid--1x2 align--center gap--lg selected">
        <h2 className="selected__heading">{currentImg.name}</h2>
        <img
          src={currentImg.src}
          alt={currentImg.name}
          className={`img selected__img ${currentImg.src && "active"}`}
        />
      </div>
      <div className="slide">
        <div className="flex align--center gap slide__container">
          <button
            className="btn btn--circle flex justify--center align--center btn--primary prev__btn slide__btn"
            onClick={handlePrevImg}
          >
            <FaLessThan />
          </button>
          {suspectsData.map((data) => (
            <img
              key={data.id}
              src={data.src}
              alt={data.name}
              className="img img--100 slide__img"
              onClick={() => setCurrentImg({ ...data })}
              style={{
                translate: `${
                  (window.matchMedia("(min-width: 768px").matches
                    ? -55
                    : -110) * imgIndex
                }%`,
              }}
            />
          ))}
          <button
            className="btn btn--circle flex justify--center align--center btn--primary next__btn slide__btn"
            onClick={handleNextImg}
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
