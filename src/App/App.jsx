import React from "react";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
const ProjectPage = React.lazy(() =>
  import("../Pages/ProjectPage/ProjectPage")
);

const SkillPage = React.lazy(() => import("../Pages/SkillPage/SkillPage"));
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <HomePage />
      <SkillPage />
      <ProjectPage />
    </>
  );
}

export default App;
