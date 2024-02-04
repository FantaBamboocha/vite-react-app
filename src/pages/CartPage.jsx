import { useSelector } from "react-redux";

import Cart from "./Cart";
import CartEmpty from "./CartEmpty";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  return <>{items.length ? <Cart /> : <CartEmpty />};</>;
};

export default CartPage;
