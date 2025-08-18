import * as React from "react";

export function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1100px] p-3x space-y-2x">
      <header className="space-y-0-5x">
        <h2 className="text-[28px] font-bold leading-tight">Interactive {title}</h2>
        {subtitle ? (
          <p className="text-[14px] opacity-70">{subtitle}</p>
        ) : null}
      </header>
      <div className="showcase-panel">{children}</div>
    </section>
  );
}

export function SubHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-2x">
      <h3 className="text-[20px] font-semibold">{title}</h3>
      {description ? (
        <p className="text-[14px] opacity-70 mt-0-5x">{description}</p>
      ) : null}
    </div>
  );
}

/** Simple horizontal stack with gap */
export function HStack({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex items-center gap-1x ${className}`}>{children}</div>;
}