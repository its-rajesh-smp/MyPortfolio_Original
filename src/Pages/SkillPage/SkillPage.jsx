import Skill from "../../Components/SkillPage/Skill";
import PageHeading from "../../Components/UI/PageHeading/PageHeading";
import PageWrapper from "../../Components/UI/PageWrapper/PageWrapper";
import SKILLS from "../../DATA/SKILLS";
import "./SkillPage.css";

function SkillPage() {
  return (
    <section>
      <PageWrapper className="SkillPage">
        <PageHeading name="SKILLS" />

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
