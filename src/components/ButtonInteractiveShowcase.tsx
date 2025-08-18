import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Search, ChevronRight, X } from "lucide-react";

/* tiny utility to join class strings safely */
function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/** ----------------------------------------------------------------
 * Reusable UI bits for the showcase (state pills & tab pills)
 * ---------------------------------------------------------------- */
type UIState = "default" | "hover" | "focused" | "pressed" | "disabled";
type TabKey = "regular" | "fab" | "icon";

function StatePill({
  s,
  active,
  onClick,
}: {
  s: UIState;
  active: boolean;
  onClick: (s: UIState) => void;
}) {
  return (
    <button
      key={s}
      onClick={() => onClick(s)}
      className={cn(
        "rounded-full px-3 py-1 text-sm transition",
        active
          ? "bg-digital-900 text-white ring-2 ring-digital-600"
          : "text-digital-900 hover:bg-digital-50"
      )}
    >
      {s[0].toUpperCase() + s.slice(1)}
    </button>
  );
}

function TabPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-5 py-2 text-sm font-medium transition",
        active ? "bg-white text-digital-900 shadow-elevation-2"
               : "text-white/80 hover:text-white/90"
      )}
      style={{ background: active ? undefined : "transparent" }}
    >
      {label}
    </button>
  );
}

/** ----------------------------------------------------------------
 * Regular Buttons (primary / secondary / tertiary) demo
 * ---------------------------------------------------------------- */

type RegularVariant = "primary" | "secondary" | "tertiary";
type RegularSize = "sm" | "md" | "lg";

function RegularButton({
  variant = "primary",
  size = "md",
  state = "default",
  startIcon,
  endIcon,
  children,
}: {
  variant?: RegularVariant;
  size?: RegularSize;
  state?: UIState;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const sizeCls =
    size === "sm"
      ? "h-10 text-sm px-4 gap-2"
      : size === "lg"
      ? "h-14 text-base px-6 gap-3"
      : "h-12 text-sm px-5 gap-2";

  const base =
    "inline-flex items-center justify-center rounded-br-medium rounded-tl-medium rounded-tr-medium rounded-bl-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-digital-600 disabled:cursor-not-allowed";

  // states per variant
  const byVariant: Record<RegularVariant, string> = {
    primary: cn(
      "text-white",
      // default/hover/pressed (kept simple—gradient feel is in bg)
      state === "pressed" && "brightness-95",
      state === "hover" && "brightness-105",
      // disabled
      state === "disabled" && "bg-gray-500 text-white"
    ),
    secondary: cn(
      "text-digital-900 border border-digital-900",
      state === "hover" && "ring-1 ring-digital-600",
      state === "pressed" && "bg-brand-100",
      state === "disabled" && "text-gray-500 border-gray-500"
    ),
    tertiary: cn(
      "text-digital-500",
      state === "hover" && "bg-digital-25",
      state === "pressed" && "bg-digital-50",
      state === "disabled" && "text-gray-500"
    ),
  };

  // fills per variant
  const fill =
    variant === "primary"
      ? // a simple blue sweep; you can swap to your exact token gradient class
        "bg-gradient-to-br from-digital-500 to-digital-700"
      : variant === "secondary"
      ? "bg-transparent"
      : "bg-transparent";

  // focus ring
  const focus =
    state === "focused" ? "ring-2 ring-digital-600 ring-offset-0" : "";

  const disabled = state === "disabled";

  return (
    <button
      disabled={disabled}
      className={cn(base, sizeCls, fill, byVariant[variant], focus)}
    >
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  );
}

function IconWrap({
  icon: Icon,
  size = 20,
}: {
  icon: LucideIcon;
  size?: number;
}) {
  return <Icon size={size} strokeWidth={2} aria-hidden />;
}

function RegularDemo() {
  const [state, setState] = React.useState<UIState>("default");
  const [variant, setVariant] = React.useState<RegularVariant>("tertiary");
  const [size, setSize] = React.useState<RegularSize>("lg");

  return (
    <div className="rounded-3xl bg-digital-25/40 p-10 ring-1 ring-digital-100">
      <h3 className="text-center text-xl font-semibold mb-2">
        Regular Button Demo
      </h3>
      <p className="text-center text-digital-900/80 mb-8">
        Primary/Secondary/Tertiary variants with states. Uses your{" "}
        {"<Button />"} component and token classes.
      </p>

      <div className="flex justify-center mb-8">
        <RegularButton
          variant={variant}
          size={size}
          state={state}
          startIcon={<IconWrap icon={Search} />}
        >
          Button label
        </RegularButton>
      </div>

      {/* state pills */}
      <div className="flex justify-center gap-3 mb-6">
        {(["default", "hover", "focused", "pressed", "disabled"] as UIState[]).map(
          (s) => (
            <StatePill key={s} s={s} active={s === state} onClick={setState} />
          )
        )}
      </div>

      {/* variant + size pills */}
      <div className="flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-sm text-digital-900/70">Variant:</span>
          <div className="flex gap-2">
            {(["primary", "secondary", "tertiary"] as RegularVariant[]).map(
              (v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm",
                    v === variant
                      ? "bg-digital-900 text-white"
                      : "text-digital-900 hover:bg-digital-50"
                  )}
                >
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-digital-900/70">Size:</span>
          <div className="flex gap-2">
            {(["sm", "md", "lg"] as RegularSize[]).map((sz) => (
              <button
                key={sz}
                onClick={() => setSize(sz)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm",
                  sz === size
                    ? "bg-digital-900 text-white"
                    : "text-digital-900 hover:bg-digital-50"
                )}
              >
                {sz === "sm" ? "Small" : sz === "md" ? "Medium" : "Large"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** ----------------------------------------------------------------
 * FAB demo (uses Digital/900 + Elevation-2 shadow)
 * ---------------------------------------------------------------- */
function FabButton({
  state = "default",
  label = "List view",
  icon: Icon = ListGlyph,
}: {
  state?: UIState;
  label?: string;
  icon?: LucideIcon | ((p: { size?: number }) => JSX.Element);
}) {
  const base =
    "inline-flex items-center gap-3 rounded-cmp-m border transition px-4 h-10";

  const bg =
    state === "hover"
      ? "brightness-105"
      : state === "pressed"
      ? "brightness-95"
      : "";

  const focus = state === "focused" ? "ring-2 ring-digital-600" : "";

  const disabled = state === "disabled";

  return (
    <button
      disabled={disabled}
      className={cn(
        base,
        "bg-digital-900 text-white border-white shadow-elevation-2",
        bg,
        focus
      )}
    >
      <span className="inline-flex items-center justify-center">
        {/* allow either a Lucide icon or the small list glyph */}
        {typeof Icon === "function" ? (
          <Icon />
        ) : (
          <IconWrap icon={Icon as LucideIcon} size={18} />
        )}
      </span>
      <span className="font-medium">{label}</span>
      <ChevronRight size={18} aria-hidden />
    </button>
  );
}

function ListGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 6h12M4 12h12M4 18h12" />
      <circle cx="19" cy="6" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
      <circle cx="19" cy="18" r="1.5" />
    </svg>
  );
}

function FabDemo() {
  const [state, setState] = React.useState<UIState>("default");
  return (
    <div className="rounded-3xl bg-digital-25/40 p-10 ring-1 ring-digital-100">
      <h3 className="text-center text-xl font-semibold mb-2">
        Floating Action Button Demo
      </h3>
      <p className="text-center text-digital-900/80 mb-8">
        Compact button with shadow and border. Two states: default and focused.
      </p>

      <div className="flex justify-center mb-8">
        <FabButton state={state} />
      </div>

      <div className="flex justify-center gap-3">
        {(["default", "hover", "focused", "pressed", "disabled"] as UIState[]).map(
          (s) => (
            <StatePill key={s} s={s} active={s === state} onClick={setState} />
          )
        )}
      </div>
    </div>
  );
}

/** ----------------------------------------------------------------
 * Icon Buttons demo (Default / Outlined / Filled)
 * ---------------------------------------------------------------- */
type IconVariant = "default" | "outlined" | "filled";

function IconButton({
  variant = "default",
  state = "default",
  icon: Icon = X,
}: {
  variant?: IconVariant;
  state?: UIState;
  icon?: LucideIcon;
}) {
  const sizeCls = "h-10 w-10 inline-flex items-center justify-center rounded-full";
  const disabled = state === "disabled";

  let cls = "";
  if (variant === "default") {
    // circles on light, transparent fills + opacity steps
    const opacity =
      state === "hover"
        ? "bg-opacity-10"
        : state === "pressed"
        ? "bg-opacity-20"
        : "bg-opacity-0";
    cls = cn(
      "text-digital-900 bg-digital-900/0",
      opacity,
      state === "focused" && "ring-2 ring-digital-600",
      disabled && "text-gray-300"
    );
  } else if (variant === "outlined") {
    cls = cn(
      "text-digital-900 border border-gray-600",
      state === "hover" && "bg-digital-900/10",
      state === "pressed" && "bg-brand-100",
      state === "focused" && "ring-2 ring-digital-600",
      disabled && "border-gray-300 text-gray-300"
    );
  } else {
    // filled
    cls = cn(
      "text-digital-900 bg-brand-25",
      state === "hover" && "brightness-110",
      state === "pressed" && "brightness-95",
      state === "focused" && "ring-2 ring-digital-600",
      disabled && "opacity-50"
    );
  }

  return (
    <button disabled={disabled} className={cn(sizeCls, cls)}>
      <Icon size={20} aria-hidden />
    </button>
  );
}

function IconDemo() {
  const [state, setState] = React.useState<UIState>("default");
  const [variant, setVariant] = React.useState<IconVariant>("filled");
  const [which, setWhich] = React.useState<"close" | "chevron">("close");

  const IconCmp = which === "close" ? X : ChevronRight;

  return (
    <div className="rounded-3xl bg-digital-25/40 p-10 ring-1 ring-digital-100">
      <h3 className="text-center text-xl font-semibold mb-2">Icon Button Demo</h3>
      <p className="text-center text-digital-900/80 mb-8">
        Circular icon-only buttons with X (close) and chevron icons.
      </p>

      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="text-sm text-digital-900/70">Variant:</span>
        {(["default", "outlined", "filled"] as IconVariant[]).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={cn(
              "rounded-full px-4 py-2 text-sm",
              variant === v
                ? "bg-digital-900 text-white"
                : "text-digital-900 hover:bg-digital-50"
            )}
          >
            {v[0].toUpperCase() + v.slice(1)}
          </button>
        ))}
        <span className="ml-6 text-sm text-digital-900/70">Icon:</span>
        {(["close", "chevron"] as const).map((w) => (
          <button
            key={w}
            onClick={() => setWhich(w)}
            className={cn(
              "rounded-full px-4 py-2 text-sm",
              which === w
                ? "bg-digital-900 text-white"
                : "text-digital-900 hover:bg-digital-50"
            )}
          >
            {w === "close" ? "Close" : "Chevron"}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <IconButton variant={variant} state={state} icon={IconCmp} />
      </div>

      <div className="flex justify-center gap-3">
        {(["default", "hover", "focused", "pressed", "disabled"] as UIState[]).map(
          (s) => (
            <StatePill key={s} s={s} active={s === state} onClick={setState} />
          )
        )}
      </div>
    </div>
  );
}

/** ----------------------------------------------------------------
 * Page layout (tabs + demo panels)
 * ---------------------------------------------------------------- */
function ShowcaseLayout({
  active,
  setActive,
  children,
}: {
  active: TabKey;
  setActive: (t: TabKey) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold mb-6">
        Interactive Button States
      </h1>

      <div className="mx-auto mb-8 flex max-w-5xl items-center justify-center gap-4 rounded-full bg-digital-900 px-3 py-3 text-white">
        <TabPill
          label="Regular Buttons"
          active={active === "regular"}
          onClick={() => setActive("regular")}
        />
        <TabPill
          label="Floating Action"
          active={active === "fab"}
          onClick={() => setActive("fab")}
        />
        <TabPill
          label="Icon Buttons"
          active={active === "icon"}
          onClick={() => setActive("icon")}
        />
      </div>

      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
}

export default function ButtonInteractiveShowcase() {
  const [tab, setTab] = React.useState<TabKey>("regular");

  return (
    <ShowcaseLayout active={tab} setActive={setTab}>
      {tab === "regular" && <RegularDemo />}
      {tab === "fab" && <FabDemo />}
      {tab === "icon" && <IconDemo />}
    </ShowcaseLayout>
  );
}