import { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPizza } from "@redux/slices/cart/slice";
import { RootState } from "@redux/store";

type PizzaBlockProps = {
  data: {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
  };
};
const PizzaBlock: FC<PizzaBlockProps> = (props) => {
  const { id, imageUrl, title, types, sizes, price } = props.data;
  const typeNames = ["тонкое", "традиционное"];

  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);
  const dispatch = useDispatch();

  const pizzaToAdd = {
    id,
    imageUrl,
    title,
    price,
    size: sizes[activeSizeIndex],
    type: typeNames[activeTypeIndex],
    count: 1,
  };

  const addPizzaToCart = () => {
    dispatch(addPizza(pizzaToAdd));
  };

  const toggleActiveSizeIndex = (number: number) => {
    setActiveSizeIndex(number);
  };

  const toggleActiveTypeIndex = (number: number) => {
    setActiveTypeIndex(number);
  };

  const cartPizza = useSelector((state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addCount = cartPizza ? cartPizza.count : 0;
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => (
            <li
              key={index}
              className={activeTypeIndex === index ? "active" : ""}
              onClick={() => toggleActiveTypeIndex(index)}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={size}
              className={activeSizeIndex === index ? "active" : ""}
              onClick={() => toggleActiveSizeIndex(index)}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          onClick={addPizzaToCart}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addCount > 0 && <i>{addCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
