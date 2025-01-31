import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@repo/design-system/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-[0.1875rem] font-medium text-[0.625rem]/[0.875rem]",
  {
    variants: {
      variant: {
        default: "bg-blue-50 text-blue-500 dark:bg-blue-950",
        neutral: "bg-gray-100 text-gray-500 dark:bg-gray-900",
        success: "bg-green-50 text-green-500 dark:bg-green-900",
        warning: "bg-yellow-50 text-yellow-500 dark:bg-yellow-900",
      },
      size: {
        sm: "text-xs px-2.5 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
