import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navbar/index";
import { Toaster } from "@repo/ui/components/ui/toaster";
import { ThemeProvider } from "@repo/ui/themes/theme-provider";
import { siteConfig } from "@/config/site";

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
        <Navigation />
        

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <main className="py-5">
          <div className="bg-border my-6 h-[1px] w-full shrink-0" />
          <div className="h-full">{children}</div>
        </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
