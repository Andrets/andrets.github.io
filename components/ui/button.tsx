import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const variants = {
  primary: "px-6 rounded-3xl",
  secondary: "h-12 px-3 rounded-[2rem] border",
  icon: "px-3.5 rounded-full",
  big: "w-57 pl-11 pr-11",
};

interface IButtonProps extends React.ComponentProps<"button"> {
  variant?: keyof typeof variants;
  asChild?: boolean;
}

export function Button({
  asChild = false,
  variant = "primary",
  className,
  ...props
}: IButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        "bg-transparent cursor-pointer border-2 border-foreground h-16 rounded-4xl text-foreground font-medium text-2xl leading-tighter flex items-center justify-center",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
