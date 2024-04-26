import { FC } from "react";

export interface IFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}
export const Fallback: FC<IFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong :(</p>
      <h2>{error.message}</h2>
      <button onClick={() => resetErrorBoundary()}>
        Не балуйся, а попробуй еще раз
      </button>
    </div>
  );
};
