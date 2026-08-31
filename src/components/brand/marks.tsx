import { cn } from "@/lib/utils";

export function PandaMark({
  className,
  label = "JPanda",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <img
      src="/brand/panda-mark.jpg"
      alt={label}
      className={cn("block h-auto w-full object-contain outline-none", className)}
    />
  );
}

export function RosesMark({
  className,
  label = "Two roses",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <img
      src="/brand/roses-mark.jpg"
      alt={label}
      className={cn("block h-auto w-full object-contain outline-none", className)}
    />
  );
}
