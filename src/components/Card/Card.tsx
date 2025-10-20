import * as React from 'react'
import type { CardProps } from './Card.types'
import { cx } from '../../utils/cx'

const padMap = {
  none: 'p-0',
  sm: 'p-[var(--spacing-4)]',
  md: 'p-[var(--spacing-6)]',
  lg: 'p-[var(--spacing-8)]'
} as const

export const Card: React.FC<CardProps> = ({ padding = 'md', className, children, ...rest }) => (
  <div
    className={cx(
      'rounded-[var(--radius-lg)] bg-[var(--color-surface)] shadow-sm border border-[var(--color-neutral-200)]',
      padMap[padding],
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
