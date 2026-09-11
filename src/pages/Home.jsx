import {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   PRODUCT IMAGES
========================================================= */

import new9810 from "../assets/images/products/new9810.png";
import new9800 from "../assets/images/products/new9800.png";
import new9830 from "../assets/images/products/new9830.png";
import new9310 from "../assets/images/products/new9310.png";
import new9310pro from "../assets/images/products/new9310pro.png";
import new9810pro from "../assets/images/products/new9810pro.png";
import new9220 from "../assets/images/products/new9220.png";

/* =========================================================
   PRODUCT CATEGORY IMAGES
========================================================= */

import productHeroBackground from "../assets/images/products/products-hero-bg.jpg";
import classicPOSImage from "../assets/images/products/classic-pos.jpg";
import unattendedImage from "../assets/images/products/unattended.jpg";
import cloudSpeakerImage from "../assets/images/products/cloud-speaker.jpg";
import accessoriesImage from "../assets/images/products/accessories.jpg";
import smartECRImage from "../assets/images/products/smart-ecr.jpg";

/* =========================================================
   HOME IMAGES
========================================================= */

import homeGlobe from "../assets/images/home-globe.jpg";
import paymentProducts from "../assets/images/payment-products.avif";
import paymentSolutions from "../assets/images/payment-solutions.avif";
import globalPresence from "../assets/images/global-presence.jpg";

/* =========================================================
   PAYMENT SOLUTIONS IMAGES
========================================================= */

import cloudMisImage from "../assets/images/cloud-mis1.jpg";
import remoteKeyInjection from "../assets/images/remote-key-injection1.jpg";
import terminalManagement from "../assets/images/terminal-management1.jpg";
import newViewerImage from "../assets/images/newviewer1.jpg";

/* =========================================================
   CLIENTS
========================================================= */

import clientsBackground from "../assets/images/clients-background.jpg";

/* =========================================================
   NEWS IMAGES
========================================================= */

import newsAnniversary from "../assets/images/news/newpos-anniversary.jpg";
import newsRetailtechJapan from "../assets/images/news/retailtech-japan.jpg";
import newsMilan from "../assets/images/news/milan-payment-expo.jpg";
import newsNrf from "../assets/images/news/nrf-europe.jpg";
import newsDigitalPayexpo from "../assets/images/news/digital-payexpo.jpg";
import newsAutocom from "../assets/images/news/autocom-brazil.jpg";

/* =========================================================
   COOPERATION CASE IMAGES
========================================================= */

import cooperation01 from "../assets/images/hero/cooperation-01.jpg";
import cooperation02 from "../assets/images/hero/cooperation-02.jpg";
import cooperation03 from "../assets/images/hero/cooperation-03.jpg";
import cooperation04 from "../assets/images/hero/cooperation-04.jpg";
import cooperation05 from "../assets/images/hero/cooperation-05.jpg";
import cooperation06 from "../assets/images/hero/cooperation-06.jpg";
import cooperation07 from "../assets/images/hero/cooperation-07.jpg";
import cooperation08 from "../assets/images/hero/cooperation-08.jpg";
import cooperation09 from "../assets/images/hero/cooperation-09.jpg";
import cooperation10 from "../assets/images/hero/cooperation-10.jpg";
import cooperation11 from "../assets/images/hero/cooperation-11.jpg";
import cooperation12 from "../assets/images/hero/cooperation-12.jpg";

/* =========================================================
   COOPERATION BACKGROUND
========================================================= */

import cooperationBackground from "../assets/images/hero/cooperation-background.jpg";

/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const productCategories = [
  {
    number: "01",
    name: "Smart POS",
    image: productHeroBackground,
    description:
      "Intelligent terminals for modern payment environments.",
  },
  {
    number: "02",
    name: "Classic POS",
    image: classicPOSImage,
    description:
      "Reliable hardware for everyday transaction processing.",
  },
  {
    number: "03",
    name: "Unattended",
    image: unattendedImage,
    description:
      "Payment solutions for self-service environments.",
  },
  {
    number: "04",
    name: "Cloud Speaker",
    image: cloudSpeakerImage,
    description:
      "Connected payment notification solutions.",
  },
  {
    number: "05",
    name: "Accessories",
    image: accessoriesImage,
    description:
      "Hardware accessories for complete deployments.",
  },
  {
    number: "06",
    name: "Smart ECR",
    image: smartECRImage,
    description:
      "Smart retail and electronic cash register solutions.",
  },
];

/* =========================================================
   FEATURED PRODUCTS
========================================================= */

const featuredProducts = [
  {
    number: "01",
    name: "NEW9810",
    type: "Smart POS Terminal",
    description:
      "Advanced smart payment hardware designed for modern transaction environments.",
    image: new9810,
    slug: "new9810",
  },
  {
    number: "02",
    name: "NEW9800",
    type: "Classic POS Terminal",
    description:
      "Reliable payment hardware built for dependable everyday transaction processing.",
    image: new9800,
    slug: "new9800",
  },
  {
    number: "03",
    name: "NEW9830",
    type: "Unattended Payment Terminal",
    description:
      "Flexible payment hardware designed for self-service and unattended environments.",
    image: new9830,
    slug: "new9830",
  },
  {
    number: "04",
    name: "NEW9310Pro",
    type: "Smart POS Terminal",
    description:
      "A connected smart POS terminal designed around contemporary payment experiences.",
    image: new9310pro,
    slug: "new9310pro",
  },
  {
    number: "05",
    name: "NEW9310",
    type: "Smart POS Terminal",
    description:
      "Professional smart payment hardware for demanding business deployments.",
    image: new9310,
    slug: "new9310",
  },
  {
    number: "06",
    name: "NEW9220",
    type: "Payment Terminal",
    description:
      "Connected payment hardware designed for flexible business applications.",
    image: new9220,
    slug: "new9220",
  },
];

/* =========================================================
   PAYMENT SOLUTIONS
========================================================= */

const solutions = [
  {
    number: "01",
    title: "Cloud MIS",
    description:
      "Transaction and business management for connected payment environments, helping businesses monitor transactions and manage payment activity efficiently.",
    image: cloudMisImage,
  },
  {
    number: "02",
    title: "RKI",
    description:
      "Secure remote key injection at scale, supporting controlled deployment and secure management across large POS terminal fleets.",
    image: remoteKeyInjection,
  },
  {
    number: "03",
    title: "TMS",
    description:
      "Remote terminal management and support for deployment, monitoring, configuration and ongoing payment device operations.",
    image: terminalManagement,
  },
  {
    number: "04",
    title: "NewViewer",
    description:
      "Remote assistance for POS terminals, helping support teams access and troubleshoot connected payment devices more efficiently.",
    image: newViewerImage,
  },
];

/* =========================================================
   NEWS
========================================================= */

const news = [
  {
    category: "Exhibition",
    title:
      "NEWPOS participated in the 2024 Retail Automation Exhibition in Sao Paulo, Brazil",
    date: "2024-04-12",
    image: newsAutocom,
  },
  {
    category: "Exhibition",
    title:
      "Trustech 2023丨NEWPOS participated in the French Payment, Intelligent Identification and Digital Security Exhibition",
    date: "2023-11-30",
    image: newsMilan,
  },
  {
    category: "Company",
    title:
      "NEWPOS participates in the 2023 South African Payment and Financial Exhibition",
    date: "2023-09-22",
    image: newsNrf,
  },
  {
    category: "Exhibition",
    title:
      "NEWPOS showcases innovative payment technology and connected terminal solutions",
    date: "2023-08-15",
    image: newsDigitalPayexpo,
  },
  {
    category: "Company",
    title:
      "NEWPOS expands its global payment technology and solution capabilities",
    date: "2023-06-20",
    image: newsRetailtechJapan,
  },
  {
    category: "Exhibition",
    title:
      "NEWPOS presents its latest payment products and software solutions to global partners",
    date: "2023-05-18",
    image: newsAnniversary,
  },
];

/* =========================================================
   COOPERATION CASE IMAGES
========================================================= */

const cooperationCases = [
  cooperation01,
  cooperation02,
  cooperation03,
  cooperation04,
  cooperation05,
  cooperation06,
  cooperation07,
  cooperation08,
  cooperation09,
  cooperation10,
  cooperation11,
  cooperation12,
];

/* =========================================================
   ANIMATED NUMBER
========================================================= */

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1300,
}) {
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) {
      return undefined;
    }

    let frameId = null;
    let started = false;

    const startAnimation = () => {
      if (started) {
        return;
      }

      started = true;

      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const eased =
          1 - Math.pow(1 - progress, 3);

        const currentValue =
          Math.floor(value * eased);

        element.textContent =
          `${prefix}${currentValue}${suffix}`;

        if (progress < 1) {
          frameId =
            requestAnimationFrame(animate);
        } else {
          element.textContent =
            `${prefix}${value}${suffix}`;
        }
      };

      frameId =
        requestAnimationFrame(animate);
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
          threshold: 0.25,
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
    prefix,
    duration,
  ]);

  return (
    <strong ref={numberRef}>
      {`${prefix}0${suffix}`}
    </strong>
  );
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function useScrollReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll(
        ".reveal-on-scroll"
      );

    if (!elements.length) {
      return undefined;
    }

    elements.forEach(
      (element, index) => {
        element.style.setProperty(
          "--reveal-delay",
          `${(index % 6) * 70}ms`
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
          threshold: 0.1,
          rootMargin:
            "0px 0px -40px 0px",
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
   COOPERATION SHOWCASE

   3 ROWS
   ALL LEFT → RIGHT
   ALL THREE ROWS USE THE SAME SPEED
========================================================= */

function CooperationShowcase() {
  const rows = [
    cooperationCases,
    cooperationCases,
    cooperationCases,
  ];

  return (
    <div className="cooperation-showcase">

      {rows.map(
        (row, rowIndex) => (
          <div
            className="cooperation-slider"
            key={`cooperation-row-${rowIndex}`}
          >

            <div
              className={`cooperation-track cooperation-row-${rowIndex + 1}`}
            >

              {/* =================================================
                  FIRST GROUP
              ================================================= */}

              <div className="cooperation-group">

                {row.map(
                  (image, index) => (
                    <a
                      key={`cooperation-first-${rowIndex}-${index}`}
                      href="/service"
                      className="cooperation-card"
                    >

                      <div className="cooperation-card-inner">

                        <img
                          src={image}
                          alt={`NEWPOS cooperation case ${
                            (index %
                              cooperationCases.length) +
                            1
                          }`}
                          loading="lazy"
                        />

                      </div>

                    </a>
                  )
                )}

              </div>

              {/* =================================================
                  DUPLICATE GROUP
              ================================================= */}

              <div
                className="cooperation-group"
                aria-hidden="true"
              >

                {row.map(
                  (image, index) => (
                    <a
                      key={`cooperation-second-${rowIndex}-${index}`}
                      href="/service"
                      className="cooperation-card"
                      tabIndex="-1"
                    >

                      <div className="cooperation-card-inner">

                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                        />

                      </div>

                    </a>
                  )
                )}

              </div>

            </div>

          </div>
        )
      )}

    </div>
  );
}

/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
  {
    number: "01",
    eyebrow: "NEWPOS TECHNOLOGY",
    title: "Powering",
    accent: "Global Payments.",
    description:
      "Safe, reliable and technologically advanced payment products and solutions built for businesses around the world.",
    primary: "Explore Products",
    primaryLink: "/products",
    secondary: "Explore Solutions",
    secondaryLink: "/solutions",
    type: "global",
    background: homeGlobe,
    backgroundPosition: "center center",
  },
  {
    number: "02",
    eyebrow: "NEWPOS PAYMENT PRODUCTS",
    title: "Payment Technology.",
    accent: "Built For Every Transaction.",
    description:
      "Professional payment terminals for secure, dependable and connected business environments.",
    primary: "Explore Products",
    primaryLink: "/products",
    secondary: "View Portfolio",
    secondaryLink: "/products",
    type: "products",
    background: paymentProducts,
    backgroundPosition: "center center",
  },
  {
    number: "03",
    eyebrow: "NEWPOS PAYMENT SOLUTIONS",
    title: "Connected Solutions",
    accent: "Smarter Payment",
    description:
      "Manage, secure, deploy and support payment infrastructure through connected NEWPOS technology.",
    primary: "Explore Solutions",
    primaryLink: "/solutions",
    secondary: "Contact NEWPOS",
    secondaryLink: "/contact",
    type: "solutions",
    background: paymentSolutions,
    backgroundPosition: "center center",
  },
  {
    number: "04",
    eyebrow: "NEWPOS GLOBAL PRESENCE",
    title: "Local Reach.",
    accent: "Global Scale.",
    description:
      "Connected payment technology supporting businesses and partners across international markets.",
    primary: "Explore Global Presence",
    primaryLink: "/service",
    secondary: "Contact Us",
    secondaryLink: "/contact",
    type: "global-scale",
    background: globalPresence,
    backgroundPosition: "center center",
  },
];

/* =========================================================
   HOME HERO
========================================================= */

function HomeHero() {
  const [
    activeSlide,
    setActiveSlide,
  ] = useState(0);

  const [
    paused,
    setPaused,
  ] = useState(false);

  const slide =
    heroSlides[
      activeSlide
    ];

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const timer =
      window.setInterval(
        () => {
          setActiveSlide(
            (current) =>
              (current + 1) %
              heroSlides.length
          );
        },
        8000
      );

    return () => {
      window.clearInterval(
        timer
      );
    };
  }, [paused]);

  useEffect(() => {
    const handleKeyDown =
      (event) => {
        if (
          event.key ===
          "ArrowRight"
        ) {
          setActiveSlide(
            (current) =>
              (current + 1) %
              heroSlides.length
          );
        }

        if (
          event.key ===
          "ArrowLeft"
        ) {
          setActiveSlide(
            (current) =>
              (
                current -
                1 +
                heroSlides.length
              ) %
              heroSlides.length
          );
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <section
      className={`
        home-hero-slider
        home-hero-${slide.type}
      `}
    >

      <div className="hero-slide-background-layer">

        <img
          key={`background-${activeSlide}`}
          src={slide.background}
          alt=""
          aria-hidden="true"
          className="hero-slide-background"
          style={{
            objectPosition:
              slide.backgroundPosition,
          }}
        />

        <div className="hero-slide-image-overlay" />

        <div className="hero-slide-content-overlay" />

      </div>

      <div
        className="home-hero-content"
        key={`text-${activeSlide}`}
      >

        <span className="home-hero-eyebrow">
          <i />
          {slide.eyebrow}
        </span>

        <h1>
          {slide.title}

          <strong>
            {slide.accent}
          </strong>
        </h1>

        <p>
          {slide.description}
        </p>

        <div className="home-hero-actions">

          <a
            href={slide.primaryLink}
            className="home-hero-primary"
          >
            {slide.primary}

            <b>
              →
            </b>
          </a>

          <a
            href={slide.secondaryLink}
            className="home-hero-secondary"
          >
            {slide.secondary}

            <span>
              ↗
            </span>
          </a>

        </div>

      </div>

      <div className="home-hero-number">
        {slide.number}

        <span>
          / 04
        </span>
      </div>

      <div className="home-hero-controls">

        <div className="home-hero-dots">

          {heroSlides.map(
            (item, index) => (
              <button
                key={item.number}
                type="button"
                className={
                  index ===
                  activeSlide
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveSlide(
                    index
                  )
                }
                aria-label={`Go to slide ${
                  index + 1
                }`}
              />
            )
          )}

        </div>

        <button
          type="button"
          className="home-hero-pause"
          onClick={() =>
            setPaused(
              (current) =>
                !current
            )
          }
        >
          {paused
            ? "PLAY"
            : "PAUSE"}
        </button>

      </div>

    </section>
  );
}

/* =========================================================
   NEWS CAROUSEL
========================================================= */

function NewsCarousel() {
  const [
    activeNews,
    setActiveNews,
  ] = useState(0);

  const [
    paused,
    setPaused,
  ] = useState(false);

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const timer =
      window.setInterval(
        () => {
          setActiveNews(
            (current) => {
              if (
                current >=
                news.length - 3
              ) {
                return 0;
              }

              return current + 1;
            }
          );
        },
        4000
      );

    return () => {
      window.clearInterval(
        timer
      );
    };
  }, [paused]);

  return (
    <div className="news-carousel">

      <div className="news-carousel-window">

        <div
          className="news-carousel-track"
          style={{
            transform:
              `translateX(calc(-${activeNews} * var(--news-step)))`,
          }}
        >

          {news.map(
            (item, index) => {
              const date =
                new Date(
                  item.date
                );

              return (
                <article
                  className="news-carousel-card"
                  key={item.title}
                >

                  <div className="news-carousel-image">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="news-carousel-image-overlay" />

                    <span className="news-carousel-number">
                      0{index + 1}
                    </span>

                    <span className="news-carousel-category">
                      {item.category}
                    </span>

                    <div className="news-carousel-date">

                      <strong>
                        {date.getDate()}
                      </strong>

                      <span>
                        {date.toLocaleDateString(
                          "en-US",
                          {
                            month:
                              "short",
                          }
                        )}
                      </span>

                    </div>

                  </div>

                  <div className="news-carousel-content">

                    <small>
                      {item.category}
                      {" / "}
                      {date.getFullYear()}
                    </small>

                    <h3>
                      {item.title}
                    </h3>

                    <a href="/news">
                      Read Story

                      <b>
                        →
                      </b>

                    </a>

                  </div>

                </article>
              );
            }
          )}

        </div>

      </div>

      <div className="news-carousel-controls">

        <div className="news-carousel-progress">

          {news
            .slice(0, 4)
            .map(
              (_, index) => (
                <button
                  type="button"
                  key={index}
                  className={
                    activeNews ===
                    index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveNews(
                      index
                    )
                  }
                  aria-label={`Show news group ${
                    index + 1
                  }`}
                />
              )
            )}

        </div>

        <button
          type="button"
          className="news-carousel-pause"
          onClick={() =>
            setPaused(
              (current) =>
                !current
            )
          }
        >
          {paused
            ? "PLAY"
            : "PAUSE"}
        </button>

      </div>

    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  useScrollReveal();

  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <HomeHero />

      {/* =====================================================
          PRODUCT PORTFOLIO
      ===================================================== */}

      <section className="products-section">

        <div className="section-heading products-heading">

          <div>

            <span>
              PRODUCT PORTFOLIO
            </span>

            <h2>
              Payment Hardware
              <br />
              Built To Perform.
            </h2>

          </div>

          <div className="heading-side">

            <p>
              Explore payment hardware
              designed for retail,
              banking, hospitality,
              unattended and other
              business environments.
            </p>

            <a
              href="/products"
              className="text-link"
            >
              View All Products

              <b>
                →
              </b>
            </a>

          </div>

        </div>

        <div className="category-grid">

          {productCategories.map(
            (category) => (
              <a
                key={category.name}
                href="/products"
                className="
                  category-card
                  reveal-on-scroll
                "
              >

                <div className="category-card-top">

                  <span>
                    {category.number}
                  </span>

                  <span>
                    →
                  </span>

                </div>

                <div className="category-image">

                  <img
                    src={category.image}
                    alt={category.name}
                  />

                </div>

                <div className="category-content">

                  <h3>
                    {category.name}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                  <span className="category-link">
                    Explore Category

                    <b>
                      →
                    </b>
                  </span>

                </div>

              </a>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ===================================================== */}

      <section className="featured-products">

        <div className="section-heading featured-products-heading">

          <div>

            <span>
              FEATURED PRODUCTS
            </span>

            <h2>
              Payment Devices
              <br />
              Built For Business.
            </h2>

          </div>

          <div className="heading-side">

            <p>
              Explore selected NEWPOS
              payment terminals designed
              for different transaction
              environments and business needs.
            </p>

            <a
              href="/products"
              className="text-link"
            >
              View Product Portfolio

              <b>
                →
              </b>
            </a>

          </div>

        </div>

        <div className="product-grid">

          {featuredProducts.map(
            (product) => (
              <a
                key={product.name}
                href={`/products/${product.slug}`}
                className="
                  product-card
                  reveal-on-scroll
                "
              >

                <div className="product-image">

                  <span className="product-number">
                    {product.number}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                </div>

                <div className="product-info">

                  <small>
                    {product.type}
                  </small>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  <strong>
                    View Product

                    <b>
                      →
                    </b>
                  </strong>

                </div>

              </a>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          GLOBAL PAYMENT TECHNOLOGY
      ===================================================== */}

      <section className="trust-strip">

        <div className="trust-strip-label">
          <span>
            GLOBAL PAYMENT TECHNOLOGY
          </span>
        </div>

        <div className="trust-item">

          <AnimatedNumber
            value={80}
            suffix="+"
          />

          <span>
            Patents
          </span>

        </div>

        <div className="trust-item">

          <strong>
            TOP 2
          </strong>

          <span>
            Global POS Ranking
          </span>

        </div>

        <div className="trust-item">

          <AnimatedNumber
            value={110}
            suffix="+"
          />

          <span>
            Markets
          </span>

        </div>

        <div className="trust-item">

          <AnimatedNumber
            value={60}
            suffix="M+"
          />

          <span>
            Terminals
          </span>

        </div>

      </section>

      {/* =====================================================
          ABOUT NEWPOS
      ===================================================== */}

      <section className="company-section">

        <div className="company-image">

          <img
            className="company-bg-image"
            src="/backgroundpic1.avif"
            alt=""
            aria-hidden="true"
          />

          <div className="company-video-overlay" />

          <div className="company-visual-content">

            <span>
              ABOUT NEWPOS
            </span>

            <strong>
              Payment
            </strong>

            <strong>
              Technology
            </strong>

            <div className="company-visual-line" />

            <small>
              GLOBAL PAYMENT PRODUCTS
              &amp; SOLUTIONS
            </small>

          </div>

          <div className="
            company-image-circle
            circle-one
          " />

          <div className="
            company-image-circle
            circle-two
          " />

        </div>

        <div
          className="
            company-content
            reveal-on-scroll
          "
        >

          <span>
            WHO WE ARE
          </span>

          <h2>
            Building The
            <br />
            Future Of Payments.
          </h2>

          <p>
            NEWPOS Tech is a global
            payment products and
            solutions provider
            integrating R&amp;D,
            production, sales,
            technical support and
            after-sales service.
          </p>

          <p>
            We are committed to
            providing safe, reliable
            and technologically
            advanced electronic
            payment products and
            solutions for users
            around the world.
          </p>

          <div className="company-highlights">

            <div>

              <strong>
                01
              </strong>

              <span>
                R&amp;D
              </span>

            </div>

            <div>

              <strong>
                02
              </strong>

              <span>
                Production
              </span>

            </div>

            <div>

              <strong>
                03
              </strong>

              <span>
                Global Support
              </span>

            </div>

          </div>

          <a
            href="/about"
            className="primary-button"
          >
            Discover NEWPOS

            <b>
              →
            </b>

          </a>

        </div>

      </section>

      {/* =====================================================
          GLOBAL PRESENCE
      ===================================================== */}

      <section className="markets-section">

        <div className="
          section-heading
          center
          reveal-on-scroll
        ">

          <span>
            GLOBAL PRESENCE
          </span>

          <h2>
            Local Reach.
            <br />
            Global Scale.
          </h2>

          <p>
            NEWPOS products and
            solutions serve customers
            and partners across markets
            around the world.
          </p>

        </div>

        <div className="
          markets-visual
          reveal-on-scroll
        ">

          <div className="world-map-glow" />

          <img
            className="world-map-image"
            src="/world-map.svg"
            alt="World map showing NEWPOS global presence"
          />

          <div className="map-overlay-grid" />

          <div className="map-pulse pulse-usa" />
          <div className="map-pulse pulse-dominican" />
          <div className="map-pulse pulse-colombia" />
          <div className="map-pulse pulse-brazil" />
          <div className="map-pulse pulse-uruguay" />

          <div className="map-pulse pulse-belgium" />
          <div className="map-pulse pulse-egypt" />
          <div className="map-pulse pulse-nigeria" />
          <div className="map-pulse pulse-south-africa" />

          <div className="map-pulse pulse-russia" />
          <div className="map-pulse pulse-japan" />
          <div className="map-pulse pulse-china" />
          <div className="map-pulse pulse-india" />
          <div className="map-pulse pulse-uae" />
          <div className="map-pulse pulse-indonesia" />
          <div className="map-pulse pulse-australia" />

          <div className="market-center">

            <AnimatedNumber
              value={110}
              suffix="+"
            />

            <span>
              MARKETS
            </span>

          </div>

          <div className="map-caption">

            <span>
              GLOBAL PAYMENT NETWORK
            </span>

            <strong>
              110+ MARKETS
            </strong>

          </div>

        </div>

        {/* =================================================
            COOPERATION CASE
        ================================================= */}

        <div
          className="cooperation-section"
          style={{
            "--cooperation-bg":
              `url(${cooperationBackground})`,
          }}
        >

          <div className="
            markets-collaboration-heading
            reveal-on-scroll
          ">

            <span>
              COOPERATION CASE
            </span>

            <h3>
              Built Together.
              <br />

              <strong>
                Deployed Globally.
              </strong>
            </h3>

            <p>
              Payment technology and
              partnerships built around
              real business needs.
            </p>

          </div>

          <CooperationShowcase />

        </div>

      </section>

      {/* =====================================================
          PAYMENT SOLUTIONS
      ===================================================== */}

      <section className="solutions-section">

        <div className="section-top">

          <div>

            <span>
              PAYMENT SOLUTIONS
            </span>

            <h2>
              More Than
              <br />
              Payment Hardware.
            </h2>

          </div>

          <div className="solutions-heading-side">

            <p>
              Software and management
              solutions that help
              businesses deploy,
              monitor and support
              payment infrastructure
              at scale.
            </p>

            <a
              href="/solutions"
              className="text-link"
            >
              Explore Solutions

              <b>
                →
              </b>
            </a>

          </div>

        </div>

        <div className="solutions-grid">

          {solutions.map(
            (solution) => (
              <article
                key={solution.title}
                className="
                  solution-card
                  reveal-on-scroll
                "
              >

                <div className="solution-card-image">

                  <img
                    src={solution.image}
                    alt={`${solution.title} payment solution`}
                  />

                  <div className="solution-card-image-overlay" />

                  <span className="solution-card-number">
                    {solution.number}
                  </span>

                </div>

                <div className="solution-content">

                  <h3>
                    {solution.title}
                  </h3>

                  <p>
                    {solution.description}
                  </p>

                  <a href="/solutions">
                    Learn More

                    <b>
                      →
                    </b>

                  </a>

                </div>

              </article>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          CLIENTS
      ===================================================== */}

      <section
        className="clients-section"
        style={{
          "--clients-bg":
            `url(${clientsBackground})`,
        }}
      >

        <div className="clients-background" />

        <div className="clients-overlay" />

        <div className="
          section-heading
          center
          clients-heading
          reveal-on-scroll
        ">

          <span>
            TRUSTED WORLDWIDE
          </span>

          <h2>
            Built For Businesses
            <br />
            That Move The World.
          </h2>

          <p>
            NEWPOS works with payment
            organizations, financial
            institutions, retailers and
            technology partners across
            global markets.
          </p>

        </div>

        <div className="client-grid">

          <div className="
            client-logo
            reveal-on-scroll
          ">
            PAYMENT PARTNER
          </div>

          <div className="
            client-logo
            reveal-on-scroll
          ">
            RETAIL PARTNER
          </div>

          <div className="
            client-logo
            reveal-on-scroll
          ">
            BANKING PARTNER
          </div>

          <div className="
            client-logo
            reveal-on-scroll
          ">
            TECHNOLOGY PARTNER
          </div>

          <div className="
            client-logo
            reveal-on-scroll
          ">
            GLOBAL PARTNER
          </div>

          <div className="
            client-logo
            reveal-on-scroll
          ">
            PAYMENT NETWORK
          </div>

          <div className="
            client-logo
            reveal-on-scroll
          ">
            BUSINESS PARTNER
          </div>

          <div className="
            client-logo
            reveal-on-scroll
          ">
            STRATEGIC PARTNER
          </div>

        </div>

      </section>

      {/* =====================================================
          NEWS & EVENTS
      ===================================================== */}

      <section className="news-section">

        <div className="section-top">

          <div>

            <span>
              NEWS &amp; EVENTS
            </span>

            <h2>
              What&apos;s Happening
              <br />
              At NEWPOS.
            </h2>

          </div>

          <a
            href="/news"
            className="text-link"
          >
            View All News

            <b>
              →
            </b>

          </a>

        </div>

        <NewsCarousel />

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-cta">

        <div>

          <span>
            LET&apos;S WORK TOGETHER
          </span>

          <h2>
            Ready To Build
            <br />
            Better Payments?
          </h2>

          <p>
            Talk to NEWPOS about
            products, solutions,
            distribution, OEM
            collaboration or deployment.
          </p>

        </div>

        <div className="cta-actions">

          <a
            href="/contact"
            className="
              primary-button
              light
            "
          >
            Contact NEWPOS

            <b>
              →
            </b>

          </a>

          <a
            href="/products"
            className="cta-secondary-link"
          >
            Browse Products

            <b>
              ↗
            </b>

          </a>

        </div>

      </section>

    </main>
  );
}

export default Home;