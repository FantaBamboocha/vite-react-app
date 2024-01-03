import styles from "./styles.module.scss";

const Burger = ({ active, setActive }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div
          className={styles.burgerBtn}
          onClick={() => {
            setActive(!active);
          }}
        >
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Burger;
