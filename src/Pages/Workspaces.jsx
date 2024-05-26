import Workspace from "../Components/Workspace";
import WorkspaceIntro from "../Components/WorkspaceIntro";
import Header from "../Components/Header";
import Member from "../Components/Member";
import Footer from "../Components/Footer";

const Workspaces = () => {
  return (
    <div className="workspaces">
      <Header />
      <WorkspaceIntro
        header="Explore"
        text1="Our"
        text2="hub with"
        text3="our dynamic map"
        yellowText="vibrant workspace"
      />
      <Workspace />
      <Member />
      <Footer />
    </div>
  );
};

export default Workspaces;
