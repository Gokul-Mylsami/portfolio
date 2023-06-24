import React, { useState } from "react";
import styles from "../styles/ProjectCard.module.css";
import data from "../skills.json";
import Image from "next/image";

interface ProjectCard {
  name: string;
  description: string;
  githubLink: string;
  techStackUsed: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCard> = ({
  name,
  description,
  githubLink,
  techStackUsed,
  imageUrl,
}) => {
  const getTechStack = () => {
    let str: string = "";

    techStackUsed.forEach((tech) => {
      str += tech + " ";
    });

    return str;
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Project Image" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.projectName}>{name}</h2>
        <div className={styles.hiddenContent}>
          <p className={styles.projectDescription}>{description}</p>
          <p className={styles.projectDescription}>
            Done in : {getTechStack()}
          </p>
          <div className={styles.links}>
            <a href="github-link" target="_blank">
              GitHub
            </a>
            <a href="hosted-link" target="_blank">
              Hosted
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
