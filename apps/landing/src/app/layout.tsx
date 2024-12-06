import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@gorlabs/ui';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Particles from '@/components/Particles/Particles';
import { siteConfig } from '@/config/site';
import Metrics from '@/metrics';
import { Header } from '@/components/Header';
import Script from "next/script";

const lexend = localFont({
  src: './fonts/Lexend-Regular.woff2',
  variable: '--font-lexend',
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.url,
    },
  ],
  creator: siteConfig.creator.name,

  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
  },

  // PWA
  applicationName: siteConfig.name,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.name,
    startupImage: siteConfig.ogImage,
  },
  formatDetection: {
    telephone: false,
  },

  // Open Graph
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: siteConfig.titleTemplate,
    },
    description: siteConfig.description,
  },
  // Twitter
  twitter: {
    card: 'summary',
    title: {
      default: siteConfig.name,
      template: siteConfig.titleTemplate,
    },
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#7563cf',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${geistMono.variable} dark:bg-zinc-900`}
      >
        <Script
            defer
            src="https://umami.gorlabs.com/script.js" data-website-id="98df0aeb-c3d4-471a-80dc-5baa067d28cf"
          />
        <Metrics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <Navbar /> */}
          <Header />
          <Particles
            className="absolute top-0 left-0 w-full h-full z-[-1] inset-0"
            quantity={400}
            ease={100}
            color={'#7f57f1'}
            refresh
          />
          {children}
          {/* </div> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
