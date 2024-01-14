import { useState } from "react";

const Categories = ({ activeIndexCategory, toggleActiveCategory }) => {
  const categoryNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((category, index) => (
          <li
            key={index}
            className={index === activeIndexCategory ? "active" : ""}
            onClick={() => toggleActiveCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
