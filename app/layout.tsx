import type { Metadata } from "next";
import "./globals.css";




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
          {children}
      </body>
      {/* <script src="https://smtpjs.com/v3/smtp.js"></script> */}
    </html>
  </>
  );
}
