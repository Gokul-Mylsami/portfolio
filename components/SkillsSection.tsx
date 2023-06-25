import SkillsCard from "./SkillsCard";
import styles from "../styles/SkillSection.module.css";
import skills from "../skills.json";
const SkillsSection = () => {
  const skillData: any = skills;
  const roles = Object.keys(skills);

  return (
    <div className={"container " + styles.sectionContainer}>
      <h1 style={{ textAlign: "center", marginTop: 150 }}>
        I have my Best skills{" "}
      </h1>
      <div>
        {roles.map((role: string) => {
          return (
            <>
              <h4 className={styles.role}>{role}</h4>
              <div className={styles.cardsWrapper}>
                {skillData[role].map(
                  (skill: { name: string; imageURL: string }) => {
                    return (
                      <SkillsCard
                        name={skill.name}
                        imageURL={skill.imageURL}
                        key={skill.name}
                      />
                    );
                  }
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
