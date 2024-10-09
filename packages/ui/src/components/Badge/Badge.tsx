import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@gorlabs/utils';

const badgeVariants = tv({
  base: 'relative px-[0.1875rem] font-medium text-[0.625rem]/[0.875rem] bg-blue-50 text-blue-500 dark:bg-blue-950',
  variants: {
    variant: {
      default: 'bg-blue-50 text-blue-500 dark:bg-blue-950',
      neutral: 'bg-gray-100 text-gray-500 dark:bg-gray-900',
      success: 'bg-green-50 text-green-500 dark:bg-green-900',
      warning: 'bg-yellow-50 text-yellow-500 dark:bg-yellow-900',
    },
    size: {
      sm: 'text-xs px-2.5 py-0.5',
      md: 'text-sm px-3 py-1',
      lg: 'text-base px-4 py-1.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({
  className,
  variant,
  size,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {/* Add the decorative borders */}
      {/* <span className="-top-px absolute inset-x-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="100%"
        >
          <line x1="0" x2="100%" y1="0.5" y2="0.5" />
        </svg>
      </span> */}
      {/* <span className="-bottom-px absolute inset-x-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="100%"
        >
          <line x1="0" x2="100%" y1="0.5" y2="0.5" />
        </svg>
      </span> */}
      {/* Left and Right border */}
      {/* <span className="-left-px absolute inset-y-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="1"
        >
          <line x1="0.5" x2="0.5" y1="0" y2="100%" />
        </svg>
      </span> */}
      {/* <span className="-right-px absolute inset-y-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="1"
        >
          <line x1="0.5" x2="0.5" y1="0" y2="100%" />
        </svg>
      </span> */}
    </span>
  );
};

export { Badge, badgeVariants };
