import classNames from "classnames";
import { twMerge } from "tailwind-merge";

const Loader = ({ className, size }) => {
  const loadingContainerClassNames = twMerge(
    classNames(
      "flex items-center justify-center bg-black z-50 h-full",
      className
    )
  );
  const loadingSpinnerClassNames = twMerge(
    classNames(
      "animate-loading border-8 rounded-[50%] w-32 h-32 border-x-black	aspect-square",
      size
    )
  );

  return (
    <div className={loadingContainerClassNames}>
      <div className={loadingSpinnerClassNames}></div>
    </div>
  );
};

export default Loader;
