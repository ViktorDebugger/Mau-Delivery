import Head from "next/head";
import type { Metadata } from "next";
import { Karantina, Katibeh } from "next/font/google";

import { CartProvider } from "@/context/CartContext";
import ClientWrapper from "@/context/ClientWrapper";

import "./globals.css";

const karantina = Karantina({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-karantina",
});

const katibeh = Katibeh({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-katibeh",
});

export const metadata: Metadata = {
  title: "MAU Delivery",
  description: "Delivery service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${karantina.variable} ${katibeh.variable} font-katibeh w-full bg-[#FBE7BB]`}
      >
        <CartProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
