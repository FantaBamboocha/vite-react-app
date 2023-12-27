import { Skeleton } from "@mui/material";

import styles from "./styles.module.scss";

const PizzaBlockSkeleton = () => {
  return (
    <div className={styles.pizzaBlockSkeleton}>
      <Skeleton
        animation="wave"
        variant="circular"
        width={245}
        height={245}
        sx={{ marginBottom: "20px" }}
      />
      <Skeleton
        animation="wave"
        variant="text"
        sx={{ marginBottom: "36px", fontSize: "1.5rem", width: "90%" }}
      />
      <Skeleton variant="rounded" width={"100%"} height={85} />
      <div className={styles.pizzaBlockBottom}>
        <Skeleton variant="rounded" width={"40%"} height={27} />
        <Skeleton variant="rounded" width={"50%"} height={44} />
      </div>
    </div>
  );
};

export default PizzaBlockSkeleton;
