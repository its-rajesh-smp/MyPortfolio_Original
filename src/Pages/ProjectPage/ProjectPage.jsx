import Project from "../../Components/ProjectPage/Project/Project";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
import "./ProjectPage.css";
function ProjectPage() {
  return (
    <section className="page">
      <PageWrapper className="ProjectPage">
        <h1 className="pageHeading">PROJECTS</h1>

        <div className="loader">
          <div style={{ width: "100%" }} className="progressBar"></div>
        </div>

        <div className="ProjectPage__container">
          <Project />
          <Project />
          <Project />
        </div>
      </PageWrapper>
    </section>
  );
}

export default ProjectPage;
