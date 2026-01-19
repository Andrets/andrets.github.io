import { cn } from "@/lib/utils";

const variants = {
  primary: "h-16 px-6 rounded-3xl",
  secondary: "h-7 px-3 rounded-[0.875rem] border",
  icon: "h-16 px-3.5 rounded-full",
  big: "h-16 px-11.5",
};

export function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: keyof typeof variants;
}) {
  return (
    <button
      className={cn(
        "bg-transparent border-2 border-foreground rounded-4xl h-16 text-foreground font-medium text-2xl leading-tighter",
        variants[type || "primary"],
      )}
    >
      {children}
    </button>
  );
}
