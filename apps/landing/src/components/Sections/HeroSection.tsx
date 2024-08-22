import { BorderBeam } from '@gorlabs/ui';
import Image from 'next/image';
import Link from 'next/link';
import gradientStyle from '@/styles/gradient.module.css';
import { cn } from '@gorlabs/utils/helpers';
import ShinyRotatingBorderButtonVariant1 from '../Chip/chip';
import { Container } from '@gorlabs/ui';

const HeroSection = () => {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center gap-8 py-24 px-4 md:px-12 lg:px-24">
        <ShinyRotatingBorderButtonVariant1 />

        <h1 className="max-w-4xl text-5xl text-center font-bold md:text-6xl lg:text-7xl">
          Build your{' '}
          <span
            className={cn(
              'bg-gradient-to-tr from-zinc-100 via-zinc-200/50 to-zinc-200/90 text-transparent bg-clip-text animate-gradient',
              gradientStyle.magicText
            )}
          >
            next idea{' '}
          </span>
          and ship your dream site.
        </h1>
        <p className="mt-5 max-w-prose text-center text-zinc-700 dark:text-gray-300 sm:text-lg">
          Maximum speed. Make professional sites easy, fast and fun while
          delivering best-in-class SEO, performance.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="#"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 bg-white px-3 py-1 text-sm font-medium dark:text-white text-slate-950 backdrop-blur-3xl">
              Get Started
            </span>
          </Link>
          <button className="btn btn-outline">Learn More</button>
        </div>

        {/* <div className="flex justify-center items-center relative w-full">
        <div className="m-2 z-10 p-2 rounded-xl bg-gray-900/15 dark:bg-zinc-100/15 ring-1 ring-inset ring-gray-900/25 dark:ring-zinc-100/25 lg:-m-4 lg:rounded-2xl lg:p-4">
          <Image
            src="/erevald.png"
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-2xl border-2 border-muted w-full h-auto"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </div> */}

        <div className="relative flex items-center py-10 md:py-20 w-full">
          <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
          <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
            <Image
              src="/assets/dashboard.svg"
              alt="banner image"
              width={1200}
              height={1200}
              quality={100}
              className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
            />

            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
