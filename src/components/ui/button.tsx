import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  tone = "ghost",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "ghost" | "solid" | "rose";
}) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 px-4 text-sm tracking-wide transition-[opacity,transform,background-color,color] duration-150 ease-out active:not-disabled:scale-[0.96]",
        tone === "ghost" &&
          "rounded-md text-paper/80 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_14%,transparent)] hover:text-paper",
        tone === "solid" && "rounded-md bg-paper text-ink hover:opacity-90",
        tone === "rose" && "rounded-md bg-rose text-paper hover:bg-rose-hot",
        className,
      )}
      {...props}
    />
  );
}
