import "./PageHeading.css";
function PageHeading(props) {
  return (
    <div className="PageHeading">
      <h1>{props.name}</h1>
      <div></div>
    </div>
  );
}

export default PageHeading;
