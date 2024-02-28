import { useDispatch } from "react-redux";

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
  const handleClick = (serverTitle) => {
    dispatch(requestData({ category: serverTitle }));
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
