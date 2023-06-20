import { useRef } from "react";
import "./Skill.css";
import useScrollTriggure from "../../Hooks/useScrollTriggure";
function Skill(props) {
  const skillRef = useRef();

  useScrollTriggure(
    skillRef,
    {
      opacity: 0,
      y: "-70px",
      ease: "expo.out",
    },
    { opacity: 1, y: "0px" },

    { top: "90%", bottom: "60%", scrub: 0.6 }
  );

  return (
    <div ref={skillRef} className="Skill">
      {props.icon}
      <p>{props.name}</p>
    </div>
  );
}

export default Skill;
