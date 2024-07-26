import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/theme-provider";



export const metadata: Metadata = {
  title: "Adrian Zavala Portfolio",
  description: "Portfolio Profile",

};

type RootLayoutProps = any;

export default function RootLayout({children}:  RootLayoutProps) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  </>
  );
}
