import { Container } from '@gorlabs/ui';
import React from 'react';
import { features } from '@/constants';
import { SectionBadge } from '@gorlabs/ui';
import Image from 'next/image';

const Features = () => {
  return (
    <>
      <section>
        {/* <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div> */}
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <SectionBadge title="Features" />
            <h2 className="pb-4 text-4xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60 from-zinc-600/60 via-zinc-900 to-zinc-600/60">
              Discover our powerful features.
            </h2>
            <p className="text-lg text-zinc-400">
              Gorlabs offers a range of features to help you build a stunning
              website in no time.
            </p>
          </div>
        </Container>

        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Image
              src="/assets/feature.svg"
              alt="banner image"
              width={80}
              height={80}
              quality={100}
              className="w-auto"
            />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-start px-0 md:px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
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

export default Features;
