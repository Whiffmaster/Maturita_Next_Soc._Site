"use client"

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode, Suspense} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Toaster} from "sonner";
import NextAuthSessionProvider from "./providers/SessionProvider";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en" className={"dark"}>
    <body className={inter.className}>
    <NextUIProvider>
      <NextAuthSessionProvider>
        {children}
        <Toaster/>
      </NextAuthSessionProvider>
    </NextUIProvider>
    </body>
    </html>
  );
}
