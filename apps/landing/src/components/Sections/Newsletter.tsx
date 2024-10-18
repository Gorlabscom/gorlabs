import { Button, Container, Input, LampContainer } from '@gorlabs/ui';
import { ArrowRight } from '@gorlabs/ui/icons';
import Link from 'next/link';
import React from 'react';

const Newsletter = () => {
  return (
    <>
      <section>
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-[60vw] text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-2">
                From Idea to Launch <br /> Faster Than Ever
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Build stunning websites with Gorlabs&apos;s intuitive
                drag-and-drop builder and powerful AI assistant
              </p>
              <Button variant="white" className="mt-6" asChild>
                {/* <Link href="/sign-in">
                Get started for free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link> */}
                <Link
                  className="mt-16 justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-white dark:text-zinc-900 bg-gradient-to-r dark:from-white/80 dark:via-white dark:to-white/80 hover:bg-white from-zinc-950/70 via-zinc-950 to-zinc-950/70 group"
                  href="/signin"
                >
                  Get Started for free{' '}
                  <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Be up to date with everything about AI builder
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-gray-300 duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{' '}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Newsletter;
