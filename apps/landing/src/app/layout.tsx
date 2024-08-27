import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@gorlabs/ui';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Particles from '@/components/Particles/Particles';
import { siteConfig } from '@/config/site';
import Metrics from '@/metrics';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:bg-zinc-900`}
      >
        <Metrics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {/* <div className="h-full"> */}
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
