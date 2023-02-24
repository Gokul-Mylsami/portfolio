import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const projects = [
    {
      name: "KEC Exam Hall Management",
      description:
        "Allocates the Exam Hall for the Students dynamically , and provided the student's login to see the Exam Venue ",
      githubLink:
        "https://github.com/Gokul-Mylsami/Exam-Hall-Seat-Allotment.git",
      techStackUsed: ["React", "Node js", "MongoDB", "Sass", "Express"],
      imageUrl:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    },
  ];
  return (
    <>
      <div className={"container " + styles.projectContainer}>
        <h1>Projects</h1>
        {projects.map((singleProject) => {
          return (
            <ProjectCard
              key={singleProject.name}
              name={singleProject.name}
              description={singleProject.description}
              imageUrl={singleProject.imageUrl}
              githubLink={singleProject.githubLink}
              techStackUsed={singleProject.techStackUsed}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
