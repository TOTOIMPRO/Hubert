
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type World = "acting" | "home" | "improv";

type Credit = {
  year: string;
  title: string;
  category: string;
  role?: string;
  director?: string;
};

const offsets: Record<World, string> = {
  acting: "0vw",
  home: "-100vw",
  improv: "-200vw",
};

/* =========================================
   LINKI
========================================= */

const LINKS = {
  wizytowka: "https://youtu.be/iZn3et4MSko",
  showreel: "https://youtu.be/-v35sackaag",

  instagram: "https://www.instagram.com/syczalke/",
  email: "mailto:hubertsycz@gmail.com",

  agencja: "https://abewu.pl/aktor/hubert-sycz",

  filmmakers:
    "https://www.filmmakers.eu/pl/actors/hubert-sycz",

  filmpolski:
    "https://filmpolski.pl/fp/index.php?osoba=11134038",

  special:
    "https://www.youtube.com/watch?v=J_HRMuctBGQ",

  totoWWW: "https://www.totoimpro.com/pl",

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
   ZDJĘCIA HUBERTA
========================================= */

const PHOTO = {
  acting: "/images/aktorstwo.jpg",

  acting2: "/images/aktorstwo.jpg",

  improv: "/images/improwizacja.jpg",

  actingFallback:
    "https://i.ytimg.com/vi/iZn3et4MSko/hqdefault.jpg",

  actingFallback2:
    "https://i.ytimg.com/vi/-v35sackaag/hqdefault.jpg",

  improvFallback:
    "https://i.ytimg.com/vi/J_HRMuctBGQ/hqdefault.jpg",
};

/* =========================================
   FILMOGRAFIA

   Nowsze produkcje wymagające potwierdzenia
   reżyserii mają pole director pominięte.
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
    director: "Reżyseria zbiorowa",
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
    director: "Reżyseria zbiorowa",
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
    director: "Łukasz Palkowski, Marek Wróbel",
  },
  {
    year: "2021",
    title: "CIEŃ",
    category: "Serial",
    role: 'Znajomy „Szczura”',
    director: "Mariusz Wojaczek",
  },
  {
    year: "2021",
    title: "KOLCZYK",
    category: "Etiuda szkolna",
    director: "Yilin Yuan",
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
    director: "Reżyseria zbiorowa",
  },
  {
    year: "2020",
    title: "PÓŁ ŻARTEM, PÓŁ IMPRO",
    category: "Serial",
    role: "Hubert",
    director: "Michał Michalski",
  },
  {
    year: "2019",
    title: "KOMISARZ ALEX",
    category: "Serial",
    role: "Kelner",
    director: "Reżyseria zbiorowa",
  },
  {
    year: "2018",
    title: "BYŁO MIŁO",
    category: "Film krótkometrażowy",
    director: "Marcin Em",
  },
  {
    year: "2018",
    title: "DRUGA SZANSA",
    category: "Serial, sezon 5",
    role: "Basista",
    director: "Tomasz Szafrański",
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
    director: "Paweł Siedlik",
  },
  {
    year: "2017",
    title: "DRUGA SZANSA",
    category: "Serial, sezon 4",
    role: "Gitarzysta",
    director: "Michał Gazda, Jan P. Matuszyński",
  },
  {
    year: "2017",
    title: "DRUGA SZANSA",
    category: "Serial, sezon 3",
    role: "Gitarzysta",
    director: "Tomasz Szafrański",
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
   GALERIA IMPROWIZACYJNA
========================================= */

const totoGallery = [
  {
    src: "/images/improwizacja.jpg",
    fallback: PHOTO.improvFallback,
    alt: "Hubert Sycz podczas spektaklu improwizowanego",
    title: "HUBERT / IMPRO",
  },
  {
    src:
      "https://www.totoimpro.com/gallery/toto-impro-spektakl-02.jpg",
    fallback: PHOTO.improv,
    alt: "TOTO IMPRO podczas spektaklu",
    title: "TOTO IMPRO / SPEKTAKL",
  },
  {
    src:
      "https://i.ytimg.com/vi/J_HRMuctBGQ/hqdefault.jpg",
    fallback: PHOTO.improv,
    alt: "Kadr z TOTO IMPRO Special",
    title: "TOTO IMPRO / SPECIAL",
  },
];

/* =========================================
   KOMPONENTY POMOCNICZE
========================================= */

function SmartImage({
  src,
  fallback,
  alt,
  className = "",
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (current !== fallback) {
          setCurrent(fallback);
        }
      }}
    />
  );
}

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
      <span className="eyebrow">{number}</span>

      <h2>{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}

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

      <div className="credit-director">
        <span>REŻYSERIA</span>

        <strong>
          {credit.director ?? "Do uzupełnienia"}
        </strong>
      </div>

    </article>
  );
}

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
          referrerPolicy="strict-origin-when-cross-origin"
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

function Footer({
  onBack,
  variant,
}: {
  onBack: () => void;
  variant: "acting" | "improv";
}) {
  return (
    <footer className="portfolio-footer">

      <div>
        <strong>HUBERT SYCZ.</strong>

        <p>
          Aktorstwo / Improwizacja
          <br />
          © 2026
        </p>
      </div>

      <button onClick={onBack}>
        {variant === "acting"
          ? "WRÓĆ DO WYBORU →"
          : "← WRÓĆ DO WYBORU"}
      </button>

    </footer>
  );
}

/* =========================================
   STRONA GŁÓWNA
========================================= */

export default function HomePage() {

  const [world, setWorld] =
    useState<World>("home");

  const reduceMotion = useReducedMotion();

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
                fallback={PHOTO.actingFallback}
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

          {/* WIZYTÓWKA / SHOWREEL */}

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
                  fallback={PHOTO.actingFallback}
                  alt="Hubert Sycz – portret aktorski"
                />

                <figcaption>
                  HUBERT SYCZ / PORTFOLIO
                </figcaption>

              </figure>

              <figure className="gallery-photo gallery-photo--detail">

                <SmartImage
                  src={PHOTO.acting2}
                  fallback={PHOTO.actingFallback2}
                  alt="Hubert Sycz – drugi kadr portretu"
                />

                <figcaption>
                  HUBERT SYCZ / PORTRET
                </figcaption>

              </figure>

            </div>

            <p className="gallery-note">
              Więcej zdjęć castingowych
              i aktualnych materiałów
              znajduje się na stronie mojej agencji.
            </p>

            <ExternalLink
              href={LINKS.agencja}
              className="outline-button"
            >
              ZDJĘCIA W ABEWU ↗
            </ExternalLink>

          </section>

          {/* KONTAKT */}

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
              aria-label="Przejdź do portfolio aktorskiego"
            >

              <div className="choice__image">

                <SmartImage
                  src={PHOTO.acting}
                  fallback={PHOTO.actingFallback}
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
              aria-label="Przejdź do portfolio improwizacyjnego"
            >

              <div className="choice__image">

                <SmartImage
                  src={PHOTO.improv}
                  fallback={PHOTO.improvFallback}
                  alt="Hubert Sycz podczas improwizacji"
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
                AKTOR / IMPROWIZATOR / MENADŻER
              </span>

              <h1>
                NIC NIE
                <br />
                JEST
                <br />
                NAPISANE<span className="hero-dot">.</span>
              </h1>

              <p className="hero-lead">
                Tu i teraz.
                Bez scenariusza.
                Z publicznością, muzyką
                i nieograniczoną wyobraźnią.
              </p>

              <div className="hero-actions">

                <a
                  href="#improv-about"
                  className="main-button"
                >
                  POZNAJ TOTO IMPRO ↓
                </a>

                <ExternalLink
                  href={LINKS.special}
                  className="outline-button"
                >
                  ZOBACZ SPECIAL ↗
                </ExternalLink>

              </div>

            </div>

            <div className="hero__visual">

              <SmartImage
                src={PHOTO.improv}
                fallback={PHOTO.improvFallback}
                alt="Hubert Sycz na scenie TOTO IMPRO"
              />

              <span className="photo-caption">
                HUBERT SYCZ / IMPRO LIVE
              </span>

            </div>

          </header>

          {/* O MNIE */}

          <section
            className="content-section"
            id="improv-about"
          >

            <SectionHeader
              number="01 / IMPROWIZACJA"
              title="TWORZĘ HISTORIE NA ŻYWO."
            />

            <div className="intro-grid">

              <p className="large-text">
                Jestem improwizatorem
                i menadżerem TOTO IMPRO —
                zespołu, z którym tworzymy
                muzyczno-komediowe spektakle
                improwizowane.
              </p>

              <div className="intro-copy">

                <p>
                  Na scenie interesuje mnie
                  kontakt z drugim człowiekiem,
                  spontaniczność i odwaga
                  podążania za nieoczekiwanym.
                </p>

                <p>
                  Jako menadżer odpowiadam
                  za rozwój TOTO IMPRO,
                  organizację ogólnopolskich
                  tras i współpracę
                  z teatrami, domami kultury,
                  festiwalami oraz partnerami
                  biznesowymi.
                </p>

                <p>
                  Łączę działalność artystyczną
                  z produkcją i organizacją
                  wydarzeń, dbając o to,
                  by improwizacja docierała
                  do publiczności w całej Polsce.
                </p>

              </div>

            </div>

          </section>

          {/* TOTO IMPRO */}

          <section className="content-section section-alt">

            <SectionHeader
              number="02 / TOTO IMPRO"
              title="200 SPEKTAKLI. TYSIĄCE HISTORII."
              description="Autorskie muzyczno-komediowe show, które powstaje na żywo z udziałem publiczności."
            />

            <div className="stats-grid">

              <div className="stat-card">
                <strong>200+</strong>
                <span>SPEKTAKLI</span>
              </div>

              <div className="stat-card">
                <strong>60</strong>
                <span>SCEN</span>
              </div>

              <div className="stat-card">
                <strong>45</strong>
                <span>MIAST</span>
              </div>

              <div className="stat-card">
                <strong>43</strong>
                <span>INSTYTUCJE KULTURY</span>
              </div>

            </div>

            <div className="statement">

              <h3>
                NIE JEDEN TEATR.
                <br />
                CAŁA POLSKA.
              </h3>

              <p>
                Organizuję i współtworzę
                ogólnopolskie trasy TOTO IMPRO.
                Regularnie występujemy
                w teatrach, ośrodkach kultury,
                na festiwalach i wydarzeniach
                specjalnych.
              </p>

              <p>
                Za nami ponad 200 spektakli.
                Każdy z nich był inny —
                bo każda publiczność
                stworzyła z nami nową historię.
              </p>

              <ExternalLink
                href={LINKS.totoWWW}
                className="main-button"
              >
                ODWIEDŹ TOTO IMPRO ↗
              </ExternalLink>

            </div>

          </section>

          {/* SPECIAL */}

          <section className="content-section">

            <SectionHeader
              number="03 / TOTO IMPRO SPECIAL"
              title="ZOBACZ NAS W AKCJI."
              description="Materiał specjalny TOTO IMPRO."
            />

            <div className="special-layout">

              <div className="special-player">

                <iframe
                  src="https://www.youtube-nocookie.com/embed/J_HRMuctBGQ"
                  title="TOTO IMPRO SPECIAL"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />

              </div>

              <div className="special-copy">

                <span className="eyebrow">
                  KOMEDIA / MUZYKA / IMPRO
                </span>

                <h3>
                  JEDEN WIECZÓR.
                  <br />
                  NIESKOŃCZENIE WIELE
                  MOŻLIWOŚCI.
                </h3>

                <p>
                  Każde przedstawienie
                  TOTO IMPRO powstaje na żywo,
                  bez gotowego scenariusza,
                  dzięki sugestiom publiczności.
                </p>

                <ExternalLink
                  href={LINKS.special}
                  className="main-button"
                >
                  OBEJRZYJ SPECIAL ↗
                </ExternalLink>

              </div>

            </div>

          </section>

          {/* GALERIA SPEKTAKLOWA */}

          <section className="content-section section-alt">

            <SectionHeader
              number="04 / GALERIA SPEKTAKLOWA"
              title="ŻYWE EMOCJE. PRAWDZIWA SCENA."
              description="Kadry z występów i materiałów TOTO IMPRO."
            />

            <div className="photo-gallery improv-gallery">

              {totoGallery.map((photo, index) => (

                <figure
                  className="gallery-photo"
                  key={index}
                >

                  <SmartImage
                    src={photo.src}
                    fallback={photo.fallback}
                    alt={photo.alt}
                  />

                  <figcaption>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {photo.title}

                  </figcaption>

                </figure>

              ))}

            </div>

            <div className="section-bottom-links">

              <ExternalLink
                href={LINKS.totoWWW}
                className="main-button"
              >
                WIĘCEJ ZDJĘĆ TOTO IMPRO ↗
              </ExternalLink>

            </div>

          </section>

          {/* WSPÓŁPRACA */}

          <section className="content-section">

            <SectionHeader
              number="05 / WSPÓŁPRACA"
              title="SPOTKAJMY SIĘ NA SCENIE."
              description="Improwizacja dla publiczności, teatrów, instytucji kultury i firm."
            />

            <div className="offer-grid">

              <article className="offer-card">

                <span>01</span>

                <h3>SPEKTAKLE</h3>

                <p>
                  Muzyczno-komediowe
                  przedstawienia improwizowane
                  tworzone na żywo.
                </p>

              </article>

              <article className="offer-card">

                <span>02</span>

                <h3>TRASY</h3>

                <p>
                  Ogólnopolskie trasy teatralne
                  i współpraca z instytucjami
                  kultury.
                </p>

              </article>

              <article className="offer-card">

                <span>03</span>

                <h3>EVENTY</h3>

                <p>
                  Wydarzenia firmowe,
                  festiwale i spektakle
                  przygotowywane pod konkretną
                  publiczność.
                </p>

              </article>

            </div>

          </section>

          {/* SOCIAL MEDIA */}

          <section className="content-section section-alt contact-section">

            <SectionHeader
              number="06 / TOTO IMPRO ONLINE"
              title="BĄDŹ Z NAMI NA BIEŻĄCO."
              description="Spektakle, fragmenty występów i kulisy ogólnopolskiej trasy."
            />

            <div className="social-grid">

              <ExternalLink
                href={LINKS.totoInstagram}
                className="social-card"
              >

                <span>01 / FOLLOW</span>

                <h3>INSTAGRAM</h3>

                <strong>@TOTOIMPRO ↗</strong>

              </ExternalLink>

              <ExternalLink
                href={LINKS.totoFacebook}
                className="social-card"
              >

                <span>02 / FOLLOW</span>

                <h3>FACEBOOK</h3>

                <strong>TOTO IMPRO ↗</strong>

              </ExternalLink>

              <ExternalLink
                href={LINKS.totoTikTok}
                className="social-card"
              >

                <span>03 / FOLLOW</span>

                <h3>TIKTOK</h3>

                <strong>@TOTO.IMPRO ↗</strong>

              </ExternalLink>

              <ExternalLink
                href={LINKS.totoWWW}
                className="social-card"
              >

                <span>04 / ZOBACZ</span>

                <h3>WWW</h3>

                <strong>TOTOIMPRO.COM ↗</strong>

              </ExternalLink>

            </div>

            <div className="improv-contact">

              <span className="eyebrow">
                BOOKING / TRASY / WSPÓŁPRACA
              </span>

              <a href={LINKS.totoEmail}>
                TOTOIMPROV@GMAIL.COM ↗
              </a>

              <p>
                Osobisty kontakt:{" "}

                <a href={LINKS.email}>
                  hubertsycz@gmail.com
                </a>
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
