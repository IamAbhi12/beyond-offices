import "./WhyBeyond.css";

const FeatureItem = ({ icon, highlight, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={description} className="feature-icon" />
      <div className="feature-desc">
        <div className="feature-highlight">{highlight}</div>
        <div className="feature-description">{description}</div>
      </div>
    </div>
  );
};

const WhyBeyond = () => {
  return (
    <section className="why-beyond" id="whybeyond">
      <div className="why-beyond-features">
        <div className="features-line">
          <FeatureItem
            icon="/icons/icon1.svg"
            highlight="200+"
            description="Seating Capacity"
          />
          <FeatureItem
            icon="/icons/icon12.svg"
            highlight="40+"
            description="Private Cabins"
          />
          <FeatureItem
            icon="/icons/icon3.svg"
            highlight="9"
            description="Event spaces"
          />
        </div>
        <div className="features-line">
          <FeatureItem
            icon="/icons/icon6.svg"
            highlight="4"
            description="Social Clubs"
          />
          <FeatureItem
            icon="/icons/icon5.svg"
            highlight="500 Mbps"
            description="Internet speed"
          />
          <FeatureItem
            icon="/icons/icon4.svg"
            highlight="50+"
            description="Meeting rooms"
          />
        </div>
      </div>
      <div className="why-beyond-quote">
        <div className="title-line">
          <div className="title">Why Beyond </div>
          <div className="why-stroke"></div>
        </div>
        <div className="why-slogan">
          We revolutionize your <br></br>workspace
        </div>
        <div className="why-description">
          Our mission is to redefine co-working with a dynamic, inclusive space.
          We offer top-notch amenities and social clubs to spark creativity,
          boost productivity, and foster growth, creating the ultimate work-play
          environment for your professional and personal development.
        </div>
      </div>
    </section>
  );
};

export default WhyBeyond;
export { FeatureItem };
