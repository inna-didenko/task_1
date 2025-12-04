import audio from "../../assets/img/audio.svg";
import styles from "./Audio.module.scss";

export const Audio = () => {
  return (
    <div className={styles.audioContainer}>
      <img src={audio} alt="audio" />
    </div>
  );
};
