import { Suspense, lazy, FC } from "react";

const LazyCart = lazy(() => import("."));

const LazyCartPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyCart />
    </Suspense>
  );
};

export default LazyCartPage;
