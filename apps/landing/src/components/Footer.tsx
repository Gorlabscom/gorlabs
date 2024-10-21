import Link from 'next/link';

import gorlabs from '@gorlabs/ui/assets/gorlabs.svg';
import Image from 'next/image';
import { Heart } from '@gorlabs/ui/icons';
import { Container } from '@gorlabs/ui';
import { TextHoverEffect } from '@gorlabs/ui';

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"/>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <Container delay={0.1}>
          <div className="flex flex-col items-start justify-start md:max-w-[200px]">
            <div className="flex items-start">
              <Image src={gorlabs} width={40} height={40} alt='logo'/>
              {/* <gorlabs className="w-7 h-7" /> */}
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              Our mission is to providing best AI saas tools by making Gorlabs effortless, affordable, and accessible to all.
            </p>
            <span className="mt-4 dark:text-neutral-200 text-sm flex items-center">
              Made by{' '}
              <Link
                href="https://gauravmandall.vercel.app/"
                className="font-semibold ml-1"
              >
                Gaurav
              </Link>
                <Heart className="w-3.5 h-3.5 ml-1 fill-purple-600 text-primary"/>
            </span>
          </div>
        </Container>

        <div className="grid-cols-2 gap-8 grid mt-6 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Container delay={0.2}>
              <div className="">
                <h3 className="text-base font-medium text-white">Product</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Integration
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
            <Container delay={0.3}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-white">
                  Integrations
                </h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Container delay={0.4}>
              <div className="">
                <h3 className="text-base font-medium text-white">Resources</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link
                      href="/resources/blog"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/resources/help"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
            <Container delay={0.5}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-white">Company</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="">
                    <Link
                      href=""
                      className="hover:text-foreground transition-all duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/privacy"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/terms"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <Container delay={0.6}>
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Gorlabs LLC. All rights reserved.
          </p>
        </Container>
      </div>

      <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
        <TextHoverEffect text="GORLABS" />
      </div>
    </footer>
  );
};

export default Footer;
