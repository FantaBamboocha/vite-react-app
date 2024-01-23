import { useDispatch } from "react-redux";

import { setCategoryIndex } from "../redux/slices/filter";

const Categories = ({ activeCategoryIndex }) => {
  const categoryNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const dispatch = useDispatch();

  const toggleActiveCategory = (index) => {
    dispatch(setCategoryIndex(index));
  };

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((category, index) => (
          <li
            key={index}
            className={index === activeCategoryIndex ? "active" : ""}
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
