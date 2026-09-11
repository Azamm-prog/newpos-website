import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import "./New9830.css";

/* =========================================================
   IMAGES
========================================================= */

import new9830Hero
  from "../../assets/images/products/new9830-hero.jpg";

import new9830Overview
  from "../../assets/images/products/new9830-overview.jpg";

import new9830Screen
  from "../../assets/images/products/new9830-screen.jpg";

import new9830Battery
  from "../../assets/images/products/new9830-battery.jpg";

import new9830Tough
  from "../../assets/images/products/new9830-tough.jpg";

import new9830Configurations
  from "../../assets/images/products/new9830-configurations.jpg";

import new9830PaymentQr
  from "../../assets/images/products/new9830-payment-qr.jpg";

import new9830PaymentChip
  from "../../assets/images/products/new9830-payment-chip.jpg";

import new9830PaymentMagnetic
  from "../../assets/images/products/new9830-payment-magnetic.jpg";

import new9830PaymentMobile
  from "../../assets/images/products/new9830-payment-mobile.jpg";

import new9830Retail
  from "../../assets/images/products/new9830-retail.jpg";

import new9830Restaurant
  from "../../assets/images/products/new9830-restaurant.jpg";

import new9830Hospital
  from "../../assets/images/products/new9830-hospital.jpg";

import new9830Bank
  from "../../assets/images/products/new9830-bank.jpg";

import new9830Hotel
  from "../../assets/images/products/new9830-hotel.jpg";


/* =========================================================
   HIGHLIGHTS
========================================================= */

const highlights = [
  [
    "CPU",
    "Cortex-A53 Octa-Core, 2.0GHz",
  ],
  [
    "OS",
    "Android 13 / Optional Android 15",
  ],
  [
    "Display",
    '6.745" HD+',
  ],
  [
    "Memory",
    "Up to 4GB RAM / 64GB Flash",
  ],
  [
    "Battery",
    "7.7V / 3420mAh",
  ],
];


/* =========================================================
   OPTIONS
========================================================= */

const options = [
  "Customer display",
  "Scanning",
  "Fiscal module",
  "Magnetic charging",
];


/* =========================================================
   PAYMENTS
========================================================= */

const payments = [
  {
    name: "1D & 2D QR",
    image: new9830PaymentQr,
    description:
      "Fast and convenient QR payment acceptance for modern digital transactions.",
  },
  {
    name: "IC Card",
    image: new9830PaymentChip,
    description:
      "Secure chip-card payment acceptance for reliable everyday transactions.",
  },
  {
    name: "Magnetic Card",
    image: new9830PaymentMagnetic,
    description:
      "Flexible magnetic stripe payment support for broad acceptance.",
  },
  {
    name: "Mobile Payment",
    image: new9830PaymentMobile,
    description:
      "Convenient mobile payment experiences for modern customers.",
  },
];


/* =========================================================
   APPLICATIONS
========================================================= */

const applications = [
  {
    name: "Retail",
    image: new9830Retail,
  },
  {
    name: "Restaurant",
    image: new9830Restaurant,
  },
  {
    name: "Hospital",
    image: new9830Hospital,
  },
  {
    name: "Bank",
    image: new9830Bank,
  },
  {
    name: "Hotel",
    image: new9830Hotel,
  },
];


/* =========================================================
   SPECIFICATIONS
========================================================= */

const specifications = [
  [
    "OS",
    "Asmart, Powered by Android 13 / Optional Android 15",
  ],
  [
    "Processor",
    "Cortex A53 Octa-Core, 2.0GHz + Secure Processor",
  ],
  [
    "Memory",
    "2GB RAM + 8GB Flash / 2GB RAM + 16GB Flash / microSD up to 256GB",
  ],
  [
    "Card Readers",
    "Magnetic Stripe / ISO7816 EMV / Contactless NFC",
  ],
  [
    "Cameras",
    "Front 2MP / Top optional 2MP or 13MP AF with flashlight",
  ],
  [
    "Scanner",
    "Top 1D/2D professional scanner",
  ],
  [
    "Display",
    '6.745" IPS HD+ 720 × 1600 / Multi-Point Capacitive Touch',
  ],
  [
    "Wireless",
    "2G/3G/4G / Wi-Fi 2.4GHz & 5GHz / Bluetooth 5.0",
  ],
  [
    "Battery",
    "7.6V/2500mAh or 7.7V/3420mAh polymer battery",
  ],
  [
    "Printer",
    "90mm/sec / 40mm outer diameter / 58mm paper width",
  ],
  [
    "Card Slots",
    "2 Micro SIM + 2 Mini SAM + 1 Micro SD / optional eSIM",
  ],
  [
    "Positioning",
    "GPS / GLONASS / BEIDOU / GALILEO",
  ],
  [
    "Ports",
    "USB Type-C OTG / POGO PIN",
  ],
  [
    "Physical",
    "192.5 × 81 × 57mm / 430g including 2500mAh battery",
  ],
  [
    "Operating Environment",
    "0°C–50°C / 5%–95% RH non-condensing",
  ],
  [
    "Certifications",
    "PCI PTS 6.x / EMV L1 & L2 / EMV CL1 / PayWave / PayPass / UnionPay QuickPass / CE / RoHS and others",
  ],
];


/* =========================================================
   REVEAL
========================================================= */

function useNew9830Reveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".new9830-reveal"
    );

    if (!elements.length) {
      return undefined;
    }

    elements.forEach(
      (element, index) => {
        element.style.setProperty(
          "--new9830-delay",
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
          threshold: 0.08,
          rootMargin:
            "0px 0px -45px 0px",
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
   PAYMENT SHOWCASE
========================================================= */

function PaymentShowcase() {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const activePayment =
    payments[activeIndex];

  return (
    <div className="new9830-payment-showcase">

      <div className="new9830-payment-visual new9830-reveal">

        <div className="new9830-payment-image-wrap">

          {payments.map(
            (
              payment,
              index
            ) => (
              <img
                key={payment.name}
                src={payment.image}
                alt={`NEW9830 ${payment.name} payment`}
                className={
                  `new9830-payment-slide ${
                    index === activeIndex
                      ? "active"
                      : ""
                  }`
                }
                loading={
                  index === 0
                    ? "eager"
                    : "lazy"
                }
              />
            )
          )}

        </div>

        <div className="new9830-payment-image-overlay" />

        <div className="new9830-payment-image-label">

          <span>
            NEW9830
          </span>

          <strong>
            {activePayment.name}
          </strong>

        </div>

        <div className="new9830-payment-index">

          <span>
            {String(
              activeIndex + 1
            ).padStart(2, "0")}
          </span>

          <i />

          <span>
            {String(
              payments.length
            ).padStart(2, "0")}
          </span>

        </div>

      </div>


      <div className="new9830-payment-navigation new9830-reveal">

        <div className="new9830-payment-nav-top">

          <span>
            PAYMENT METHODS
          </span>

          <small>
            HOVER TO EXPLORE
          </small>

        </div>


        <div className="new9830-payment-buttons">

          {payments.map(
            (
              payment,
              index
            ) => {

              const isActive =
                index === activeIndex;

              return (
                <button
                  type="button"
                  key={payment.name}
                  className={
                    `new9830-payment-button ${
                      isActive
                        ? "active"
                        : ""
                    }`
                  }
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  onFocus={() =>
                    setActiveIndex(index)
                  }
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  aria-pressed={
                    isActive
                  }
                >

                  <span className="new9830-payment-number">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <span className="new9830-payment-content">

                    <strong>
                      {payment.name}
                    </strong>

                    <small>
                      {payment.description}
                    </small>

                  </span>

                  <span className="new9830-payment-arrow">
                    →
                  </span>

                </button>
              );
            }
          )}

        </div>


        <div className="new9830-payment-nav-footer">

          <span>
            NEWPOS SMART PAYMENT
          </span>

          <span>
            {activePayment.name.toUpperCase()}
          </span>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   APPLICATION SHOWCASE
========================================================= */

function ApplicationShowcase() {

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const activeApplication =
    applications[activeIndex];

  return (
    <div className="new9830-application-showcase">

      <div className="new9830-application-visual new9830-reveal">

        <div className="new9830-application-image-wrap">

          {applications.map(
            (
              application,
              index
            ) => (
              <img
                key={application.name}
                src={application.image}
                alt={`NEW9830 ${application.name}`}
                className={
                  `new9830-application-slide ${
                    index === activeIndex
                      ? "active"
                      : ""
                  }`
                }
                loading={
                  index === 0
                    ? "eager"
                    : "lazy"
                }
              />
            )
          )}

        </div>

        <div className="new9830-application-image-overlay" />

        <div className="new9830-application-image-label">

          <span>
            NEW9830
          </span>

          <strong>
            {activeApplication.name}
          </strong>

        </div>

        <div className="new9830-application-index">

          <span>
            {String(
              activeIndex + 1
            ).padStart(2, "0")}
          </span>

          <i />

          <span>
            {String(
              applications.length
            ).padStart(2, "0")}
          </span>

        </div>

      </div>


      <div className="new9830-application-navigation new9830-reveal">

        <div className="new9830-application-nav-top">

          <span>
            APPLICATIONS
          </span>

          <small>
            HOVER TO EXPLORE
          </small>

        </div>


        <div className="new9830-application-buttons">

          {applications.map(
            (
              application,
              index
            ) => {

              const isActive =
                index === activeIndex;

              return (
                <button
                  type="button"
                  key={application.name}
                  className={
                    `new9830-application-button ${
                      isActive
                        ? "active"
                        : ""
                    }`
                  }
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  onFocus={() =>
                    setActiveIndex(index)
                  }
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  aria-pressed={
                    isActive
                  }
                >

                  <span className="new9830-application-number">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <span className="new9830-application-content">

                    <strong>
                      {application.name}
                    </strong>

                    <small>
                      NEW9830
                    </small>

                  </span>

                  <span className="new9830-application-arrow">
                    →
                  </span>

                </button>
              );
            }
          )}

        </div>


        <div className="new9830-application-nav-footer">

          <span>
            NEWPOS SMART PAYMENT
          </span>

          <span>
            {activeApplication.name.toUpperCase()}
          </span>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function New9830() {

  useNew9830Reveal();

  return (
    <main className="new9830-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="new9830-hero"
        style={{
          backgroundImage:
            `linear-gradient(
              90deg,
              rgba(3,17,38,.96) 0%,
              rgba(3,17,38,.86) 34%,
              rgba(3,17,38,.42) 62%,
              rgba(3,17,38,.08) 100%
            ),
            url(${new9830Hero})`,
        }}
      >

        <div className="new9830-hero-content new9830-reveal">

          <span className="new9830-kicker">
            SMART POS TERMINAL
          </span>

          <h1>
            NEW9830
          </h1>

          <p className="new9830-hero-tagline">
            One device to solve all
            <br />
            your payment needs.
          </p>

          <p className="new9830-hero-description">
            A powerful smart POS platform
            combining advanced processing,
            a large HD+ display and flexible
            payment acceptance.
          </p>

          <div className="new9830-hero-divider" />

          <div className="new9830-hero-actions">

            <Link
              to="/contact"
              className="new9830-primary-button"
            >
              Request Information
              <b>→</b>
            </Link>

            <a
              href="#new9830-overview"
              className="new9830-hero-scroll"
            >
              Explore Product
              <span>↓</span>
            </a>

          </div>

        </div>


        <div className="new9830-hero-meta">

          <span>
            NEWPOS
          </span>

          <span>
            SMART POS / NEW9830
          </span>

        </div>


        <div className="new9830-hero-index">

          <span>01</span>

          <i />

          <span>PRODUCT</span>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="new9830-key-strip">

        <div className="new9830-key-inner">

          {highlights.map(
            (
              [label, value],
              index
            ) => (
              <div
                key={`${label}-${index}`}
                className="new9830-key-item new9830-reveal"
              >

                <span className="new9830-key-number">
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>

                <div>

                  <span className="new9830-key-label">
                    {label}
                  </span>

                  <strong>
                    {value}
                  </strong>

                </div>

              </div>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section
        className="new9830-overview"
        id="new9830-overview"
      >

        <div className="new9830-overview-copy new9830-reveal">

          <span className="new9830-section-label">
            NEW9830
          </span>

          <h2>
            One device to solve
            <strong>
              all your payment needs.
            </strong>
          </h2>

          <p>
            NEW9830 combines a large
            6.745-inch HD+ display,
            high-performance processing,
            broad payment support and
            flexible configuration options
            into one professional terminal.
          </p>

          <p>
            Powered by Android 13 with
            optional Android 15, it is
            designed for modern payment
            environments across multiple
            business scenarios.
          </p>

          <div className="new9830-overview-line">

            <span>01</span>

            <i />

            <span>SMART POS</span>

          </div>

        </div>


        <div className="new9830-overview-stage new9830-reveal">

          <img
            src={new9830Overview}
            alt="NEW9830 product overview"
            loading="lazy"
          />

          <div className="new9830-overview-label">

            <span>
              NEWPOS
            </span>

            <strong>
              NEW9830
            </strong>

          </div>

        </div>

      </section>


      {/* =====================================================
          PERFORMANCE
      ===================================================== */}

      <section className="new9830-performance">

        <img
          src={new9830Configurations}
          alt="NEW9830 performance"
          className="new9830-performance-image"
          loading="lazy"
        />

        <div className="new9830-performance-shade" />

        <div className="new9830-performance-content new9830-reveal">

          <span>
            LATEST GENERATION PERFORMANCE
          </span>

          <h2>
            Performance for
            <strong>
              the next generation.
            </strong>
          </h2>

          <p>
            NEW9830 uses a 2.0GHz
            Cortex-A53 Octa-Core
            processing platform together
            with secure processing
            architecture for demanding
            payment applications.
          </p>

          <div className="new9830-editorial-number">
            02
          </div>

        </div>

      </section>


      {/* =====================================================
          SCREEN
      ===================================================== */}

      <section className="new9830-editorial screen-editorial">

        <div className="new9830-editorial-image new9830-screen-image new9830-reveal">

          <img
            src={new9830Screen}
            alt="NEW9830 6.745 inch HD+ display"
            loading="lazy"
          />

          <span className="new9830-editorial-image-number">
            03
          </span>

        </div>


        <div className="new9830-editorial-copy new9830-reveal">

          <span>
            MAXIMUM SCREEN SIZE
          </span>

          <h2>
            A bigger screen.
            <strong>
              A better experience.
            </strong>
          </h2>

          <p>
            The 6.745-inch HD+ display
            gives merchants and customers
            more room for interaction while
            keeping the terminal practical
            for daily use.
          </p>

          <div className="new9830-editorial-stat">

            <strong>
              6.745"
            </strong>

            <span>
              IPS HD+ display
            </span>

          </div>

          <div className="new9830-editorial-stat">

            <strong>
              720 × 1600
            </strong>

            <span>
              HD+ touchscreen resolution
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          BATTERY
      ===================================================== */}

      <section className="new9830-editorial reversed">

        <div className="new9830-editorial-copy new9830-reveal">

          <span>
            LARGE-CAPACITY BATTERY
          </span>

          <h2>
            More power.
            <strong>
              More possibilities.
            </strong>
          </h2>

          <p>
            The polymer battery platform
            supports up to a 7.7V/3420mAh
            configuration for longer
            operating time.
          </p>

          <div className="new9830-editorial-stat">

            <strong>
              7.7V / 3420mAh
            </strong>

            <span>
              Maximum battery configuration
            </span>

          </div>

        </div>


        <div className="new9830-editorial-image portrait-image new9830-reveal">

          <img
            src={new9830Battery}
            alt="NEW9830 battery"
            loading="lazy"
          />

        </div>

      </section>


      {/* =====================================================
          DURABILITY
      ===================================================== */}

      <section className="new9830-durability">

        <div className="new9830-durability-image portrait-image new9830-reveal">

          <img
            src={new9830Tough}
            alt="NEW9830 durability"
            loading="lazy"
          />

        </div>


        <div className="new9830-durability-copy new9830-reveal">

          <span>
            BUILT TOUGH
          </span>

          <h2>
            Ready for
            <strong>
              demanding environments.
            </strong>
          </h2>

          <p>
            NEW9830 has successfully
            passed a 1.2-meter marble
            drop test according to NEWPOS,
            supporting reliable use in
            demanding business environments.
          </p>

          <div className="new9830-durability-metric">

            <strong>
              1.2M
            </strong>

            <span>
              Marble drop test
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONFIGURATIONS
      ===================================================== */}

      <section className="new9830-configurations">

        <img
          src={new9830Configurations}
          alt="NEW9830 configuration options"
          className="new9830-configurations-image"
          loading="lazy"
        />

        <div className="new9830-configurations-shade" />

        <div className="new9830-configurations-content new9830-reveal">

          <span>
            MORE CONFIGURATION OPTIONS
          </span>

          <h2>
            Configure it
            <strong>
              your way.
            </strong>
          </h2>

          <div className="new9830-option-list">

            {options.map(
              (
                option,
                index
              ) => (
                <div
                  key={option}
                  className="new9830-option"
                >

                  <span>
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <strong>
                    {option}
                  </strong>

                  <b>
                    →
                  </b>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          PAYMENTS
      ===================================================== */}

      <section className="new9830-payments">

        <div className="new9830-section-heading new9830-reveal">

          <span>
            SUPPORTING ALL PAYMENTS
          </span>

          <h2>
            One device.
            <strong>
              Multiple ways to pay.
            </strong>
          </h2>

          <p>
            Flexible payment support for
            modern transaction environments.
          </p>

        </div>

        <PaymentShowcase />

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="new9830-applications">

        <div className="new9830-section-heading new9830-reveal">

          <span>
            FLEXIBLE ADAPTABILITY
          </span>

          <h2>
            One device.
            <strong>
              Many possibilities.
            </strong>
          </h2>

          <p>
            Explore how NEW9830 adapts to
            different business environments.
          </p>

        </div>

        <ApplicationShowcase />

      </section>


      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section className="new9830-specifications">

        <div className="new9830-spec-heading new9830-reveal">

          <span>
            SPECIFICATIONS
          </span>

          <h2>
            Technical
            <strong>
              details.
            </strong>
          </h2>

          <p>
            Core information for the
            NEW9830 platform.
          </p>

        </div>


        <div className="new9830-spec-table">

          {specifications.map(
            (
              [label, value],
              index
            ) => (
              <div
                className="new9830-spec-row new9830-reveal"
                key={`${label}-${index}`}
              >

                <span>
                  {label}
                </span>

                <strong>
                  {value}
                </strong>

              </div>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="new9830-cta">

        <img
          src={new9830Overview}
          alt=""
          aria-hidden="true"
          className="new9830-cta-image"
          loading="lazy"
        />

        <div className="new9830-cta-overlay" />

        <div className="new9830-cta-inner new9830-reveal">

          <span>
            NEWPOS TECHNOLOGY
          </span>

          <h2>
            Ready to explore
            <strong>
              NEW9830?
            </strong>
          </h2>

          <p>
            Contact NEWPOS for product
            information, specifications,
            samples and business cooperation.
          </p>

          <div className="new9830-cta-actions">

            <Link
              to="/contact"
              className="new9830-primary-button"
            >
              Contact NEWPOS
              <b>→</b>
            </Link>

            <Link
              to="/products"
              className="new9830-cta-secondary"
            >
              Back To Products
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}