import { useRef } from "react";
import "./PageHeading.css";
import useScrollTriggure from "../../../Hooks/useScrollTriggure";
function PageHeading(props) {
  const lineRef = useRef();
  useScrollTriggure(
    lineRef,
    { translateX: "-100vw" },
    { translateX: "0" },
    { top: "90%", bottom: "80%", scrub: 1 }
  );

  return (
    <div className="PageHeading">
      <h1>{props.name}</h1>
      <div className="lineOuter">
        <div ref={lineRef}></div>
      </div>
    </div>
  );
}

export default PageHeading;
