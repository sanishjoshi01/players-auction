import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-900",
    "rounded",
    "mb-2.5",
    className
  );
  const innersClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-900",
    "from-[0%]",
    "via-gray-600",
    "via-[30%]",
    "to-bg-gray-900",
    "to-[100%]"
  );

  const boxes = new Array(times).fill(0).map((_, i) => {
    return (
      <div key={i} className={outerClassNames}>
        <div className={innersClassNames} />
      </div>
    );
  });

  return boxes;
}

export default Skeleton;
