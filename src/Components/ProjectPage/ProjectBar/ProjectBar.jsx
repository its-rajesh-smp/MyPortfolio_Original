import { useRef } from "react";
import useScrollTriggure from "../../../Hooks/useScrollTriggure";
import "./ProjectBar.css";
function ProjectBar(props) {
  const buttonRef1 = useRef();
  const buttonRef2 = useRef();
  const buttonRef3 = useRef();

  useScrollTriggure(
    buttonRef1,
    {
      x: "-200vw",
    },
    { x: "0px" }
  );
  useScrollTriggure(
    buttonRef2,
    {
      x: "-150vw",
    },
    { x: "0px" }
  );
  useScrollTriggure(
    buttonRef3,
    {
      x: "-100vw",
    },
    { x: "0px" }
  );

  return (
    <div className="ProjectBar">
      <button ref={buttonRef1}>DYNAMIC</button>
      <button ref={buttonRef2}>STATIC</button>
      <button ref={buttonRef3}>CODEPEN</button>
    </div>
  );
}

export default ProjectBar;
