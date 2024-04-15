import CustomLink from "./CustomLink";

import { CategoryEnum } from "../@types/enums";

type CategoryNames = {
  userTitle: string;
  serverTitle: CategoryEnum;
};

export const categoryNames: CategoryNames[] = [
  { userTitle: "Все", serverTitle: CategoryEnum.ALL },
  { userTitle: "Мясные", serverTitle: CategoryEnum.MEAT },
  { userTitle: "Вегетарианские", serverTitle: CategoryEnum.VEGETARIAN },
  { userTitle: "Гриль", serverTitle: CategoryEnum.GRILL },
  { userTitle: "Острые", serverTitle: CategoryEnum.SPICY },
  { userTitle: "Закрытые", serverTitle: CategoryEnum.CLOSED },
];

const Categories: React.FC = () => {
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
