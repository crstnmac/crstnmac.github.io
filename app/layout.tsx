"use client";
import "./globals.css";
import React from "react";
import { Fira_Code, Inter } from "@next/font/google";
import { t } from "lib";
import dynamic from "next/dynamic";
const Providers = dynamic(() => import("components/providers"), { ssr: false });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={t("antialiased min-h-screen", inter.variable, fira.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
