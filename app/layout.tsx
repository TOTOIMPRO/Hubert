
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
      <head>
        <style>{`

          /*
           * GALERIE AKTORSTWA I IMPROWIZACJI
           *
           * Wszystkie kafelki mają jednakowe
           * proporcje i wielkość.
           *
           * Zdjęcia nie są przycinane.
           * Cała twarz pozostaje widoczna.
           */

          .gallery-grid {
            display: grid;
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            width: 100%;
            max-width: 1050px;

            gap: 15px;
            margin: 0 auto;
          }

          .gallery-item {
            position: relative;

            width: 100%;
            aspect-ratio: 4 / 5;

            margin: 0;
            overflow: hidden;
          }

          .gallery-item img {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: contain !important;
            object-position: center center !important;

            transform: none !important;
          }

          .gallery-item:hover img {
            transform: none !important;
          }

          /*
           * TŁO DOPASOWANE DO SEKCJI
           */

          .world--acting .gallery-item {
            background: #222222;
          }

          .world--improv .gallery-item {
            background: #e9dbb4;
          }

          /*
           * TELEFONY I TABLETY
           */

          @media (max-width: 1050px) {
            .gallery-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));

              max-width: 700px;
            }
          }

          @media (max-width: 380px) {
            .gallery-grid {
              grid-template-columns: 1fr;
              max-width: 280px;
            }
          }

        `}</style>
      </head>

      <body>{children}</body>
    </html>
  );
}
