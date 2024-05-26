import "./WorkspaceIntro.css";

const WorkspaceIntro = (props) => {
  return (
    <div className="ws-intro-container">
      <div className="ws-intro-heading">
        <div className="ws-explore">{props.header}</div>
        <div className="ws-intro-stroke"></div>
      </div>
      <div className="ws-intro-desc">
        {props.text1}{" "}
        <span className="ws-intro-yellow">{props.yellowText}</span>{" "}
        {props.text2}
        <br></br>
        {props.text3}
      </div>
    </div>
  );
};

export default WorkspaceIntro;
