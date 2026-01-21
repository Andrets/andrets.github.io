import { GradientMask } from "@/components/gradient-mask";
import { cn } from "@/lib/utils";

export function StackCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(className, "group bg-surface relative h-76 p-6")}>
      <div className="absolute inset-0 rounded-[5rem] bg-surface overflow-hidden">
        <GradientMask />
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
}
