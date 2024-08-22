import { cn } from '@gorlabs/utils/helpers';

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-black/15', className)}
      {...props}
    />
  );
};
