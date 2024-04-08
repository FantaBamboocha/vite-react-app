import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятнее всего, вы еще не заказывали пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </p>
            <img
              src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
              alt="Empty cart"
            />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
