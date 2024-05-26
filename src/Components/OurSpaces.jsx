import { useState, useEffect } from "react";
import SpaceTitle from "./SpaceTitle";
import SpaceImage from "./SpaceImage";
import "./OurSpaces.css";

const spaces = [
  {
    title: "Co-working spaces",
    image1: "/images/space11.png",
    feature1: "High Speed Internet",
    image2: "/images/space12.png",
    feature2: "Easy to Collaborate",
    description:
      "Collaborate and connect with fellow professionals at our communal tables, designed to foster networking and idea-sharing in a vibrant workspace.",
  },
  {
    title: "Meeting rooms",
    image1: "/images/space21.png",
    feature1: "Ergonomic Seating",
    image2: "/images/space21.png",
    feature2: "Spacious and Well-lit",
    description:
      "The perfect environment for productive and successful gatherings, our meeting rooms are equipped with state-of-the-art technology and ergonomic furniture.",
  },
  {
    title: "Event spaces",
    image1: "/images/space31.png",
    feature1: "Elegant Décor",
    image2: "/images/space32.png",
    feature2: "Flexible Layouts",
    description:
      "Designed to accommodate a wide range of gatherings from corporate events and workshops to social celebrations and networking functions",
  },
  {
    title: "Cafe",
    image1: "/images/space41.png",
    feature1: "Food and Beverage counter",
    image2: "/images/space42.png",
    feature2: "High Speed Internet",
    description:
      "Fuel your workday with our chai and coffee station, offering a variety of beverages to keep you energised and focused",
  },
];

const OurSpaces = () => {
  const [currentSpace, setCurrentSpace] = useState(0);

  const nextSpace = () => {
    currentSpace < spaces.length - 1
      ? setCurrentSpace(currentSpace + 1)
      : setCurrentSpace(0);
  };

  const prevSpace = () => {
    currentSpace > 0
      ? setCurrentSpace(currentSpace - 1)
      : setCurrentSpace(spaces.length - 1);
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSpace, 3000);
    return () => {
      clearInterval(autoPlayInterval);
    };
  });

  return (
    <section className="our-spaces-section" id="spaces">
      <div className="our-spaces-intro-sec">
        <div className="our-spaces-title">Our Spaces</div>
        <div className="our-spaces-intro-text">
          Our spaces are designed to give you a different experience when
          working with your team or personally
        </div>
      </div>
      <div className="our-spaces-cards">
        <SpaceImage
          image={spaces[currentSpace].image1}
          text={spaces[currentSpace].feature1}
        />
        <SpaceTitle
          title={spaces[currentSpace].title}
          description={spaces[currentSpace].description}
        />
        <SpaceImage
          image={spaces[currentSpace].image2}
          text={spaces[currentSpace].feature2}
        />
      </div>
      <div className="our-spaces-nav">
        <div className="our-spaces-indicator-line">
          <div className="our-spaces-indicators">
            {spaces.map((space, index) => (
              <div
                key={index}
                className={`our-spaces-indicator ${
                  index === currentSpace ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
          <div className="our-spaces-counter">
            <span className="our-spaces-active-slide-num">
              0{currentSpace + 1}
            </span>
            <span className="our-spaces-slash">{" / "}</span>
            <span className="our-spaces-total-slides">0{spaces.length}</span>
          </div>
        </div>
      </div>
      <div className="our-spaces-nav-btns">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="168"
          height="30"
          viewBox="0 0 168 30"
          fill="none"
        >
          <g className="our-spaces-btn" onClick={nextSpace}>
            <path
              d="M167.237 16.2486L158.033 28.4282C157.737 28.8179 157.368 29.0128 156.998 29.0128C156.628 29.0128 156.259 28.8179 155.963 28.4282C155.372 27.6487 155.372 26.4307 155.963 25.6512L162.654 16.7845H141.066C140.253 16.7845 139.588 15.9075 139.588 14.8357C139.588 13.7639 140.253 12.887 141.066 12.887H162.654L155.963 4.02026C155.372 3.24077 155.372 2.02281 155.963 1.24331C156.554 0.463818 157.479 0.463818 158.07 1.24331L167.274 13.4229C167.829 14.2511 167.829 15.5178 167.237 16.2486Z"
              fill="#DC913F"
            />
            <rect
              x="75.9999"
              y="12.4487"
              width="88.7142"
              height="4.87168"
              rx="2.43584"
              fill="#DC913F"
            />
          </g>
          <g className="our-spaces-btn" onClick={prevSpace}>
            <path
              d="M0.448307 16.2486L9.65238 28.4282C9.9481 28.8179 10.3178 29.0128 10.6874 29.0128C11.057 29.0128 11.4267 28.8179 11.7224 28.4282C12.3138 27.6487 12.3138 26.4307 11.7224 25.6512L5.03186 16.7845H26.619C27.4322 16.7845 28.0975 15.9075 28.0975 14.8357C28.0975 13.7639 27.4322 12.887 26.619 12.887H5.03186L11.7224 4.02026C12.3138 3.24077 12.3138 2.02281 11.7224 1.24331C11.131 0.463818 10.2069 0.463818 9.61543 1.24331L0.411329 13.4229C-0.143135 14.2511 -0.14312 15.5178 0.448307 16.2486Z"
              fill="#9A9A9A"
            />
            <rect
              width="50"
              height="4.35597"
              rx="2.17798"
              transform="matrix(-1 0 0 1 52.6854 12.6802)"
              fill="#9A9A9A"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default OurSpaces;
