import * as React from "react";
import { HStack } from "./ShowcaseLayout";

export type ButtonState = "default" | "hover" | "focused" | "pressed" | "disabled";

export function StatePills({
  value,
  onChange,
  disabled = false,
}: {
  value: ButtonState;
  onChange: (s: ButtonState) => void;
  disabled?: boolean;
}) {
  const items: ButtonState[] = ["default", "hover", "focused", "pressed", "disabled"];
  return (
    <HStack className="justify-center">
      {items.map((s) => (
        <button
          key={s}
          className={`pill ${value === s ? "is-active" : ""}`}
          onClick={() => onChange(s)}
          disabled={disabled}
        >
          {s[0].toUpperCase() + s.slice(1)}
        </button>
      ))}
    </HStack>
  );
}