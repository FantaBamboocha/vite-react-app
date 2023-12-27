import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Уууупс, что-то пошло не так 😬</h2>
      <Link to="/">Перейти на главную страницу</Link>
    </div>
  );
};

export default NotFoundPage;
