import Skill from "../../Components/SkillPage/Skill";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
import SKILLS from "../../DATA/SKILLS";
import "./SkillPage.css";

function SkillPage() {
  return (
    <section className="page">
      <PageWrapper className="SkillPage">
        <h1 className="pageHeading">SKILLS</h1>
        <div className="SkillPage__container">
          {SKILLS.map((skillData) => {
            return (
              <Skill
                key={skillData.name}
                name={skillData.name}
                icon={skillData.icon}
              />
            );
          })}
        </div>
      </PageWrapper>
    </section>
  );
}

export default SkillPage;
