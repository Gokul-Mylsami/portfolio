import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";
import projectData from "../projects.json";
const Projects = () => {
  const projects: any = projectData;

  return (
    <>
      <div className={"container " + styles.projectContainer}>
        <h1 style={{ textAlign: "center", marginTop: 64 }}>Projects</h1>
        <div className={styles.projects}>
          {projects.map((singleProject: any) => {
            return (
              <ProjectCard
                key={singleProject.name}
                name={singleProject.name}
                description={singleProject.description}
                imageUrl={singleProject.imageUrl}
                githubLink={singleProject.githubLink}
                techStackUsed={singleProject.techStackUsed}
                hostedLink={
                  singleProject.hostedLink ? singleProject.hostedLink : ""
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
