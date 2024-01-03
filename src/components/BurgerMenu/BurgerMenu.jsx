import { useState } from "react";

import Burger from "./Burger";
import Menu from "./Menu";

import styles from "./styles.module.scss";
const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const categories = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className={styles.wrapperBurger}>
      <Burger active={menuActive} setActive={setMenuActive} />
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Менюшечка"}
        categories={categories}
      />
    </div>
  );
};

export default BurgerMenu;
