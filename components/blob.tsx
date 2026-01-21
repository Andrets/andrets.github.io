interface IBlobProps {
  type: "big" | "small" | "xs";
  className?: string;
}

export function Blob({ type, className = "" }: IBlobProps) {
  const styles = {
    big: "w-[320px] h-[320px] blur-big transform-[matrix(-1, 0, 0, 1, 0, 0)]",
    small: "w-[320px] h-[320px] blur-small",
    xs: "w-[200px] h-[200px] blur-small",
  };

  return (
    <div
      className={`
        absolute rounded-full ${styles[type]} ${className}
      `}
    />
  );
}
