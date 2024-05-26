import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="main-logo"></div>
      <nav>
        <div className="nav-item">
          <Link to="/" className="nav-link">
            <div className="nav-btn">Home</div>
          </Link>
          <div
            className={`nav-stroke ${
              location.pathname === "/" ? "current" : ""
            }`}
          ></div>
        </div>
        <div className="nav-item">
          <Link to="/workspaces" className="nav-link">
            <div className="nav-btn">Workspace</div>
          </Link>
          <div
            className={`nav-stroke ${
              location.pathname === "/workspaces" ? "current" : ""
            }`}
          ></div>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link">
            <div className="nav-btn">About</div>
          </Link>
          <div
            className={`nav-stroke ${
              location.pathname === "/about" ? "current" : ""
            }`}
          ></div>
        </div>
        <div className="nav-item">
          <div
            className="nav-btn"
            onClick={() => {
              scrollToBottom();
            }}
          >
            Contact Us
          </div>
        </div>
      </nav>
      <div className="register">
        <div className="login-btn">
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
            target="_blank"
          >
            <button>Login</button>
          </Link>
        </div>
        <div className="signup-btn">
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
            target="_blank"
          >
            <button>Book Us</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
