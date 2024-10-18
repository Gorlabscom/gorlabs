'use client';

import { cn } from '@gorlabs/utils';
import { motion } from 'framer-motion';

interface AnimationProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
}

export const Container = ({
  children,
  className,
  delay,
  reverse,
}: AnimationProps) => {
  return (
    <motion.div
      className={cn('w-full h-full', className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        delay: delay,
        duration: 0.2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
