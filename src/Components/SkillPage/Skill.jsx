import "./Skill.css";
function Skill(props) {
  return (
    <div className="Skill">
      {props.icon}
      <p>{props.name}</p>
    </div>
  );
}

export default Skill;
