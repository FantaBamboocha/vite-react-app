import { FC } from "react";
import { useSelector } from "react-redux";

import Cart from "@pages/Cart";
import CartEmpty from "@pages/CartEmpty";
import { cartSelector } from "@redux/slices/cart/selectors";

const CartPage: FC = () => {
  const { items } = useSelector(cartSelector);
  return <>{items.length ? <Cart /> : <CartEmpty />};</>;
};

export default CartPage;
