import { FC } from "react";

import styles from "./styles.module.scss";

type CategoryNames = {
  userTitle: string;
  serverTitle: string;
};

type MenuProps = {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  header: string;
  categories: CategoryNames[];
};

const Menu: FC<MenuProps> = ({
  menuActive,
  setMenuActive,
  header,
  categories,
}) => {
  return (
    <div
      className={menuActive ? styles.menu + " " + styles.active : styles.menu}
    >
      <div className={styles.blur} onClick={() => setMenuActive(false)} />
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>{header}</div>
        <ul>
          {categories.map(({ userTitle }) => (
            <li key={userTitle}>{userTitle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
