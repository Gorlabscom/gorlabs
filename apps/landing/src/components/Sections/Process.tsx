import { Container } from '@gorlabs/ui';
import { SectionBadge } from '@gorlabs/ui';
import { perks } from '@/constants';

const ProcessSection = () => {
  return (
    <>
      <section>
        <Container>
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <SectionBadge title="The Process" />
            <h2 className="pb-4 text-4xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60 from-zinc-600/60 via-zinc-900 to-zinc-600/60">
              Three steps to build your dream website
            </h2>
            <p className="text-lg text-zinc-400">
              Turn your vision into reality in just 3 simple steps
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 dark:divide-gray-400 first:border-l-2 lg:first:border-none first:border-gray-900 dark:first:border-white">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProcessSection;
