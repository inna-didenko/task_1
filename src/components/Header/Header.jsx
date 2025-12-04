import logo from "../../assets/img/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className="container">
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
    </div>
  );
};


