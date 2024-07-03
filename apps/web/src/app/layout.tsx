import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@repo/ui/themes/theme-provider";
import { siteConfig } from "@/config/site";
import Particles from "@repo/ui/components/ui/particles.tsx";
import Footer from "@/components/footer";
import { Toaster } from "@repo/ui/components/ui/toaster.tsx";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });
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

    <html suppressHydrationWarning lang="en">
      <head>
      </head>
      <body className={inter.className}>

      <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <main className= "">
            <div className="h-full">
              <Particles
                className="absolute fixed top-0 left-0 w-full h-full z-[-1] inset-0"
                quantity={400}
                ease={100}
                color={"#7f57f1"}
                refresh
              />
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
