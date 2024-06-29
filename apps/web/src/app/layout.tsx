import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navbar/index";
import { Toaster } from "@repo/ui/components/ui/toaster";
import { ThemeProvider } from "@repo/ui/themes/theme-provider";
import { siteConfig } from "@/config/site";
import Particles from "@repo/ui/components/ui/particles";
import Footer from "@/components/footer";

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


        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Navigation />
          <main className="py-5">
            <div className="bg-border my-6 h-[1px] w-full shrink-0" />
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
