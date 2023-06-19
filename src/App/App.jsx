import React from "react";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
const JourneyPage = React.lazy(() =>
  import("../Pages/JourneyPage/JourneyPage")
);
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
      <JourneyPage />
      <SkillPage />
      <ProjectPage />
    </>
  );
}

export default App;
