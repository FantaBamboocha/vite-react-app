import { FC } from "react";

import styles from "./styles.module.scss";

type BurgerProps = {
  menuActive: Boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Burger: FC<BurgerProps> = ({ menuActive, setMenuActive }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div
          className={styles.burgerBtn}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Burger;
