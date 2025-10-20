import * as React from 'react'
import { cx } from '../../utils/cx'
import type { ButtonProps } from './Button.types'
import type { ButtonVariant, ButtonSize } from './Button.types'

const base =
  'inline-flex items-center justify-center font-medium transition-colors rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-offset-2'

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary-500)] text-[var(--color-neutral-50)] hover:bg-[var(--color-primary-600)] focus:ring-[var(--color-primary-500)]',
  secondary:
    'bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-200)] focus:ring-[var(--color-neutral-400)]',
  ghost:
    'bg-transparent text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] focus:ring-[var(--color-primary-300)]',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      children,
      disabled,
      loading,
      ...rest
    },
    ref,
  ) => {
    // Narrow to unions so indexing works:
    const v = (variant ?? 'primary') as ButtonVariant
    const s = (size ?? 'md') as ButtonSize

    return (
      <button
        ref={ref}
        className={cx(
          base,
          variantClass[v],
          sizeClass[s],
          (disabled || loading) && 'opacity-60 cursor-not-allowed',
          className,
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
