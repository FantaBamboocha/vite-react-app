import PizzaBlock from "./PizzaBlock";
import PizzaBlockSkeleton from "./PizzaBlockSkeleton";

const ContentItems = ({ pizzaList, isLoading }) => {
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
