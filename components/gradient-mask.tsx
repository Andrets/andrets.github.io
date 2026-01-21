import { cn } from "@/lib/utils";

export interface IGradientMaskProps {
  rounded?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  };
}

export function GradientMask({ rounded }: IGradientMaskProps) {
  const roundedClasses = rounded
    ? `rounded-[${rounded.topLeft}_${rounded.topRight}_${rounded.bottomLeft}_${rounded.bottomRight}]`
    : "rounded-[5rem]";

  const borderRadiusStyle = rounded
    ? `${rounded.topLeft} ${rounded.topRight} ${rounded.bottomRight} ${rounded.bottomLeft}`
    : "5rem";

  return (
    <div
      className={cn(`absolute inset-0 pointer-events-none`, roundedClasses)}
      style={{
        padding: "1px",
        borderRadius: borderRadiusStyle,
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
