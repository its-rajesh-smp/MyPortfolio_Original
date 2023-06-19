import "./ProjectBar.css";
function ProjectBar(props) {
  return (
    <div ref={props.projectBarRef} className="ProjectBar">
      <button>DYNAMIC</button>
      <button>STATIC</button>
      <button>CODEPEN</button>
    </div>
  );
}

export default ProjectBar;
