import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer/Footer";
//import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supply Summit",
  description: "Handmade for the Trail. Built to Last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const envKey = process.env.NEXT_PAYPAL_CLIENT_ID;
  if (envKey === null || envKey === undefined) {
    throw new Error("NEXT_PAYPAL_CLIENT_ID is not defined");
  }

  return (
    <html lang="en" className="h-full">
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Navigation />
        </header>

        {/* flex-1 makes main fill the remaining space.
           overflow-y-auto lets long pages scroll without affecting header/footer */}
        <main className="flex-1 overflow-y-auto mt-16">{children}</main>

        <footer className="mt-auto">
          <Footer />
        </footer>

        <ToastContainer theme="colored" />
      </body>
    </html>
  );
}
