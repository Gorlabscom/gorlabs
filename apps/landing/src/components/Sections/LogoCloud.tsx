import { SectionBadge } from '@gorlabs/ui';
import Image from 'next/image';

const logos = [
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Nextjs',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
  },
  {
    name: 'Prime',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
  },
  {
    name: 'Trustpilot',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
  },
  {
    name: 'Webflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
  },

  {
    name: 'Airbnb',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
  },
  {
    name: 'Tina',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
  },
  {
    name: 'Stackoverflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
  },
  {
    name: 'mistral',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
  },
];

const AnimatedLogoCloud = () => {
  return (
    <>
      {/* <section> */}
      {/* <Container> */}
      <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
        <SectionBadge title="Our Customers" />
        <h2 className="pb-4 text-4xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60 from-zinc-950/70 via-zinc-950 to-zinc-950/70 group">
          What people are saying
        </h2>
        <p className="text-lg text-zinc-400">
          We are trusted by the best in the industry to deliver top-notch
          services.
        </p>
      </div>
      <div className="w-full py-7">
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative mt-6 flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <Image
                      key={key}
                      src={logo.url}
                      width={10}
                      height={10}
                      className="h-10 w-28 px-2 brightness-0 hover:brightness-100  dark:invert"
                      alt={`${logo.name}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* </Container> */}
      {/* </section> */}
    </>
  );
};

export default AnimatedLogoCloud;
