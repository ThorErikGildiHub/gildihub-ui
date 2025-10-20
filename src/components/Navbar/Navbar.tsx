import * as React from "react";

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ left, right, className = "", ...rest }) => {
  return (
    <header
      className={[
        "sticky top-0 z-40 h-14 w-full",
        "bg-[var(--surface,white)]/90 backdrop-blur-md",
        "border-b border-[color-mix(in srgb, var(--color-neutral-900,#0B111A) 10%, white)]",
        className
      ].join(" ")}
      {...rest}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-[var(--spacing-16,16px)]">
        <div className="font-semibold text-[var(--color-neutral-900,#0B111A)]">{left}</div>
        <div>{right}</div>
      </div>
    </header>
  );
};

export default Navbar;
