import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import ScrollProvider from "@/ScrollProvider";
import Nav from "@/components/Nav/Nav";
import GridLines from "@/components/GridLines";
import AppProvider from "@/store/app-context";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader/Loader";
import { ModalProvider } from "@/providers/modal-provider";
import LoadingWrapper from "@/hooks/use-loading-wrapper";

const inter = Inter({ subsets: ["latin"] });

const maison = localFont({
  src: [
    {
      path: "../public/fonts/HKGrotesk-Light.otf",
      weight: "200",
    },

    {
      path: "../public/fonts/HKGrotesk-Medium.otf",
      weight: "400",
    },

    {
      path: "../public/fonts/HKGrotesk-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-maison",
});

const neuzeit = localFont({
  src: [
    {
      path: "../public/fonts/Neuzeit Grotesk W01 Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-neuzeit",
});

const test = localFont({
  src: [
    {
      path: "../public/fonts/HKGrotesk-Bold.otf",
      weight: "400",
    },
  ],
  variable: "--font-test",
});

const miller = localFont({
  src: [
    {
      path: "../public/fonts/Miller Banner Roman.ttf",
      weight: "400",
    },
  ],
  variable: "--font-miller",
});

export const metadata: Metadata = {
  title: "GigaStack",
  description:
    "GigasStack is a fast growing software and technology startup in Nigeria.",
    themeColor: "#0f0a3d"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${maison.className} ${test.variable} ${miller.variable} relative overflow-hidde`}
      >
        <AppProvider>
          {/* <Loader /> */}
          {/* <LoadingWrapper> */}
          <GridLines />
          <Nav />
          <ModalProvider />
          {children}
          <Footer />
          <ScrollProvider />
          {/* </LoadingWrapper> */}
        </AppProvider>
      </body>
    </html>
  );
}
