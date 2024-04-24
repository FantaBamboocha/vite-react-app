import { useState, FC } from "react";

import Burger from "./Burger";
import Menu from "./Menu";

import { categoryNames } from "@components/Categories";
import styles from "./styles.module.scss";

const BurgerMenu: FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={styles.wrapperBurger}>
      <Burger menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        header={"Менюшечка"}
        categories={categoryNames}
      />
    </div>
  );
};

export default BurgerMenu;
