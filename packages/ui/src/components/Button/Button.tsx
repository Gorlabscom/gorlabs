import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@gorlabs/utils';
// import { Loader2 } from 'lucide-react';
import { focusRing } from '@gorlabs/utils';

const buttonVariants = tv(
  {
    extend: focusRing,
    base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent text-foreground hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent text-foreground hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        white: 'bg-foreground text-background hover:bg-foreground/90',
        quiet:
          'bg-transparent hover:bg-bg-inverse/10 pressed:bg-bg-inverse/20 text-fg',
        primary:
          'bg-bg-primary hover:bg-bg-primary-hover pressed:bg-bg-primary-active text-fg-onPrimary',
        accent:
          'bg-bg-accent hover:bg-bg-accent-hover pressed:bg-bg-accent-active text-fg-onAccent',
        success:
          'bg-bg-success hover:bg-bg-success-hover pressed:bg-bg-success-active text-fg-onSuccess',
        warning:
          'bg-bg-warning hover:bg-bg-warning-hover pressed:bg-bg-warning-active text-fg-onWarning',
        danger:
          'bg-bg-danger hover:bg-bg-danger-hover pressed:bg-bg-danger-active text-fg-onDanger',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      shape: {
        rectangle: '',
        square: '',
        circle: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        shape: ['square', 'circle'],
        className: 'w-8 px-0',
      },
      {
        size: 'icon',
        shape: ['square', 'circle'],
        className: 'w-9 px-0',
      },
      {
        size: 'lg',
        shape: ['square', 'circle'],
        className: 'w-10 px-0',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
  {
    responsiveVariants: ['sm', 'lg'],
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export type { ButtonProps };
export { Button, buttonVariants };
