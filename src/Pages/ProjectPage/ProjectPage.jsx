import { useRef } from "react";
import "./ProjectPage.css";
import Project from "../../Components/ProjectPage/Project/Project";
import ProjectBar from "../../Components/ProjectPage/ProjectBar/ProjectBar";
import ProjectContainer from "../../Components/ProjectPage/ProjectContainer/ProjectContainer";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";

function ProjectPage() {
  return (
    <section>
      <PageWrapper className="ProjectPage">
        <PageHeading name="PROJECTS" />
        <ProjectBar />

        <ProjectContainer>
          <Project showFrom="left" />
          <Project showFrom="right" />
          <Project showFrom="left" />
          <Project showFrom="right" />
        </ProjectContainer>
      </PageWrapper>
    </section>
  );
}

export default ProjectPage;
