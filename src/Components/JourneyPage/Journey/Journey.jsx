import "./Journey.css";
function Journey(props) {
  return (
    <div className="Journey">
      <div className="Journey__date">
        <h3>
          {props["date-from"]} {props["date-to"]}
        </h3>
      </div>
      <h2>{props.name}</h2>
      <h4 className="Journey__about">{props.about}</h4>
    </div>
  );
}

export default Journey;
