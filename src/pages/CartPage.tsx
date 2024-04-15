import { FC } from "react";
import { useSelector } from "react-redux";

import Cart from "./Cart";
import CartEmpty from "./CartEmpty";
import { cartSelector } from "../redux/slices/cartSlice";

const CartPage: FC = () => {
  const { items } = useSelector(cartSelector);
  return <>{items.length ? <Cart /> : <CartEmpty />};</>;
};

export default CartPage;
