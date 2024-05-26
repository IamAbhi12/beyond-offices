import "./About.css";

const About = () => {
  return (
    <div className="about-intro-container">
      <div className="about-intro-text">
        <p>
          Welcome to Beyond Offices, where we're on a mission to cultivate
          communities that work and grow together. Our vision is to provide a
          specially curated space for all professionals, starting from a
          location deeply meaningful to our founder's family. Beyond Offices is
          more than just an office—it's a place where everyone feels at home and
          inspired to work.
        </p>
        <p>
          Our founder, drawing on her background in set design from a bachelor's
          degree in Video Film Design and Design Management from her master's,
          along with her experience in New York, envisioned a space with
          human-centric design. A place where everyone can feel at home.
        </p>
        <p>
          Beyond Offices is the culmination of our founder's journey to find her
          place in the business world. Nestled in the heart of Guwahati city,
          our 8060 sqft co-working space offers amenities such as valet parking,
          a cafe, sleeping pods, an amphitheatre, an art cafe, a library, and a
          recording room. It truly is a place where work meets fun.
        </p>
        <p>
          Beyond being a workspace, we've designed our space for social clubs
          like cinema, book, music, and art clubs—called Beyond Socials—where
          people of similar interests can come together and explore their
          hobbies.
        </p>
      </div>
      <div className="about-intro-img-section">
        <div className="about-logo">
          <img src="/images/main-logo.png" alt="Beyond" />
        </div>
        <div className="about-founder">
          <img src="/images/founder1.png" alt="Shailja Lakhotia" />
        </div>
        <div className="about-founder-name">Shailja Lakhotia</div>
        <div className="about-founder-designation">Founder</div>
      </div>
    </div>
  );
};

export default About;
