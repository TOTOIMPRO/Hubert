"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type World = "acting" | "home" | "improv";

type Credit = {
  title: string;
  category: string;
  role?: string;
  director?: string;
};

type FilmYear = {
  year: string;
  credits: Credit[];
};

type TheatreCredit = Credit & {
  year: string;
};

type Photo = {
  src: string;
  alt: string;
  position?: string;
};

const offsets: Record<World, string> = {
  acting: "0vw",
  home: "-100vw",
  improv: "-200vw",
};

const LINKS = {
  wizytowka: "https://youtu.be/iZn3et4MSko",
  showreel: "https://youtu.be/-v35sackaag",
  instagram: "https://www.instagram.com/syczalke/",
  email: "mailto:hubertsycz@gmail.com",
  agencja: "https://abewu.pl/aktor/hubert-sycz",
  filmmakers: "https://www.filmmakers.eu/pl/actors/hubert-sycz",
  filmpolski: "https://filmpolski.pl/fp/index.php?osoba=11134038",
  special: "https://www.youtube.com/watch?v=J_HRMuctBGQ",

  totoWWW: "https://www.totoimpro.com/pl",
  totoInstagram: "https://www.instagram.com/totoimpro/",
  totoFacebook:
    "https://www.facebook.com/profile.php?id=61552507030058",
  totoTikTok: "https://www.tiktok.com/@toto.impro",
  totoEmail: "mailto:totoimprov@gmail.com",
};

const PHOTO = {
  acting: "/images/HUBERT  fot Zimakiewicz (20).jpg",
  improv: "/images/improwizacja.jpg",
};

/* =====================================
   GALERIA AKTORSKA
===================================== */

const actingGallery: Photo[] = [
  {
    src: "/images/HUBERT  fot Zimakiewicz (20).jpg",
    alt: "Hubert Sycz w białej koszuli na fotelu",
    position: "50% 18%",
  },
  {
    src: "/images/IMG_0074-01-kopia.jpeg",
    alt: "Hubert Sycz w brązowej kurtce",
    position: "50% 20%",
  },

  /* TRZECIE ZDJĘCIE — POPRAWNA NAZWA Z DWOMA SPACJAMI */
  {
    src: "/images/HUBERT  fot Zimakiewicz (24)-2.jpg",
    alt: "Hubert Sycz - zdjęcie aktorskie",
    position: "50% 18%",
  },

  {
    src: "/images/H.Sycz..jpg",
    alt: "Hubert Sycz w jasnej koszuli",
    position: "50% 18%",
  },
  {
    src: "/images/_MG_8790.jpg",
    alt: "Hubert Sycz na brązowym tle",
    position: "50% 18%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (37)-2.jpg",
    alt: "Hubert Sycz w czarnym golfie",
    position: "50% 16%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (29).jpg",
    alt: "Hubert Sycz w białym podkoszulku",
    position: "50% 18%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (6).jpg",
    alt: "Hubert Sycz na ciemnym tle",
    position: "50% 16%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (4).jpg",
    alt: "Hubert Sycz oparty o stołek",
    position: "50% 18%",
  },
];

/* =====================================
   GALERIA IMPROWIZACJI

   OSTATNI RZĄD:
   1. CZERWONE PIONOWE
   2. NIEBIESKIE ZE SCENY
   3. CZERWONY CIEŃ

   DWIE PIERWSZE FOTOGRAFIE W OSTATNIM
   RZĘDZIE MAJĄ WŁASNE KADROWANIE.
===================================== */

const improvGallery: Photo[] = [
  {
    src: "/images/IMG_9754.jpg",
    alt: "Hubert Sycz podczas improwizacji",
    position: "50% 45%",
  },
  {
    src: "/images/TOTO-50.jpg",
    alt: "Hubert Sycz na scenie TOTO IMPRO",
    position: "50% 45%",
  },
  {
    src: "/images/IMG_0283.jpg",
    alt: "Hubert Sycz podczas spektaklu improwizowanego",
    position: "38% 44%",
  },
  {
    src: "/images/TOTO-69.jpg",
    alt: "Hubert Sycz podczas występu TOTO IMPRO",
    position: "52% 44%",
  },
  {
    src: "/images/TOTO-85.jpg",
    alt: "Hubert Sycz z zespołem TOTO IMPRO",
    position: "55% 44%",
  },
  {
    src:
      "/images/669587663_1500092202115847_7734198665696874300_n.jpg",
    alt: "Hubert Sycz podczas spektaklu",
    position: "50% 44%",
  },

  /* LEWE DOLNE — PIONOWE CZERWONE */
  {
    src: "/images/wefilm-3.10.25-michalew-95.jpg",
    alt: "Hubert Sycz podczas spektaklu TOTO IMPRO",
    position: "50% 40%",
  },

  /* ZDJĘCIE PO JEGO PRAWEJ — HUBERT PRZESUNIĘTY DO CENTRUM */
  {
    src: "/images/TOTO-18.jpg",
    alt: "Hubert Sycz na scenie",
    position: "31% 50%",
  },

  {
    src:
      "/images/651790701_1355531853268890_9203031069442217826_n.jpg",
    alt: "Hubert Sycz w czerwonym świetle scenicznym",
    position: "28% 50%",
  },
];

/* =====================================
   FILMOGRAFIA
===================================== */

const filmography: FilmYear[] = [
  {
    year: "2026",
    credits: [
      {
        title: "MNIEJ OBCY",
        category: "Film fabularny",
        role: "Młody biznesmen",
      },
    ],
  },

  {
    year: "2025",
    credits: [
      {
        title: "BRESLAU",
        category: "Serial",
        role: "Kelner",
      },
      {
        title: "HOW TO END A LOVE STORY?",
        category: "Film krótkometrażowy",
        role: "Tancerz / Śpioch",
      },
      {
        title: "KOMISARZ ALEX",
        category: "Serial",
        role: "Kuba",
      },
      {
        title: "OPERACJAIMPROWIZACJA",
        category: "Film krótkometrażowy",
      },
      {
        title: "PATI",
        category: "Serial",
        role: "Policjant",
      },
      {
        title: "REKONSTRUKCJA",
        category: "Film krótkometrażowy",
      },
    ],
  },

  {
    year: "2024",
    credits: [
      {
        title: "OJCIEC MATEUSZ",
        category: "Serial",
        role: "Andrzej Kostrzewa",
      },
      {
        title: "TOŃ",
        category: "Etiuda szkolna",
      },
      {
        title: "WIDZIMY SIĘ JUTRO",
        category: "Etiuda szkolna",
      },
    ],
  },

  {
    year: "2023",
    credits: [
      {
        title: "STEFANEK",
        category: "Etiuda szkolna",
        role: "Lekarz",
      },
    ],
  },

  {
    year: "2022",
    credits: [
      {
        title: "DELICJE",
        category: "Etiuda szkolna",
        role: "Oskar",
      },
    ],
  },

  {
    year: "2021",
    credits: [
      {
        title: "CHYŁKA. INWIGILACJA",
        category: "Serial",
        role: "Prawnik",
      },
      {
        title: "CIEŃ",
        category: "Serial",
        role: 'Znajomy „Szczura”',
      },
      {
        title: "KOLCZYK",
        category: "Etiuda szkolna",
      },
      {
        title: "CUDAK",
        category: "Film fabularny",
        role: "Henio",
      },
    ],
  },

  {
    year: "2020",
    credits: [
      {
        title: "BARWY SZCZĘŚCIA",
        category: "Serial",
        role: "Emil Kwiatkowski",
      },
      {
        title: "PÓŁ ŻARTEM, PÓŁ IMPRO",
        category: "Serial",
        role: "Hubert",
      },
    ],
  },

  {
    year: "2019",
    credits: [
      {
        title: "KOMISARZ ALEX",
        category: "Serial",
        role: "Kelner",
      },
    ],
  },

  {
    year: "2018",
    credits: [
      {
        title: "BYŁO MIŁO",
        category: "Film krótkometrażowy",
      },
      {
        title: "DRUGA SZANSA",
        category: "Serial, sezon 5",
        role: "Basista",
      },
      {
        title: "NINA",
        category: "Film fabularny",
        role: "Chłopak na placu",
      },
      {
        title: "TORY",
        category: "Film krótkometrażowy",
      },
    ],
  },

  {
    year: "2017",
    credits: [
      {
        title: "DRUGA SZANSA",
        category: "Serial, sezon 4",
        role: "Gitarzysta",
      },
      {
        title: "DRUGA SZANSA",
        category: "Serial, sezon 3",
        role: "Gitarzysta",
      },
    ],
  },

  {
    year: "2014",
    credits: [
      {
        title: "JEZIORAK",
        category: "Film fabularny",
      },
    ],
  },
];

/* =====================================
   TEATR
===================================== */

const theatre: TheatreCredit[] = [
  {
    year: "2023",
    title: "PRAWDY ZA GROSZ",
    category: "Spektakl teatralny",
    role: "Marcel Wit",
    director: "Jan Łuć, Jakub Jakubiec",
  },
  {
    year: "2022",
    title: "115 SEN BOBA DYLANA",
    category: "Teatr Studyjny w Łodzi",
    role: "Queequeg",
    director: "Wojciech Kościelniak",
  },
  {
    year: "2022",
    title: "MARY PAGE MARLOWE",
    category: "Teatr Studyjny w Łodzi",
    role: "Dan",
    director: "Adam Orzechowski",
  },
  {
    year: "2019",
    title: "TRZY SIOSTRY",
    category: "Teatr im. Stefana Jaracza w Łodzi",
    role: "Włodzimierz Rode",
    director: "Jacek Orłowski",
  },
];

/* =====================================
   ZDJĘCIE
===================================== */

function PhotoImage({
  src,
  alt,
  position = "50% 50%",
}: {
  src: string;
  alt: string;
  position?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="image-error">
        <span>Nie znaleziono zdjęcia:</span>

        <small>
          {src
            .split("/")
            .pop()}
        </small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        objectPosition:
          position,
      }}
      onError={() =>
        setFailed(true)
      }
    />
  );
}

/* =====================================
   LINK
===================================== */

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

/* =====================================
   NAGŁÓWEK SEKCJI
===================================== */

function SectionHeader({
  title,
  description,
  compact = false,
}: {
  title: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`section-heading${
        compact
          ? " section-heading--compact"
          : ""
      }`}
    >
      <h2>{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}

/* =====================================
   FILMOGRAFIA — BEZ LICZBY PRODUKCJI
   I BEZ REŻYSERII
===================================== */

function FilmYearTable({
  group,
}: {
  group: FilmYear;
}) {
  return (
    <article className="film-year-card">
      <div className="film-year-head">
        <strong className="film-year-number">
          {group.year}
        </strong>
      </div>

      <div className="film-table-wrap">
        <table className="film-table">
          <thead>
            <tr>
              <th>PRODUKCJA</th>
              <th>RODZAJ</th>
              <th>ROLA</th>
            </tr>
          </thead>

          <tbody>
            {group.credits.map(
              (
                credit,
                index
              ) => (
                <tr
                  key={`${group.year}-${credit.title}-${index}`}
                >
                  <td className="film-title">
                    {credit.title}
                  </td>

                  <td>
                    {
                      credit.category
                    }
                  </td>

                  <td>
                    {credit.role ||
                      "—"}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </article>
  );
}

/* =====================================
   TEATR
===================================== */

function TheatreCard({
  credit,
}: {
  credit: TheatreCredit;
}) {
  return (
    <article className="theatre-card">
      <span className="theatre-year">
        {credit.year}
      </span>

      <span className="credit-category">
        {credit.category}
      </span>

      <h3>
        {credit.title}
      </h3>

      {credit.role && (
        <p>
          <span>ROLA</span>
          {credit.role}
        </p>
      )}

      {credit.director && (
        <p>
          <span>
            REŻYSERIA
          </span>

          {credit.director}
        </p>
      )}
    </article>
  );
}

/* =====================================
   GALERIA
===================================== */

function Gallery({
  photos,
  variant = "acting",
}: {
  photos: Photo[];
  variant?:
    | "acting"
    | "improv";
}) {
  return (
    <div
      className={`gallery-grid gallery-grid--${variant}`}
    >
      {photos.map(
        (photo) => (
          <figure
            className="gallery-item"
            key={photo.src}
          >
            <PhotoImage
              src={photo.src}
              alt={photo.alt}
              position={
                photo.position
              }
            />
          </figure>
        )
      )}
    </div>
  );
}

/* =====================================
   WIDEO
===================================== */

function VideoCard({
  id,
  label,
  title,
  href,
}: {
  id: string;
  label: string;
  title: string;
  href: string;
}) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="video-info">
        <span className="video-label">
          {label}
        </span>

        <h3>
          {title}
        </h3>

        <ExternalLink
          href={href}
          className="text-link"
        >
          OBEJRZYJ NA YOUTUBE ↗
        </ExternalLink>
      </div>
    </article>
  );
}

/* =====================================
   SOCIAL MEDIA
===================================== */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="18"
        cy="6"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.7 2h-3.1v13.4a3.1 3.1 0 1 1-2.7-3.08V9.1a6.3 6.3 0 1 0 5.8 6.3V8.55a8 8 0 0 0 4.7 1.5V6.9A4.7 4.7 0 0 1 16.7 2Z" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
      />

      <path d="M3 12h18" />

      <path d="M12 3c6 5 6 13 0 18" />

      <path d="M12 3c-6 5-6 13 0 18" />
    </svg>
  );
}

function SocialLinks() {
  const socials = [
    {
      label:
        "Instagram",
      href:
        LINKS.totoInstagram,
      icon:
        <InstagramIcon />,
    },
    {
      label:
        "Facebook",
      href:
        LINKS.totoFacebook,
      icon:
        <FacebookIcon />,
    },
    {
      label:
        "TikTok",
      href:
        LINKS.totoTikTok,
      icon:
        <TikTokIcon />,
    },
    {
      label:
        "WWW",
      href:
        LINKS.totoWWW,
      icon:
        <WebsiteIcon />,
    },
  ];

  return (
    <div className="social-icons">
      {socials.map(
        (social) => (
          <ExternalLink
            key={
              social.label
            }
            href={
              social.href
            }
            className="social-link"
          >
            <span className="social-symbol">
              {
                social.icon
              }
            </span>

            <span>
              {
                social.label
              }
            </span>
          </ExternalLink>
        )
      )}
    </div>
  );
}

/* =====================================
   STOPKA
===================================== */

function Footer({
  onBack,
  variant,
}: {
  onBack: () => void;
  variant:
    | "acting"
    | "improv";
}) {
  return (
    <footer className="portfolio-footer">
      {variant ===
        "improv" && (
        <button
          onClick={
            onBack
          }
        >
          ← WRÓĆ DO WYBORU
        </button>
      )}

      <div>
        <strong>
          HUBERT SYCZ.
        </strong>

        <p>
          AKTOR / IMPROWIZATOR
        </p>
      </div>

      {variant ===
        "acting" && (
        <button
          onClick={
            onBack
          }
        >
          WRÓĆ DO WYBORU →
        </button>
      )}
    </footer>
  );
}

/* =====================================
   STRONA
===================================== */

export default function HomePage() {
  const [
    world,
    setWorld,
  ] =
    useState<World>(
      "home"
    );

  const reduceMotion =
    useReducedMotion();

  function move(
    destination: World
  ) {
    setWorld(
      destination
    );
  }

  useEffect(() => {
    function handleKey(
      event: KeyboardEvent
    ) {
      if (
        event.key ===
        "Escape"
      ) {
        setWorld(
          "home"
        );
      }
    }

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKey
      );
    };
  }, []);

  useEffect(() => {
    const panel =
      document.getElementById(
        `panel-${world}`
      );

    if (panel) {
      panel.scrollTop = 0;
    }
  }, [world]);

  return (
    <div className="website">
      <motion.main
        className="track"
        initial={{
          x:
            "-100vw",
        }}
        animate={{
          x:
            offsets[
              world
            ],
        }}
        transition={
          reduceMotion
            ? {
                duration:
                  0,
              }
            : {
                duration:
                  0.85,

                ease: [
                  0.76,
                  0,
                  0.24,
                  1,
                ],
              }
        }
      >

        {/* =================================
            AKTORSTWO
        ================================= */}

        <section
          className="world world--acting"
          id="panel-acting"
        >
          <nav className="navigation">
            <span>
              HUBERT SYCZ / ACTOR
            </span>

            <button
              className="back-button"
              onClick={() =>
                move(
                  "home"
                )
              }
            >
              WRÓĆ DO WYBORU →
            </button>
          </nav>

          <header className="hero hero--acting">
            <div className="hero-content">
              <span className="eyebrow">
                AKTOR / WOKALISTA / IMPROWIZATOR
              </span>

              <h1>
                HUBERT
                <br />
                SYCZ.
              </h1>

              <p className="hero-lead">
                Aktorstwo to dla mnie opowiadanie historii,
                spotkanie z drugim człowiekiem
                i nieustanne poszukiwanie.
              </p>

              <div className="hero-actions">
                <a
                  href="#acting-films"
                  className="main-button"
                >
                  MOJE PRODUKCJE ↓
                </a>

                <ExternalLink
                  href={
                    LINKS.showreel
                  }
                  className="outline-button"
                >
                  SHOWREEL ↗
                </ExternalLink>
              </div>
            </div>

            <div className="hero-visual">
              <PhotoImage
                src={
                  PHOTO.acting
                }
                alt="Hubert Sycz w białej koszuli na fotelu"
                position="50% 12%"
              />
            </div>
          </header>

          <section className="content-section">
            <SectionHeader
              title="CZEŚĆ. JESTEM HUBERT."
            />

            <div className="intro-grid">
              <p className="large-text">
                Jestem aktorem,
                absolwentem Wydziału
                Aktorskiego Szkoły Filmowej
                w Łodzi.
              </p>

              <div className="intro-copy">
                <p>
                  Pracuję przed kamerą i na scenie.
                  Łączę aktorstwo z muzyką,
                  improwizacją oraz autorskimi projektami.
                </p>

                <p>
                  W 2022 roku otrzymałem wraz z zespołem
                  aktorskim spektaklu „Mary Page Marlowe”
                  Grand Prix 40. Festiwalu Szkół
                  Teatralnych w Łodzi.
                </p>

                <ExternalLink
                  href={
                    LINKS.filmmakers
                  }
                  className="text-link"
                >
                  PEŁNE CV NA FILMMAKERS ↗
                </ExternalLink>
              </div>
            </div>
          </section>

          <section className="content-section section-alt">
            <SectionHeader
              title="PRZED KAMERĄ."
              description="Moja wizytówka i showreel."
            />

            <div className="video-grid">
              <VideoCard
                id="iZn3et4MSko"
                label="WIZYTÓWKA"
                title="POZNAJMY SIĘ."
                href={
                  LINKS.wizytowka
                }
              />

              <VideoCard
                id="-v35sackaag"
                label="SHOWREEL"
                title="WYBRANE SCENY."
                href={
                  LINKS.showreel
                }
              />
            </div>
          </section>

          <section className="content-section">
            <SectionHeader
              title="RÓŻNE OBLICZA. JEDEN AKTOR."
              description="Moje zdjęcia portretowe i castingowe."
            />

            <Gallery
              photos={
                actingGallery
              }
              variant="acting"
            />

            <div className="section-bottom-links">
              <ExternalLink
                href={
                  LINKS.agencja
                }
                className="outline-button"
              >
                PROFIL W ABEWU ↗
              </ExternalLink>
            </div>
          </section>

          <section
            className="content-section section-alt"
            id="acting-films"
          >
            <SectionHeader
              title="PRZED KAMERĄ. NA EKRANIE."
              description="Produkcje pogrupowane według roku — od najnowszych do najstarszych."
            />

            <div className="film-years">
              {filmography.map(
                (
                  group
                ) => (
                  <FilmYearTable
                    key={
                      group.year
                    }
                    group={
                      group
                    }
                  />
                )
              )}
            </div>

            <div className="section-bottom-links">
              <ExternalLink
                href={
                  LINKS.filmpolski
                }
                className="main-button"
              >
                PEŁNA FILMOGRAFIA ↗
              </ExternalLink>

              <ExternalLink
                href={
                  LINKS.filmmakers
                }
                className="outline-button"
              >
                FILMMAKERS ↗
              </ExternalLink>
            </div>
          </section>

          <section className="content-section">
            <SectionHeader
              title="SCENA JEST MOIM DOMEM."
              description="Wybrane realizacje teatralne."
            />

            <div className="theatre-grid">
              {theatre.map(
                (
                  credit,
                  index
                ) => (
                  <TheatreCard
                    key={`${credit.title}-${index}`}
                    credit={
                      credit
                    }
                  />
                )
              )}
            </div>
          </section>

          <section className="content-section section-alt">
            <SectionHeader
              title="ZAGRAJMY COŚ RAZEM."
            />

            <a
              href={
                LINKS.email
              }
              className="big-email"
            >
              HUBERTSYCZ@GMAIL.COM ↗
            </a>

            <div className="contact-grid">
              <ExternalLink
                href={
                  LINKS.agencja
                }
                className="contact-card"
              >
                <span>
                  AGENCJA REPREZENTUJĄCA
                </span>

                <h3>
                  AGENCJA ABEWU
                </h3>

                <strong>
                  PRZEJDŹ DO AGENCJI ↗
                </strong>
              </ExternalLink>

              <ExternalLink
                href={
                  LINKS.filmmakers
                }
                className="contact-card"
              >
                <span>
                  PROFIL AKTORSKI
                </span>

                <h3>
                  FILMMAKERS
                </h3>

                <strong>
                  ZOBACZ PROFIL ↗
                </strong>
              </ExternalLink>

              <ExternalLink
                href={
                  LINKS.instagram
                }
                className="contact-card"
              >
                <span>
                  SOCIAL MEDIA
                </span>

                <h3>
                  INSTAGRAM
                </h3>

                <strong>
                  @SYCZALKE ↗
                </strong>
              </ExternalLink>
            </div>
          </section>

          <Footer
            variant="acting"
            onBack={() =>
              move(
                "home"
              )
            }
          />
        </section>

        {/* =================================
            WYBÓR
        ================================= */}

        <section
          className="world world--home"
          id="panel-home"
        >
          <div className="home-top">
            <span>
              HUBERT SYCZ / PORTFOLIO
            </span>

            <span>
              ACTING & IMPROVISATION
            </span>
          </div>

          <div className="home-heading">
            <span>
              DWIE STRONY JEDNEJ HISTORII
            </span>

            <h1>
              HUBERT SYCZ.
            </h1>

            <p>
              AKTOR / IMPROWIZATOR / MENADŻER
            </p>
          </div>

          <div className="choices">
            <button
              className="choice choice--acting"
              onClick={() =>
                move(
                  "acting"
                )
              }
            >
              <div className="choice-image">
                <PhotoImage
                  src={
                    PHOTO.acting
                  }
                  alt="Hubert Sycz – aktorstwo"
                  position="50% 12%"
                />
              </div>

              <div className="choice-bottom">
                <div>
                  <span>
                    01 / ODKRYJ
                  </span>

                  <h2>
                    AKTORSTWO
                  </h2>
                </div>

                <span className="choice-arrow">
                  ←
                </span>
              </div>
            </button>

            <button
              className="choice choice--improv"
              onClick={() =>
                move(
                  "improv"
                )
              }
            >
              <div className="choice-image">
                <PhotoImage
                  src={
                    PHOTO.improv
                  }
                  alt="Hubert Sycz – improwizacja"
                  position="50% 24%"
                />
              </div>

              <div className="choice-bottom">
                <div>
                  <span>
                    02 / ODKRYJ
                  </span>

                  <h2>
                    IMPROWIZACJA
                  </h2>
                </div>

                <span className="choice-arrow">
                  →
                </span>
              </div>
            </button>
          </div>

          <div className="home-footer">
            <span>
              WYBIERZ SWÓJ ŚWIAT
            </span>

            <span>
              © HUBERT SYCZ 2026
            </span>
          </div>
        </section>

        {/* =================================
            IMPROWIZACJA
        ================================= */}

        <section
          className="world world--improv"
          id="panel-improv"
        >
          <nav className="navigation">
            <button
              className="back-button"
              onClick={() =>
                move(
                  "home"
                )
              }
            >
              ← WRÓĆ DO WYBORU
            </button>

            <span>
              HUBERT SYCZ / IMPRO
            </span>
          </nav>

          <header className="hero hero--improv">
            <div className="hero-content">
              <span className="eyebrow">
                IMPROWIZATOR / AKTOR / MENADŻER
              </span>

              <h1>
                NIC NIE
                <br />
                JEST
                <br />
                NAPISANE
              </h1>

              <p className="hero-lead">
                Tworzę historie na scenie.
                Poza nią organizuję miejsca,
                w których mogą się wydarzyć.
              </p>

              <div className="hero-actions">
                <a
                  href="#improv-about"
                  className="main-button"
                >
                  POZNAJ MNIE ↓
                </a>

                <ExternalLink
                  href={
                    LINKS.special
                  }
                  className="outline-button"
                >
                  ZOBACZ MNIE NA SCENIE ↗
                </ExternalLink>
              </div>
            </div>

            <div className="hero-visual">
              <PhotoImage
                src={
                  PHOTO.improv
                }
                alt="Hubert Sycz podczas spektaklu improwizowanego"
                position="50% 24%"
              />
            </div>
          </header>

          {/* 1. NA SCENIE I ZA KULISAMI */}

          <section
            className="content-section"
            id="improv-about"
          >
            <SectionHeader
              title="NA SCENIE I ZA KULISAMI"
              description="Gram, tworzę i organizuję — na scenie jako improwizator, poza nią jako menadżer TOTO IMPRO."
            />

            <div className="role-grid">
              <article className="role-card">
                <span className="eyebrow">
                  NA SCENIE
                </span>

                <h3>
                  IMPROWIZATOR
                </h3>

                <p>
                  Występuję w spektaklach improwizowanych,
                  tworzę postacie i historie razem
                  z innymi aktorami oraz publicznością.
                </p>

                <p>
                  Najbardziej interesuje mnie spontaniczność,
                  kontakt z drugim człowiekiem
                  i możliwość tworzenia historii,
                  która wydarza się tylko raz.
                </p>
              </article>

              <article className="role-card">
                <span className="eyebrow">
                  ZA KULISAMI
                </span>

                <h3>
                  MENADŻER
                </h3>

                <p>
                  Jestem menadżerem TOTO IMPRO.
                  Organizuję ogólnopolskie trasy spektakli,
                  rozwijam współpracę z partnerami
                  i tworzę kolejne projekty zespołu.
                </p>

                <p>
                  Łączę pracę artystyczną z organizacją —
                  od pierwszego kontaktu z miejscem,
                  przez trasę, aż po wieczór spektaklu.
                </p>
              </article>
            </div>
          </section>

          {/* 2. SPECIAL */}

          <section className="content-section section-alt">
            <SectionHeader
              title="TOTO IMPRO SPECIAL"
              description="Zobacz mnie na scenie w pełnym spektaklu."
            />

            <div className="special-layout">
              <div className="special-player">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/J_HRMuctBGQ"
                  title="TOTO IMPRO SPECIAL"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="special-copy">
                <h3>
                  JEDEN WIECZÓR
                  <br />
                  HISTORIA TWORZONA NA ŻYWO
                </h3>

                <p>
                  Każde przedstawienie powstaje na żywo
                  dzięki pomysłom, sugestiom i energii
                  publiczności.
                </p>

                <ExternalLink
                  href={
                    LINKS.special
                  }
                  className="main-button"
                >
                  OBEJRZYJ NA YOUTUBE ↗
                </ExternalLink>
              </div>
            </div>
          </section>

          {/* 3. SPEKTAKLE */}

          <section className="content-section improv-achievements">
            <SectionHeader
              compact
              title="PONAD 200 SPEKTAKLI W TRZY LATA"
              description="Jako menadżer TOTO IMPRO zorganizowałem ogólnopolskie trasy, dzięki którym weszliśmy we współpracę z kilkudziesięcioma instytucjami kultury, teatrami, klubami i lokalami w całej Polsce. Łącznie zagraliśmy ponad 200 spektakli w ciągu trzech lat."
            />

            <div className="stats-grid stats-grid--compact">
              <div className="stat-card">
                <strong>
                  200+
                </strong>

                <span>
                  SPEKTAKLI
                </span>
              </div>

              <div className="stat-card">
                <strong>
                  3
                </strong>

                <span>
                  LATA INTENSYWNYCH TRAS
                </span>
              </div>

              <div className="stat-card">
                <strong className="stat-word">
                  KILKADZIESIĄT
                </strong>

                <span>
                  INSTYTUCJI, TEATRÓW, KLUBÓW I LOKALI
                </span>
              </div>
            </div>

            <div className="achievement-copy">
              <p>
                Budowaliśmy trasy od miasta do miasta,
                współpracując zarówno z dużymi
                instytucjami kultury i teatrami,
                jak i mniejszymi klubami, scenami
                oraz lokalami. Dzięki temu TOTO IMPRO
                regularnie gra dla publiczności
                w różnych częściach Polski.
              </p>

              <ExternalLink
                href={
                  LINKS.totoWWW
                }
                className="main-button"
              >
                POZNAJ TOTO IMPRO ↗
              </ExternalLink>
            </div>
          </section>

          {/* 4. GALERIA */}

          <section className="content-section section-alt improv-gallery-section">
            <SectionHeader
              title="TU I TERAZ"
              description="Kadry z moich spektakli. Każda historia wydarzyła się tylko raz."
            />

            <Gallery
              photos={
                improvGallery
              }
              variant="improv"
            />
          </section>

          {/* 5. WSPÓŁPRACA */}

          <section className="content-section improv-collaboration">
            <SectionHeader
              compact
              title="ZRÓBMY COŚ RAZEM"
              description="Możemy dopasować formę improwizacji do miejsca, wydarzenia i publiczności."
            />

            <div className="offer-grid">
              <article className="offer-card">
                <span>
                  SPEKTAKL
                </span>

                <h3>
                  WASZA SCENA
                  <br />
                  NASZA HISTORIA
                </h3>

                <p>
                  Możemy zagrać pełny spektakl improwizowany
                  w instytucji kultury, teatrze, klubie,
                  domu kultury albo innym miejscu
                  z publicznością.
                </p>
              </article>

              <article className="offer-card">
                <span>
                  EVENT DLA FIRMY
                </span>

                <h3>
                  WIECZÓR, KTÓREGO NIE DA SIĘ POWTÓRZYĆ
                </h3>

                <p>
                  Przygotujemy improwizowany występ
                  na event firmowy, integrację
                  albo wydarzenie specjalne —
                  z formatem dopasowanym do Waszej grupy.
                </p>
              </article>

              <article className="offer-card">
                <span>
                  WARSZTATY
                </span>

                <h3>
                  IMPROWIZACJI MOŻE SPRÓBOWAĆ KAŻDY
                </h3>

                <p>
                  Prowadzę warsztaty dla osób
                  w każdym wieku, niezależnie od płci
                  i poziomu doświadczenia.
                  Możemy pracować z grupami początkującymi,
                  młodzieżą, dorosłymi albo zespołami firmowymi.
                </p>
              </article>
            </div>

            <div className="booking-cta">
              <div>
                <h3>
                  MASZ POMYSŁ NA WSPÓŁPRACĘ?
                </h3>

                <p>
                  Napisz — ustalimy miejsce, format
                  i najlepszą formę wydarzenia
                  dla Waszej publiczności albo zespołu.
                </p>
              </div>

              <a
                href={
                  LINKS.totoEmail
                }
                className="main-button"
              >
                NAPISZ DO NAS ↗
              </a>
            </div>
          </section>

          {/* 6. SOCIAL MEDIA */}

          <section className="content-section section-alt social-section">
            <SectionHeader
              title="ZNAJDŹ NAS W SIECI"
              description="Aktualne spektakle, fragmenty improwizacji i kulisy naszych tras."
            />

            <SocialLinks />

            <div className="improv-contact">
              <h3>
                KONTAKT / BOOKING / WSPÓŁPRACA
              </h3>

              <a
                href={
                  LINKS.totoEmail
                }
              >
                TOTOIMPROV@GMAIL.COM ↗
              </a>

              <p>
                W sprawie spektakli, ogólnopolskich tras,
                eventów i warsztatów.
              </p>
            </div>
          </section>

          <Footer
            variant="improv"
            onBack={() =>
              move(
                "home"
              )
            }
          />
        </section>
      </motion.main>
    </div>
  );
}
