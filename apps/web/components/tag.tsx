import { cn } from "@repo/design-system/lib/utils";
import type {HTMLAttributes} from "react";

export function Tag({className, children, ...props}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('inline-flex items-center gap-2 rounded-full border border-purple-400 px-3 py-1 text-purple-600 uppercase', className)} {...props}>
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  )
}
