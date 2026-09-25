"use client";

type Photo = {
  src: string;
  alt: string;
  label: string;
  position: string;
};

const actingHome = {
  src: "/images/aktorstwo.jpg",
  alt: "Hubert Sycz - portfolio aktorskie",
  position: "50% 30%",
};

const improvHome = {
  src: "/images/improwizacja.jpg",
  alt: "Hubert Sycz - portfolio improwizacyjne",
  position: "52% 24%",
};

const actingGallery: Photo[] = [
  {
    src: "/images/HUBERT  fot Zimakiewicz (20).jpg",
    alt: "Hubert Sycz siedzący w białej koszuli",
    label: "01 / HUBERT SYCZ",
    position: "56% 24%",
  },
  {
    src: "/images/H.Sycz..jpg",
    alt: "Portret Huberta Sycza",
    label: "02 / HUBERT SYCZ",
    position: "50% 22%",
  },
  {
    src: "/images/_MG_8790.jpg",
    alt: "Hubert Sycz na portretowym zdjęciu przy krześle",
    label: "03 / HUBERT SYCZ",
    position: "50% 22%",
  },
  {
    src: "/images/IMG_0074-01-kopia.jpeg",
    alt: "Portret Huberta Sycza",
    label: "04 / HUBERT SYCZ",
    position: "50% 20%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (29).jpg",
    alt: "Hubert Sycz - zdjęcie aktorskie",
    label: "05 / HUBERT SYCZ",
    position: "50% 20%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (37)-2.jpg",
    alt: "Hubert Sycz - zdjęcie aktorskie",
    label: "06 / HUBERT SYCZ",
    position: "50% 18%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (4).jpg",
    alt: "Hubert Sycz - zdjęcie aktorskie",
    label: "07 / HUBERT SYCZ",
    position: "50% 22%",
  },
  {
    src: "/images/HUBERT  fot Zimakiewicz (6).jpg",
    alt: "Hubert Sycz - zdjęcie aktorskie",
    label: "08 / HUBERT SYCZ",
    position: "50% 20%",
  },
  {
    src: "/images/669587663_1500092202115847_7734198665696874300_n.jpg",
    alt: "Hubert Sycz - zdjęcie aktorskie",
    label: "09 / HUBERT SYCZ",
    position: "50% 24%",
  },
];

const improvGallery: Photo[] = [
  {
    src: "/images/wefilm-3.10.25-michalew-95.jpg",
    alt: "Hubert Sycz podczas spektaklu improwizowanego",
    label: "01 / HUBERT SYCZ",
    position: "50% 25%",
  },
  {
    src: "/images/IMG_9754.jpg",
    alt: "Hubert Sycz na scenie",
    label: "02 / HUBERT SYCZ",
    position: "44% 18%",
  },
  {
    src: "/images/IMG_0283.jpg",
    alt: "Hubert Sycz siedzący na scenie",
    label: "03 / HUBERT SYCZ",
    position: "28% 20%",
  },
  {
    src: "/images/TOTO-18.jpg",
    alt: "Hubert Sycz na scenie z zespołem",
    label: "04 / HUBERT SYCZ",
    position: "40% 20%",
  },
  {
    src: "/images/TOTO-50.jpg",
    alt: "Hubert Sycz na scenie TOTO IMPRO",
    label: "05 / HUBERT SYCZ",
    position: "33% 18%",
  },
  {
    src: "/images/TOTO-69.jpg",
    alt: "Hubert Sycz podczas sceny impro",
    label: "06 / HUBERT SYCZ",
    position: "58% 20%",
  },
  {
    src: "/images/TOTO-85.jpg",
    alt: "Hubert Sycz na scenie w ruchu",
    label: "07 / HUBERT SYCZ",
    position: "52% 18%",
  },
  {
    src: "/images/651790701_1355531853268890_9203031069442217826_n.jpg",
    alt: "Hubert Sycz podczas czerwono oświetlonej sceny",
    label: "08 / HUBERT SYCZ",
    position: "27% 26%",
  },
  {
    src: "/images/488906941_1127235322537355_31479928612516282_n.jpg",
    alt: "Hubert Sycz przy mikrofonie",
    label: "09 / HUBERT SYCZ",
    position: "58% 20%",
  },
];

export default function HomePage() {
  return (
    <main className="page" id="top">
      <header className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">HUBERT SYCZ</h1>
          <p className="hero__subtitle">AKTOR / IMPROWIZATOR / MENADŻER</p>

          <div className="worlds">
            <a href="#aktorstwo" className="world-card world-card--dark">
              <div className="world-card__image">
                <img
                  src={actingHome.src}
                  alt={actingHome.alt}
                  style={{ objectPosition: actingHome.position }}
                />
              </div>
              <div className="world-card__footer">
                <div>
                  <span className="world-card__index">01 / ODKRYJ</span>
                  <h2 className="world-card__title">AKTORSTWO</h2>
                </div>
                <span className="world-card__arrow">←</span>
              </div>
            </a>

            <a href="#improwizacja" className="world-card world-card--gold">
              <div className="world-card__image">
                <img
                  src={improvHome.src}
                  alt={improvHome.alt}
                  style={{ objectPosition: improvHome.position }}
                />
              </div>
              <div className="world-card__footer">
                <div>
                  <span className="world-card__index">02 / ODKRYJ</span>
                  <h2 className="world-card__title">IMPROWIZACJA</h2>
                </div>
                <span className="world-card__arrow">→</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      <section id="aktorstwo" className="section section--dark">
        <div className="section__inner">
          <div className="section__heading">
            <span className="section__eyebrow">01 / AKTORSTWO</span>
            <h2 className="section__title">Kadry z mojego portfolio aktorskiego.</h2>
            <p className="section__lead">
              Zdjęcia zostały wyrównane tak, żeby kadr był spokojniejszy,
              a twarz bardziej czytelna i centralna.
            </p>
          </div>

          <div className="gallery">
            {actingGallery.map((photo) => (
              <article className="gallery-card" key={photo.src}>
                <div className="gallery-card__media">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    style={{ objectPosition: photo.position }}
                  />
                </div>
                <span className="gallery-card__label">{photo.label}</span>
              </article>
            ))}
          </div>

          <div className="section__bottom">
            <a href="#top" className="back-link">
              WRÓĆ NA GÓRĘ
            </a>
          </div>
        </div>
      </section>

      <section id="improwizacja" className="section section--light">
        <div className="section__inner">
          <div className="section__heading">
            <span className="section__eyebrow">02 / IMPROWIZACJA</span>
            <h2 className="section__title">
              Kadry z moich spektakli. Każda historia wydarzyła się tylko raz.
            </h2>
            <p className="section__lead">
              Tu też poprawiłem kadrowanie — szczególnie poziome zdjęcia mają teraz
              lepszy punkt skupienia na Tobie.
            </p>
          </div>

          <div className="gallery">
            {improvGallery.map((photo) => (
              <article className="gallery-card" key={photo.src}>
                <div className="gallery-card__media">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    style={{ objectPosition: photo.position }}
                  />
                </div>
                <span className="gallery-card__label">{photo.label}</span>
              </article>
            ))}
          </div>

          <div className="section__bottom">
            <a href="#top" className="back-link">
              WRÓĆ NA GÓRĘ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
