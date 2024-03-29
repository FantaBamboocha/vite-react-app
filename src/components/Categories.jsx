import { useDispatch, useSelector } from "react-redux";

import CustomLink from "./CustomLink";

import { requestData } from "../redux/slices/reqPizzaSlice";
const Categories = () => {
  const categoryNames = [
    { userTitle: "Все", serverTitle: "all" },
    { userTitle: "Мясные", serverTitle: "meat" },
    { userTitle: "Вегетарианские", serverTitle: "vegetarian" },
    { userTitle: "Гриль", serverTitle: "grill" },
    { userTitle: "Острые", serverTitle: "spicy" },
    { userTitle: "Закрытые", serverTitle: "closed" },
  ];

  const dispatch = useDispatch();

  const { sortProperty, searchValue } = useSelector((state) => state.params);
  const handleClick = (serverTitle) => {
    dispatch(requestData({ category: serverTitle, sortProperty, searchValue }));
  };

  return (
    <div className="categories">
      <ul>
        {categoryNames.map(({ userTitle, serverTitle }) => (
          <CustomLink
            key={serverTitle}
            to={`/category/${serverTitle}`}
            serverTitle={serverTitle}
            onClick={() => handleClick(serverTitle)}
          >
            {userTitle}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
