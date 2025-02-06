// export const runtime = 'edge';

// TODO(temp): comment showBetaFeature
// import { showBetaFeature } from '@repo/feature-flags';
import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import { Cases } from './components/cases';
import { CTA } from './components/cta';
import { FAQ } from './components/faq';
import { Features } from './components/features';
import { Hero } from './components/hero';
import { Stats } from './components/stats';
import { Testimonials } from './components/testimonials';

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
      <Cases />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
