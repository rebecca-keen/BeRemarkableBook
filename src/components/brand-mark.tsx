import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  sparkClassName?: string;
};

/**
 * The Be Remarkable monogram: a serif "B" tile with a terracotta spark.
 * Defaults to the navy-on-cream header style; pass `className` to recolor
 * the tile (e.g. for the dark footer).
 */
export function BrandMark({ className, sparkClassName }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "relative flex size-9 items-center justify-center rounded-md bg-primary font-heading text-base text-primary-foreground",
        className,
      )}
    >
      B
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn("absolute right-1 top-1 size-2 text-accent", sparkClassName)}
      >
        <path
          d="M12 1.5c1 6 4.5 9.5 10.5 10.5C16.5 13 13 16.5 12 22.5 11 16.5 7.5 13 1.5 12 7.5 11 11 7.5 12 1.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
