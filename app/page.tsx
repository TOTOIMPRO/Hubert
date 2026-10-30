"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type World = "acting" | "home" | "improv";

type Credit = {
  title: string;
  category: string;
  role?: string;
};

type FilmYear = {
  year: string;
  credits: Credit[];
};

type TheatreCredit = {
  year: string;
  title: string;
  category: string;
  role?: string;
  director?: string;
  link?: string;
};

type Photo = {
  src: string;
  alt: string;
  position?: string;
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
  totoFacebook: "https://www.facebook.com/profile.php?id=61552507030058",
  totoTikTok: "https://www.tiktok.com/@toto.impro",
  totoEmail: "mailto:totoimprov@gmail.com",
  linkedin: "https://www.linkedin.com/in/hubert-sycz-960670404/",
};

/* =========================================================
   ZDJĘCIA GŁÓWNE
   UWAGA:
   W PLIKACH "HUBERT  fot..." SĄ DWIE SPACJE PO SŁOWIE HUBERT.
========================================================= */

const PHOTO = {
  acting: "/images/HUBERT  fot Zimakiewicz (20).jpg",
  improv: "/images/improwizacja.jpg",
};

/* =========================================================
   GALERIA AKTORSKA
========================================================= */

const actingGallery: Photo[] = [
  {
    src: "/images/HUBERT  fot Zimakiewicz (20).jpg",
    alt: "Hubert Sycz w białej koszuli",
    position: "50% 14%",
  },
  {
    src: "/images/IMG_0074-01-kopia.jpeg",
    alt: "Hubert Sycz w brązowej kurtce",
    position: "50% 18%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (24)-2.jpg",
    alt: "Hubert Sycz - portret aktorski",
    position: "50% 18%",
  },
  {
    src: "/images/_MG_8581-2-kopia.jpg",
    alt: "Hubert Sycz - portret",
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
    alt: "Hubert Sycz - portret w jasnym wnętrzu",
    position: "50% 18%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (4).jpg",
    alt: "Hubert Sycz - zdjęcie aktorskie",
    position: "50% 18%",
  },
];

/* =========================================================
   GALERIA IMPROWIZACYJNA
========================================================= */

const improvGallery: Photo[] = [
  {
    src: "/images/IMG_9754.jpg",
    alt: "Hubert Sycz podczas improwizacji",
    position: "50% 40%",
  },
  {
    src: "/images/TOTO-50.jpg",
    alt: "Hubert Sycz na scenie TOTO IMPRO",
    position: "50% 43%",
  },
  {
    src: "/images/IMG_0283.jpg",
    alt: "Hubert Sycz podczas spektaklu improwizowanego",
    position: "36% 40%",
  },
  {
    src: "/images/TOTO-69.jpg",
    alt: "Hubert Sycz podczas występu TOTO IMPRO",
    position: "52% 42%",
  },
  {
    src: "/images/Srodkowe - strona.jpg",
    alt: "Hubert Sycz z zespołem TOTO IMPRO po spektaklu",
    position: "50% 50%",
  },
  {
    src: "/images/669587663_1500092202115847_7734198665696874300_n.jpg",
    alt: "Hubert Sycz podczas spektaklu",
    position: "50% 40%",
  },
  {
    src: "/images/wefilm-3.10.25-michalew-95.jpg",
    alt: "Hubert Sycz podczas spektaklu TOTO IMPRO",
    position: "50% 34%",
  },
  {
    src: "/images/TOTO-18.jpg",
    alt: "Hubert Sycz na scenie",
    position: "35% 37%",
  },
  {
    src: "/images/651790701_1355531853268890_9203031069442217826_n.jpg",
    alt: "Hubert Sycz podczas spektaklu w czerwonym świetle",
    position: "29% 39%",
  },
];

/* =========================================================
   WYBRANE ROLE
========================================================= */

const selectedCredits = [
  {
    year: "2026",
    title: "MNIEJ OBCY",
    type: "FILM FABULARNY",
    role: "MŁODY BIZNESMEN",
  },
  {
    year: "2025",
    title: "BRESLAU",
    type: "SERIAL FABULARNY",
    role: "KELNER",
  },
  {
    year: "2025",
    title: "PATI",
    type: "SERIAL FABULARNY",
    role: "POLICJANT",
  },
  {
    year: "2024",
    title: "WIDZIMY SIĘ JUTRO",
    type: "ETIUDA SZKOLNA",
    role: "OBSADA AKTORSKA",
  },
];

/* =========================================================
   FILMOGRAFIA
========================================================= */

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
        category: "Serial fabularny",
        role: "Kelner",
      },
      {
        title: "HOW TO END A LOVE STORY?",
        category: "Film krótkometrażowy",
        role: "Tancerz / Śpioch",
      },
      {
        title: "KOMISARZ ALEX",
        category: "Serial fabularny",
        role: "Kuba",
      },
      {
        title: "OPERACJAIMPROWIZACJA",
        category: "Film krótkometrażowy",
      },
      {
        title: "PATI",
        category: "Serial fabularny",
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
        category: "Serial fabularny",
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
        category: "Serial fabularny",
        role: "Prawnik",
      },
      {
        title: "CIEŃ",
        category: "Serial fabularny",
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
        category: "Serial fabularny",
        role: "Emil Kwiatkowski",
      },
      {
        title: "PÓŁ ŻARTEM, PÓŁ IMPRO",
        category: "Serial fabularny",
        role: "Hubert",
      },
    ],
  },
  {
    year: "2019",
    credits: [
      {
        title: "KOMISARZ ALEX",
        category: "Serial fabularny",
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
        title: "DRUGA SZANSA. PIĄTY SEZON",
        category: "Serial fabularny",
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
        title: "DRUGA SZANSA. CZWARTY SEZON",
        category: "Serial fabularny",
        role: "Gitarzysta",
      },
      {
        title: "DRUGA SZANSA. TRZECI SEZON",
        category: "Serial fabularny",
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

/* =========================================================
   TEATR
========================================================= */

const theatre: TheatreCredit[] = [
  {
    year: "2023",
    title: "PRAWDY ZA GROSZ",
    category: "Spektakl teatralny",
    role: "Marcel Wit",
    director: "Jan Łuć, Jakub Jakubiec",
    link: "https://www.instytut-teatralny.pl/2025/02/10/spektakl-prawdy-za-grosz-otwarta-scena-it-fotorelacja/",
  },
  {
    year: "2022",
    title: "115 SEN BOBA DYLANA",
    category: "Teatr Studyjny w Łodzi",
    role: "Queequeg",
    director: "Wojciech Kościelniak",
    link: "https://teatrstudyjny.lodz.pl/spektakle/115-sen-boba-dylana/",
  },
  {
    year: "2022",
    title: "MARY PAGE MARLOWE",
    category: "Teatr Studyjny w Łodzi",
    role: "Dan",
    director: "Adam Orzechowski",
    link: "https://teatrstudyjny.lodz.pl/spektakle/mary-page-marlowe/",
  },
  {
    year: "2019",
    title: "TRZY SIOSTRY",
    category: "Teatr im. Stefana Jaracza w Łodzi",
    role: "Włodzimierz Rode",
    director: "Jacek Orłowski",
  },
];

/* =========================================================
   PODSTAWOWE KOMPONENTY
========================================================= */

function PhotoImage({
  src,
  alt,
  position = "50% 50%",
  fill = false,
}: {
  src: string;
  alt: string;
  position?: string;
  fill?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="image-error">
        <span>Nie znaleziono zdjęcia:</span>
        <small>{src.split("/").pop()}</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        objectPosition: position,
        ...(fill
          ? {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }
          : {}),
      }}
      onError={() => setFailed(true)}
    />
  );
}

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
        compact ? " section-heading--compact" : ""
      }`}
    >
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Gallery({
  photos,
  variant,
}: {
  photos: Photo[];
  variant: "acting" | "improv";
}) {
  return (
    <div className={`gallery-grid gallery-grid--${variant}`}>
      {photos.map((photo) => (
        <figure className="gallery-item" key={photo.src}>
          <PhotoImage
            src={photo.src}
            alt={photo.alt}
            position={photo.position}
          />
        </figure>
      ))}
    </div>
  );
}

/* =========================================================
   WIDEO AKTORSKIE
========================================================= */

function VideoCard({
  id,
  label,
  playOverlay = false,
}: {
  id: string;
  label: string;
  playOverlay?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const shouldAutoplay = playOverlay && playing;

  return (
    <article className="video-card">
      <h3 className="video-card-title">{label}</h3>
      <div className={`video-frame${playOverlay ? " video-frame--playable" : ""}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0${
            shouldAutoplay ? "&autoplay=1" : ""
          }`}
          title={label}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {playOverlay && !playing && (
          <button
            type="button"
            className="video-play-overlay"
            onClick={() => setPlaying(true)}
            aria-label="Odtwórz showreel"
          >
            <span>PLAY</span>
            <span className="video-play-icon" aria-hidden="true">
              ▶
            </span>
          </button>
        )}
      </div>
    </article>
  );
}

function AnimatedStat({
  end,
  suffix = "",
  label,
  breakLabel = true,
}: {
  end: number;
  suffix?: string;
  label: string;
  breakLabel?: boolean;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || started) return;

        started = true;
        const start = performance.now();
        const duration = 1050;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [end]);

  return (
    <strong ref={ref}>
      {value}
      {suffix}
      {breakLabel ? <br /> : " "}
      {label}
    </strong>
  );
}

/* =========================================================
   FILMOGRAFIA — ROZWIJANA PO ROKU
========================================================= */

function FilmYearTable({ group }: { group: FilmYear }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="film-year-card film-year-accordion">
      <button
        type="button"
        className="film-year-head film-year-summary"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        style={{
          width: "100%",
          border: 0,
          background: "transparent",
          color: "inherit",
          textAlign: "left",
          justifyContent: "space-between",
        }}
      >
        <strong className="film-year-number">{group.year}</strong>
        <span
          className="film-year-toggle"
          aria-hidden="true"
          style={{
            fontSize: "30px",
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
          transition:
            "grid-template-rows 620ms cubic-bezier(0.22, 1, 0.36, 1), opacity 420ms ease",
        }}
      >
        <div style={{ minHeight: 0, overflow: "hidden" }}>
          <div className="film-table-wrap film-table-wrap--accordion">
            <table className="film-table">
              <thead>
                <tr>
                  <th>PRODUKCJA</th>
                  <th>RODZAJ</th>
                  <th>ROLA</th>
                </tr>
              </thead>
              <tbody>
                {group.credits.map((credit, index) => (
                  <tr key={`${group.year}-${credit.title}-${index}`}>
                    <td className="film-title">{credit.title}</td>
                    <td>{credit.category}</td>
                    <td>{credit.role || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}

function TheatreCard({ credit }: { credit: TheatreCredit }) {
  const inside = (
    <>
      <div className="theatre-topline">
        <span className="theatre-year">{credit.year}</span>
        {credit.link && <span className="theatre-arrow">↗</span>}
      </div>

      <span className="credit-category">{credit.category}</span>
      <h3>{credit.title}</h3>

      {credit.role && (
        <p>
          <span>ROLA</span>
          {credit.role}
        </p>
      )}

      {credit.director && (
        <p>
          <span>REŻYSERIA</span>
          {credit.director}
        </p>
      )}
    </>
  );

  if (credit.link) {
    return (
      <ExternalLink
        href={credit.link}
        className="theatre-card theatre-card--clickable"
      >
        {inside}
      </ExternalLink>
    );
  }

  return <article className="theatre-card">{inside}</article>;
}

/* =========================================================
   SOCIAL MEDIA
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c6 5 6 13 0 18" />
      <path d="M12 3c-6 5-6 13 0 18" />
    </svg>
  );
}

function SocialLinks() {
  const socials = [
    {
      label: "Instagram",
      href: LINKS.totoInstagram,
      icon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      href: LINKS.totoFacebook,
      icon: <FacebookIcon />,
    },
    {
      label: "TikTok",
      href: LINKS.totoTikTok,
      icon: <TikTokIcon />,
    },
    {
      label: "WWW",
      href: LINKS.totoWWW,
      icon: <WebsiteIcon />,
    },
  ];

  return (
    <div className="social-icons">
      {socials.map((social) => (
        <ExternalLink
          key={social.label}
          href={social.href}
          className="social-link"
        >
          <span className="social-symbol">{social.icon}</span>
          <span>{social.label}</span>
        </ExternalLink>
      ))}
    </div>
  );
}

/* =========================================================
   IKONY DOŚWIADCZENIA
========================================================= */

function YearsIcon() {
  return (
    <svg
      className="experience-svg"
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
    >
      <path d="M19 25H101" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M31 14V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M89 14V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <rect x="19" y="25" width="82" height="51" rx="5" stroke="currentColor" strokeWidth="4" />
      <path
        d="M38 48H44M58 48H64M78 48H84M38 62H44M58 62H64M78 62H84"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShowsIcon() {
  return (
    <svg
      className="experience-svg"
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
    >
      <path d="M24 71V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 20H96" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M96 20V71" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 71H96" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M44 71V50C44 41 51 34 60 34C69 34 76 41 76 50V71"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M34 29L24 20L14 29"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86 29L96 20L106 29"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StagesIcon() {
  return (
    <svg
      className="experience-svg"
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
    >
      <path d="M15 70H105" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M25 70V28H95V70"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 28C33 39 41 44 50 46C42 50 34 57 25 70"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M95 28C87 39 79 44 70 46C78 50 86 57 95 70"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="48" r="5" fill="currentColor" />
    </svg>
  );
}

/* =========================================================
   STOPKA
========================================================= */

function Footer({
  onBack,
  variant,
}: {
  onBack: () => void;
  variant: "acting" | "improv";
}) {
  return (
    <footer className="portfolio-footer">
      {variant === "improv" && <button onClick={onBack}>← WRÓĆ DO WYBORU</button>}

      <div>
        <strong>HUBERT SYCZ</strong>
        <p>AKTOR / IMPROWIZATOR</p>
      </div>

      {variant === "acting" && <button onClick={onBack}>WRÓĆ DO WYBORU →</button>}
    </footer>
  );
}

/* =========================================================
   STRONA
========================================================= */

export default function HomePage() {
  const [world, setWorld] = useState<World>("home");

  const offsets: Record<World, string> = {
    acting: "0vw",
    home: "-100vw",
    improv: "-200vw",
  };

  function move(destination: World) {
    setWorld(destination);
  }

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setWorld("home");
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const panel = document.getElementById(`panel-${world}`);
    if (panel) {
      panel.scrollTop = 0;
    }
  }, [world]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          ".content-section",
          ".casting-strip",
          ".actor-improv-teaser",
          ".selected-credit",
          ".theatre-card",
          ".role-card",
          ".experience-card",
          ".gallery-item",
          ".offer-card",
          ".booking-cta",
          ".social-link",
        ].join(",")
      )
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="website">
      <style>{`
        /* =====================================================
           DODATKI 30.10.2026
           Filmografia rozwijana + nowe kafelki współpracy
        ===================================================== */

        .film-years--accordion {
          display: flex !important;
          flex-direction: column;
          gap: 12px;
        }

        .film-year-accordion {
          width: 100%;
          overflow: hidden;
        }

        .film-year-summary {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          user-select: none;
          min-height: 92px;
          padding: 24px 28px;
        }

        .film-year-summary::-webkit-details-marker {
          display: none;
        }

        .film-year-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          border: 1px solid currentColor;
          border-radius: 50%;
          font-size: 28px;
          line-height: 1;
          transition: transform 220ms ease, background 220ms ease, color 220ms ease;
        }

        .film-table-wrap--accordion {
          border-top: 1px solid rgba(255,255,255,0.18);
        }

        .offer-card--visual {
          padding: 0 !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .offer-card--visual > .offer-main-heading {
          margin: 0;
          padding: 28px 28px 24px !important;
          color: var(--canary);
          font-size: clamp(30px, 3vw, 50px) !important;
          line-height: 0.95;
          letter-spacing: -0.045em;
          text-transform: uppercase;
        }

        .offer-photo {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #111;
        }

        .offer-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .offer-card--visual .offer-title {
          min-height: 0 !important;
          padding: 28px 28px 0;
        }

        .offer-card--visual .offer-title h3 {
          margin: 0;
          font-size: clamp(24px, 2.25vw, 38px);
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .offer-card--visual > p {
          margin: 0;
          padding: 20px 28px 30px;
        }

        .manager-link {
          display: inline-block;
          margin-top: auto;
          padding-top: 18px;
          padding-bottom: 6px;
          color: var(--canary);
          border-bottom: 1px solid currentColor;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        /* PŁYNNIEJSZE PRZEJŚCIE MIĘDZY ŚWIATAMI */
        .track {
          transition: transform 1150ms cubic-bezier(0.76, 0, 0.24, 1) !important;
          will-change: transform;
          backface-visibility: hidden;
        }

        /* SUBTELNE WEJŚCIA PRZY SCROLLOWANIU */
        .reveal-on-scroll {
          opacity: 0;
          transform: translate3d(0, 22px, 0);
          transition:
            opacity 720ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 820ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* GALERIA — SUBTELNY HOVER */
        .gallery-item {
          overflow: hidden;
          position: relative;
        }

        .gallery-item img {
          transition:
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms ease;
          will-change: transform;
        }

        .gallery-item::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: rgba(0, 0, 0, 0);
          transition: background 500ms ease;
        }

        /* SHOWREEL — PLAY */
        .video-frame--playable {
          position: relative;
          overflow: hidden;
        }

        .video-play-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 100%;
          border: 0;
          background: rgba(0, 0, 0, 0.42);
          color: #fff;
          cursor: pointer;
          font: inherit;
          font-size: clamp(18px, 1.6vw, 25px);
          font-weight: 800;
          letter-spacing: 0.16em;
          transition: background 350ms ease;
        }

        .video-play-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border: 1px solid currentColor;
          border-radius: 50%;
          padding-left: 3px;
          font-size: 15px;
          transition:
            transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
            background 350ms ease,
            color 350ms ease;
        }

        /* ZRÓBMY COŚ RAZEM — RUCH */
        .offer-card--visual {
          transition:
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 350ms ease;
        }

        .offer-card--visual .offer-photo img {
          transition: transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .offer-card--visual .offer-title h3 {
          transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* STAŁY KONTAKT */
        .floating-contact {
          position: fixed;
          right: clamp(18px, 2.2vw, 34px);
          bottom: clamp(18px, 2.2vw, 34px);
          z-index: 100;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          min-height: 48px;
          padding: 0 20px;
          border: 1px solid currentColor;
          border-radius: 999px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
          transition:
            transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            background 260ms ease,
            color 260ms ease,
            opacity 260ms ease;
        }

        .floating-contact--acting {
          background: #111;
          color: #fff;
        }

        .floating-contact--improv {
          background: var(--canary);
          color: #080808;
          border-color: var(--canary);
        }

        @media (hover: hover) and (pointer: fine) {
          .gallery-item:hover img {
            transform: scale(1.035);
            filter: contrast(1.025) saturate(1.04);
          }

          .gallery-item:hover::after {
            background: rgba(0, 0, 0, 0.055);
          }

          .video-play-overlay:hover {
            background: rgba(0, 0, 0, 0.56);
          }

          .video-play-overlay:hover .video-play-icon {
            transform: scale(1.09);
            background: #fff;
            color: #111;
          }

          .offer-card--visual:hover {
            transform: translateY(-7px);
          }

          .offer-card--visual:hover .offer-photo img {
            transform: scale(1.045);
          }

          .offer-card--visual:hover .offer-title h3 {
            transform: translateY(-4px);
          }

          .floating-contact:hover {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 900px) {
          .film-year-summary {
            min-height: 76px;
            padding: 20px;
          }

          .offer-card--visual > .offer-main-heading {
            padding: 24px 22px 20px !important;
          }

          .offer-card--visual .offer-title {
            padding: 24px 22px 0;
          }

          .offer-card--visual > p {
            padding: 18px 22px 26px;
          }

          .floating-contact {
            right: 14px;
            bottom: 14px;
            min-height: 44px;
            padding: 0 16px;
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .track,
          .reveal-on-scroll,
          .gallery-item img,
          .offer-card--visual,
          .offer-card--visual .offer-photo img,
          .video-play-icon {
            transition-duration: 1ms !important;
          }

          .reveal-on-scroll {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {world !== "home" && (
        <a
          href={world === "acting" ? LINKS.email : LINKS.totoEmail}
          className={`floating-contact floating-contact--${world}`}
        >
          KONTAKT <span aria-hidden="true">↗</span>
        </a>
      )}

      <main
        className="track"
        style={{ transform: `translateX(${offsets[world]})` }}
      >
        {/* =====================================================
            AKTORSTWO
        ===================================================== */}
        <section className="world world--acting" id="panel-acting">
          <nav className="navigation">
            <span>HUBERT SYCZ / AKTOR</span>
            <button className="back-button" onClick={() => move("home")}>
              WRÓĆ DO WYBORU →
            </button>
          </nav>

          {/* HERO */}
          <header className="actor-hero">
            <div className="actor-hero-copy">
              <span className="eyebrow">AKTOR / WOKALISTA / IMPROWIZATOR</span>

              <h1>
                HUBERT
                <br />
                SYCZ
              </h1>

              <p className="actor-hero-description">
                Pracuję przed kamerą i na scenie. Łączę aktorstwo z muzyką,
                improwizacją oraz autorskimi projektami.
              </p>

              <div className="actor-representation">
                <span>AGENCJA REPREZENTUJĄCA</span>
                <ExternalLink href={LINKS.agencja}>ABEWU ↗</ExternalLink>
              </div>

              <div className="hero-actions">
                <a href="#actor-showreel" className="main-button">
                  SHOWREEL ↓
                </a>
                <ExternalLink href={LINKS.wizytowka} className="outline-button">
                  WIZYTÓWKA ↗
                </ExternalLink>
                <ExternalLink href={LINKS.filmpolski} className="outline-button">
                  FILMPOLSKI ↗
                </ExternalLink>
              </div>
            </div>

            <div className="actor-hero-photo">
              <PhotoImage
                src={PHOTO.acting}
                alt="Hubert Sycz"
                position="50% 12%"
              />
            </div>
          </header>

          {/* TRZY RÓWNE KAFELKI */}
          <section className="casting-strip">
            <div>
              <span>WYKSZTAŁCENIE</span>
              <strong className="casting-highlight">SZKOŁA FILMOWA W ŁODZI</strong>
            </div>

            <div>
              <span>AGENCJA REPREZENTUJĄCA</span>
              <ExternalLink href={LINKS.agencja}>ABEWU ↗</ExternalLink>
            </div>

            <div>
              <span>PROFIL / FILMOGRAFIA</span>
              <ExternalLink href={LINKS.filmpolski}>FILMPOLSKI ↗</ExternalLink>
            </div>
          </section>

          {/* SHOWREEL + WIZYTÓWKA */}
          <section
            className="content-section section-alt actor-showreel-section"
            id="actor-showreel"
          >
            <SectionHeader title="ZOBACZ MNIE W AKCJI" />

            <div className="video-grid">
              <VideoCard id="-v35sackaag" label="SHOWREEL" playOverlay />
              <VideoCard id="iZn3et4MSko" label="WIZYTÓWKA" />
            </div>
          </section>

          {/* WYBRANE ROLE */}
          <section className="content-section">
            <SectionHeader
              title="WYBRANE ROLE"
              description="Kilka ostatnich produkcji — pełna filmografia znajduje się niżej."
            />

            <div className="selected-credits">
              {selectedCredits.map((credit) => (
                <article
                  className="selected-credit"
                  key={`${credit.year}-${credit.title}`}
                >
                  <div className="selected-credit-year">{credit.year}</div>
                  <span>{credit.type}</span>
                  <h3>{credit.title}</h3>
                  <p>
                    <small>ROLA</small>
                    {credit.role}
                  </p>
                </article>
              ))}
            </div>

            <div className="section-bottom-links">
              <a href="#full-filmography" className="outline-button">
                PEŁNA FILMOGRAFIA ↓
              </a>
            </div>
          </section>

          {/* GALERIA */}
          <section className="content-section section-alt">
            <SectionHeader
              title="RÓŻNE OBLICZA JEDEN AKTOR"
              description="Aktualne zdjęcia portretowe i castingowe."
            />

            <Gallery photos={actingGallery} variant="acting" />

            <div className="section-bottom-links">
              <ExternalLink href={LINKS.filmmakers} className="main-button">
                PROFIL AKTORSKI ↗
              </ExternalLink>
              <ExternalLink href={LINKS.agencja} className="outline-button">
                AGENCJA REPREZENTUJĄCA ↗
              </ExternalLink>
            </div>
          </section>

          {/* O MNIE */}
          <section className="content-section actor-about-section">
            <SectionHeader title="O MNIE" />

            <div className="actor-about-grid">
              <div>
                <p className="large-text">
                  Jestem aktorem, absolwentem Wydziału Aktorskiego Szkoły Filmowej
                  w Łodzi oraz absolwentem szkoły muzycznej.
                </p>
              </div>

              <div className="intro-copy">
                <p>
                  Pracuję przed kamerą i na scenie. Łączę aktorstwo z muzyką,
                  improwizacją oraz autorskimi projektami.
                </p>
                <p>
                  Muzyczne wykształcenie jest ważną częścią mojego warsztatu —
                  rytm, słuch i praca z muzyką naturalnie przenikają do mojej
                  pracy aktorskiej.
                </p>
                <p>
                  W 2022 roku otrzymałem wraz z zespołem aktorskim spektaklu
                  „Mary Page Marlowe” Grand Prix 40. Festiwalu Szkół Teatralnych
                  w Łodzi.
                </p>
                <ExternalLink href={LINKS.filmmakers} className="text-link">
                  PROFIL AKTORSKI ↗
                </ExternalLink>
              </div>
            </div>
          </section>

          {/* FILMOGRAFIA */}
          <section
            className="content-section section-alt"
            id="full-filmography"
          >
            <SectionHeader title="FILMOGRAFIA" />

            <div className="film-years film-years--accordion">
              {filmography.map((group) => (
                <FilmYearTable key={group.year} group={group} />
              ))}
            </div>

            <div className="section-bottom-links">
              <ExternalLink href={LINKS.filmpolski} className="main-button">
                FILMPOLSKI ↗
              </ExternalLink>
              <ExternalLink href={LINKS.filmmakers} className="outline-button">
                FILMMAKERS ↗
              </ExternalLink>
            </div>
          </section>

          {/* TEATR */}
          <section className="content-section">
            <SectionHeader
              title="TEATR"
              description="Wybrane realizacje sceniczne. Kliknij w spektakl, aby zobaczyć więcej."
            />

            <div className="theatre-grid">
              {theatre.map((credit, index) => (
                <TheatreCard
                  key={`${credit.title}-${index}`}
                  credit={credit}
                />
              ))}
            </div>
          </section>

          {/* IMPROWIZACJA */}
          <section className="actor-improv-teaser">
            <div className="actor-improv-teaser-inner">
              <span>DRUGA STRONA MOJEJ PRACY</span>
              <h2>IMPROWIZACJA</h2>
              <p>
                Improwizacja to moja druga odsłona sceniczna. Z TOTO IMPRO —
                grupą, którą współtworzę i prowadzę również organizacyjnie — w
                ciągu ostatnich trzech lat zagraliśmy ponad 200 spektakli na
                scenach w całej Polsce.
              </p>
              <p>
                To przestrzeń, w której łączę aktorstwo, muzykę, pracę zespołową
                i tworzenie historii powstających naprawdę tu i teraz.
              </p>
            </div>

            <button
              className="actor-improv-button"
              onClick={() => move("improv")}
            >
              ZOBACZ WIĘCEJ →
            </button>
          </section>

          {/* KONTAKT */}
          <section className="content-section section-alt">
            <SectionHeader title="KONTAKT" />

            <a href={LINKS.email} className="big-email">
              HUBERTSYCZ@GMAIL.COM ↗
            </a>

            <div className="contact-grid">
              <ExternalLink href={LINKS.agencja} className="contact-card">
                <span>AGENCJA REPREZENTUJĄCA</span>
                <h3>ABEWU</h3>
                <strong>PRZEJDŹ DO AGENCJI ↗</strong>
              </ExternalLink>

              <ExternalLink href={LINKS.filmmakers} className="contact-card">
                <span>PROFIL AKTORSKI</span>
                <h3>FILMMAKERS</h3>
                <strong>ZOBACZ PROFIL ↗</strong>
              </ExternalLink>

              <ExternalLink href={LINKS.instagram} className="contact-card">
                <span>SOCIAL MEDIA</span>
                <h3>INSTAGRAM</h3>
                <strong>@SYCZALKE ↗</strong>
              </ExternalLink>
            </div>
          </section>

          <Footer variant="acting" onBack={() => move("home")} />
        </section>

        {/* =====================================================
            EKRAN WYBORU
        ===================================================== */}
        <section className="world world--home" id="panel-home">
          <div className="home-top">
            <span>HUBERT SYCZ / PORTFOLIO</span>
            <span>ACTING & IMPROVISATION</span>
          </div>

          <div className="home-heading">
            <span>DWIE STRONY JEDNEJ HISTORII</span>
            <h1>HUBERT SYCZ</h1>
            <p>AKTOR / IMPROWIZATOR / MENADŻER</p>
          </div>

          <div className="choices">
            <button className="choice choice--acting" onClick={() => move("acting")}>
              <div className="choice-image">
                <PhotoImage
                  src={PHOTO.acting}
                  alt="Hubert Sycz – aktorstwo"
                  position="50% 12%"
                />
              </div>
              <div className="choice-bottom">
                <div>
                  <span>01 / ODKRYJ</span>
                  <h2>AKTORSTWO</h2>
                </div>
                <span className="choice-arrow">←</span>
              </div>
            </button>

            <button className="choice choice--improv" onClick={() => move("improv")}>
              <div className="choice-image">
                <PhotoImage
                  src={PHOTO.improv}
                  alt="Hubert Sycz – improwizacja"
                  position="50% 24%"
                />
              </div>
              <div className="choice-bottom">
                <div>
                  <span>02 / ODKRYJ</span>
                  <h2>IMPROWIZACJA</h2>
                </div>
                <span className="choice-arrow">→</span>
              </div>
            </button>
          </div>

          <div className="home-footer">
            <span>WYBIERZ SWÓJ ŚWIAT</span>
            <span>© HUBERT SYCZ 2026</span>
          </div>
        </section>

        {/* =====================================================
            IMPROWIZACJA
        ===================================================== */}
        <section className="world world--improv" id="panel-improv">
          <nav className="navigation">
            <button className="back-button" onClick={() => move("home")}>
              ← WRÓĆ DO WYBORU
            </button>
            <span>HUBERT SYCZ / IMPRO</span>
          </nav>

          {/* HERO */}
          <header className="hero hero--improv">
            <div className="hero-content">
              <span className="eyebrow">IMPROWIZATOR / AKTOR / MENADŻER</span>

              <h1>
                NIC NIE
                <br />
                JEST
                <br />
                NAPISANE
              </h1>

              <p className="hero-lead">
                Tworzę historie na scenie. Poza nią organizuję miejsca, w których
                mogą się wydarzyć.
              </p>

              <div className="hero-actions">
                <a href="#improv-about" className="main-button">
                  POZNAJ MNIE ↓
                </a>
                <ExternalLink href={LINKS.special} className="outline-button">
                  ZOBACZ MNIE NA SCENIE ↗
                </ExternalLink>
              </div>
            </div>

            <div className="hero-visual">
              <PhotoImage
                src={PHOTO.improv}
                alt="Hubert Sycz podczas spektaklu improwizowanego"
                position="50% 24%"
              />
            </div>
          </header>

          {/* NA SCENIE I ZA KULISAMI */}
          <section
            className="content-section improv-section"
            id="improv-about"
          >
            <SectionHeader title="NA SCENIE I ZA KULISAMI" />

            <div className="role-grid">
              <article className="role-card">
                <span className="eyebrow">NA SCENIE</span>
                <h3>IMPROWIZATOR</h3>
                <p>
                  Gram w muzycznych spektaklach w pełni improwizowanych,
                  tworzonych na żywo razem z zespołem i publicznością.
                </p>
                <p>
                  Zajmuję się również wymyślaniem nowych formatów
                  improwizacyjnych i szukaniem form scenicznych, które zadowolą
                  każdego widza.
                </p>
                <p>
                  Zależy mi na tym, żeby nasze spektakle były czytelne,
                  angażujące i zrozumiałe dla widza niezależnie od tego, z jakiego
                  miejsca w Polsce przychodzi i czy kiedykolwiek wcześniej widział
                  improwizację.
                </p>
              </article>

              <article className="role-card">
                <span className="eyebrow">ZA KULISAMI</span>
                <h3>MENADŻER</h3>
                <p>
                  Przy TOTO IMPRO zajmuję się całym procesem organizacyjnym — od
                  pierwszego kontaktu z miejscem i partnerami, przez wymyślanie i
                  planowanie tras, aż po produkcję każdego wydarzenia.
                </p>
                <p>
                  Organizuję również profesjonalne nagrania spektakli, rozwijam
                  współprace z kolejnymi scenami i dbam o to, żeby projekt działał
                  zarówno artystycznie, jak i produkcyjnie.
                </p>

                <ExternalLink href={LINKS.linkedin} className="manager-link">
                  LINKEDIN ↗
                </ExternalLink>
              </article>
            </div>
          </section>

          {/* SPECIAL */}
          <section className="content-section improv-section improv-section--lined">
            <SectionHeader
              title="TOTO IMPRO SPECIAL"
              description="Pełny spektakl improwizowany — historia tworzona na żywo."
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
                  JEDNA HISTORIA
                </h3>
                <p>
                  Każde przedstawienie powstaje od zera i istnieje tylko podczas
                  jednego konkretnego wieczoru.
                </p>
                <ExternalLink href={LINKS.special} className="main-button">
                  OBEJRZYJ SPECIAL ↗
                </ExternalLink>
              </div>
            </div>
          </section>

          {/* DOŚWIADCZENIE */}
          <section className="content-section improv-section experience-section">
            <SectionHeader title="DOŚWIADCZENIE" />

            <div className="experience-grid">
              <article className="experience-card">
                <AnimatedStat end={3} label="LATA" breakLabel={false} />
                <div className="experience-icon">
                  <YearsIcon />
                </div>
              </article>

              <article className="experience-card">
                <AnimatedStat end={200} suffix="+" label="SPEKTAKLI" />
                <div className="experience-icon">
                  <ShowsIcon />
                </div>
              </article>

              <article className="experience-card">
                <AnimatedStat end={60} suffix="+" label="SCEN" />
                <div className="experience-icon">
                  <StagesIcon />
                </div>
              </article>
            </div>
          </section>

          {/* GALERIA */}
          <section className="content-section improv-section improv-section--lined improv-gallery-section">
            <SectionHeader
              title="TU I TERAZ"
              description="Kadry ze spektakli improwizowanych."
            />
            <Gallery photos={improvGallery} variant="improv" />
          </section>

          {/* WSPÓŁPRACA */}
          <section className="content-section improv-section improv-collaboration">
            <SectionHeader
              compact
              title="ZRÓBMY COŚ RAZEM"
              description="Spektakl, event albo warsztaty — formę możemy dopasować do miejsca, ludzi i charakteru wydarzenia."
            />

            <div className="offer-grid">
              <article
                className="offer-card offer-card--visual"
                style={{
                  display: "grid",
                  gridTemplateRows: "120px 285px 205px",
                  minHeight: "610px",
                  overflow: "hidden",
                }}
              >
                <h3 className="offer-main-heading">SPEKTAKL</h3>
                <div
                  className="offer-photo"
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <PhotoImage
                    src="/images/Spektakl - strona.jpg"
                    alt="TOTO IMPRO podczas spektaklu"
                    position="50% 50%"
                    fill
                  />
                </div>
                <div className="offer-title">
                  <h3>WASZA SCENA, NASZA HISTORIA</h3>
                </div>
              </article>

              <article
                className="offer-card offer-card--visual"
                style={{
                  display: "grid",
                  gridTemplateRows: "120px 285px 205px",
                  minHeight: "610px",
                  overflow: "hidden",
                }}
              >
                <h3 className="offer-main-heading">WARSZTATY</h3>
                <div
                  className="offer-photo"
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <PhotoImage
                    src="/images/Warsztaty-strona.jpg"
                    alt="Warsztaty improwizacji prowadzone przez Huberta Sycza"
                    position="50% 50%"
                    fill
                  />
                </div>
                <div className="offer-title">
                  <h3>IMPROWIZACJI MOŻE SPRÓBOWAĆ KAŻDY</h3>
                </div>
              </article>

              <article
                className="offer-card offer-card--visual"
                style={{
                  display: "grid",
                  gridTemplateRows: "120px 285px 205px",
                  minHeight: "610px",
                  overflow: "hidden",
                }}
              >
                <h3 className="offer-main-heading">EVENT DLA FIRMY</h3>
                <div
                  className="offer-photo"
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <PhotoImage
                    src="/images/Event - strona.jpg"
                    alt="Hubert Sycz podczas wydarzenia dla firmy"
                    position="50% 50%"
                    fill
                  />
                </div>
                <div className="offer-title">
                  <h3>WIECZÓR, KTÓRY ŁĄCZY LUDZI</h3>
                </div>
              </article>
            </div>

            <div className="booking-cta">
              <div>
                <h3>MASZ POMYSŁ NA WSPÓŁPRACĘ?</h3>
                <p>
                  Napisz — ustalimy miejsce, format i najlepszą formę wydarzenia.
                </p>
              </div>
              <a href={LINKS.totoEmail} className="main-button">
                NAPISZ DO NAS ↗
              </a>
            </div>
          </section>

          {/* SOCIAL MEDIA */}
          <section className="content-section improv-section improv-section--lined social-section">
            <SectionHeader title="ZNAJDŹ NAS W SIECI" />
            <SocialLinks />

            <div className="improv-contact">
              <h3>KONTAKT / BOOKING / WSPÓŁPRACA</h3>
              <a href={LINKS.totoEmail}>TOTOIMPROV@GMAIL.COM ↗</a>
            </div>
          </section>

          <Footer variant="improv" onBack={() => move("home")} />
        </section>
      </main>
    </div>
  );
}
