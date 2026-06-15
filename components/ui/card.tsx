import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-white/70 bg-white/80 shadow-soft backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";