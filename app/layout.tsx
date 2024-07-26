import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/theme-provider";



export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Adrian Zavala Portfolio",
  description: "Portfolio Profile",
=======
  title: "Adrian Zavala",
  description: "Portfolio",
>>>>>>> bb46ff80b6c39de673accfb54e257c42cd3d610e
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
