import HeroSection from "@/components/HeroSection";
import AnimatedLogoCloud from "@/components/LogoCloud";
import Pricing from "@/components/Pricing";
import MaxWidthWrapper from "@repo/ui/components/max-width-wrapper.tsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MaxWidthWrapper>
        <HeroSection />
        <AnimatedLogoCloud />
        <Pricing />
      </MaxWidthWrapper>
    </main>
  );
}
