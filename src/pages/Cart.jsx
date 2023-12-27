import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div class="wrapper">
      <div class="content">
        <div class="container container--cart">
          <div class="cart cart--empty">
            <h2>
              Корзина пустая <icon>😕</icon>
            </h2>
            <p>
              Вероятнее всего, вы еще не заказывали пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </p>
            <img
              src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
              alt="Empty cart"
            />
            <Link to="/" class="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
