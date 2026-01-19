interface BlobProps {
  type: "big" | "small";
  className?: string;
}

export function Blob({ type, className = "" }: BlobProps) {
  // Определяем стили заранее полными строками
  const styles = {
    big: "w-80 h-80 blur-big",
    small: "w-80 h-80 blur-small",
  };

  return (
    <div
      className={`
        absolute rounded-full ${styles[type]} ${className}
      `}
    />
  );
}
