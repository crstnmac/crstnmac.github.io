import "./globals.css";
import React from "react";
import { Inter } from "@next/font/google";
import { t } from "lib";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={(t("antialiased"), inter.className)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
