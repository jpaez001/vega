import * as React from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface FabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual state only for the showcase. In real usage the browser/ARIA states apply.
   * "focused" shows the focus selector ring.
   */
  state?: "default" | "focused" | "disabled";
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function FabButton({
  state = "default",
  startIcon,
  children,
  className,
  ...props
}: FabButtonProps) {
  const isDisabled = state === "disabled" || props.disabled;

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cn(
        // Core shape & size (height 40, px-16, gap-2, rounded-8)
        "inline-flex items-center justify-center h-10 px-4 gap-2 rounded-[8px]",
        // Fill / text per tokens
        "bg-digital-900 text-gray-100",
        // Border per tokens
        "border border-brand-25",
        // Elevation 2 (custom in tailwind config below) and subtle hover if not disabled
        !isDisabled && "shadow-elevation-2",
        // Cursor/opacity when disabled
        isDisabled && "opacity-50 cursor-not-allowed",
        // Focus selector: Digital.600, 1.5px width, radius 8
        state === "focused" && "ring-2 ring-digital-600 ring-offset-0",
        className
      )}
    >
      {startIcon ? <span className="shrink-0">{startIcon}</span> : null}
      {children ? <span className="whitespace-nowrap">{children}</span> : null}
    </button>
  );
}