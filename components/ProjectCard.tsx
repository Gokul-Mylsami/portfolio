import React, { useState } from "react";
import styles from "../styles/ProjectCard.module.css";
import data from "../skills.json";

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
  let skills = data[0];
  const [techStack, setTechStack] = useState([]);

  const keys = Object.keys(data[0]);
  console.log(keys);

  return (
    <div className={styles.flip}>
      <div
        className={styles.front}
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
        <h1 className={styles.textShadow}>{name}</h1>
      </div>
      <div className={styles.back}>
        <h2 className={styles.backSideTitle}>{name}</h2>
        <p className={styles.backSideDescription}>{description}</p>
        <a href={`${githubLink}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
          </svg>
        </a>
        <div className={styles.cardBottom}>
          <img
            className={styles.cardBottomImage}
            src="data:image/png;base64,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"
          />
          <img
            className={styles.cardBottomImage}
            src="data:image/png;base64,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"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
