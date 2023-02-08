import styles from "../styles/SkillsCard.module.css";

interface SkillsCardInterface {
  name: string;
  imageURL: string;
}

const SkillsCard: React.FC<SkillsCardInterface> = ({ name, imageURL }) => {
  return (
    <div className={styles.cardWrapper} key={name} title={name}>
      <img src={imageURL} width={50} height={50} />
    </div>
  );
};

export default SkillsCard;
