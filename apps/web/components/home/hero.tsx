import { env } from '@/env';
import gradientStyle from '@/app/styles/gradient.module.css';
// import { blog } from '@repo/cms';
// import { Feed } from '@repo/cms/components/feed';
import { Button } from '@repo/design-system/components/index';
import { cn } from '@repo/design-system/lib/utils';
import { MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import ShinyRotatingBorderButtonVariant1 from '../chip';

export const Hero = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <section className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <ShinyRotatingBorderButtonVariant1 />
          <div className="flex flex-col gap-4">
            <h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
              This is the{' '}
              <span
                className={cn(
                  'animate-gradient bg-gradient-to-tr from-zinc-100 via-zinc-200/50 to-zinc-200/90 bg-clip-text text-transparent',
                  gradientStyle.magicText
                )}
              >
                Start{' '}
              </span>
              of something new
            </h1>
            <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
              Prevent{' '}
              <span
                className={cn(
                  'animate-gradient bg-gradient-to-tr from-zinc-100 via-zinc-200/50 to-zinc-200/90 bg-clip-text text-transparent',
                  gradientStyle.magicText
                )}
              >
                on-chain{' '}
              </span>{' '}
              hacks before it happens with Gorlabs.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="#">
                Get in touch <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
            {/* <Button size="lg" className="gap-4" asChild>
              <Link href={env.NEXT_PUBLIC_APP_URL}>
                Sign up <MoveRight className="h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </section>
      </div>
    </div>
  );
};
