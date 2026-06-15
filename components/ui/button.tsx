import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosegold-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantStyles = {
  default: "bg-charcoal-900 text-white shadow-luxe hover:-translate-y-0.5 hover:bg-charcoal-800",
  secondary:
    "bg-white/80 text-charcoal-900 ring-1 ring-inset ring-border hover:-translate-y-0.5 hover:bg-white",
  ghost: "bg-transparent text-charcoal-900 hover:bg-white/60"
};

const sizeStyles = {
  default: "h-11 px-5",
  sm: "h-9 px-4 text-xs",
  lg: "h-12 px-6 text-base"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
);

Button.displayName = "Button";
