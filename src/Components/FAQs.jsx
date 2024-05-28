import { useState } from "react";
import FAQCard from "./FAQCard";
import FAQitem from "./FAQitem";
import "./FAQs.css";

const FAQdata = [
  {
    id: "1",
    question: "Who can come to Beyond?",
    answer: "Businesspersons, Companies, Freelancer, anyone who wants to work",
  },
  {
    id: "2",
    question: "What amenities do you offer?",
    answer: "Coffee/tea, cookies, Wi-Fi, phone booth, amphitheatre, library",
  },
  {
    id: "3",
    question: "Can I rent a space for less than a month?",
    answer:
      "I. Flexible membership for communal areas: single day pass, 4 days in a month, 10 days, 15 days, 1 month \nII. Private cabins: minimum 6 months (without changes) and minimum 1 year (with changes)",
  },
  {
    id: "4",
    question: "Is there a parking facility available?",
    answer: "Yes, valet with underground parking",
  },
  {
    id: "5",
    question: "Are there any restrictions on the hours of access?",
    answer: "Mon-Sat 8 am to 8 pm",
  },
  {
    id: "6",
    question: "Do you provide high-speed internet access",
    answer: "Yes",
  },
  {
    id: "7",
    question: "Are meeting rooms available, and how can I book them?",
    answer:
      "Yes, 2 meeting rooms, 1 conference room and 1 business lounge, can be booked via our website (not running yet, but soon, so maybe coming soon)",
  },
  {
    id: "8",
    question: "Do you offer printing, scanning, and other office services?",
    answer: "Yes",
  },
  {
    id: "9",
    question: "Is there a kitchen area or cafe available?",
    answer: "We have a pantry & a cafe",
  },
  {
    id: "10",
    question: "Can I bring my pet to work with me?",
    answer: "Yes, ofcourse",
  },
  {
    id: "11",
    question:
      "Are there networking events or workshops hosted at Beyond Offices?",
    answer: "Yes",
  },
  {
    id: "12",
    question:
      "Is there a trial period available before committing to a membership?",
    answer:
      "Yes, single day passes help you to explore our space and fall in love with working here",
  },
  {
    id: "13",
    question: "Do you offer virtual office services?",
    answer: "Yes (coming soon)",
  },
  {
    id: "14",
    question: "Can I customise my workspace?",
    answer: "Yes, but not structurally / depends",
  },
  {
    id: "15",
    question:
      "Are there any additional fees for using certain amenities or services?",
    answer: "Yes (coming soon)",
  },
  {
    id: "16",
    question: "Do you have a community manager or staff on-site?",
    answer: "Yes",
  },
  {
    id: "17",
    question: "Can I use Beyond Offices' address for my business registration?",
    answer: "Yes, for virtual office",
  },
  {
    id: "18",
    question: "What is your cancellation policy?",
    answer:
      "For bookable resources: eg conference room/ meeting room/amphitheatre/business lounge \n100% - 48 hours prior \n50% - 24 hours prior \n0% - on the day of \nsubscriptions: works differently (will formulate & add later)",
  },
];

const FAQs = () => {
  const [moreQuestions, setMoreQuestions] = useState(false);

  const toggleMoreQuestions = () => {
    setMoreQuestions(!moreQuestions);
  };

  const svgRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M20.5333 15.9937C20.5333 16.2871 20.4267 16.5537 20.2133 16.7671L13.28 23.4337C12.8533 23.8337 12.1867 23.8337 11.76 23.4071C11.36 22.9804 11.36 22.3137 11.7867 21.887L17.92 15.9937L11.7867 10.1004C11.36 9.70036 11.36 9.00704 11.76 8.58037C12.16 8.15371 12.8533 8.15374 13.28 8.55375L20.2133 15.2204C20.4267 15.4337 20.5333 15.7004 20.5333 15.9937Z"
        fill="#DC913F"
      />
    </svg>
  );

  const svgDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16.0067 20.533C15.7133 20.533 15.4467 20.4263 15.2333 20.213L8.56667 13.2796C8.16667 12.853 8.16666 12.1863 8.59333 11.7596C9.02 11.3596 9.68668 11.3596 10.1133 11.7863L16.0067 17.9196L21.9 11.7863C22.3 11.3596 22.9934 11.3596 23.42 11.7596C23.8467 12.1596 23.8467 12.853 23.4467 13.2796L16.78 20.213C16.5667 20.4263 16.3 20.533 16.0067 20.533Z"
        fill="#DC913F"
      />
    </svg>
  );

  return (
    <section className="faq-section" id="faqs">
      <div className="faq-title">
        Find the answers to anything you need in our Help Center
      </div>
      <div className="faq-cards-wrapper">
        <FAQCard question={FAQdata[0].question} id={FAQdata[0].id} />
        <FAQCard question={FAQdata[1].question} id={FAQdata[1].id} />
        <FAQCard question={FAQdata[2].question} id={FAQdata[2].id} />
      </div>
      <div className="faq-more-questions-btn" onClick={toggleMoreQuestions}>
        <div className="more-questions-text">More Questions</div>
        <div className="more-questions-svg">
          {moreQuestions ? svgDown : svgRight}
        </div>
      </div>
      {moreQuestions && (
        <div className="faq-items-wrapper">
          {FAQdata.map((e, i) => {
            return (
              <FAQitem
                key={i}
                question={e.question}
                answer={e.answer}
                id={e.id}
              ></FAQitem>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FAQs;
