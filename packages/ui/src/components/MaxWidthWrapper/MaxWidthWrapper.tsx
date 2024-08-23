import { cn } from '@gorlabs/utils';
import { ReactNode } from 'react';

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

// export default MaxWidthWrapper;
