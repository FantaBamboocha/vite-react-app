import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import { ROUTE_NAMES } from "./RouteNames";

// import NotFoundPage from "../pages/NotFound";
// import CartPage from "../pages/CartPage";

const LazyCartPage = lazy(() => import("../pages/CartPage"));
const LazyNotFoundPage = lazy(() => import("../pages/NotFound"));

const Router: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.Home} element={<Home />} />
      <Route path={ROUTE_NAMES.CategoryPage} element={<Home />} />
      <Route
        path={ROUTE_NAMES.CartPage}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCartPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTE_NAMES.NotFound}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyNotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
