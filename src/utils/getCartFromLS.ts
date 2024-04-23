import { IPizzaCart } from "../redux/slices/cart/types";

export const getCartFromLS = () => {
  const cartItems = localStorage.getItem("cart");

  if (cartItems) {
    const items: IPizzaCart[] = JSON.parse(cartItems);

    const totalCount: number = items.reduce(
      (count: number, obj: IPizzaCart) => {
        count += obj.count;
        return count;
      },
      0
    );

    const totalPrice: number = items.reduce(
      (price: number, obj: IPizzaCart) => {
        price += obj.count * obj.price;
        return price;
      },
      0
    );

    return {
      items,
      totalCount,
      totalPrice,
    };
  } else {
    return {
      items: [],
      totalCount: 0,
      totalPrice: 0,
    };
  }
};
