import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import aboutHeroBackground
  from "../assets/images/about/about-hero-bg.jpg";

import historyBackground
  from "../assets/images/about/history-bg.jpg";

import globalPresenceImage
  from "../assets/images/about/global-presence.jpg";

import trustImage
  from "../assets/images/about/trust.jpg";

import openUpImage
  from "../assets/images/about/open-up.jpg";

import passionImage
  from "../assets/images/about/passion.jpg";

import bearImage
  from "../assets/images/about/bear.jpg";

import "./About.css";


/* =========================================================
   COMPANY HISTORY
========================================================= */

const companyHistory = [
  {
    id: "startup",
    number: "01",
    label: "START-UP PERIOD",
    years: "2007–2011",
    title: "Building The Foundation.",
    description:
      "NEWPOS began its journey in the electronic payment industry through independent product development, early market expansion and banking cooperation.",

    events: [
      {
        year: "2007",
        title: "NEW POS Founded",
        text:
          "NEW POS was founded and began developing payment technology for the electronic payment industry.",
      },
      {
        year: "2008",
        title: "First Handheld Mobile POS",
        text:
          "NEW8110 was successfully launched and NEWPOS introduced its first handheld mobile POS terminal.",
      },
      {
        year: "2009",
        title: "Product & Application Development",
        text:
          "NEW6110 was successfully launched and a lottery POS application was successfully launched for the South Africa World Cup.",
      },
      {
        year: "2010",
        title: "Banking Cooperation",
        text:
          "NEWPOS successfully signed its first commercial bank contract.",
      },
      {
        year: "2011",
        title: "National High-Tech Enterprise",
        text:
          'NEWPOS obtained the qualification of "National High-tech Enterprise" and accumulated sales exceeded 80 million dollars.',
      },
    ],
  },

  {
    id: "growing",
    number: "02",
    label: "GROWING-UP PERIOD",
    years: "2012–2015",
    title: "Entering The Mainstream.",
    description:
      "NEWPOS expanded its commercial business, increased shipments and strengthened its position within the global POS industry.",

    events: [
      {
        year: "2012",
        title: "New Payment Cooperation",
        text:
          'Cumulative sales exceeded 100 million and NEWPOS cooperated with a "third-party non-financial payment institution" for the first time.',
      },
      {
        year: "2013",
        title: "Global Top 10",
        text:
          "Cumulative sales exceeded 500 million, annual shipments exceeded 460,000 units and NEWPOS entered the top 10 POS suppliers in the world.",
      },
      {
        year: "2014",
        title: "Entering The Mainstream",
        text:
          "Annual sales exceeded 500 million, annual shipments exceeded 1 million units and NEWPOS was shortlisted for bank and Tonglian POS bidding.",
      },
      {
        year: "2015",
        title: "Ninth In The World",
        text:
          "Cumulative sales exceeded 1 billion, annual shipments reached 1 million units and Nielsen ranked NEWPOS ninth in the world.",
      },
    ],
  },

  {
    id: "adjustment",
    number: "03",
    label: "ADJUSTMENT PERIOD",
    years: "2016–2018",
    title: "Expanding Capability.",
    description:
      "NEWPOS strengthened its product business, shipment scale and relationships with major financial institutions.",

    events: [
      {
        year: "2016",
        title: "Four Million Shipments",
        text:
          "Annual sales exceeded 600 million, more than 1.16 million units were shipped during the year and accumulated shipments reached 4 million units.",
      },
      {
        year: "2017",
        title: "Middle East Growth",
        text:
          "Cumulative shipments exceeded 5 million, NEWPOS ranked among the top three in sales in the Middle East and became a supplier of Bank of China and Bank of Communications.",
      },
      {
        year: "2018",
        title: "Nine Million Shipments",
        text:
          "Cumulative sales exceeded 3 billion, accumulated shipments exceeded 9 million units and NEWPOS became a supplier of Ping An Bank and China Citic Bank.",
      },
    ],
  },

  {
    id: "ramming",
    number: "04",
    label: "RAMMING PERIOD",
    years: "2019–2021",
    title: "Scaling Globally.",
    description:
      "NEWPOS entered a major period of international expansion and strengthened its position as a leading global POS provider.",

    events: [
      {
        year: "2019",
        title: "Asia-Pacific No. 2",
        text:
          "Annual shipments reached 8.5 million units, annual sales exceeded 1 billion, the head office was relocated and NEWPOS was promoted to the second largest POS supplier in Asia Pacific.",
      },
      {
        year: "2020",
        title: "Global No. 2",
        text:
          "Cumulative sales exceeded 5 billion, NEWPOS was promoted to the second largest POS provider in the world and annual shipments exceeded 11.8 million units.",
      },
      {
        year: "2021",
        title: "35 Million Shipments",
        text:
          "Accumulated shipments exceeded 35 million units and NEWPOS continued its major payment-industry relationships.",
      },
    ],
  },

  {
    id: "newchapter",
    number: "05",
    label: "NEW CHAPTER",
    years: "2022–2025",
    title: "A Broader Global Footprint.",
    description:
      "NEWPOS entered a new stage of global expansion through new facilities, international subsidiaries and a growing global branch network.",

    events: [
      {
        year: "2022",
        title: "New Headquarters",
        text:
          "Total sales exceeded 45 million units, cumulative sales exceeded 8 billion dollars and construction of the new headquarters building began.",
      },
      {
        year: "2023",
        title: "Brazilian Expansion",
        text:
          "NEWPOS established its Brazilian subsidiary and completed the relocation of the new plant in Huizhou.",
      },
      {
        year: "2024",
        title: "60 Million Milestone",
        text:
          "Accumulated shipments reached 60 million units and a new plant was established in Henan Province, China.",
      },
      {
        year: "2025",
        title: "Global Branch Network",
        text:
          "NEWPOS established branches in Kuala Lumpur, Dubai and Mexico City.",
      },
    ],
  },
];


/* =========================================================
   COMPANY CULTURE
========================================================= */

const companyCulture = [
  {
    number: "01",
    title: "Trust",
    image: trustImage,
    text:
      "Do what you promise, complete the work you undertake and trust the strength of partners and teams.",
  },

  {
    number: "02",
    title: "Open Up",
    image: openUpImage,
    text:
      "Listen to different viewpoints, share information and knowledge and encourage innovation.",
  },

  {
    number: "03",
    title: "Passion",
    image: passionImage,
    text:
      "Bring positive energy, pursue excellence and continuously go beyond expectations.",
  },

  {
    number: "04",
    title: "Bear",
    image: bearImage,
    text:
      "Take responsibility, think deeply about the work and have the courage to undertake difficult tasks.",
  },
];


/* =========================================================
   ANIMATED NUMBER
========================================================= */

function AnimatedNumber({
  value,
  suffix = "",
  duration = 1200,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    let started = false;
    let frameId = null;

    const startAnimation = () => {
      if (started) {
        return;
      }

      started = true;

      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress =
          Math.min(
            (currentTime - startTime) /
              duration,
            1
          );

        const eased =
          1 -
          Math.pow(
            1 - progress,
            3
          );

        const currentValue =
          Math.floor(
            value * eased
          );

        element.textContent =
          `${currentValue}${suffix}`;

        if (progress < 1) {
          frameId =
            requestAnimationFrame(
              animate
            );
        } else {
          element.textContent =
            `${value}${suffix}`;
        }
      };

      frameId =
        requestAnimationFrame(
          animate
        );
    };

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        {
          threshold: 0.2,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [
    value,
    suffix,
    duration,
  ]);

  return (
    <strong ref={ref}>
      {`0${suffix}`}
    </strong>
  );
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function useAboutReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll(
        ".about-reveal"
      );

    if (!elements.length) {
      return undefined;
    }

    elements.forEach(
      (element, index) => {
        element.style.setProperty(
          "--about-delay",
          `${(index % 6) * 65}ms`
        );
      }
    );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (entry.isIntersecting) {
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
          threshold: 0.08,
          rootMargin:
            "0px 0px -35px 0px",
        }
      );

    elements.forEach(
      (element) => {
        observer.observe(element);
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);
}


/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  useAboutReveal();

  const [
    activeHistory,
    setActiveHistory,
  ] = useState(0);

  const activePeriod =
    companyHistory[activeHistory];


  return (
    <main className="about-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div
          className="about-hero-background"
          style={{
            backgroundImage:
              `url(${aboutHeroBackground})`,
          }}
        />

        <div className="about-hero-overlay" />

        <div className="about-hero-grid" />


        <div
          className="
            about-hero-content
            about-reveal
          "
        >

          <span className="about-eyebrow">
            NEWPOS / ABOUT US
          </span>


          <h1>
            Building
            <br />
            <strong>
              Better Payments.
            </strong>
          </h1>


          <p>
            NEWPOS Tech is a leading global
            payment products and solutions
            provider integrating R&amp;D,
            production, sales, technical
            support and after-sales service.
          </p>


          <div className="about-hero-actions">

            <a
              href="#about-overview"
              className="about-primary-button"
            >
              Discover NEWPOS
              <b>↓</b>
            </a>


            <Link
              to="/contact"
              className="about-secondary-button"
            >
              Contact Us
            </Link>

          </div>


          <div className="about-hero-meta">

            <span>R&amp;D</span>
            <span>PRODUCTION</span>
            <span>SALES</span>
            <span>SUPPORT</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stat-strip">

        <div className="about-reveal">

          <AnimatedNumber
            value={19}
            suffix="+"
          />

          <span>
            Industry Experience
          </span>

        </div>


        <div className="about-reveal">

          <AnimatedNumber
            value={110}
            suffix="+"
          />

          <span>
            Global Presence
          </span>

        </div>


        <div className="about-reveal">

          <AnimatedNumber
            value={60}
            suffix="M+"
          />

          <span>
            POS Terminals Worldwide
          </span>

        </div>


        <div className="about-reveal">

          <AnimatedNumber
            value={80}
            suffix="+"
          />

          <span>
            Patents
          </span>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section
        className="about-overview"
        id="about-overview"
      >

        <div
          className="
            about-section-heading
            about-reveal
          "
        >

          <span>
            WHO WE ARE
          </span>


          <h2>
            Payment Technology
            <br />
            <strong>
              Built Around Business.
            </strong>
          </h2>

        </div>


        <div
          className="
            about-overview-copy
            about-reveal
          "
        >

          <p>
            NEWPOS Tech is a leading global
            payment products and solutions
            provider. It is a national high-tech
            enterprise integrating R&amp;D,
            production, sales, technical support
            and after-sales service.
          </p>


          <p>
            We are committed to providing safe,
            reliable and technologically advanced
            E-payment products and solutions for
            global users, while promoting the
            development of electronic, digital
            and convenient payment.
          </p>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="about-capabilities">

        <div
          className="
            about-section-heading
            about-reveal
          "
        >

          <span>
            OUR CAPABILITIES
          </span>


          <h2>
            From Development
            <br />
            <strong>
              To Global Support.
            </strong>
          </h2>


          <p>
            NEWPOS integrates research and
            development, production, sales,
            technical support and after-sales
            service across its payment
            technology business.
          </p>

        </div>


        <div className="about-capability-grid">

          {[
            {
              number: "01",
              label: "DEVELOPMENT",
              title: "R&D",
              text:
                "Product research and development focused on electronic payment technology and changing business requirements.",
            },
            {
              number: "02",
              label: "MANUFACTURING",
              title: "Production",
              text:
                "Manufacturing capabilities supporting dependable payment terminal products and large-scale deployment.",
            },
            {
              number: "03",
              label: "GLOBAL BUSINESS",
              title: "Sales",
              text:
                "Global sales and market development serving payment organizations, businesses and technology partners.",
            },
            {
              number: "04",
              label: "CUSTOMER SUPPORT",
              title: "Technical Support",
              text:
                "Technical assistance, after-sales service and operational support for deployed payment products.",
            },
          ].map((item) => (

            <article
              key={item.number}
              className="
                about-capability-card
                about-reveal
              "
            >

              <div className="about-capability-number">
                {item.number}
              </div>

              <div className="about-capability-content">

                <span>
                  {item.label}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

              <b>
                →
              </b>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          GLOBAL PRESENCE
      ===================================================== */}

      <section className="about-global">

        <div
          className="
            about-global-visual
            about-reveal
          "
        >

          <img
            src={globalPresenceImage}
            alt="NEWPOS global payment network"
            className="about-global-image"
          />


          <div className="about-global-image-overlay" />


          <div className="about-global-image-content">

            <span>
              GLOBAL PAYMENT NETWORK
            </span>

            <strong>
              110+
            </strong>

            <small>
              GLOBAL PRESENCE
            </small>

          </div>

        </div>


        <div
          className="
            about-global-content
            about-reveal
          "
        >

          <span>
            GLOBAL PRESENCE
          </span>


          <h2>
            Local Reach.
            <br />
            <strong>
              Global Scale.
            </strong>
          </h2>


          <p>
            NEWPOS products and solutions
            support customers and partners
            across international markets.
          </p>


          <div className="about-global-list">

            <div>
              <span>01</span>
              <strong>Asia-Pacific</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Europe</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Middle East</strong>
            </div>

            <div>
              <span>04</span>
              <strong>Americas</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPANY HISTORY
      ===================================================== */}

      <section
        className="about-history"
        id="company-history"
        style={{
          backgroundImage:
            `url(${historyBackground})`,
        }}
      >

        <div className="about-history-background-overlay" />


        <div
          className="
            about-history-heading
            about-reveal
          "
        >

          <span>
            COMPANY HISTORY
          </span>


          <h2>
            Growing With
            <br />
            <strong>
              The Payment Industry.
            </strong>
          </h2>


          <p>
            From its foundation in 2007 to
            its global expansion, NEWPOS has
            continued to develop payment
            products, technology capabilities
            and international partnerships.
          </p>

        </div>


        {/* PERIOD TABS */}

        <div
          className="
            about-history-tabs
            about-reveal
          "
        >

          {companyHistory.map(
            (period, index) => (

              <button
                key={period.id}
                type="button"
                className={
                  `about-history-tab ${
                    activeHistory === index
                      ? "active"
                      : ""
                  }`
                }
                onClick={() =>
                  setActiveHistory(index)
                }
              >

                <span>
                  {period.label}
                </span>

                <strong>
                  {period.years}
                </strong>

              </button>

            )
          )}

        </div>


        {/* ACTIVE PERIOD */}

        <div
          className="about-history-detail"
          key={activePeriod.id}
        >

          <div className="about-history-detail-top">

            <div>

              <span>
                {activePeriod.number}
              </span>

              <small>
                {activePeriod.label}
              </small>

            </div>


            <strong>
              {activePeriod.years}
            </strong>

          </div>


          <div className="about-history-detail-heading">

            <h3>
              {activePeriod.title}
            </h3>

            <p>
              {activePeriod.description}
            </p>

          </div>


          <div className="about-history-events">

            {activePeriod.events.map(
              (event) => (

                <article
                  key={
                    `${activePeriod.id}-${event.year}`
                  }
                  className="about-history-event"
                >

                  <div className="about-history-event-year">
                    {event.year}
                  </div>


                  <div className="about-history-event-content">

                    <h4>
                      {event.title}
                    </h4>

                    <p>
                      {event.text}
                    </p>

                  </div>


                  <span className="about-history-event-arrow">
                    →
                  </span>

                </article>

              )
            )}

          </div>

        </div>


        {/* HISTORY NAVIGATION */}

        <div className="about-history-progress">

          <button
            type="button"
            aria-label="Previous history period"
            onClick={() =>
              setActiveHistory(
                (current) =>
                  current === 0
                    ? companyHistory.length - 1
                    : current - 1
              )
            }
          >
            ←
          </button>


          <div className="about-history-progress-bars">

            {companyHistory.map(
              (period, index) => (

                <button
                  key={period.id}
                  type="button"
                  className={
                    index === activeHistory
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveHistory(index)
                  }
                  aria-label={
                    `Show ${period.label}`
                  }
                />

              )
            )}

          </div>


          <button
            type="button"
            aria-label="Next history period"
            onClick={() =>
              setActiveHistory(
                (current) =>
                  (current + 1) %
                  companyHistory.length
              )
            }
          >
            →
          </button>

        </div>

      </section>


      {/* =====================================================
          WHAT DRIVES NEWPOS
      ===================================================== */}

      <section className="about-culture">

        <div
          className="
            about-section-heading
            about-reveal
          "
        >

          <span>
            COMPANY CULTURE
          </span>


          <h2>
            What
            <br />
            <strong>
              Drives NEWPOS.
            </strong>
          </h2>


          <p>
            NEWPOS builds its culture around
            trust, openness, passion and
            responsibility.
          </p>

        </div>


        <div className="about-culture-grid">

          {companyCulture.map(
            (item) => (

              <article
                key={item.number}
                className="
                  about-culture-card
                  about-reveal
                "
              >

                <div className="about-culture-image">

                  <img
                    src={item.image}
                    alt={
                      `${item.title} — NEWPOS company culture`
                    }
                    loading="lazy"
                  />

                  <div className="about-culture-image-overlay" />

                  <span>
                    {item.number}
                  </span>

                </div>


                <div className="about-culture-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          COMPANY INFORMATION
      ===================================================== */}

      <section className="about-company-info">

        <div
          className="
            about-section-heading
            about-reveal
          "
        >

          <span>
            COMPANY ADDRESS
          </span>


          <h2>
            Connect With
            <br />
            <strong>
              NEWPOS.
            </strong>
          </h2>


          <p>
            Reach NEWPOS for product
            information, payment solutions,
            technical support and business
            cooperation.
          </p>

        </div>


        <div className="about-company-info-list">

          <a
            href="mailto:sales@newpostech.com"
            className="
              about-contact-line
              about-reveal
            "
          >

            <div className="about-contact-icon">

              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />
                <path
                  d="M3 7l9 6 9-6"
                />
              </svg>

            </div>


            <div className="about-contact-text">

              <span>
                EMAIL
              </span>

              <strong>
                sales@newpostech.com
              </strong>

            </div>


            <span className="about-contact-arrow">
              ↗
            </span>

          </a>


          <a
            href="tel:4006520589"
            className="
              about-contact-line
              about-reveal
            "
          >

            <div className="about-contact-icon">

              <svg viewBox="0 0 24 24">
                <path
                  d="
                    M6.5 3.5
                    h3
                    l1.5 4
                    -2 1.5
                    a14 14 0 0 0
                    6 6
                    l1.5-2
                    4 1.5
                    v3
                    c0 1.1-.9 2-2 2
                    C11 19.5 4.5 13 4.5 5.5
                    c0-1.1.9-2 2-2Z
                  "
                />
              </svg>

            </div>


            <div className="about-contact-text">

              <span>
                TEL
              </span>

              <strong>
                4006-520-589
              </strong>

            </div>


            <span className="about-contact-arrow">
              ↗
            </span>

          </a>


          <div
            className="
              about-contact-line
              about-reveal
            "
          >

            <div className="about-contact-icon">

              <svg viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="7"
                  width="16"
                  height="11"
                  rx="1.5"
                />
                <path
                  d="M7 7V4h10v3"
                />
                <path
                  d="M8 11h8"
                />
                <path
                  d="M8 14h5"
                />
              </svg>

            </div>


            <div className="about-contact-text">

              <span>
                FAX
              </span>

              <strong>
                0755-82790632
              </strong>

            </div>


            <span className="about-contact-arrow">
              ↗
            </span>

          </div>


          <div
            className="
              about-contact-line
              about-contact-address
              about-reveal
            "
          >

            <div className="about-contact-icon">

              <svg viewBox="0 0 24 24">
                <path
                  d="
                    M12 21
                    s7-6.2 7-11
                    a7 7 0 1 0-14 0
                    c0 4.8 7 11 7 11Z
                  "
                />

                <circle
                  cx="12"
                  cy="10"
                  r="2.3"
                />

              </svg>

            </div>


            <div className="about-contact-text">

              <span>
                ADDRESS
              </span>

              <strong>
                AB Unit, 14th floor, Block A,
                Financial Science and Technology
                Building, 11 Keyuan Road, Nanshan
                District, Shenzhen City
              </strong>

            </div>


            <span className="about-contact-arrow">
              ↗
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="about-cta-grid" />


        <div
          className="
            about-cta-content
            about-reveal
          "
        >

          <span>
            NEWPOS TECHNOLOGY
          </span>


          <h2>
            Build Better
            <br />
            <strong>
              Payments Together.
            </strong>
          </h2>


          <p>
            Explore NEWPOS products,
            connected payment solutions
            and global business opportunities.
          </p>

        </div>


        <Link
          to="/contact"
          className="
            about-cta-button
            about-reveal
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

export default About;