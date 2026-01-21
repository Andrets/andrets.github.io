export function GradientMask() {
  return (
    <div
      className="absolute inset-0 rounded-[5rem] pointer-events-none"
      style={{
        padding: "1px",
        background:
          "linear-gradient(28.69deg, rgba(0, 0, 0, 0) 29%, rgba(255, 255, 255, 0.3) 100%)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  );
}
