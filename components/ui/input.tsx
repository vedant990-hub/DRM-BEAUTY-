import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-full border border-border bg-white/80 px-4 text-sm text-charcoal-900 shadow-sm transition-colors placeholder:text-charcoal-700/50 focus-visible:border-rosegold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosegold-300/40",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
