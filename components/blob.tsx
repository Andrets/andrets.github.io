interface BlobProps {
  type: "big" | "small";
  className?: string;
}

export function Blob({ type, className = "" }: BlobProps) {
  // Определяем стили заранее полными строками
  const styles = {
    big: "w-[320px] h-[320px] blur-big transform-[matrix(-1, 0, 0, 1, 0, 0)]",
    small: "w-[320px] h-[320px] blur-small",
  };

  return (
    <div
      className={`
        absolute rounded-full ${styles[type]} ${className}
      `}
    />
  );
}
