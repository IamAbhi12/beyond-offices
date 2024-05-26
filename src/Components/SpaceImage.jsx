import { Link } from "react-router-dom";
import "./SpaceImage.css";

const SpaceImage = ({ image, text }) => {
  return (
    <div className="space-image-card">
      <img src={image} alt="space" className="space-image" />
      <Link to="/workspaces" className="space-link">
        <div className="space-button-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M20.5332 15.9932C20.5332 16.2866 20.4265 16.5532 20.2132 16.7666L13.2799 23.4332C12.8532 23.8332 12.1866 23.8332 11.7599 23.4066C11.3599 22.9799 11.3599 22.3132 11.7866 21.8866L17.9199 15.9932L11.7866 10.0999C11.3599 9.69987 11.3599 9.00655 11.7599 8.57988C12.1599 8.15322 12.8532 8.15326 13.2799 8.55326L20.2132 15.2199C20.4265 15.4332 20.5332 15.6999 20.5332 15.9932Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
      <div className="space-image-text">{text}</div>
    </div>
  );
};

export default SpaceImage;
