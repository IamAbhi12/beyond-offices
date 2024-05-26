import { Link } from "react-router-dom";
import "./SpaceTitle.css";

const SpaceTitle = ({ title, description }) => {
  return (
    <div className="space-title-card">
      <div className="space-details">
        <div className="space-title">{title}</div>
        <div className="space-desc">{description}</div>
      </div>
      <div className="space-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
        >
          <g opacity="0.2">
            <mask
              id="mask0_267_470"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="90"
              height="90"
            >
              <rect
                x="0.5"
                y="0.5"
                width="89"
                height="89"
                fill="#C4C4C4"
                stroke="white"
              />
            </mask>
            <g mask="url(#mask0_267_470)">
              <path
                d="M-47.5009 37.6895L36.3829 137.658"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M-38.3083 29.9761L45.5754 129.945"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M-29.1158 22.2627L54.7679 122.231"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M-19.9232 14.5493L63.9606 114.518"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M-10.7307 6.83545L73.1531 106.804"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M-1.53821 -0.87793L82.3456 99.0909"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M7.6543 -8.59131L91.5381 91.3775"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M16.8469 -16.3047L100.731 83.6641"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M26.0394 -24.0181L109.923 75.9507"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M35.2319 -31.7314L119.116 68.2374"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M44.4244 -39.4448L128.308 60.524"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M53.6171 -47.1587L137.501 52.8101"
                stroke="white"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
      </div>
      <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
        className="space-link"
        target="_blank"
      >
        <div className="space-check-avail">
          <div className="space-check-avail-text">Check Availability</div>
          <div className="space-check-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M20.5333 15.9932C20.5333 16.2866 20.4267 16.5532 20.2133 16.7666L13.28 23.4332C12.8533 23.8332 12.1867 23.8332 11.76 23.4066C11.36 22.9799 11.36 22.3132 11.7867 21.8866L17.92 15.9932L11.7867 10.0999C11.36 9.69987 11.36 9.00655 11.76 8.57988C12.16 8.15322 12.8533 8.15326 13.28 8.55326L20.2133 15.2199C20.4267 15.4332 20.5333 15.6999 20.5333 15.9932Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SpaceTitle;
