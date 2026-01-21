import { GradientMask, IGradientMaskProps } from "@/components/gradient-mask";
import { cn } from "@/lib/utils";
import { Blob } from "@/components/blob";

interface IBlob {
  type: "small" | "big" | "xs";
  className?: string;
}

interface IStackCardProps {
  className?: string;
  rounded?: IGradientMaskProps;
  children: React.ReactNode;
  blobs?: IBlob[];
}

export function StackCard({
  className,
  children,
  rounded,
  blobs = [],
}: IStackCardProps) {
  const roundedClasses = rounded
    ? `rounded-[${rounded.rounded?.topLeft}_${rounded.rounded?.topRight}_${rounded.rounded?.bottomLeft}_${rounded.rounded?.bottomRight}]`
    : "rounded-[5rem]";

  const borderRadiusStyle = rounded?.rounded
    ? `${rounded.rounded.topLeft} ${rounded.rounded.topRight} ${rounded.rounded.bottomRight} ${rounded.rounded.bottomLeft}`
    : "5rem";

  return (
    <div className={cn(className, "group relative h-76 p-6 w-full")}>
      <div
        className={cn(
          "absolute inset-0 bg-surface overflow-hidden",
          roundedClasses,
        )}
        style={{ borderRadius: borderRadiusStyle }}
      >
        <GradientMask {...rounded} />
        {blobs.map((blob, index) => (
          <Blob key={index} type={blob.type} className={blob.className} />
        ))}
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
}
