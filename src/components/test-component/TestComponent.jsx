import { useErrorBoundary } from "react-error-boundary";

const TestComponent = () => {
  const { showBoundary } = useErrorBoundary();

  const handleErrorTrigger = () => {
    setTimeout(() => {
      try {
        throw new Error("Test Error");
      } catch (error) {
        console.log(error);
        showBoundary(error);
      }
    });
  };
  return (
    <div>
      TestComponent
      <button onClick={handleErrorTrigger}>Trigger Error</button>
    </div>
  );
};
export default TestComponent;
