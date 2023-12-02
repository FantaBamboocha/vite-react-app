import { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const toggleActive = (number) => {
    setActiveIndex(number);
  };

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((category, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => toggleActive(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
