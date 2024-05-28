import { FeatureItem } from "./WhyBeyond";
import { Link } from "react-router-dom";
import "./WorkspaceItem.css";

const WorkspaceItem = ({ id, name, picture, description, features }) => {
  return (
    <div className="ws-item-container" id={id}>
      <div className="ws-item-title">{name}</div>
      <div className="ws-item-details">
        <div className="ws-item-img">
          <img src={picture} alt={name} />
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
            target="_blank"
          >
            <div className="ws-item-overlay">
              <span className="availability-text">Check availability</span>
              <svg
                className="availability-right-arrow"
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
        </div>
        <div className="ws-item-desc">
          <p className="ws-desc-text">{description}</p>
          {features && (
            <div className="ws-features">
              <div className="desc-features">
                {features[0] && (
                  <FeatureItem
                    icon={features[0]?.icon}
                    highlight={features[0]?.highlight}
                    description={features[0]?.description}
                  />
                )}
                {features[1] && (
                  <FeatureItem
                    icon={features[1]?.icon}
                    highlight={features[1]?.highlight}
                    description={features[1]?.description}
                  />
                )}
              </div>
              <div className="desc-features">
                {features[2] && (
                  <FeatureItem
                    icon={features[2]?.icon}
                    highlight={features[2]?.highlight}
                    description={features[2]?.description}
                  />
                )}
                {features[3] && (
                  <FeatureItem
                    icon={features[3]?.icon}
                    highlight={features[3]?.highlight}
                    description={features[3]?.description}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceItem;
