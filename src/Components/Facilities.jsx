import React, { useState, useEffect } from "react";
import "./Facilities.css";

const Facilities = (interval = 3000) => {
  const [currentFacility, setCurrentFacility] = useState(0);
  const facilities = [
    {
      image: "images/facility1.webp",
      title: "Valet parking",
    },
    {
      image: "images/facility2.webp",
      title: "Cozy cafe",
    },
    {
      image: "images/facility3.webp",
      title: "Comfortable spaces",
    },
    {
      image: "images/facility4.webp",
      title: "Co-working spaces",
    },
    {
      image: "images/facility5.webp",
      title: "Amphitheatre",
    },
  ];

  const nextFacility = () => {
    currentFacility === facilities.length - 1
      ? setCurrentFacility(0)
      : setCurrentFacility(currentFacility + 1);
  };

  const changeFacility = (index) => {
    setCurrentFacility(index);
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextFacility, 3000);
    return () => {
      clearInterval(autoPlayInterval);
    };
  });

  return (
    <section className="facilities" id="facilities">
      <div className="facilities-title">
        <div className="facilities-title-line">
          <div className="facilities-title-text">Our Facilities</div>
          <div className="facilities-title-stroke"></div>
        </div>
        <div className="title-desc">
          All facilities are designed to meet all your needs
        </div>
      </div>
      <div className="facilities-container">
        <div className="facilities-selector">
          <div className="indicator-line">
            <div className="counter">
              <span className="active-slide-num">0{currentFacility + 1}</span>
              <span className="slash">{" / "}</span>
              <span className="total-slides">0{facilities.length}</span>
            </div>
            <div className="indicators">
              {facilities.map((_, index) => (
                <div
                  key={facilities.length - index - 1}
                  className={`indicator ${
                    currentFacility === facilities.length - index - 1
                      ? "active"
                      : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="facilities-list">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`facility ${
                  currentFacility === index ? "active" : "non-active"
                }`}
                onClick={() => changeFacility(index)}
              >
                {facility.title}
              </div>
            ))}
          </div>
        </div>
        <div className="facilities-display">
          <img
            src={facilities[currentFacility].image}
            alt="facility"
            className="facility-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
