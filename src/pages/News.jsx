import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";


/* =========================================================
   NEWS IMAGES
   src/assets/images/news/
========================================================= */

import newsHeroBackground
  from "../assets/images/news/news-hero-bg.jpg";

import newposAnniversary
  from "../assets/images/news/newpos-anniversary.jpg";

import nilsonReport
  from "../assets/images/news/nilson-report.jpg";

import retailtechJapan
  from "../assets/images/news/retailtech-japan.jpg";

import nrfEurope
  from "../assets/images/news/nrf-europe.jpg";

import milanPaymentExpo
  from "../assets/images/news/milan-payment-expo.jpg";

import digitalPayexpo
  from "../assets/images/news/digital-payexpo.jpg";

import autocomBrazil
  from "../assets/images/news/autocom-brazil.jpg";

import trustech
  from "../assets/images/news/trustech.jpg";

import globalPosGrowth
  from "../assets/images/news/global-pos-growth.jpg";

import newposNanshan
  from "../assets/images/news/newpos-nanshan.jpg";

import newposAnniversary14
  from "../assets/images/news/newpos-anniversary-14.jpg";

import paymentTechnology
  from "../assets/images/news/payment-technology.jpg";


import "./News.css";


/* =========================================================
   NEWS DATA
========================================================= */

const news = [

  /* =======================================================
     FEATURED COMPANY STORY
  ======================================================= */

  {
    id: 446,

    category: "Company",

    date: "10 AUG 2026",

    title:
      "19 Years of Perseverance and Progress, NEWPOS Reaches New Heights in Global Payments",

    excerpt:
      "NEWPOS celebrates its 19th anniversary, reflecting on its development from a seven-person team in 2007 to an international payment terminal provider with business operations across more than 110 countries and regions and cumulative shipments exceeding 60 million terminals.",

    image:
      newposAnniversary,

    featured:
      true,
  },


  /* =======================================================
     COMPANY NEWS
  ======================================================= */

  {
    id: 440,

    category: "Company",

    date: "26 NOV 2025",

    title:
      "NEWPOS Ranks Among Global Leaders in Nilson Report",

    excerpt:
      "NEWPOS achieved sixth place in global payment terminal manufacturer shipments and third place in Asia-Pacific POS terminal shipments for 2024.",

    image:
      nilsonReport,
  },


  {
    id: 2023,

    category: "Company",

    date: "21 OCT 2023",

    title:
      "NEWPOS Ranked Fifth in the World in POS Shipments",

    excerpt:
      "NEWPOS highlighted its global shipment performance and continued strength in the Asia-Pacific POS market.",

    image:
      globalPosGrowth,
  },


  {
    id: 2022,

    category: "Company",

    date: "28 OCT 2022",

    title:
      "NEWPOS Has Made a Permanent Home in Nanshan District",

    excerpt:
      "NEWPOS was selected as one of the enterprises participating in the Liuxian Dong seven-neighborhood joint construction project.",

    image:
      newposNanshan,
  },


  {
    id: 2021,

    category: "Company",

    date: "10 AUG 2021",

    title:
      "NEWPOS Celebrates Its 14th Anniversary",

    excerpt:
      "NEWPOS marked another year of development and continued working toward its long-term payment technology goals.",

    image:
      newposAnniversary14,
  },


  {
    id: 2020,

    category: "Company",

    date: "2020",

    title:
      "NEWPOS Continues Expanding Its Global Payment Technology Business",

    excerpt:
      "NEWPOS continued strengthening its payment terminal business, technology capabilities and international market reach.",

    image:
      paymentTechnology,
  },


  /* =======================================================
     EXHIBITION NEWS
  ======================================================= */

  {
    id: 445,

    category: "Exhibition",

    date: "06 MAR 2026",

    title:
      "NEWPOS Debuts at RETAILTECH JAPAN 2026, Showcasing New Forces in Smart Retail",

    excerpt:
      "NEWPOS presented intelligent payment terminals and showcased its latest payment technology at RETAILTECH JAPAN 2026 in Tokyo.",

    image:
      retailtechJapan,
  },


  {
    id: 435,

    category: "Exhibition",

    date: "17 SEP 2025",

    title:
      "NEWPOS Shines at NRF 2025 Retail's Big Show Europe",

    excerpt:
      "NEWPOS demonstrated its smart payment portfolio in Paris and connected with clients, partners and industry experts.",

    image:
      nrfEurope,
  },


  {
    id: 438,

    category: "Exhibition",

    date: "31 OCT 2025",

    title:
      "NEWPOS Shines at 2025 Milan International Payment Expo",

    excerpt:
      "NEWPOS showcased a broad payment product portfolio in Milan and engaged international payment industry partners.",

    image:
      milanPaymentExpo,
  },


  {
    id: 406,

    category: "Exhibition",

    date: "19 JUN 2025",

    title:
      "NEWPOS at DIGITAL PAYEXPO 2025 Nigeria",

    excerpt:
      "NEWPOS introduced intelligent POS products and discussed payment technology innovation and market development.",

    image:
      digitalPayexpo,
  },


  {
    id: 399,

    category: "Exhibition",

    date: "03 APR 2025",

    title:
      "NEWPOS Shines at AUTOCOM 2025 in Sao Paulo, Brazil",

    excerpt:
      "NEWPOS presented classic and intelligent payment terminals at AUTOCOM 2025 in Brazil.",

    image:
      autocomBrazil,
  },


  {
    id: 421,

    category: "Exhibition",

    date: "10 DEC 2024",

    title:
      "NEWPOS Participates in TRUSTECH 2024",

    excerpt:
      "NEWPOS continued expanding its international presence through the global payment, identification and digital security event TRUSTECH.",

    image:
      trustech,
  },


  {
    id: 418,

    category: "Exhibition",

    date: "2024",

    title:
      "NEWPOS Continues Global Exhibition Expansion",

    excerpt:
      "NEWPOS continued meeting payment industry customers and partners through international exhibitions and market activities.",

    image:
      retailtechJapan,
  },


  {
    id: 417,

    category: "Exhibition",

    date: "2024",

    title:
      "NEWPOS Showcases Smart Payment Technology",

    excerpt:
      "NEWPOS presented payment hardware and technology solutions for global payment applications.",

    image:
      nrfEurope,
  },


  {
    id: 416,

    category: "Exhibition",

    date: "2023",

    title:
      "NEWPOS Connects With Global Payment Partners",

    excerpt:
      "NEWPOS used international industry events to strengthen relationships with customers, partners and payment organizations.",

    image:
      milanPaymentExpo,
  },

];


/* =========================================================
   SCROLL REVEAL
========================================================= */

function useNewsReveal() {

  useEffect(() => {

    const elements =
      document.querySelectorAll(
        ".news-scroll-reveal"
      );

    if (!elements.length) {
      return undefined;
    }


    elements.forEach(
      (
        element,
        index
      ) => {

        element.style.setProperty(
          "--news-delay",
          `${(index % 6) * 55}ms`
        );

      }
    );


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "is-visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold:
            0.02,

          rootMargin:
            "0px 0px 70px 0px",
        }
      );


    elements.forEach(
      (element) => {

        observer.observe(
          element
        );

      }
    );


    requestAnimationFrame(
      () => {

        elements.forEach(
          (element) => {

            const rect =
              element.getBoundingClientRect();


            if (
              rect.top <
                window.innerHeight &&
              rect.bottom >
                0
            ) {

              element.classList.add(
                "is-visible"
              );

            }

          }
        );

      }
    );


    return () => {

      observer.disconnect();

    };

  }, []);

}


/* =========================================================
   NEWS PAGE
========================================================= */

function News() {

  useNewsReveal();


  const [
    activeCategory,
    setActiveCategory,
  ] = useState(
    "All"
  );


  const [
    currentPage,
    setCurrentPage,
  ] = useState(
    1
  );


  const storiesPerPage =
    6;


  /* =======================================================
     CATEGORIES
  ======================================================= */

  const categories = [
    "All",
    "Company",
    "Exhibition",
    "Video",
  ];


  /* =======================================================
     FEATURED
  ======================================================= */

  const featured =
    news.find(
      (item) =>
        item.featured
    );


  /* =======================================================
     FILTERED STORIES
  ======================================================= */

  const filteredNews =
    useMemo(
      () => {

        if (
          activeCategory ===
          "Video"
        ) {

          return [];

        }


        return news.filter(
          (item) => {

            if (
              item.featured
            ) {

              return false;

            }


            if (
              activeCategory ===
              "All"
            ) {

              return true;

            }


            return (
              item.category ===
              activeCategory
            );

          }
        );

      },
      [
        activeCategory,
      ]
    );


  /* =======================================================
     RESET PAGINATION
  ======================================================= */

  useEffect(() => {

    setCurrentPage(
      1
    );

  }, [
    activeCategory,
  ]);


  /* =======================================================
     PAGINATION
  ======================================================= */

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredNews.length /
          storiesPerPage
      )
    );


  const visibleNews =
    filteredNews.slice(
      (
        currentPage -
        1
      ) *
        storiesPerPage,

      currentPage *
        storiesPerPage
    );


  /* =======================================================
     CHANGE CATEGORY
  ======================================================= */

  const handleCategoryChange =
    (category) => {

      if (
        category ===
        activeCategory
      ) {

        return;

      }


      setActiveCategory(
        category
      );


      setCurrentPage(
        1
      );


      window.setTimeout(
        () => {

          const section =
            document.querySelector(
              "#latest-updates"
            );


          if (!section) {
            return;
          }


          const top =
            section.getBoundingClientRect()
              .top +
            window.scrollY -
            20;


          window.scrollTo({
            top,
            behavior:
              "smooth",
          });

        },
        50
      );

    };


  /* =======================================================
     CHANGE PAGE
  ======================================================= */

  const changePage =
    (page) => {

      if (
        page <
          1 ||
        page >
          totalPages
      ) {

        return;

      }


      setCurrentPage(
        page
      );


      window.setTimeout(
        () => {

          const section =
            document.querySelector(
              "#latest-updates"
            );


          if (!section) {
            return;
          }


          const top =
            section.getBoundingClientRect()
              .top +
            window.scrollY -
            20;


          window.scrollTo({
            top,
            behavior:
              "smooth",
          });

        },
        50
      );

    };


  return (

    <main
      className="
        news-page
      "
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="
          news-hero
        "
      >

        <div
          className="
            news-hero-background
          "
          style={{
            backgroundImage:
              `url(${newsHeroBackground})`,
          }}
        />


        <div
          className="
            news-hero-overlay
          "
        />


        <div
          className="
            news-hero-content
            news-scroll-reveal
          "
        >

          <span
            className="
              news-eyebrow
            "
          >
            NEWPOS / NEWS &amp; INSIGHTS
          </span>


          <h1>

            News

            <br />

            <strong>
              &amp; Insights.
            </strong>

          </h1>


          <p>
            Follow NEWPOS products,
            technology, company
            developments, exhibitions
            and global payment activities.
          </p>

        </div>

      </section>


      {/* ===================================================
          FEATURED STORY
      =================================================== */}

      {featured && (

        <section
          className="
            news-featured-section
          "
        >

          <div
            className="
              news-section-label
              news-scroll-reveal
            "
          >

            <span>
              FEATURED
            </span>

            <i />

          </div>


          <article
            className="
              news-featured
              news-scroll-reveal
            "
          >

            <Link
              to={`/news/${featured.id}`}
              className="
                news-featured-visual
              "
            >

              <img
                src={
                  featured.image
                }

                alt={
                  featured.title
                }

                className="
                  news-featured-image
                "
              />


              <div
                className="
                  news-featured-image-overlay
                "
              />


              <span
                className="
                  news-featured-image-label
                "
              >
                NEWPOS
              </span>

            </Link>


            <div
              className="
                news-featured-content
              "
            >

              <div
                className="
                  news-meta
                "
              >

                <span>
                  {
                    featured.category
                  }
                </span>


                <time>
                  {
                    featured.date
                  }
                </time>

              </div>


              <h2>
                {
                  featured.title
                }
              </h2>


              <p>
                {
                  featured.excerpt
                }
              </p>


              <Link
                to={`/news/${featured.id}`}
                className="
                  news-read-link
                "
              >

                Read Article

                <b>
                  →
                </b>

              </Link>

            </div>

          </article>

        </section>

      )}


      {/* ===================================================
          LATEST UPDATES
      =================================================== */}

      <section
        className="
          news-latest-section
        "
        id="
          latest-updates
        "
      >


        {/* =================================================
            HEADER + FILTER
        ================================================= */}

        <div
          className="
            news-latest-toolbar
            news-scroll-reveal
          "
        >

          <div>

            <span
              className="
                news-toolbar-label
              "
            >
              LATEST NEWS
            </span>


            <h2>

              Latest

              <br />

              <strong>
                Updates.
              </strong>

            </h2>

          </div>


          <div
            className="
              news-toolbar-right
            "
          >

            <span
              className="
                news-toolbar-caption
              "
            >
              FILTER BY
            </span>


            <div
              className="
                news-filters
              "
            >

              {categories.map(
                (category) => (

                  <button
                    key={
                      category
                    }

                    type="button"

                    className={
                      activeCategory ===
                      category
                        ? "active"
                        : ""
                    }

                    onClick={() =>
                      handleCategoryChange(
                        category
                      )
                    }
                  >

                    {category}

                  </button>

                )
              )}

            </div>

          </div>

        </div>


        {/* =================================================
            RESULT BAR
        ================================================= */}

        <div
          className="
            news-results-bar
            news-scroll-reveal
          "
        >

          <span>
            {
              activeCategory ===
              "All"
                ? "ALL NEWS"
                : `${activeCategory.toUpperCase()} NEWS`
            }
          </span>


          <strong>
            {
              filteredNews.length
            }
          </strong>


          <small>
            STORIES
          </small>

        </div>


        {/* =================================================
            NEWS GRID
        ================================================= */}

        {visibleNews.length >
          0 && (

          <div
            className="
              news-grid
            "
            key={
              `${activeCategory}-${currentPage}`
            }
          >

            {visibleNews.map(
              (
                item,
                index
              ) => (

                <article
                  key={
                    item.id
                  }

                  className="
                    news-story-card
                    news-page-card
                  "
                >


                  {/* IMAGE */}

                  <Link
                    to={
                      `/news/${item.id}`
                    }

                    className="
                      news-story-visual-link
                    "
                  >

                    <div
                      className="
                        news-story-visual
                      "
                    >

                      <img
                        src={
                          item.image
                        }

                        alt={
                          item.title
                        }

                        className="
                          news-story-image
                        "

                        loading="lazy"
                      />


                      <div
                        className="
                          news-story-image-overlay
                        "
                      />


                      <span
                        className="
                          news-story-number
                        "
                      >

                        {String(
                          index +
                            1 +
                            (
                              currentPage -
                              1
                            ) *
                              storiesPerPage
                        ).padStart(
                          2,
                          "0"
                        )}

                      </span>


                      <span
                        className="
                          news-story-brand
                        "
                      >
                        NEWPOS
                      </span>

                    </div>

                  </Link>


                  {/* CONTENT */}

                  <div
                    className="
                      news-story-content
                    "
                  >

                    <div
                      className="
                        news-story-meta
                      "
                    >

                      <span>
                        {
                          item.category
                        }
                      </span>


                      <time>
                        {
                          item.date
                        }
                      </time>

                    </div>


                    <h3>
                      {
                        item.title
                      }
                    </h3>


                    <p>
                      {
                        item.excerpt
                      }
                    </p>


                    <Link
                      to={
                        `/news/${item.id}`
                      }

                      className="
                        news-read-link
                      "
                    >

                      Read Article

                      <b>
                        →
                      </b>

                    </Link>

                  </div>

                </article>

              )
            )}

          </div>

        )}


        {/* =================================================
            EMPTY
        ================================================= */}

        {visibleNews.length ===
          0 && (

          <div
            className="
              news-empty
              news-scroll-reveal
              is-visible
            "
          >

            <strong>
              No stories in this category yet.
            </strong>

            <span>
              More NEWPOS content can
              be added here as it becomes
              available.
            </span>

          </div>

        )}


        {/* =================================================
            PAGINATION
        ================================================= */}

        {filteredNews.length >
          0 && (

          <div
            className="
              news-pagination
              news-scroll-reveal
              is-visible
            "
          >

            <button
              type="button"

              className="
                news-pagination-arrow
              "

              disabled={
                currentPage ===
                1
              }

              onClick={() =>
                changePage(
                  currentPage -
                    1
                )
              }

              aria-label="
                Previous page
              "
            >
              ←
            </button>


            <div
              className="
                news-pagination-pages
              "
            >

              {Array.from(
                {
                  length:
                    totalPages,
                },

                (
                  _,
                  index
                ) => {

                  const page =
                    index +
                    1;


                  return (

                    <button
                      key={
                        page
                      }

                      type="button"

                      className={
                        currentPage ===
                        page
                          ? "active"
                          : ""
                      }

                      onClick={() =>
                        changePage(
                          page
                        )
                      }
                    >

                      {
                        String(
                          page
                        ).padStart(
                          2,
                          "0"
                        )
                      }

                    </button>

                  );

                }
              )}

            </div>


            <button
              type="button"

              className="
                news-pagination-arrow
              "

              disabled={
                currentPage ===
                totalPages
              }

              onClick={() =>
                changePage(
                  currentPage +
                    1
                )
              }

              aria-label="
                Next page
              "
            >
              →
            </button>

          </div>

        )}

      </section>


      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section
        className="
          news-cta
        "
      >

        <div
          className="
            news-cta-background
          "
        />


        <div
          className="
            news-cta-overlay
          "
        />


        <div
          className="
            news-cta-content
            news-scroll-reveal
          "
        >

          <span>
            NEWPOS INSIGHTS
          </span>


          <h2>

            Stay Connected

            <br />

            <strong>
              With NEWPOS.
            </strong>

          </h2>


          <p>
            Follow product developments,
            technology updates and global
            business activities from NEWPOS.
          </p>

        </div>


        <Link
          to="/contact"

          className="
            news-cta-button
            news-scroll-reveal
          "
        >

          Contact NEWPOS

          <b>
            →
          </b>

        </Link>

      </section>

    </main>
  );
}

export default News;