import { useState, useEffect } from "react";
import "./FAQCard.css";

const FAQCards = ({ FAQdata }) => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="faq-cards-wrapper">
      <FAQCard
        question={FAQdata[0].question}
        id={1}
        isActive={activeCard === 1}
        handleClick={() => {
          setActiveCard(1);
          if (activeCard === 1) {
            setActiveCard(0);
          }
        }}
      />
      <FAQCard
        question={FAQdata[1].question}
        id={2}
        isActive={activeCard === 2}
        handleClick={() => {
          setActiveCard(2);
          if (activeCard === 2) {
            setActiveCard(0);
          }
        }}
      />
      <FAQCard
        question={FAQdata[2].question}
        id={3}
        isActive={activeCard === 3}
        handleClick={() => {
          setActiveCard(3);
          if (activeCard === 3) {
            setActiveCard(0);
          }
        }}
      />
    </div>
  );
};

const FAQCard = ({ question, id, isActive, handleClick }) => {

  const faqItem = document.getElementById("faq-item-" + id);
  useEffect(() => {
    if (faqItem) {
      if (isActive) {
        faqItem.style.display = "block";
        faqItem.children[0].click();
      } else {
        faqItem.style.display = "none";
      }
    }
  }, [isActive, faqItem]);

  return (
    <div className={`faq-card ${isActive ? "selected" : ""}`}>
      <div className="faq-card-question">{question}</div>
      <div
        className={`faq-down-btn ${isActive ? "selected" : ""}`}
        onClick={handleClick}
        id={"faq-card-" + id}
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
            id={"faq-down-btn-svg-path-" + id}
            className={`faq-down-btn-svg-path ${isActive ? "selected" : ""}`}
          />
        </svg>
      </div>
    </div>
  );
};

export default FAQCards;
