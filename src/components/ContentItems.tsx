import { FC } from "react";
import PizzaBlock from "./PizzaBlock";
import PizzaBlockSkeleton from "./PizzaBlockSkeleton";

import { IReqPizza } from "../redux/slices/req-thunk/slice";

type ContentItemsProps = {
  pizzaList: IReqPizza[];
  isLoading: boolean;
};

const ContentItems: FC<ContentItemsProps> = ({ pizzaList, isLoading }) => {
  const skeletonArray = new Array(8).fill(null);
  return (
    <div className="content__items">
      {isLoading
        ? skeletonArray.map((_, index) => <PizzaBlockSkeleton key={index} />)
        : pizzaList.map((pizza, index) => (
            <PizzaBlock key={index} data={pizza} />
          ))}
    </div>
  );
};

export default ContentItems;
