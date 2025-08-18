import * as React from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type IconKind = "default" | "outlined" | "filled";
type IconState = "default" | "hover" | "focused" | "pressed" | "disabled";
type IconSize = "s" | "l"; // s=32px, l=40px (from your tables)

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: IconKind;
  state?: IconState;     // showcase control
  size?: IconSize;       // s=32, l=40
  children?: React.ReactNode; // The icon (e.g. <X /> or <ChevronRight />)
}

export default function IconButton({
  kind = "default",
  state = "default",
  size = "l",
  className,
  children,
  ...props
}: IconButtonProps) {
  const disabled = state === "disabled" || props.disabled;

  const dim =
    size === "l"
      ? "h-10 w-10 rounded-[8px]" // 40px radius per “component.m” focus shows 10 in doc but base is 8 for buttons; use 8 here to match FAB & tokens for l
      : "h-8 w-8 rounded-[6px]";  // 32px & radius XS=6

  // base icon color for each kind/state
  const iconColor =
    kind === "filled"
      ? "text-digital-900"
      : disabled
      ? "text-gray-300"
      : "text-digital-900";

  // background + border per kind & state
  let surface = "";
  if (kind === "default") {
    // transparent bg, change with opacity on hover/pressed
    if (disabled) surface = "bg-transparent";
    else if (state === "pressed") surface = "bg-digital-900/20";
    else if (state === "hover") surface = "bg-digital-900/10";
    else surface = "bg-transparent";
  } else if (kind === "outlined") {
    // border widths vary on hover/pressed; focus uses ring
    const base = disabled ? "border-gray-300" : "border-gray-600";
    const thickness =
      state === "hover" ? "border-[2px]" : state === "pressed" ? "border" : "border";
    const fill =
      state === "pressed" ? "bg-digital-900 text-white" : "bg-transparent";
    surface = `${thickness} ${base} ${fill}`;
  } else if (kind === "filled") {
    // Brand.25 fill; change opacity by state (60→80→90), disabled 50
    if (disabled) surface = "bg-brand-25/50";
    else if (state === "pressed") surface = "bg-brand-25/90";
    else if (state === "hover") surface = "bg-brand-25/80";
    else surface = "bg-brand-25/60";
  }

  // focus selector ring
  const focusRing =
    state === "focused" ? "ring-2 ring-digital-600 ring-offset-0" : "";

  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center",
        dim,
        surface,
        iconColor,
        "shrink-0 transition-colors",
        disabled && "cursor-not-allowed",
        focusRing,
        className
      )}
    >
      {/* Icon container to keep icons centered and sized */}
      <span className={cn(size === "l" ? "h-6 w-6" : "h-5 w-5", "flex items-center justify-center")}>
        {children}
      </span>
    </button>
  );
}