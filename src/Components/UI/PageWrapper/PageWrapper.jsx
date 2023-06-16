import "./PageWrapper.css";
function PageWrapper(props) {
  return (
    <div className={`PageWrapper  ${props.className && props.className}`}>
      {props.children}
    </div>
  );
}

export default PageWrapper;
