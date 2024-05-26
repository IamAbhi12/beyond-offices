import Header from "../Components/Header";
import About from "../Components/About";
import WorkspaceIntro from "../Components/WorkspaceIntro";
import Vision from "../Components/Vision";
import Mission from "../Components/Mission";
import Member from "../Components/Member";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      <WorkspaceIntro
        header="About us"
        text1="Discover your"
        text2="with us,"
        text3="where innovation and collaboration thrive."
        yellowText="ideal workspace"
      />
      <About />
      <Vision />
      <Mission />
      <Member />
      <Footer />
    </div>
  );
};

export default AboutUs;
