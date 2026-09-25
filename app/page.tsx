
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/* =========================================
   TYPY I NAWIGACJA
========================================= */

type World = "acting" | "home" | "improv";

type Credit = {
  year: string;
  title: string;
  category: string;
  role?: string;
  director?: string;
};

type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
  size?: "wide" | "tall" | "normal";
};

const offsets: Record<World, string> = {
  acting: "0vw",
  home: "-100vw",
  improv: "-200vw",
};

/* =========================================
   WSZYSTKIE LINKI
========================================= */

const LINKS = {
  wizytowka:
    "https://youtu.be/iZn3et4MSko",

  showreel:
    "https://youtu.be/-v35sackaag",

  instagram:
    "https://www.instagram.com/syczalke/",

  email:
    "mailto:hubertsycz@gmail.com",

  agencja:
    "https://abewu.pl/aktor/hubert-sycz",

  filmmakers:
    "https://www.filmmakers.eu/pl/actors/hubert-sycz",

  filmpolski:
    "https://filmpolski.pl/fp/index.php?osoba=11134038",

  special:
    "https://www.youtube.com/watch?v=J_HRMuctBGQ",

  totoWWW:
    "https://www.totoimpro.com/pl",

  totoInstagram:
    "https://www.instagram.com/totoimpro/",

  totoFacebook:
    "https://www.facebook.com/profile.php?id=61552507030058",

  totoTikTok:
    "https://www.tiktok.com/@toto.impro",

  totoEmail:
    "mailto:totoimprov@gmail.com",
};

/* =========================================
   ZDJĘCIA GŁÓWNE

   DOKŁADNIE ORYGINALNE NAZWY PLIKÓW
========================================= */

const PHOTO = {
  acting:
    "/images/aktorstwo.jpg",

  improv:
    "/images/improwizacja(1).jpg",
};

/* =========================================
   FILMOGRAFIA HUBERTA
========================================= */

const filmography: Credit[] = [
  {
    year: "2026",
    title: "MNIEJ OBCY",
    category: "Film fabularny",
    role: "Młody biznesmen",
  },
  {
    year: "2025",
    title: "BRESLAU",
    category: "Serial",
    role: "Kelner",
  },
  {
    year: "2025",
    title: "HOW TO END A LOVE STORY?",
    category: "Film krótkometrażowy",
    role: "Tancerz / Śpioch",
  },
  {
    year: "2025",
    title: "KOMISARZ ALEX",
    category: "Serial",
    role: "Kuba",
  },
  {
    year: "2025",
    title: "OPERACJAIMPROWIZACJA",
    category: "Film krótkometrażowy",
  },
  {
    year: "2025",
    title: "PATI",
    category: "Serial",
    role: "Policjant",
  },
  {
    year: "2025",
    title: "REKONSTRUKCJA",
    category: "Film krótkometrażowy",
  },
  {
    year: "2024",
    title: "OJCIEC MATEUSZ",
    category: "Serial",
    role: "Andrzej Kostrzewa",
  },
  {
    year: "2024",
    title: "TOŃ",
    category: "Etiuda szkolna",
  },
  {
    year: "2024",
    title: "WIDZIMY SIĘ JUTRO",
    category: "Etiuda szkolna",
  },
  {
    year: "2023",
    title: "STEFANEK",
    category: "Etiuda szkolna",
    role: "Lekarz",
    director: "Maciej Herzog",
  },
  {
    year: "2022",
    title: "DELICJE",
    category: "Etiuda szkolna",
    role: "Oskar",
    director: "Bartosz Izdebski",
  },
  {
    year: "2021",
    title: "CHYŁKA. INWIGILACJA",
    category: "Serial",
    role: "Prawnik",
  },
  {
    year: "2021",
    title: "CIEŃ",
    category: "Serial",
    role: 'Znajomy „Szczura”',
  },
  {
    year: "2021",
    title: "KOLCZYK",
    category: "Etiuda szkolna",
  },
  {
    year: "2021",
    title: "CUDAK",
    category: "Film fabularny",
    role: "Henio",
    director: "Anna Kazejak",
  },
  {
    year: "2020",
    title: "BARWY SZCZĘŚCIA",
    category: "Serial",
    role: "Emil Kwiatkowski",
  },
  {
    year: "2020",
    title: "PÓŁ ŻARTEM, PÓŁ IMPRO",
    category: "Serial",
    role: "Hubert",
  },
  {
    year: "2019",
    title: "KOMISARZ ALEX",
    category: "Serial",
    role: "Kelner",
  },
  {
    year: "2018",
    title: "BYŁO MIŁO",
    category: "Film krótkometrażowy",
  },
  {
    year: "2018",
    title: "DRUGA SZANSA",
    category: "Serial, sezon 5",
    role: "Basista",
  },
  {
    year: "2018",
    title: "NINA",
    category: "Film fabularny",
    role: "Chłopak na placu",
    director: "Olga Chajdas",
  },
  {
    year: "2018",
    title: "TORY",
    category: "Film krótkometrażowy",
  },
  {
    year: "2017",
    title: "DRUGA SZANSA",
    category: "Serial, sezon 4",
    role: "Gitarzysta",
  },
  {
    year: "2017",
    title: "DRUGA SZANSA",
    category: "Serial, sezon 3",
    role: "Gitarzysta",
  },
  {
    year: "2014",
    title: "JEZIORAK",
    category: "Film fabularny",
    director: "Michał Otłowski",
  },
];

/* =========================================
   TEATR
========================================= */

const theatre: Credit[] = [
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

/* =========================================
   GALERIA IMPROWIZACJI

   GŁÓWNE ZDJĘCIE:
   improwizacja(1).jpg

   POZOSTAŁE 9 ZDJĘĆ:
   GALERIA SPEKTAKLOWA

   NAZWY IDENTYCZNE JAK PRZESŁANE PLIKI
========================================= */

const improvGallery: GalleryPhoto[] = [
  {
    src:
      "/images/wefilm-3.10.25-michalew-95(1).jpg",

    alt:
      "Hubert Sycz występuje z zespołem podczas spektaklu TOTO IMPRO",

    title:
      "TOTO IMPRO / NA SCENIE",

    size: "tall",
  },

  {
    src:
      "/images/IMG_9754(1).jpg",

    alt:
      "Hubert Sycz podczas improwizacji w niebieskim świetle scenicznym",

    title:
      "HUBERT SYCZ / LIVE",

    size: "normal",
  },

  {
    src:
      "/images/IMG_0283(1).jpg",

    alt:
      "Hubert Sycz podczas spektaklu improwizowanego",

    title:
      "IMPROWIZACJA / TU I TERAZ",

    size: "normal",
  },

  {
    src:
      "/images/TOTO-18(1).jpg",

    alt:
      "Hubert Sycz podczas spektaklu TOTO IMPRO",

    title:
      "TOTO IMPRO / SPEKTAKL",

    size: "normal",
  },

  {
    src:
      "/images/TOTO-50(1).jpg",

    alt:
      "Hubert Sycz występuje na scenie TOTO IMPRO",

    title:
      "TOTO IMPRO / TRASA",

    size: "normal",
  },

  {
    src:
      "/images/TOTO-69(1).jpg",

    alt:
      "Hubert Sycz podczas sceny improwizowanej z innym aktorem",

    title:
      "SCENA / PARTNERSTWO",

    size: "wide",
  },

  {
    src:
      "/images/TOTO-85(1).jpg",

    alt:
      "Hubert Sycz podczas improwizacji na scenie",

    title:
      "HUBERT SYCZ / PERFORMANCE",

    size: "tall",
  },

  {
    src:
      "/images/651790701_1355531853268890_9203031069442217826_n(1).jpg",

    alt:
      "Hubert Sycz podczas spektaklu w czerwonym świetle scenicznym",

    title:
      "ŚWIATŁO / EMOCJE / IMPRO",

    size: "wide",
  },

  {
    src:
      "/images/669587663_1500092202115847_7734198665696874300_n(1).jpg",

    alt:
      "Hubert Sycz podczas występu TOTO IMPRO",

    title:
      "TOTO IMPRO / LIVE",

    size: "normal",
  },
];

/* =========================================
   KOMPONENT ZDJĘCIA
========================================= */

function SmartImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}

/* =========================================
   LINK ZEWNĘTRZNY
========================================= */

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
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

/* =========================================
   NAGŁÓWKI SEKCJI
========================================= */

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">

      <span className="eyebrow">
        {number}
      </span>

      <h2>{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}

    </div>
  );
}

/* =========================================
   KAFELKI FILMOGRAFII
========================================= */

function CreditCard({
  credit,
  index,
}: {
  credit: Credit;
  index: number;
}) {
  return (
    <article className="credit-card">

      <div className="credit-top">

        <span>{credit.year}</span>

        <span>
          {String(index + 1).padStart(2, "0")}
        </span>

      </div>

      <div className="credit-main">

        <span className="credit-category">
          {credit.category}
        </span>

        <h3>{credit.title}</h3>

        {credit.role && (
          <p className="credit-role">
            ROLA: {credit.role}
          </p>
        )}

      </div>

      {credit.director && (
        <div className="credit-director">

          <span>
            REŻYSERIA
          </span>

          <strong>
            {credit.director}
          </strong>

        </div>
      )}

    </article>
  );
}

/* =========================================
   KAFELKI WIDEO
========================================= */

function VideoCard({
  id,
  label,
  title,
  description,
  href,
}: {
  id: string;
  label: string;
  title: string;
  description: string;
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

        <span className="eyebrow">
          {label}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

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

/* =========================================
   IKONY SOCIAL MEDIA
========================================= */

type SocialName =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "website";

function SocialIcon({
  name,
}: {
  name: SocialName;
}) {
  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
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
          stroke="none"
        />
      </svg>
    );
  }

  if (name === "facebook") {
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

  if (name === "tiktok") {
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

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >

      <circle cx="12" cy="12" r="9" />

      <path d="M3 12h18" />

      <path d="M12 3c3 3 4.5 6 4.5 9S15 18 12 21" />

      <path d="M12 3c-3 3-4.5 6-4.5 9S9 18 12 21" />

    </svg>
  );
}

function SocialLink({
  href,
  name,
  label,
}: {
  href: string;
  name: SocialName;
  label: string;
}) {
  return (
    <ExternalLink
      href={href}
      className="social-icon-link"
    >

      <span className="social-icon-graphic">
        <SocialIcon name={name} />
      </span>

      <span className="social-icon-label">
        {label}
      </span>

    </ExternalLink>
  );
}

/* =========================================
   STOPKA
========================================= */

function Footer({
  onBack,
  variant,
}: {
  onBack: () => void;
  variant: "acting" | "improv";
}) {
  return (
    <footer className="portfolio-footer">

      {variant === "improv" && (
        <button onClick={onBack}>
          ← WRÓĆ DO WYBORU
        </button>
      )}

      <div>

        <strong>
          HUBERT SYCZ.
        </strong>

        <p>
          Aktorstwo / Improwizacja
          <br />
          © 2026
        </p>

      </div>

      {variant === "acting" && (
        <button onClick={onBack}>
          WRÓĆ DO WYBORU →
        </button>
      )}

    </footer>
  );
}

/* =========================================
   GŁÓWNY KOMPONENT STRONY
========================================= */

export default function HomePage() {
  const [world, setWorld] =
    useState<World>("home");

  const reduceMotion =
    useReducedMotion();

  function move(destination: World) {
    setWorld(destination);
  }

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setWorld("home");
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
    const panel = document.getElementById(
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
        animate={{
          x: offsets[world],
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                duration: 0.85,
                ease: [0.76, 0, 0.24, 1],
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

            <span className="nav-brand">
              HUBERT SYCZ / ACTOR
            </span>

            <button
              className="back-button"
              onClick={() => move("home")}
            >
              WRÓĆ DO WYBORU →
            </button>

          </nav>

          {/* HERO AKTORSTWO */}

          <header className="hero hero--acting">

            <div className="hero__content">

              <span className="eyebrow">
                AKTOR / WOKALISTA / IMPROWIZATOR
              </span>

              <h1>
                HUBERT
                <br />
                SYCZ<span className="hero-dot">.</span>
              </h1>

              <p className="hero-lead">
                Aktorstwo to dla mnie opowiadanie
                historii, spotkanie z drugim
                człowiekiem i nieustanne
                poszukiwanie.
              </p>

              <div className="hero-actions">

                <a
                  href="#acting-films"
                  className="main-button"
                >
                  MOJE PRODUKCJE ↓
                </a>

                <ExternalLink
                  href={LINKS.showreel}
                  className="outline-button"
                >
                  SHOWREEL ↗
                </ExternalLink>

              </div>

            </div>

            <div className="hero__visual">

              <SmartImage
                src={PHOTO.acting}
                alt="Hubert Sycz – zdjęcie aktorskie"
              />

              <span className="photo-caption">
                HUBERT SYCZ / ACTOR
              </span>

            </div>

          </header>

          {/* O MNIE */}

          <section className="content-section">

            <SectionHeader
              number="01 / O MNIE"
              title="CZEŚĆ. JESTEM HUBERT."
            />

            <div className="intro-grid">

              <p className="large-text">
                Jestem aktorem, absolwentem
                Wydziału Aktorskiego Szkoły
                Filmowej w Łodzi.
              </p>

              <div className="intro-copy">

                <p>
                  Pracuję przed kamerą i na scenie.
                  Łączę aktorstwo z muzyką,
                  improwizacją oraz pracą
                  nad autorskimi projektami.
                </p>

                <p>
                  W 2022 roku otrzymałem wraz
                  z zespołem aktorskim
                  spektaklu „Mary Page Marlowe”
                  Grand Prix 40. Festiwalu
                  Szkół Teatralnych w Łodzi.
                </p>

                <ExternalLink
                  href={LINKS.filmmakers}
                  className="text-link"
                >
                  PEŁNE CV NA FILMMAKERS ↗
                </ExternalLink>

              </div>

            </div>

          </section>

          {/* WIZYTÓWKA I SHOWREEL */}

          <section className="content-section section-alt">

            <SectionHeader
              number="02 / ZOBACZ MNIE W AKCJI"
              title="PRZED KAMERĄ."
              description="Wizytówka aktorska i wybrane fragmenty mojej pracy."
            />

            <div className="video-grid">

              <VideoCard
                id="iZn3et4MSko"
                label="01 / WIZYTÓWKA"
                title="POZNAJMY SIĘ."
                description="Moja wizytówka aktorska."
                href={LINKS.wizytowka}
              />

              <VideoCard
                id="-v35sackaag"
                label="02 / SHOWREEL"
                title="WYBRANE SCENY."
                description="Showreel aktorski."
                href={LINKS.showreel}
              />

            </div>

          </section>

          {/* FILMOGRAFIA */}

          <section
            className="content-section"
            id="acting-films"
          >

            <SectionHeader
              number="03 / FILMOGRAFIA"
              title="PRZED KAMERĄ. NA EKRANIE."
              description="Wybrane produkcje filmowe i serialowe."
            />

            <div className="credits-grid">

              {filmography.map((credit, index) => (
                <CreditCard
                  key={`${credit.title}-${credit.year}-${index}`}
                  credit={credit}
                  index={index}
                />
              ))}

            </div>

            <div className="section-bottom-links">

              <ExternalLink
                href={LINKS.filmpolski}
                className="main-button"
              >
                PEŁNA FILMOGRAFIA ↗
              </ExternalLink>

              <ExternalLink
                href={LINKS.filmmakers}
                className="outline-button"
              >
                FILMMAKERS ↗
              </ExternalLink>

            </div>

          </section>

          {/* TEATR */}

          <section className="content-section section-alt">

            <SectionHeader
              number="04 / TEATR"
              title="SCENA JEST MOIM DOMEM."
              description="Wybrane realizacje teatralne."
            />

            <div className="credits-grid">

              {theatre.map((credit, index) => (
                <CreditCard
                  key={`${credit.title}-${index}`}
                  credit={credit}
                  index={index}
                />
              ))}

            </div>

          </section>

          {/* GALERIA AKTORSKA */}

          <section className="content-section">

            <SectionHeader
              number="05 / GALERIA"
              title="ZDJĘCIA AKTORSKIE."
              description="Portrety i materiały aktorskie."
            />

            <div className="photo-gallery acting-gallery">

              <figure className="gallery-photo">

                <SmartImage
                  src={PHOTO.acting}
                  alt="Hubert Sycz – portret aktorski"
                />

                <figcaption>
                  HUBERT SYCZ / PORTFOLIO
                </figcaption>

              </figure>

              <figure className="gallery-photo gallery-photo--detail">

                <SmartImage
                  src={PHOTO.acting}
                  alt="Hubert Sycz – portret"
                />

                <figcaption>
                  HUBERT SYCZ / PORTRET
                </figcaption>

              </figure>

            </div>

            <p className="gallery-note">
              Więcej zdjęć castingowych
              znajduje się na stronie mojej agencji.
            </p>

            <ExternalLink
              href={LINKS.agencja}
              className="outline-button"
            >
              ZDJĘCIA W ABEWU ↗
            </ExternalLink>

          </section>

          {/* KONTAKT AKTORSKI */}

          <section className="content-section section-alt contact-section">

            <SectionHeader
              number="06 / KONTAKT"
              title="ZAGRAJMY COŚ RAZEM."
              description="Kontakt w sprawie produkcji filmowych, serialowych i teatralnych."
            />

            <a
              href={LINKS.email}
              className="big-email"
            >
              HUBERTSYCZ@GMAIL.COM ↗
            </a>

            <div className="contact-grid">

              <ExternalLink
                href={LINKS.agencja}
                className="contact-card"
              >

                <span>REPREZENTACJA</span>

                <h3>AGENCJA ABEWU</h3>

                <p>
                  Kontakt w sprawie castingów
                  i współpracy aktorskiej.
                </p>

                <strong>
                  PRZEJDŹ DO AGENCJI ↗
                </strong>

              </ExternalLink>

              <ExternalLink
                href={LINKS.filmmakers}
                className="contact-card"
              >

                <span>PROFIL ZAWODOWY</span>

                <h3>FILMMAKERS</h3>

                <p>
                  CV, doświadczenie aktorskie
                  oraz dodatkowe materiały.
                </p>

                <strong>
                  ZOBACZ PROFIL ↗
                </strong>

              </ExternalLink>

              <ExternalLink
                href={LINKS.instagram}
                className="contact-card"
              >

                <span>SOCIAL MEDIA</span>

                <h3>INSTAGRAM</h3>

                <p>
                  Kulisy pracy i moje
                  aktualne projekty.
                </p>

                <strong>
                  @SYCZALKE ↗
                </strong>

              </ExternalLink>

            </div>

          </section>

          <Footer
            variant="acting"
            onBack={() => move("home")}
          />

        </section>


        {/* =================================
            EKRAN STARTOWY
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

            {/* AKTORSTWO */}

            <button
              className="choice choice--acting"
              onClick={() => move("acting")}
              aria-label="Przejdź do aktorstwa"
            >

              <div className="choice__image">

                <SmartImage
                  src={PHOTO.acting}
                  alt="Hubert Sycz – aktorstwo"
                />

              </div>

              <div className="choice__bottom">

                <div>
                  <span>01 / ODKRYJ</span>
                  <h2>AKTORSTWO</h2>
                </div>

                <span className="choice__arrow">
                  ←
                </span>

              </div>

            </button>

            {/* IMPROWIZACJA */}

            <button
              className="choice choice--improv"
              onClick={() => move("improv")}
              aria-label="Przejdź do improwizacji"
            >

              <div className="choice__image">

                <SmartImage
                  src={PHOTO.improv}
                  alt="Hubert Sycz podczas spektaklu improwizowanego"
                />

              </div>

              <div className="choice__bottom">

                <div>
                  <span>02 / ODKRYJ</span>
                  <h2>IMPROWIZACJA</h2>
                </div>

                <span className="choice__arrow">
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
              onClick={() => move("home")}
            >
              ← WRÓĆ DO WYBORU
            </button>

            <span className="nav-brand">
              HUBERT SYCZ / IMPRO
            </span>

          </nav>

          {/* HERO IMPRO */}

          <header className="hero hero--improv">

            <div className="hero__content">

              <span className="eyebrow">
                IMPROWIZATOR / AKTOR / MENADŻER
              </span>

              <h1>
                NIC NIE
                <br />
                JEST
                <br />
                NAPISANE<span className="hero-dot">.</span>
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
                  href={LINKS.special}
                  className="outline-button"
                >
                  ZOBACZ MNIE NA SCENIE ↗
                </ExternalLink>

              </div>

            </div>

            <div className="hero__visual">

              <SmartImage
                src={PHOTO.improv}
                alt="Hubert Sycz podczas improwizacji"
              />

              <span className="photo-caption">
                HUBERT SYCZ / LIVE
              </span>

            </div>

          </header>

          {/* KIM JESTEM */}

          <section
            className="content-section"
            id="improv-about"
          >

            <SectionHeader
              number="01 / KIM JESTEM"
              title="NA SCENIE I ZA KULISAMI."
              description="Dwie role. Jedna pasja do tworzenia wydarzeń, których nie da się powtórzyć."
            />

            <div className="role-grid">

              <article className="role-card">

                <span className="eyebrow">
                  01 / NA SCENIE
                </span>

                <h3>
                  IMPROWIZATOR.
                </h3>

                <p>
                  Występuję w spektaklach
                  improwizowanych, tworzę
                  postacie i historie razem
                  z innymi aktorami
                  oraz publicznością.
                </p>

                <p>
                  Interesuje mnie spontaniczność,
                  kontakt z drugim człowiekiem
                  i nieograniczone możliwości
                  opowiadania historii.
                </p>

              </article>

              <article className="role-card">

                <span className="eyebrow">
                  02 / ZA KULISAMI
                </span>

                <h3>
                  MENADŻER.
                </h3>

                <p>
                  Jestem menadżerem TOTO IMPRO.
                  Organizuję ogólnopolskie
                  trasy spektakli i rozwijam
                  działalność zespołu.
                </p>

                <p>
                  Współpracuję z teatrami,
                  ośrodkami kultury,
                  festiwalami i partnerami
                  przy tworzeniu wydarzeń
                  dla publiczności w całej Polsce.
                </p>

              </article>

            </div>

          </section>

          {/* TOTO IMPRO */}

          <section className="content-section section-alt">

            <SectionHeader
              number="02 / TOTO IMPRO"
              title="200+ SPEKTAKLI. KAŻDY INNY."
              description="Muzyka, komedia i historie, które powstają na żywo. Bez scenariusza i bez możliwości powtórki."
            />

            <div className="stats-grid">

              <div className="stat-card">

                <strong>200+</strong>

                <span>
                  ZAGRANYCH SPEKTAKLI
                </span>

              </div>

              <div className="stat-card">

                <strong>LIVE</strong>

                <span>
                  HISTORIE TWORZONE NA ŻYWO
                </span>

              </div>

              <div className="stat-card">

                <strong>PL</strong>

                <span>
                  OGÓLNOPOLSKIE TRASY
                </span>

              </div>

            </div>

            <div className="statement">

              <span className="eyebrow">
                Z WARSZAWY NA SCENY W CAŁEJ POLSCE
              </span>

              <h3>
                NIE JEDEN TEATR.
                <br />
                CAŁA POLSKA.
              </h3>

              <p>
                Z TOTO IMPRO podróżuję
                po Polsce, występując
                w teatrach, domach kultury
                i na festiwalach.
              </p>

              <p>
                Jako menadżer współtworzę
                trasy zespołu, prowadzę
                współpracę z organizatorami
                i rozwijam kolejne projekty.
              </p>

              <ExternalLink
                href={LINKS.totoWWW}
                className="main-button"
              >
                POZNAJ TOTO IMPRO ↗
              </ExternalLink>

            </div>

          </section>

          {/* SPECIAL */}

          <section className="content-section">

            <SectionHeader
              number="03 / ZOBACZ MNIE NA SCENIE"
              title="TEGO NIE DA SIĘ OPISAĆ."
              description="Zobacz, jak wygląda improwizacja, kiedy historia powstaje na oczach publiczności."
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

                <span className="eyebrow">
                  TOTO IMPRO / SPECIAL
                </span>

                <h3>
                  JEDEN WIECZÓR.
                  <br />
                  NIESKOŃCZENIE WIELE
                  MOŻLIWOŚCI.
                </h3>

                <p>
                  Każde przedstawienie
                  powstaje na żywo dzięki
                  pomysłom i sugestiom
                  publiczności.
                </p>

                <ExternalLink
                  href={LINKS.special}
                  className="main-button"
                >
                  OBEJRZYJ NA YOUTUBE ↗
                </ExternalLink>

              </div>

            </div>

          </section>

          {/* GALERIA IMPROWIZACJI */}

          <section className="content-section section-alt">

            <SectionHeader
              number="04 / GALERIA SPEKTAKLOWA"
              title="TU I TERAZ."
              description="Dziewięć kadrów z moich spektakli. Różne sceny, różne historie i emocje, które wydarzyły się tylko raz."
            />

            <div className="improv-gallery">

              {improvGallery.map((photo, index) => (

                <figure
                  className={`improv-gallery-item improv-gallery-item--${photo.size || "normal"}`}
                  key={photo.src}
                >

                  <SmartImage
                    src={photo.src}
                    alt={photo.alt}
                  />

                  <figcaption>

                    <span className="gallery-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {photo.title}
                    </span>

                  </figcaption>

                </figure>

              ))}

            </div>

          </section>

          {/* WSPÓŁPRACA */}

          <section className="content-section">

            <SectionHeader
              number="05 / WSPÓŁPRACA"
              title="ZRÓBMY COŚ RAZEM."
              description="Szukasz spektaklu dla swojej publiczności albo partnera do projektu artystycznego? Porozmawiajmy."
            />

            <div className="offer-grid">

              <article className="offer-card">

                <span>
                  01 / SPEKTAKLE
                </span>

                <h3>
                  SPOTKAJMY SIĘ NA SCENIE.
                </h3>

                <p>
                  Spektakle improwizowane
                  dla teatrów, domów kultury
                  i festiwali.
                </p>

              </article>

              <article className="offer-card">

                <span>
                  02 / PRODUKCJA
                </span>

                <h3>
                  STWÓRZMY WYDARZENIE.
                </h3>

                <p>
                  Współpraca przy organizacji
                  wydarzeń, tras i projektów
                  artystycznych.
                </p>

              </article>

              <article className="offer-card">

                <span>
                  03 / EVENTY
                </span>

                <h3>
                  COŚ SPECJALNEGO DLA WAS.
                </h3>

                <p>
                  Improwizacja i komedia
                  na wydarzenia firmowe
                  oraz okazje specjalne.
                </p>

              </article>

            </div>

            {/* BOOKING TOTO IMPRO */}

            <div className="booking-cta">

              <div>

                <span className="eyebrow">
                  MASZ POMYSŁ NA WSPÓŁPRACĘ?
                </span>

                <h3>
                  NAPISZ DO TOTO IMPRO.
                </h3>

                <p>
                  Chętnie porozmawiamy
                  o spektaklach, trasach
                  i nowych projektach.
                </p>

              </div>

              <a
                href={LINKS.totoEmail}
                className="main-button"
              >
                NAPISZ DO NAS ↗
              </a>

            </div>

          </section>

          {/* SOCIAL MEDIA */}

          <section className="content-section section-alt social-section">

            <SectionHeader
              number="06 / ZOSTAŃMY W KONTAKCIE"
              title="ZNAJDŹ NAS W SIECI."
              description="Aktualne spektakle, fragmenty improwizacji i kulisy naszych tras."
            />

            <div className="social-icons">

              <SocialLink
                href={LINKS.totoInstagram}
                name="instagram"
                label="Instagram"
              />

              <SocialLink
                href={LINKS.totoFacebook}
                name="facebook"
                label="Facebook"
              />

              <SocialLink
                href={LINKS.totoTikTok}
                name="tiktok"
                label="TikTok"
              />

              <SocialLink
                href={LINKS.totoWWW}
                name="website"
                label="WWW"
              />

            </div>

            {/* GŁÓWNY KONTAKT IMPRO */}

            <div className="improv-contact">

              <span className="eyebrow">
                KONTAKT / BOOKING / WSPÓŁPRACA
              </span>

              <a href={LINKS.totoEmail}>
                TOTOIMPROV@GMAIL.COM ↗
              </a>

              <p>
                W sprawie spektakli,
                ogólnopolskich tras
                i organizacji wydarzeń.
              </p>

            </div>

          </section>

          <Footer
            variant="improv"
            onBack={() => move("home")}
          />

        </section>

      </motion.main>

    </div>
  );
}
