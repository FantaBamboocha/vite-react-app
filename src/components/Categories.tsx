import { useDispatch, useSelector } from "react-redux";

import CustomLink from "./CustomLink";

import { requestData } from "../redux/slices/reqPizzaSlice";
import { RootState } from "../@types/types";

const Categories: React.FC = () => {
  const categoryNames = [
    { userTitle: "Все", serverTitle: "all" },
    { userTitle: "Мясные", serverTitle: "meat" },
    { userTitle: "Вегетарианские", serverTitle: "vegetarian" },
    { userTitle: "Гриль", serverTitle: "grill" },
    { userTitle: "Острые", serverTitle: "spicy" },
    { userTitle: "Закрытые", serverTitle: "closed" },
  ];

  return (
    <div className="categories">
      <ul>
        {categoryNames.map(({ userTitle, serverTitle }) => (
          <CustomLink
            key={serverTitle}
            to={`/category/${serverTitle}`}
            serverTitle={serverTitle}
          >
            {userTitle}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
