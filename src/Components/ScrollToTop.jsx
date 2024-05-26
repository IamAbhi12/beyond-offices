import { useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className="scroll-to-top"
      style={{ display: isVisible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16.0067 20.5333C15.7133 20.5333 15.4467 20.4267 15.2333 20.2133L8.56666 13.28C8.16666 12.8533 8.16665 12.1867 8.59332 11.76C9.01999 11.36 9.68667 11.36 10.1133 11.7867L16.0067 17.92L21.9 11.7867C22.3 11.36 22.9933 11.36 23.42 11.76C23.8467 12.16 23.8466 12.8533 23.4466 13.28L16.78 20.2133C16.5667 20.4267 16.3 20.5333 16.0067 20.5333Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default ScrollToTop;
