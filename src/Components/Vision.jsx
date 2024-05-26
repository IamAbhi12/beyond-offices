import "./Vision.css";

function Vision() {
  return (
    <div className="vision">
      <div className="vision-text">
        <div className="vision-title">Our Vision</div>
        <div className="vision-stroke"></div>
        <div className="vision-desc">
          To create a vibrant community of professionals who collaborate,
          innovate, and thrive together in a specially curated workspace that
          feels like a second home.
        </div>
      </div>
      <div className="vision-img">
        <img src="/images/vision.png" alt="vision" />
      </div>
    </div>
  );
}

export default Vision;
