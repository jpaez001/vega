// src/components/ui/Button.tsx
import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

/**
 * Vega Button, aligned to your tokens.
 *
 * Variants:
 * - primary: gradient CTA with white label
 * - secondary: outline on light (becomes filled on inverted, handled by parent)
 * - tertiary: text/ghost button
 *
 * Sizes:
 * - sm (40px tall)
 * - md (48px tall)
 * - lg (56px tall)
 *
 * State props here influence styling for the showcase.
 * In real apps the browser will drive :hover/:active/:focus styles.
 */

export type RegularVariant = "primary" | "secondary" | "tertiary";
export type RegularSize = "sm" | "md" | "lg";
export type RegularState = "default" | "hover" | "focused" | "pressed" | "disabled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: RegularVariant;
  size?: RegularSize;
  state?: RegularState;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
}

function baseBySize(size: RegularSize | undefined) {
  switch (size) {
    case "sm":
      return "h-10 px-3 rounded-[10px] text-[14px]/[20px]";
    case "lg":
      return "h-14 px-5 rounded-[16px] text-[18px]/[24px]";
    case "md":
    default:
      return "h-12 px-4 rounded-[12px] text-[16px]/[22px]";
  }
}

function primaryByState(state: RegularState | undefined) {
  switch (state) {
    case "hover":
      // slightly brighter gradient hover
      return "btn-gradient-primary ring-0 shadow-md";
    case "focused":
      // focus ring matches Digital.600 per tokens
      return "btn-gradient-primary ring-2 ring-digital-600 ring-offset-0";
    case "pressed":
      // darker step (Digital.700) hint – keep gradient but add inset
      return "btn-gradient-primary ring-0 [&>*]:translate-y-px";
    case "disabled":
      return "bg-gray-500 text-white cursor-not-allowed opacity-60";
    case "default":
    default:
      return "btn-gradient-primary";
  }
}

function secondaryByState(state: RegularState | undefined) {
  const base =
    "bg-transparent text-digital-900 border border-digital-900";
  switch (state) {
    case "hover":
      return cn(base, "bg-digital-25");
    case "focused":
      return cn(base, "ring-2 ring-digital-600");
    case "pressed":
      return cn(base, "bg-digital-100 text-white border-transparent");
    case "disabled":
      return "bg-transparent text-gray-500 border-gray-500 opacity-60 cursor-not-allowed";
    case "default":
    default:
      return base;
  }
}

function tertiaryByState(state: RegularState | undefined) {
  const base = "bg-transparent text-digital-500";
  switch (state) {
    case "hover":
      return cn(base, "bg-digital-25");
    case "focused":
      return cn(base, "ring-2 ring-digital-600");
    case "pressed":
      return cn(base, "bg-digital-50");
    case "disabled":
      return "bg-transparent text-gray-500 opacity-60 cursor-not-allowed";
    case "default":
    default:
      return base;
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      state = "default",
      startIcon,
      endIcon,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading || state === "disabled";

    const variantClasses =
      variant === "primary"
        ? primaryByState(state)
        : variant === "secondary"
        ? secondaryByState(state)
        : tertiaryByState(state);

    const classes = cn(
      "inline-flex items-center justify-center gap-2 select-none transition-[box-shadow,transform,background-color,color,border] duration-150",
      "text-digital-900", // label color is overridden by variant where needed
      baseBySize(size),
      variantClasses,
      isDisabled && "pointer-events-none",
      className
    );

    return (
      <button ref={ref} className={classes} disabled={isDisabled} {...props}>
        {/* start icon */}
        {startIcon && !loading ? (
          <span className="shrink-0">{startIcon}</span>
        ) : null}

        {/* label / spinner */}
        <span className={cn("font-medium", loading && "opacity-70")}>
          {loading ? "Loading" : children}
        </span>

        {/* end icon */}
        {endIcon && !loading ? (
          <span className="shrink-0">{endIcon}</span>
        ) : null}
      </button>
    );
  }
);
Button.displayName = "Button";

/* ========= Floating Action Button ========= */

export type FabState = "default" | "focused" | "pressed" | "disabled";
export interface FabButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: FabState;
  icon: LucideIcon;
  label?: string;
}

export const FabButton = React.forwardRef<HTMLButtonElement, FabButtonProps>(
  ({ state = "default", icon: Icon, label = "List view", className, ...props }, ref) => {
    const base =
      "inline-flex items-center gap-3 px-4 h-12 rounded-[12px] border transition-[box-shadow,transform,background-color] duration-150";
    // Per your FAB tokens: bg.high-contrast = Digital.900, icon/text = inverted, border Brand.25, focus ring Digital.600
    const tone =
      state === "disabled"
        ? "bg-gray-500 text-white border-transparent opacity-60 cursor-not-allowed"
        : "bg-digital-900 text-gray-100 border-brand-25";
    const ring =
      state === "focused" ? "ring-2 ring-digital-600 ring-offset-0" : "";
    const pressed = state === "pressed" ? "[&>*]:translate-y-px" : "";

    return (
      <button ref={ref} className={cn(base, tone, ring, pressed, className)} {...props}>
        <span className="inline-flex h-5 w-5 items-center justify-center">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-medium">{label}</span>
      </button>
    );
  }
);
FabButton.displayName = "FabButton";

/* ========= Icon Button ========= */

export type IconButtonVariant = "default" | "outlined" | "filled";
export type IconButtonState =
  | "default"
  | "hover"
  | "focused"
  | "pressed"
  | "disabled";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  state?: IconButtonState;
  size?: "s" | "l"; // small/large per tokens table
  icon: LucideIcon;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "default", state = "default", size = "l", icon: Icon, className, ...props }, ref) => {
    const dim = size === "s" ? "h-10 w-10 rounded-[10px]" : "h-14 w-14 rounded-[16px]";

    // Opacity steps per your table (Digital.900 at 0/10/20/0 for default)
    const defaultBg =
      state === "hover" ? "bg-digital-900/10" :
      state === "pressed" ? "bg-digital-900/20" :
      state === "disabled" ? "bg-transparent" : "bg-transparent";

    const defaultIcon =
      state === "disabled" ? "text-gray-300" : "text-digital-900";

    const defaultFocus =
      state === "focused" ? "ring-2 ring-digital-600" : "";

    const outlinedBorder =
      state === "disabled" ? "border-gray-300" : "border-gray-600";
    const outlinedBg =
      state === "hover" ? "bg-digital-900/10"
      : state === "pressed" ? "bg-brand-25"
      : "bg-transparent";
    const outlinedIcon =
      state === "pressed" ? "text-white"
      : state === "disabled" ? "text-gray-300"
      : "text-digital-900";
    const outlinedFocus =
      state === "focused" ? "ring-2 ring-digital-600" : "";

    const filledBg =
      state === "hover" ? "bg-brand-25/80"
      : state === "pressed" ? "bg-brand-25/90"
      : state === "disabled" ? "bg-brand-25/50"
      : "bg-brand-25";
    const filledBorder = "border-gray-100";
    const filledIcon =
      state === "disabled" ? "text-gray-300" : "text-digital-900";
    const filledFocus =
      state === "focused" ? "ring-2 ring-digital-600" : "";

    let classes = cn(
      "inline-flex items-center justify-center transition-colors border",
      dim,
      className
    );
    let iconClass = "h-5 w-5";

    if (variant === "default") {
      classes = cn(classes, defaultBg, defaultFocus, "border-transparent");
      iconClass = cn(iconClass, defaultIcon);
    } else if (variant === "outlined") {
      classes = cn(classes, outlinedBg, outlinedFocus, outlinedBorder);
      iconClass = cn(iconClass, outlinedIcon);
    } else {
      // filled
      classes = cn(classes, filledBg, filledFocus, filledBorder);
      iconClass = cn(iconClass, filledIcon);
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <Icon className={iconClass} />
      </button>
    );
  }
);
IconButton.displayName = "IconButton";