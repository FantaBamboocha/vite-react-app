import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import CartPage from "../pages/Cart";

import { ROUTE_NAMES } from "./RouteNames";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.Home} element={<Home />} />
      <Route path={ROUTE_NAMES.CartPage} element={<CartPage />} />
      <Route path={ROUTE_NAMES.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
