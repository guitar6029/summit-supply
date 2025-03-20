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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <Navigation />
          <main className="min-h-screen mt-[5rem]">{children}</main>
          <Footer />
          <ToastContainer />
        
        {/* <PayPalScriptProvider options={{ clientId: envKey }}>
          <Navigation />
          <main className="min-h-screen mt-[5rem]">{children}</main>
          <Footer />
          <ToastContainer />
        </PayPalScriptProvider> */}
      </body>
    </html>
  );
}
