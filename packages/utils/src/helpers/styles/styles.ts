import { tv } from 'tailwind-variants';

export const focusRing = tv({
  base: 'outline-none ring-0 ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:ring-2',
});

export const focusRingGroup = tv({
  base: 'outline-none ring-0 ring-border-focus group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg group-focus-visible:ring-2',
});

export const focusInput = tv({
  base: 'ring-0 focus-within:ring-border-focus focus-within:ring-2',
});

// Temporary disable due to potential confliict with other components
// export const hasErrorInput = [
//   // base
//   'ring-2',
//   // border color
//   'border-red-500 dark:border-red-700',
//   // ring color
//   'ring-red-200 dark:ring-red-700/30',
// ];
