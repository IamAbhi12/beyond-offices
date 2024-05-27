import { Link } from "react-router-dom";
import "./Member.css";

const Member = () => {
  return (
    <section className="member" id="member">
      <div className="member-signup">
        <div className="member-become">
          <div className="become-text">Become a member</div>
          <div className="become-stroke"></div>
        </div>
        <div className="member-experience-title">
          Ready to try different work experience now?
        </div>
        <div className="member-experience-text">
          Get the best working experience that you never feel before
        </div>
        <Link
          to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
          target="_blank"
        >
          <div className="member-signup-btn">
            <span className="mbr-signup-btn">SIGN UP NOW</span>
          </div>
        </Link>
      </div>
      <div className="member-pic">
        <img src="images/member1.png" alt="member" />
      </div>
    </section>
  );
};

export default Member;
