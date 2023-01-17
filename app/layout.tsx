"use client";
import "./globals.css";
import React from "react";
import { Inter } from "@next/font/google";
import { t } from "lib";
import { Providers } from "components";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={t("antialiased", inter.variable)}>
      <head />
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
