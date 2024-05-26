import { useState } from "react";
import "./FAQCard.css";

const FAQCard = ({ question, id }) => {
  const [buttonSelected, setButtonSelected] = useState(false);

  const toggleButtonSelected = () => {
    document.getElementById("faq-item" + id)?.click();
    setButtonSelected(!buttonSelected);
  };
  return (
    <div className={`faq-card ${buttonSelected ? "selected" : ""}`}>
      <div className="faq-card-question">{question}</div>
      <div
        className={`faq-down-btn ${buttonSelected ? "selected" : ""}`}
        onClick={toggleButtonSelected}
        id={"faq-card" + id}
      >
        <svg
          className="faq-down-btn-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.0068 20.533C15.7134 20.533 15.4468 20.4263 15.2334 20.213L8.56676 13.2796C8.16676 12.853 8.16675 12.1863 8.59342 11.7596C9.02009 11.3596 9.68677 11.3596 10.1134 11.7863L16.0068 17.9196L21.9001 11.7863C22.3001 11.3596 22.9934 11.3596 23.4201 11.7596C23.8468 12.1596 23.8467 12.853 23.4467 13.2796L16.7801 20.213C16.5668 20.4263 16.3001 20.533 16.0068 20.533Z"
            className={`faq-down-btn-svg-path ${
              buttonSelected ? "selected" : ""
            }`}
          />
        </svg>
      </div>
    </div>
  );
};

export default FAQCard;
