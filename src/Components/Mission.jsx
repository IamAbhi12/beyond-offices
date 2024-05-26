import "./Mission.css";

function Mission() {
  return (
    <div className="mission">
      <div className="mission-img">
        <img src="/images/mission.png" alt="mission" />
      </div>
      <div className="mission-text">
        <div className="mission-title">Our Mission</div>
        <div className="mission-stroke"></div>
        <div className="mission-desc">
          Our mission is to provide a dynamic and inclusive co-working
          environment that goes beyond traditional office spaces. We aim to
          foster creativity, productivity, and personal growth by offering a
          range of amenities and social clubs, creating a unique work-play
          experience for our members.
        </div>
      </div>
    </div>
  );
}

export default Mission;
