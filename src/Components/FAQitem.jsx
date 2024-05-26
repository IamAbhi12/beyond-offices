import { useState } from "react";
import "./FAQitem.css";

const FAQitem = ({ question, answer, id }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => {
    document.getElementById("faq-card" + id)?.click();
    setShowAnswer(!showAnswer);
  };

  const chevronButton1 = (
    <svg
      className="chevron-button-down"
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="52"
      viewBox="0 0 63 52"
      fill="none"
    >
      <circle cx="25.3606" cy="25.9939" r="25.3309" fill="#DC913F" />
      <path
        d="M17.104 22.8848L25.3606 31.104L33.6172 22.8848"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const chevronButton2 = (
    <svg
      className="chevron-button-right"
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="83"
      viewBox="0 0 84 83"
      fill="none"
    >
      <g filter="url(#filter0_d_267_623)">
        <circle cx="41.9615" cy="36.66" r="25.3309" fill="white" />
      </g>
      <path
        d="M38.8518 44.916L47.0711 36.6594L38.8518 28.4028"
        stroke="#DC913F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_267_623"
          x="0.630615"
          y="0.329102"
          width="82.6617"
          height="82.6621"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_267_623"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_267_623"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
  return (
    <div className="faq-item">
      <div className="faq-content">
        <div className="faq-item-topic">
          <div className="faq-question">{question}</div>
          <div
            className={`faq-icon ${showAnswer ? "selected" : ""}`}
            onClick={toggleShowAnswer}
            id={"faq-item" + id}
          >
            {showAnswer ? chevronButton1 : chevronButton2}
          </div>
        </div>
        <div className="faq-answer">
          <p>
            {showAnswer
              ? answer?.split("\n").map((line) => {
                  return <p>{line}</p>;
                })
              : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQitem;
