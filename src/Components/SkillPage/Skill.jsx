import { useRef } from "react";
import "./Skill.css";
import useScrollTriggure from "../../Hooks/useScrollTriggure";
function Skill(props) {
  const skillRef = useRef();

  useScrollTriggure(
    skillRef,
    {
      duration: 0,
      opacity: 0,
      translateY: "-70px",
      delay: 3,
      ease: "expo.out",
    },
    { opacity: 1, translateY: "0px" }
  );

  return (
    <div ref={skillRef} className="Skill">
      {props.icon}
      <p>{props.name}</p>
    </div>
  );
}

export default Skill;
