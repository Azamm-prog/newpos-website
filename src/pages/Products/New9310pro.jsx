import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./New9310pro.css";

/* =========================================================
   IMAGES
========================================================= */

import heroImage from "../../assets/images/products/new9310pro-hero.jpg";
import performanceImage from "../../assets/images/products/new9310pro-performance.jpg";
import screenImage from "../../assets/images/products/new9310pro-screen.jpg";
import batteryImage from "../../assets/images/products/new9310pro-battery.jpg";
import connectivityImage from "../../assets/images/products/new9310pro-connectivity.jpg";
import cameraImage from "../../assets/images/products/new9310pro-camera.jpg";

import paymentQrImage from "../../assets/images/products/new9310pro-payment-qr.jpg";
import paymentIcImage from "../../assets/images/products/new9310pro-payment-ic.jpg";
import paymentMagneticImage from "../../assets/images/products/new9310pro-payment-magnetic.jpg";
import paymentContactlessImage from "../../assets/images/products/new9310pro-payment-contactless.jpg";
import paymentNfcImage from "../../assets/images/products/new9310pro-payment-nfc.jpg";

import app1Image from "../../assets/images/products/new9310pro-app-1.jpg";
import app2Image from "../../assets/images/products/new9310pro-app-2.jpg";
import app3Image from "../../assets/images/products/new9310pro-app-3.jpg";
import app4Image from "../../assets/images/products/new9310pro-app-4.jpg";


/* =========================================================
   HERO HIGHLIGHTS
========================================================= */

const highlights = [
  {
    number: "01",
    label: "CPU",
    value: "Quad-Core Cortex-A53 2.0GHz",
  },
  {
    number: "02",
    label: "DISPLAY",
    value: '6.5" IPS HD+',
  },
  {
    number: "03",
    label: "BATTERY",
    value: "4000mAh / 15.4Wh",
  },
  {
    number: "04",
    label: "CAMERA",
    value: "2MP / 5MP / 13MP",
  },
  {
    number: "05",
    label: "CONNECT",
    value: "4G / Wi-Fi / Bluetooth 5.0",
  },
];


/* =========================================================
   PAYMENT METHODS
========================================================= */

const paymentMethods = [
  {
    number: "01",
    name: "QR Code",
    tag: "CODE PAYMENT",
    image: paymentQrImage,
  },
  {
    number: "02",
    name: "IC Card",
    tag: "CHIP & PIN",
    image: paymentIcImage,
  },
  {
    number: "03",
    name: "Magnetic",
    tag: "MAGNETIC STRIPE",
    image: paymentMagneticImage,
  },
  {
    number: "04",
    name: "Contactless",
    tag: "CONTACTLESS",
    image: paymentContactlessImage,
  },
  {
    number: "05",
    name: "NFC",
    tag: "NEAR FIELD",
    image: paymentNfcImage,
  },
];


/* =========================================================
   APPLICATIONS
========================================================= */

const applications = [
  {
    number: "01",
    name: "Restaurants",
    image: app1Image,
    text:
      "Flexible payment deployment for restaurant counters, dining and merchant environments.",
  },
  {
    number: "02",
    name: "Retail",
    image: app2Image,
    text:
      "Professional transaction hardware for modern stores and retail operations.",
  },
  {
    number: "03",
    name: "Banks",
    image: app3Image,
    text:
      "Secure payment technology for financial and transaction-focused environments.",
  },
  {
    number: "04",
    name: "Government",
    image: app4Image,
    text:
      "Adaptable payment technology for institutional and public-service deployments.",
  },
];


/* =========================================================
   SPECIFICATIONS
========================================================= */

const specifications = [
  [
    "Operating System",
    "Asmart, Powered by Android 13",
  ],
  [
    "Processor",
    "Cortex A53 Quad-Core, 2.0GHz + Secure Processor",
  ],
  [
    "Memory",
    "2GB RAM + 8GB Flash / 2GB RAM + 16GB ROM optional / 3GB RAM + 32GB ROM optional / TF card up to 512GB",
  ],
  [
    "Card Readers",
    "Magnetic Stripe / Chip & PIN / Contactless",
  ],
  [
    "Camera",
    "Front 2MP Fixed Focus / Rear 5MP Auto Focus with flashlight / Rear 13MP Auto Focus optional",
  ],
  [
    "Display",
    '6.5" IPS HD+ 720 × 1600 Pixels / Multi-Point Capacitive Touch Screen',
  ],
  [
    "Wireless Communication",
    "4G / 3G / 2G / Wi-Fi 802.11 a/b/g/n 2.4G & 5G / Bluetooth 5.0",
  ],
  [
    "Battery",
    "3.85V / 4000mAh / 15.4Wh rechargeable Li-ion battery",
  ],
  [
    "Card Slots",
    "2 Nano SIM + 1 SAM + 1 TF / 2 Nano SIM + 1 TF optional / 1 Nano SIM + 1 SAM + 1 TF optional / eSIM optional",
  ],
  [
    "Positioning",
    "GPS / GLONASS / BEIDOU / AGPS",
  ],
  [
    "Keys / Buttons",
    "1 Power ON/OFF / 1 Volume+ / 1 Volume- / Secure virtual keypad for PIN entry",
  ],
  [
    "Audio",
    "1 Speaker / 1 Microphone optional",
  ],
  [
    "Ports",
    "1 USB Type-C OTG / 5 PIN POGO PIN",
  ],
  [
    "Adapter",
    "Input: 100–240V AC, 50/60Hz / Output: 5.0V DC, 2.0A",
  ],
  [
    "Physical",
    "173.4 × 77.5 × 16.3mm / 280g including battery",
  ],
  [
    "Operating Environment",
    "0°C–50°C / 5%–90% RH non-condensing",
  ],
  [
    "Storage Environment",
    "−20°C–60°C / 5%–95% RH non-condensing",
  ],
  [
    "Accessories",
    "NEW9310Pro Base Station with Type-C power, USB Type-A, Ethernet RJ45, RS232 RJ11 and 5 PIN POGO PIN",
  ],
  [
    "Certifications",
    "PCI PTS 6.x / EMV L1 & L2 / EMV CL1 / Visa PayWave / MasterCard PayPass / UnionPay QuickPass / American Express / Discover D-PAS / JCB J/Speedy / MasterCard TQM / CE / ROHS / Felica / VCCI-b / JATE / MIC / GMS / IP3X",
  ],
];


/* =========================================================
   REVEAL
========================================================= */

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".new9310pro-reveal"
    );

    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) =>
        item.classList.add("is-visible")
      );

      return;
    }

    items.forEach((item, index) => {
      item.style.setProperty(
        "--reveal-delay",
        `${Math.min(index % 5, 4) * 70}ms`
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    items.forEach((item) =>
      observer.observe(item)
    );

    return () => observer.disconnect();
  }, []);
}


/* =========================================================
   FEATURE SECTION
========================================================= */

function FeatureSection({
  number,
  eyebrow,
  title,
  accent,
  text,
  image,
  reverse = false,
  dark = false,
}) {
  return (
    <section
      className={[
        "new9310pro-feature",
        reverse
          ? "new9310pro-feature-reverse"
          : "",
        dark
          ? "new9310pro-feature-dark"
          : "",
      ].join(" ")}
    >
      <div className="new9310pro-feature-image">
        <img
          src={image}
          alt={`NEW9310Pro ${eyebrow}`}
          loading="lazy"
        />

        <span className="new9310pro-feature-image-index">
          {number}
        </span>
      </div>

      <div className="new9310pro-feature-copy new9310pro-reveal">
        <span className="new9310pro-overline">
          {eyebrow}
        </span>

        <span className="new9310pro-feature-number">
          {number}
        </span>

        <h2>
          {title}
          <strong>{accent}</strong>
        </h2>

        <p>{text}</p>

        <span className="new9310pro-feature-rule" />
      </div>
    </section>
  );
}


/* =========================================================
   SHOWCASE
========================================================= */

function Showcase({
  title,
  description,
  items,
  isPayment = false,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = items[activeIndex];

  return (
    <div className="new9310pro-showcase">
      <div className="new9310pro-showcase-visual">
        <div className="new9310pro-showcase-image">
          <img
            key={current.name}
            src={current.image}
            alt={`NEW9310Pro ${current.name}`}
          />
        </div>

        <div className="new9310pro-showcase-gradient" />

        <div className="new9310pro-showcase-caption">
          <span>
            {isPayment
              ? current.tag
              : "BUSINESS SCENARIO"}
          </span>

          <h3>{current.name}</h3>

          {!isPayment && (
            <p>{current.text}</p>
          )}
        </div>

        <div className="new9310pro-showcase-page">
          <strong>
            {String(activeIndex + 1).padStart(2, "0")}
          </strong>

          <span />

          <small>
            {String(items.length).padStart(2, "0")}
          </small>
        </div>
      </div>

      <div className="new9310pro-showcase-menu">
        <div className="new9310pro-showcase-menu-header">
          <div>
            <span>
              {isPayment
                ? "PAYMENT METHODS"
                : "APPLICATIONS"}
            </span>

            <h3>{title}</h3>
          </div>

          <small>
            SELECT TO EXPLORE
          </small>
        </div>

        <p className="new9310pro-showcase-description">
          {description}
        </p>

        <div className="new9310pro-showcase-items">
          {items.map((item, index) => {
            const active =
              index === activeIndex;

            return (
              <button
                type="button"
                key={item.name}
                className={
                  active ? "active" : ""
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
                aria-pressed={active}
              >
                <span>
                  {item.number ||
                    String(index + 1).padStart(
                      2,
                      "0"
                    )}
                </span>

                <strong>{item.name}</strong>

                <b>→</b>
              </button>
            );
          })}
        </div>

        <div className="new9310pro-showcase-footer">
          <span>
            NEWPOS TECHNOLOGY
          </span>

          <strong>
            {current.name}
          </strong>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function New9310pro() {
  useReveal();

  return (
    <main className="new9310pro-page">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="new9310pro-hero">

        <img
          src={heroImage}
          alt="NEW9310Pro Smart POS Terminal"
          className="new9310pro-hero-background"
          fetchPriority="high"
        />

        <div className="new9310pro-hero-overlay" />

        <div className="new9310pro-hero-inner">

          <div className="new9310pro-hero-copy new9310pro-reveal">

            <span className="new9310pro-overline hero-overline">
              SMART POS TERMINAL
            </span>

            <h1>
              NEW9310
              <em>Pro</em>
            </h1>

            <h2>
              Leading the new
              <br />
              fashion of payment.
            </h2>

            <p>
              A professional smart POS terminal
              designed for contemporary payment
              experiences, powerful performance and
              connected business environments.
            </p>

            <div className="new9310pro-hero-buttons">

              <Link
                to="/contact"
                className="new9310pro-button-primary"
              >
                Request Information
                <span>→</span>
              </Link>

              <a
                href="#new9310pro-content"
                className="new9310pro-button-text"
              >
                Explore Product
                <span>↓</span>
              </a>

            </div>

          </div>


          <div className="new9310pro-hero-side new9310pro-reveal">

            <span className="new9310pro-hero-side-number">
              01
            </span>

            <span className="new9310pro-hero-side-line" />

            <span className="new9310pro-hero-side-label">
              NEW9310PRO
            </span>

          </div>


          <div className="new9310pro-hero-specs">

            <div>
              <span>DISPLAY</span>
              <strong>6.5" HD+</strong>
            </div>

            <div>
              <span>BATTERY</span>
              <strong>4000mAh</strong>
            </div>

            <div>
              <span>WEIGHT</span>
              <strong>280g</strong>
            </div>

          </div>

        </div>
      </section>


      {/* ===================================================
          HIGHLIGHT STRIP
      =================================================== */}

      <section className="new9310pro-highlights">

        <div className="new9310pro-highlights-inner">

          {highlights.map((item) => (
            <div
              className="new9310pro-highlight"
              key={item.number}
            >

              <span className="new9310pro-highlight-number">
                {item.number}
              </span>

              <div>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section
        id="new9310pro-content"
        className="new9310pro-intro"
      >

        <div className="new9310pro-intro-copy new9310pro-reveal">

          <span className="new9310pro-overline">
            NEW9310PRO
          </span>

          <h2>
            Built around
            <strong>
              modern payment.
            </strong>
          </h2>

          <p>
            NEW9310Pro brings professional payment
            hardware together with a modern Android
            platform, large touch display, flexible
            connectivity and comprehensive transaction
            support.
          </p>

        </div>


        <div className="new9310pro-intro-display new9310pro-reveal">

          <div className="new9310pro-intro-display-number">
            6.5"
          </div>

          <div>
            <strong>LARGE HD+</strong>
            <span>TOUCH DISPLAY</span>
          </div>

        </div>

      </section>


      {/* ===================================================
          PERFORMANCE
      =================================================== */}

      <FeatureSection
        number="02"
        eyebrow="HIGH PERFORMANCE"
        title="Performance and"
        accent="experience."
        text="A Cortex-A53 Quad-Core processor running at 2.0GHz works together with a secure processor to deliver a responsive and dependable platform for everyday payment operations."
        image={performanceImage}
        dark
      />


      {/* ===================================================
          DISPLAY
      =================================================== */}

      <FeatureSection
        number="03"
        eyebrow="SPLENDID LARGE SCREEN DISPLAY"
        title="A clearer and"
        accent="larger interaction."
        text='The 6.5-inch IPS HD+ display delivers a spacious 720 × 1600 pixel interface with multi-point capacitive touch for comfortable merchant and customer interaction.'
        image={screenImage}
        reverse
      />


      {/* ===================================================
          BATTERY
      =================================================== */}

      <FeatureSection
        number="04"
        eyebrow="EXTRA LARGE BATTERY"
        title="From morning to night,"
        accent="worry-free battery life."
        text="The rechargeable 3.85V / 4000mAh Li-ion battery provides 15.4Wh of energy for extended daily operation in demanding payment environments."
        image={batteryImage}
        dark
      />


      {/* ===================================================
          CONNECTION
      =================================================== */}

      <FeatureSection
        number="05"
        eyebrow="ALL SOLUTIONS FOR FULL CONNECTION"
        title="Connected wherever"
        accent="business happens."
        text="Support for 4G, 3G, 2G, dual-band Wi-Fi and Bluetooth 5.0 keeps NEW9310Pro connected across modern payment and business environments."
        image={connectivityImage}
        reverse
      />


      {/* ===================================================
          CAMERA
      =================================================== */}

      <section className="new9310pro-camera">

        <div className="new9310pro-camera-image">

          <img
            src={cameraImage}
            alt="NEW9310Pro dual camera"
            loading="lazy"
          />

          <div className="new9310pro-camera-index">
            06
          </div>

        </div>


        <div className="new9310pro-camera-copy new9310pro-reveal">

          <span className="new9310pro-overline">
            DUAL CAMERA
          </span>

          <h2>
            Capture.
            <strong>
              Scan. Pay.
            </strong>
          </h2>

          <p>
            NEW9310Pro extends beyond traditional
            payment with front and rear cameras
            designed for scanning and smart
            application workflows.
          </p>


          <div className="new9310pro-camera-details">

            <div>
              <strong>2MP</strong>
              <span>FRONT</span>
            </div>

            <div>
              <strong>5MP</strong>
              <span>REAR AF</span>
            </div>

            <div>
              <strong>13MP</strong>
              <span>OPTIONAL</span>
            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          CONFIGURATION
      =================================================== */}

      <section className="new9310pro-configuration">

        <div className="new9310pro-configuration-copy new9310pro-reveal">

          <span className="new9310pro-overline">
            CONFIGURATION
          </span>

          <h2>
            Configure it.
            <strong>
              Your way.
            </strong>
          </h2>

          <p>
            Flexible hardware configurations make
            NEW9310Pro adaptable to different
            deployment and business requirements.
          </p>

        </div>


        <div className="new9310pro-configuration-list">

          <div className="new9310pro-configuration-item new9310pro-reveal">
            <span>01</span>

            <div>
              <strong>2GB RAM + 8GB Flash</strong>
              <p>Standard configuration</p>
            </div>

            <b>→</b>
          </div>

          <div className="new9310pro-configuration-item new9310pro-reveal">
            <span>02</span>

            <div>
              <strong>2GB RAM + 16GB ROM</strong>
              <p>Optional configuration</p>
            </div>

            <b>→</b>
          </div>

          <div className="new9310pro-configuration-item new9310pro-reveal">
            <span>03</span>

            <div>
              <strong>3GB RAM + 32GB ROM</strong>
              <p>Optional configuration</p>
            </div>

            <b>→</b>
          </div>

          <div className="new9310pro-configuration-item new9310pro-reveal">
            <span>04</span>

            <div>
              <strong>Up to 512GB TF Card</strong>
              <p>Expanded storage support</p>
            </div>

            <b>→</b>
          </div>

        </div>

      </section>


      {/* ===================================================
          PAYMENTS
      =================================================== */}

      <section className="new9310pro-showcase-section">

        <div className="new9310pro-section-heading new9310pro-reveal">

          <span>SUPPORTING ALL PAYMENTS</span>

          <h2>
            One device.
            <strong>
              Multiple ways to pay.
            </strong>
          </h2>

          <p>
            Comprehensive support for QR, chip,
            magnetic stripe, contactless and NFC
            payment experiences.
          </p>

        </div>

        <Showcase
          title="Payment Methods"
          description="Select a payment method to explore."
          items={paymentMethods}
          isPayment
        />

      </section>


      {/* ===================================================
          APPLICATIONS
      =================================================== */}

      <section className="new9310pro-showcase-section new9310pro-showcase-section-light">

        <div className="new9310pro-section-heading new9310pro-reveal">

          <span>FLEXIBLE ADAPTABILITY</span>

          <h2>
            One device.
            <strong>
              Many possibilities.
            </strong>
          </h2>

          <p>
            Designed to adapt to different merchant,
            financial and institutional environments.
          </p>

        </div>

        <Showcase
          title="Business Scenarios"
          description="Select a scenario to explore."
          items={applications}
        />

      </section>


      {/* ===================================================
          SPECIFICATIONS
      =================================================== */}

      <section className="new9310pro-specifications">

        <div className="new9310pro-section-heading new9310pro-reveal">

          <span>TECHNICAL SPECIFICATIONS</span>

          <h2>
            Professional
            <strong>
              by design.
            </strong>
          </h2>

          <p>
            Complete technical information for
            evaluation, integration and deployment.
          </p>

        </div>


        <div className="new9310pro-spec-grid">

          {specifications.map(
            ([label, value], index) => (
              <article
                className="new9310pro-spec-card new9310pro-reveal"
                key={`${label}-${index}`}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <small>
                  {label}
                </small>

                <strong>
                  {value}
                </strong>

              </article>
            )
          )}

        </div>

      </section>


      {/* ===================================================
          CTA
      =================================================== */}

      <section className="new9310pro-cta">

        <div className="new9310pro-cta-glow" />

        <div className="new9310pro-cta-content new9310pro-reveal">

          <span>
            NEW POS TECHNOLOGY
          </span>

          <h2>
            Ready to explore
            <strong>
              NEW9310Pro?
            </strong>
          </h2>

          <p>
            Contact NEWPOS for product information,
            specifications, samples and business
            cooperation.
          </p>

          <div className="new9310pro-cta-actions">

            <Link
              to="/contact"
              className="new9310pro-button-primary"
            >
              Contact NEWPOS
              <span>→</span>
            </Link>

            <Link
              to="/products"
              className="new9310pro-button-text"
            >
              Back To Products
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}