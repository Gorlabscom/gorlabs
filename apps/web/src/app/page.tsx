
import HeroSection from "@/components/HeroSection";
import AnimatedLogoCloud from "@/components/LogoCloud";
import Pricing from "@/components/Pricing";
import MaxWidthWrapper from "@repo/ui/components/max-width-wrapper.tsx";
import { ThemeButton } from "@repo/ui/themes/theme-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      <MaxWidthWrapper className="w-full flex flex-col items-center gap-12">
        <ThemeButton />
        <HeroSection />
        <AnimatedLogoCloud />
        <Pricing />
      </MaxWidthWrapper>
    </main>
  );
}
