
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type World = "acting" | "home" | "improv";

const offsets: Record<World, string> = {
  acting: "0vw",
  home: "-100vw",
  improv: "-200vw",
};

export default function HomePage() {
  const [world, setWorld] = useState<World>("home");
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

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
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

        {/* ========================= */}
        {/* AKTORSTWO                 */}
        {/* ========================= */}

        <section
          className="world world--acting"
          id="panel-acting"
        >

          <nav className="navigation">
            <button
              className="back-button"
              onClick={() => move("home")}
            >
              ← WRÓĆ DO WYBORU
            </button>

            <span>HUBERT / AKTORSTWO</span>
          </nav>

          <header className="hero hero--acting">

            <div className="hero__content">
              <span className="eyebrow">
                PORTFOLIO AKTORSKIE
              </span>

              <h1>
                AKTOR
                <br />
                STWO.
              </h1>

              <p>
                Opowiadanie historii.
                <br />
                Poszukiwanie emocji.
                <br />
                Spotkanie z drugim człowiekiem.
              </p>

              <a
                href="#acting-about"
                className="main-button"
              >
                POZNAJ MNIE ↓
              </a>
            </div>

            <div className="hero__visual acting-photo">
              <span>
                MIEJSCE NA TWOJE
                <br />
                ZDJĘCIE AKTORSKIE
              </span>
            </div>

          </header>

          <section
            className="content-section"
            id="acting-about"
          >

            <span className="eyebrow">
              01 / O MNIE
            </span>

            <h2>
              CZEŚĆ,
              <br />
              JESTEM HUBERT.
            </h2>

            <p className="large-text">
              Jestem aktorem i improwizatorem.
              Na tej stronie znajdziesz moje
              projekty artystyczne, doświadczenie
              sceniczne oraz materiały związane
              z aktorstwem.
            </p>

            <p>
              Tutaj wspólnie dopiszemy Twoje
              doświadczenie zawodowe, wykształcenie
              artystyczne oraz najważniejsze
              informacje, które powinien poznać
              reżyser, producent lub osoba
              odpowiedzialna za casting.
            </p>

          </section>

          <section className="content-section section-alt">

            <span className="eyebrow">
              02 / MOJE REALIZACJE
            </span>

            <h2>
              TEATR.
              <br />
              FILM.
              <br />
              KAMERA.
            </h2>

            <div className="cards">

              <article className="info-card">
                <span>01</span>
                <h3>TEATR</h3>
                <p>
                  Tutaj dodamy Twoje role teatralne,
                  spektakle i zdjęcia ze sceny.
                </p>
              </article>

              <article className="info-card">
                <span>02</span>
                <h3>FILM</h3>
                <p>
                  Miejsce na produkcje filmowe,
                  serialowe i krótkometrażowe.
                </p>
              </article>

              <article className="info-card">
                <span>03</span>
                <h3>SHOWREEL</h3>
                <p>
                  Tutaj osadzimy Twoje nagrania
                  i najciekawsze sceny aktorskie.
                </p>
              </article>

            </div>

          </section>

          <section className="content-section">

            <span className="eyebrow">
              03 / MATERIAŁY
            </span>

            <h2>
              ZDJĘCIA
              <br />
              I CV.
            </h2>

            <p className="large-text">
              Portfolio fotograficzne, informacje
              castingowe i doświadczenie zawodowe.
            </p>

            <div className="placeholder">
              TUTAJ DODAMY GALERIĘ ZDJĘĆ AKTORSKICH
            </div>

          </section>

          <footer className="footer">

            <span>HUBERT © 2026</span>

            <button
              onClick={() => move("home")}
            >
              WRÓĆ NA START ↑
            </button>

          </footer>

        </section>


        {/* ========================= */}
        {/* EKRAN STARTOWY            */}
        {/* ========================= */}

        <section
          className="world world--home"
          id="panel-home"
        >

          <div className="home-top">

            <span>
              PORTFOLIO ARTYSTYCZNE
            </span>

            <span>
              TEATR / IMPRO / FILM
            </span>

          </div>

          <div className="home-heading">

            <span>
              CZŁOWIEK DWÓCH ŚWIATÓW
            </span>

            <h1>HUBERT.</h1>

            <p>
              AKTOR / IMPROWIZATOR
            </p>

          </div>

          <div className="choices">

            <button
              className="choice choice--acting"
              onClick={() => move("acting")}
            >

              <div className="choice__image acting-photo">
                <span>
                  TWOJE ZDJĘCIE
                  <br />
                  AKTORSKIE
                </span>
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

            <button
              className="choice choice--improv"
              onClick={() => move("improv")}
            >

              <div className="choice__image improv-photo">
                <span>
                  TWOJE ZDJĘCIE
                  <br />
                  Z IMPROWIZACJI
                </span>
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
              WYBIERZ SWOJĄ HISTORIĘ
            </span>

            <span>
              © HUBERT 2026
            </span>
          </div>

        </section>


        {/* ========================= */}
        {/* IMPROWIZACJA              */}
        {/* ========================= */}

        <section
          className="world world--improv"
          id="panel-improv"
        >

          <nav className="navigation">

            <span>
              HUBERT / IMPROWIZACJA
            </span>

            <button
              className="back-button"
              onClick={() => move("home")}
            >
              WRÓĆ DO WYBORU →
            </button>

          </nav>

          <header className="hero hero--improv">

            <div className="hero__content">

              <span className="eyebrow">
                PORTFOLIO IMPROWIZACYJNE
              </span>

              <h1>
                IMPRO
                <br />
                WIZACJA.
              </h1>

              <p>
                Tu i teraz.
                <br />
                Bez scenariusza.
                <br />
                Z otwartą głową.
              </p>

              <a
                href="#improv-about"
                className="main-button"
              >
                ZOBACZ WIĘCEJ ↓
              </a>

            </div>

            <div className="hero__visual improv-photo">
              <span>
                MIEJSCE NA TWOJE
                <br />
                ZDJĘCIE Z IMPRO
              </span>
            </div>

          </header>

          <section
            className="content-section"
            id="improv-about"
          >

            <span className="eyebrow">
              01 / O MNIE
            </span>

            <h2>
              NIC NIE JEST
              <br />
              NAPISANE.
            </h2>

            <p className="large-text">
              Improwizacja to moja przestrzeń
              tworzenia historii razem z innymi
              ludźmi — na scenie, podczas prób
              i w spotkaniach z publicznością.
            </p>

            <p>
              W tej części opowiem o swoich
              doświadczeniach improwizacyjnych,
              projektach, spektaklach i warsztatach.
            </p>

          </section>

          <section className="content-section section-alt">

            <span className="eyebrow">
              02 / TOTO IMPRO
            </span>

            <h2>
              TOTO
              <br />
              IMPRO.
            </h2>

            <p className="large-text">
              Spektakle improwizowane,
              niepowtarzalne historie i spotkania
              z publicznością.
            </p>

            <p>
              Tutaj opiszemy Twoją działalność
              w TOTO IMPRO, najważniejsze
              realizacje i wspólne projekty.
            </p>

            <a
              href="https://totoimpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="main-button"
            >
              ODWIEDŹ TOTO IMPRO ↗
            </a>

          </section>

          <section className="content-section">

            <span className="eyebrow">
              03 / CO ROBIĘ
            </span>

            <h2>
              SPOTKAJMY
              <br />
              SIĘ NA SCENIE.
            </h2>

            <div className="cards">

              <article className="info-card">
                <span>01</span>
                <h3>SPEKTAKLE</h3>
                <p>
                  Występy improwizowane,
                  sceniczne historie
                  i projekty komediowe.
                </p>
              </article>

              <article className="info-card">
                <span>02</span>
                <h3>WARSZTATY</h3>
                <p>
                  Przestrzeń na warsztaty,
                  ćwiczenia i rozwój
                  umiejętności improwizacji.
                </p>
              </article>

              <article className="info-card">
                <span>03</span>
                <h3>WSPÓŁPRACA</h3>
                <p>
                  Festiwale, wydarzenia
                  i nowe przedsięwzięcia
                  artystyczne.
                </p>
              </article>

            </div>

          </section>

          <section className="content-section section-alt">

            <span className="eyebrow">
              04 / GALERIA
            </span>

            <h2>
              NA ŻYWO.
              <br />
              BEZ DUBLI.
            </h2>

            <p className="large-text">
              W tej galerii znajdą się
              zdjęcia z Twoich spektakli
              improwizowanych.
            </p>

            <div className="placeholder">
              TUTAJ DODAMY GALERIĘ Z IMPROWIZACJI
            </div>

          </section>

          <footer className="footer">

            <span>HUBERT © 2026</span>

            <button
              onClick={() => move("home")}
            >
              WRÓĆ NA START ↑
            </button>

          </footer>

        </section>

      </motion.main>

    </div>
  );
}
