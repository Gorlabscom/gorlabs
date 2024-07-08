import { BorderBeam } from "@repo/ui/components/ui/border-beam.tsx";
import Image from "next/image";
import Link from "next/link";
import gradientStyle from "@/styles/gradient.module.css"
import { cn } from "@repo/ui/lib/utils";

const HeroSection = () => {
  return (

    <section className="flex flex-col items-center justify-center gap-8 py-24 px-4 md:px-12 lg:px-24">
      <div className="mb-4 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-white px-7 py-2 shadow-md-6 backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-800 dark:hover:bg-gray-800/50">
        <p className="text-sm font-semibold text-gray-700 dark:text-white">
          ✨ GorLabs is now public (beta)
        </p>
        <BorderBeam />
      </div>

      <h1 className="max-w-4xl text-5xl text-center font-bold md:text-6xl lg:text-7xl">
        Building the <span
          className={cn(
            "bg-gradient-to-tr from-zinc-100 via-zinc-200/50 to-zinc-200/90 text-transparent bg-clip-text animate-gradient",
            gradientStyle.magicText,
          )}
        >memory</span>, for the web.
      </h1>
      <p className="mt-5 max-w-prose text-center text-zinc-700 dark:text-gray-300 sm:text-lg">
        Creating a future memory that stores the web as memory using web scraping to create a personalized agent.
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

      <div className="flex justify-center items-center relative w-full">
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
      </div>
    </section>
  );
};

export default HeroSection;
