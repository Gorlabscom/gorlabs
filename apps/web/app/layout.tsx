import '@repo/design-system/styles/globals.css';
import './styles/web.css';
// import { legal } from '@repo/cms';
// import { Feed } from '@repo/cms/components/feed';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import { cn } from '@repo/design-system/lib/utils';
import { Toolbar } from '@repo/feature-flags/components/toolbar';
import type { ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/Header';
// import { Header } from './components/Header/index'

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html
    lang="en"
    className={cn(fonts, 'scroll-smooth')}
    suppressHydrationWarning
  >
    <body>
      <DesignSystemProvider>
        <Header />
        {children}
        {/* biome-ignore lint/suspicious/useAwait: "Server Actions must be async" */}
      </DesignSystemProvider>
      <Toolbar />
      {/* <CMSToolbar /> */}
      <Footer/>
    </body>
  </html>
);

export default RootLayout;
