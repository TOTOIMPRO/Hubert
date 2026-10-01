import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hubert Sycz | Aktorstwo i Improwizacja",
  description:
    "Oficjalne portfolio Huberta Sycza — aktorstwo, film, teatr, improwizacja i TOTO IMPRO.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
