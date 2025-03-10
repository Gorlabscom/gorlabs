export const runtime = 'edge';

import '@repo/design-system/styles/globals.css';
import './styles/web.css';
// import { legal } from '@repo/cms';
// import { Feed } from '@repo/cms/components/feed';
import { DesignSystemProvider } from '@repo/design-system';
// import { fonts } from '@repo/design-system/lib/fonts';
import { cn } from '@repo/design-system/lib/utils';
import { Toolbar } from '@repo/feature-flags/components/toolbar';
import type { ReactNode } from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
// import { Header } from './components/Header/index'
import localFont from 'next/font/local';
import Script from 'next/script';

const Apparat = localFont({
  src: './fonts/Kmr_apparat_medium.woff2',
  variable: '--font-apparat',
  display: 'swap',
});

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html
    lang="en"
    className={cn(Apparat.className, 'scroll-smooth')}
    suppressHydrationWarning
  >
    <body>
      <Script
        defer
        src="https://umami.gorlabs.com/script.js"
        data-website-id="98df0aeb-c3d4-471a-80dc-5baa067d28cf"
      />
      <DesignSystemProvider>
        <Header />
        {children}
      </DesignSystemProvider>
      <Toolbar />
      {/* <CMSToolbar /> */}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
