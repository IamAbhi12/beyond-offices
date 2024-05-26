import "./Hero.css";
import Carousel from "./Carousel";
import Form from "./Form";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="intro">
        <div className="introducing">Introducing</div>
        <div className="stroke"></div>
      </div>
      <div className="content">
        <div className="slogan">
          <div className="slogan1">Revolutionary</div>
          <div className="slogan2">
            {" "}
            co-working space to realize your innovation
          </div>
        </div>
        <div className="about">
          At Beyond Offices, we spearhead new initiatives and provide mentorship
          to a new startup, and help grow their opportunities in key local,
          regional and global markets
        </div>
      </div>
      <div className="img-slider">
        <Carousel
          images={[
            "/images/hero1.png",
            "/images/hero2.png",
            "/images/hero3.png",
            "/images/hero4.png",
          ]}
        />
      </div>
      <div className="search-form">
        <Form />
      </div>
    </section>
  );
}

export default Hero;
