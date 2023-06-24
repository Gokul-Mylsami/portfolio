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
    {
      name: "Tourist-Guidance",
      description:
        "This app is a helpful tool for travelers looking to explore new destinations and find nearby accommodations. With this app, you can easily browse through a variety of tourist places, each with its own detailed description, photos, and ratings.",
      githubLink: "https://github.com/Gokul-Mylsami/Tourist-Guidance.git",
      techStackUsed: ["React", "Node js", "MongoDB", "Express"],
      imageUrl:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80",
    },
    {
      name: "Meals App",
      description:
        "This app is a helpful tool for meal planning, containing a variety of meals with different categories to choose from. Whether you're looking for healthy options, quick and easy recipes, or something a little more indulgent, this app has you covered.",
      githubLink: "https://github.com/Gokul-Mylsami/Meals-App.git",
      techStackUsed: ["React", "React-native"],
      imageUrl:
        "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Cocktail",
      description:
        "This app is a helpful tool for anyone looking to expand their cocktail-making skills and try new recipes. With this app, you can easily browse through a variety of cocktails, each with its own list of ingredients and step-by-step instructions.",
      githubLink: "https://github.com/Gokul-Mylsami/Meals-App.git",
      techStackUsed: ["React", "Open Source API"],
      imageUrl:
        "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Memories",
      description:
        "This app is designed to help you capture and remember the best moments of your life. Whether it's a special occasion, a personal achievement, or just a happy memory, you can use this app to record and store those moments in a convenient way.",
      githubLink: "https://github.com/Gokul-Mylsami/Meals-App.git",
      techStackUsed: ["React", "Mongoose", "MongoDB"],
      imageUrl:
        "https://images.unsplash.com/photo-1531844734254-51193b49c604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    },
  ];
  return (
    <>
      <div className={"container " + styles.projectContainer}>
        <h1 style={{ textAlign: "center", marginTop: 64 }}>Projects</h1>
        <div className={styles.projects}>
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
      </div>
    </>
  );
};

export default Projects;
