import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ScrollToTop from "./ScrollToTop";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer" id="footer">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo"></div>
            <div className="footer-about-section">
              <div className="footer-about-text">
                We offer comfortable spaces, cozy cafe, high-speed internet,
                spacious parking area and many more for your best workspaces and
                meetings
              </div>
              <Link
                to="https://www.instagram.com/beyondoffices/"
                target="_blank"
                className="footer-socials-link"
              >
                <div className="footer-socials">
                  <div className="footer-social-item insta">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.05762 18.3461C3.05762 11.9381 3.05762 8.73413 4.66353 6.52379C5.18217 5.80994 5.80994 5.18217 6.52379 4.66353C8.73413 3.05762 11.9381 3.05762 18.3461 3.05762C24.754 3.05762 27.958 3.05762 30.1684 4.66353C30.8822 5.18217 31.51 5.80994 32.0286 6.52379C33.6345 8.73413 33.6345 11.9381 33.6345 18.3461C33.6345 24.754 33.6345 27.958 32.0286 30.1684C31.51 30.8822 30.8822 31.51 30.1684 32.0286C27.958 33.6345 24.754 33.6345 18.3461 33.6345C11.9381 33.6345 8.73413 33.6345 6.52379 32.0286C5.80994 31.51 5.18217 30.8822 4.66353 30.1684C3.05762 27.958 3.05762 24.754 3.05762 18.3461ZM18.3461 10.2525C13.8763 10.2525 10.2522 13.8766 10.2522 18.3464C10.2522 22.8163 13.8763 26.4403 18.3461 26.4403C22.816 26.4403 26.44 22.8163 26.44 18.3464C26.44 13.8766 22.816 10.2525 18.3461 10.2525ZM18.3461 23.4051C15.5578 23.4051 13.2874 21.1348 13.2874 18.3464C13.2874 15.556 15.5578 13.2877 18.3461 13.2877C21.1345 13.2877 23.4048 15.556 23.4048 18.3464C23.4048 21.1348 21.1345 23.4051 18.3461 23.4051ZM28.1254 9.64542C28.1254 10.2411 27.6426 10.7239 27.0469 10.7239C26.4513 10.7239 25.9684 10.2411 25.9684 9.64542C25.9684 9.04978 26.4513 8.56691 27.0469 8.56691C27.6426 8.56691 28.1254 9.04978 28.1254 9.64542Z"
                        fill="#0D2C4A"
                      />
                    </svg>
                  </div>
                  <div className="insta-username">@beyondoffices</div>
                  <div className="socials-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                    >
                      <path
                        d="M10 8.34626C10 8.63959 9.89334 8.90627 9.68001 9.1196L2.74668 15.7863C2.32001 16.1863 1.65335 16.1863 1.22668 15.7596C0.826681 15.3329 0.826682 14.6663 1.25335 14.2396L7.38668 8.34626L1.25335 2.4529C0.826682 2.0529 0.82668 1.35958 1.22668 0.932912C1.62668 0.506245 2.32001 0.506284 2.74668 0.906284L9.68001 7.57292C9.89334 7.78625 10 8.05293 10 8.34626Z"
                        fill="#0D2C4A"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="footer-content">
            <div className="footer-content-column spaces">
              <div className="footer-content-title">Spaces</div>
              <HashLink
                smooth
                to="/workspaces#"
                className="footer-content-item"
              >
                Co-working spaces
              </HashLink>
              <HashLink
                smooth
                to="/workspaces#"
                className="footer-content-item"
              >
                Meeting rooms
              </HashLink>
              <HashLink
                smooth
                to="/workspaces#"
                className="footer-content-item"
              >
                Event spaces
              </HashLink>
              <HashLink
                smooth
                to="/workspaces#"
                className="footer-content-item"
              >
                Cafe
              </HashLink>
            </div>
            <div className="footer-content-column company">
              <div className="footer-content-title">Company</div>
              <HashLink to="/about#" className="footer-content-item" smooth>
                About us
              </HashLink>
              <HashLink
                to="/#faq-item-pricing"
                className="footer-content-item"
                smooth
                scroll={(el) => {
                  el.style.display = "block";
                  el.children[0].click();
                  el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Pricing
              </HashLink>
              <HashLink to="/#faqs" className="footer-content-item" smooth>
                FAQs
              </HashLink>
            </div>
            <div className="footer-content-column contact">
              <div className="footer-content-title">Contact us</div>
              <Link
                to="mailto:info@beyondoffices.co"
                target="_blank"
                className="footer-content-item"
              >
                <div className="footer-content-item">info@beyondoffices.co</div>
              </Link>
              <Link
                to="https://maps.app.goo.gl/Mds3aa1UM1AVaoMTA?g_st=iw"
                target="_blank"
                className="footer-content-item"
              >
                <div className="footer-content-item address">
                  5Q97+M5Q, Opposite Apollo Clinic Kanchan Road, GS Rd, South
                  Sarania, Ulubari, Guwahati, Assam 781007
                </div>
              </Link>

              <div
                className="footer-content-item"
                onClick={() => {
                  navigator.clipboard.writeText("+91 0823346700");
                  alert("Contact number copied to clipboard");
                }}
              >
                +91 91366 11148
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
