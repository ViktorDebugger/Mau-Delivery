import Head from "next/head";
import type { Metadata } from "next";
import { Karantina, Katibeh } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { OrdersProvider } from "@/context/OrderContext";
import AnimationWrapper from "@/context/AnimationWrapper";
import "react-toastify/dist/ReactToastify.css";
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${karantina.variable} ${katibeh.variable} font-katibeh w-full bg-[#FBE7BB]`}
      >
        <AuthProvider>
          <OrdersProvider>
            <CartProvider>
              <AnimationWrapper>{children}</AnimationWrapper>
              <ToastContainer
                position="top-center"
                hideProgressBar={true}
                autoClose={3000}
                closeOnClick
                toastClassName="custom-toast"
              />
            </CartProvider>
          </OrdersProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
