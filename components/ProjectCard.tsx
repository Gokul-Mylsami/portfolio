import React, { useState } from "react";
import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";

interface ProjectCard {
  name: string;
  description: string;
  githubLink: string;
  techStackUsed: string[];
  imageUrl: string;
  hostedLink?: string;
}

const ProjectCard: React.FC<ProjectCard> = ({
  name,
  description,
  githubLink,
  techStackUsed,
  imageUrl,
  hostedLink,
}) => {
  const getTechStack = () => {
    let str: string = "";

    techStackUsed.forEach((tech) => {
      str += tech + ", ";
    });

    return str.slice(0, str.length - 1);
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt="Project Image"
          layout="fill"
          placeholder="empty"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.projectName}>{name}</h2>
        <div className={styles.hiddenContent}>
          <p className={styles.projectDescription}>{description}</p>
          <p className={styles.projectDescription}>
            Done in : {getTechStack()}
          </p>
          <div className={styles.links}>
            <a href={githubLink} target="_blank">
              GitHub
            </a>
            {hostedLink && (
              <a href={hostedLink} target="_blank">
                Open Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
