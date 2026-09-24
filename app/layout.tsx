
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hubert | Aktorstwo i Improwizacja",
  description:
    "Oficjalne portfolio Huberta. Aktorstwo, teatr, improwizacja, spektakle i współpraca artystyczna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
