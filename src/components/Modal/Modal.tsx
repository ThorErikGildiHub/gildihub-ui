import * as React from "react";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  width?: "sm" | "md" | "lg";
}

const widthMap = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" } as const;

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  width = "md",
  className = "",
  children,
  ...rest
}) => {
  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 grid place-items-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[color-mix(in srgb, var(--color-neutral-900,#0B111A) 60%, transparent)] backdrop-blur-[6px]" />
      <div
        className={[
          "relative z-10 w-[calc(100%-var(--spacing-32,32px))]",
          widthMap[width],
          "rounded-[var(--radius-lg,12px)] bg-[var(--surface,white)]",
          "shadow-[0_10px_30px_color-mix(in_srgb,var(--color-neutral-900,#0B111A)_15%,transparent)]",
          "p-[var(--spacing-24,24px)]",
          className
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
