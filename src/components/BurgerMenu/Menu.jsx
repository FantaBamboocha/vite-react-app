import styles from "./styles.module.scss";

const Menu = ({ active, setActive, header, categories }) => {
  return (
    <div className={active ? styles.menu + " " + styles.active : styles.menu}>
      <div className={styles.blur} onClick={() => setActive(false)} />
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>{header}</div>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
