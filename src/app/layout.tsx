"use client";

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import ProgressBarProvider from "@/providers/ProgressBarProvider";
import "../lib/i18n";
// export const metadata: Metadata = {
//   title: "Business Fly Tj",
//   description: "Business Fly",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn([GeistSans.className])}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          defaultTheme="light"
          enableSystem={false}
        >
          <ProgressBarProvider>
            {children}
            {/* Вы можете использовать состояние `isAuthenticated` и `user` в любом месте */}
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
