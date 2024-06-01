import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

function Header() {
  const location = useLocation();
  const [showTray, setShowTray] = useState(false);

  function showHideTray() {
    setShowTray(!showTray);
  }

  return (
    <>
      <header className="desktop-header">
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
      <header className="mobile-header">
        <div className="header-wrapper">
          <Link to="/">
            <div className="main-logo-mobile">
              <img src="/images/main-logo-mobile.png" alt="main logo"></img>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="main-text-mobile">BEYOND</div>
          </Link>
          <div
            className="hamburger-menu-mobile"
            id="menuToggle"
            style={
              showTray
                ? { backgroundColor: "white" }
                : { backgroundColor: "transparent" }
            }
          >
            <input type="checkbox" onClick={showHideTray} />
            <span></span>
            <span></span>
            <span></span>
            <ul
              id="menu"
              style={showTray ? { display: "block" } : { display: "none" }}
            >
              <li>
                <Link to="/">
                  <div className="nav-btn">Home</div>
                </Link>
              </li>
              <li>
                <Link to="/workspaces">
                  <div className="nav-btn">Workspace</div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div className="nav-btn">About</div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div
                    className="nav-btn"
                    onClick={() => {
                      scrollToBottom();
                    }}
                  >
                    Contact Us
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
                  target="_blank"
                >
                  <button className="login-btn-mobile">Login</button>
                </Link>
              </li>
              <li>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
                  target="_blank"
                >
                  <button className="signup-btn-mobile">Book Us</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
