'use client';

import { Tag } from '@/components/tag';
import { useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@repo/design-system/lib/utils';

const argument =
  " You're racing to create exceptional products in web3, but finding right tools slow you down with unnecessary complexity and steep product deadlines. ";
const words = argument.split(' ');

export function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end'],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length - 1]
  );

  useEffect(() => {
    wordIndex.on('change', (value) => {
      setCurrentWord(value);
    });
  }, [wordIndex]);

  return (
    <section className="py-24">
      <div className="container">
        <div className='sticky top-40 flex flex-col items-center justify-center md:top-48'>
          <Tag>Introducing Gorlabs</Tag>
          <div className='mt-10 max-w-5xl text-pretty text-center font-medium text-4xl md:text-6xl lg:max-w-7xl lg:text-7xl'>
            <span>Your creative process deserves better.</span>
            <span className="text-primary/15">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={cn(
                    index < currentWord && 'text-neutral-900 transition duration-500 dark:text-white'
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </span>
            <span className="text-purple-400">
              That&apos;s why we built Gorlabs.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
}
