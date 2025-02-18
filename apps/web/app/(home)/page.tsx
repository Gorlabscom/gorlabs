// export const runtime = 'edge';

// TODO(temp): comment showBetaFeature
// import { showBetaFeature } from '@repo/feature-flags';
import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import { Cases } from '@/components/home/cases';
import { CTA } from '@/components/home/cta';
import { FAQ } from '@/components/home/faq';
import { Features } from '@/components/home/features';
import { Hero } from '@/components/home/hero';
import { Stats } from '@/components/home/stats';
import { Testimonials } from '@/components/home/testimonials';
import Pricing from '@/components/home/pricing'
import { Introduction } from '@/components/home/introduction';
import { Integrations } from '@/components/home/integrations'

const meta = {
  title: 'Gorlabs',
  description:
    "Securing the blockchain infrastructure",
};

export const metadata: Metadata = createMetadata(meta);

// remove async & const betaFeature
const Home = () => {
  // const betaFeature = await showBetaFeature();

  return (
    <>
    {/* remove betaFeature flag*/}
      {/* {betaFeature && (
        <div className="w-full bg-black py-2 text-center text-white">
          Beta feature now available
        </div>
      )} */}
      <Hero />
      <Introduction />
      {/* <Cases /> */}
      <Integrations />
      <Pricing />
      {/* <Features /> */}
      {/* <Stats /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
