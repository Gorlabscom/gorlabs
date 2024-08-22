'use client';

// import { MaxWidthWrapper } from '@gorlabs/ui';
import HeroSection from '@/components/Sections/HeroSection';
import AnimatedLogoCloud from '@/components/Sections/LogoCloud';
import Pricing from '@/components/Sections/Pricing';
import ProcessSection from '@/components/Sections/Process';
import Features from '@/components/Sections/Features';
import Newsletter from '@/components/Sections/Newsletter';

export default function Example() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      {/* <MaxWidthWrapper className="w-full flex flex-col items-center gap-12"> */}
      {/* Sections */}
      <HeroSection />
      <ProcessSection />
      <Features />
      <Pricing />
      <AnimatedLogoCloud />
      <Newsletter />
      {/* </MaxWidthWrapper> */}
    </main>
  );
}
