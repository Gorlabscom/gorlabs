import * as React from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import { tv } from 'tailwind-variants';
import { cn } from '@gorlabs/utils';
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputVariants = tv({
  base: 'flex h-10 w-full rounded-md border border-input text-foreground bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export const InputMask = React.forwardRef<HTMLInputElement, PatternFormatProps>(
  ({ className, ...props }, ref) => {
    return (
      <PatternFormat
        className={inputVariants({ className })}
        getInputRef={ref}
        {...props}
      />
    );
  }
);
