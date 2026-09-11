import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Solutions.css";

import tmsHero from "../assets/images/solutions/solutions-hero-bg.jpg";
import financeImage from "../assets/images/solutions/tms-finance.jpg";
import hotelImage from "../assets/images/solutions/tms-hotel.jpg";
import foodImage from "../assets/images/solutions/tms-food.jpg";
import operationsBackground from "../assets/images/solutions/operations-bg.jpg";

/* =========================================================
   TMS ADVANTAGES
========================================================= */

const advantages = [
  {
    number: "01",
    title: "Efficient Terminal Management",
    text:
      "Supports individual and batch terminal deployment, giving partners flexible ways to manage and configure payment devices efficiently.",
  },

  {
    number: "02",
    title: "Comprehensive Application Management",
    text:
      "Manage application upload, release, queries and updates through a centralized process that simplifies terminal operations.",
  },

  {
    number: "03",
    title: "Real-Time Monitoring & Remote Management",
    text:
      "Track terminal status, perform remote configuration and support maintenance activities to improve device stability and utilization.",
  },

  {
    number: "04",
    title: "Flexible User Management",
    text:
      "Configure user access and permissions across the management environment to support controlled operation and data security.",
  },

  {
    number: "05",
    title: "Intelligent Operations",
    text:
      "Remote management and monitoring provide greater visibility into terminal operation, helping teams respond quickly to operational needs.",
  },

  {
    number: "06",
    title: "Support Across Industries",
    text:
      "TMS can support payment environments across industries including finance, hospitality, food services and other business sectors.",
  },
];


/* =========================================================
   APPLICATION SCENARIOS
========================================================= */

const scenarios = [
  {
    number: "01",
    title: "Financial Payment",
    image: financeImage,
    text:
      "Support payment terminal deployment, monitoring and remote management in financial payment environments.",
  },

  {
    number: "02",
    title: "Hotel Industry",
    image: hotelImage,
    text:
      "Support connected payment terminals and remote operational management across hospitality environments.",
  },

  {
    number: "03",
    title: "Food Industry",
    image: foodImage,
    text:
      "Help manage payment infrastructure across restaurants, food services and high-volume transaction environments.",
  },
];


/* =========================================================
   SCROLL REVEAL
========================================================= */

function useTmsReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll(".tms-reveal");

    if (!elements.length) {
      return undefined;
    }

    elements.forEach((element, index) => {
      element.style.setProperty(
        "--tms-delay",
        `${(index % 6) * 65}ms`
      );
    });

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin:
            "0px 0px -35px 0px",
        }
      );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}


/* =========================================================
   TERMINAL MANAGEMENT PAGE
========================================================= */

function TerminalManagement() {
  useTmsReveal();

  return (
    <main className="tms-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tms-hero">

        <div
          className="tms-hero-background"
          style={{
            backgroundImage: `url(${tmsHero})`,
          }}
        />

        <div className="tms-hero-overlay" />

        <div className="
          tms-hero-content
          tms-reveal
        ">

          <span className="tms-eyebrow">
            NEWPOS / SOLUTIONS / TMS
          </span>

          <h1>
            Terminal
            <br />
            <strong>
              Management System.
            </strong>
          </h1>

          <p>
            Improve terminal management
            efficiency and create intelligent
            operations with centralized
            deployment, monitoring,
            remote support and terminal
            management capabilities.
          </p>

          <div className="tms-hero-actions">

            <Link
              to="/contact"
              className="tms-primary-button"
            >
              Talk To Us
              <b>→</b>
            </Link>

            <a
              href="#tms-advantages"
              className="tms-secondary-button"
            >
              Explore TMS
              <span>↓</span>
            </a>

          </div>

        </div>

        <div className="
          tms-hero-side
          tms-reveal
        ">

          <span>
            SOLUTION
          </span>

          <strong>
            01
          </strong>

          <small>
            TERMINAL MANAGEMENT
          </small>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="tms-intro">

        <div className="
          tms-intro-label
          tms-reveal
        ">

          <span>
            OVERVIEW
          </span>

          <strong>
            01
          </strong>

        </div>


        <div className="
          tms-intro-content
          tms-reveal
        ">

          <span>
            INTELLIGENT TERMINAL OPERATIONS
          </span>

          <h2>
            Manage More.
            <br />
            <strong>
              Operate Smarter.
            </strong>
          </h2>

          <p>
            The NEWPOS Terminal Management
            System provides partners with
            centralized tools for payment
            terminal deployment, equipment
            status monitoring, remote
            management and support.
          </p>

          <p>
            Designed for different terminal
            environments, TMS helps simplify
            operational processes while giving
            management teams greater visibility
            and control over connected devices.
          </p>

        </div>

      </section>


      {/* =====================================================
          ADVANTAGES
      ===================================================== */}

      <section
        className="tms-advantages"
        id="tms-advantages"
      >

        <div className="
          tms-section-heading
          tms-reveal
        ">

          <div>

            <span>
              SOLUTION ADVANTAGE
            </span>

            <h2>
              Built For
              <br />
              <strong>
                Intelligent Operations.
              </strong>
            </h2>

          </div>

          <p>
            TMS combines deployment,
            application management,
            monitoring and user controls
            into one connected management
            environment.
          </p>

        </div>


        <div className="tms-advantage-grid">

          {advantages.map(
            (item) => (
              <article
                key={item.number}
                className="
                  tms-advantage-card
                  tms-reveal
                "
              >

                <div className="
                  tms-advantage-top
                ">

                  <span>
                    {item.number}
                  </span>

                  <b>
                    ↗
                  </b>

                </div>


                <div className="
                  tms-advantage-content
                ">

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
          WORKFLOW
      ===================================================== */}

      <section className="tms-workflow">

        <div className="
          tms-workflow-heading
          tms-reveal
        ">

          <span>
            HOW TMS WORKS
          </span>

          <h2>
            One Management
            <br />
            <strong>
              Environment.
            </strong>
          </h2>

          <p>
            A centralized operating model
            for deploying, monitoring,
            supporting and maintaining
            connected payment terminals.
          </p>

        </div>


        <div className="tms-workflow-grid">

          <article className="
            tms-workflow-step
            tms-reveal
          ">

            <span>
              01
            </span>

            <strong>
              DEPLOY
            </strong>

            <p>
              Configure and deploy individual
              or batches of payment terminals.
            </p>

          </article>


          <article className="
            tms-workflow-step
            tms-reveal
          ">

            <span>
              02
            </span>

            <strong>
              MANAGE
            </strong>

            <p>
              Control applications, terminal
              settings, users and operational
              configurations.
            </p>

          </article>


          <article className="
            tms-workflow-step
            tms-reveal
          ">

            <span>
              03
            </span>

            <strong>
              MONITOR
            </strong>

            <p>
              Track device status and identify
              operational conditions remotely.
            </p>

          </article>


          <article className="
            tms-workflow-step
            tms-reveal
          ">

            <span>
              04
            </span>

            <strong>
              SUPPORT
            </strong>

            <p>
              Perform remote management and
              respond to device issues efficiently.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          APPLICATION SCENARIOS
      ===================================================== */}

      <section className="tms-scenarios">

        <div className="
          tms-section-heading
          tms-reveal
        ">

          <div>

            <span>
              APPLICATION SCENARIOS
            </span>

            <h2>
              Designed For
              <br />
              <strong>
                Real Businesses.
              </strong>
            </h2>

          </div>

          <p>
            TMS can be applied across
            different payment environments
            where connected terminal
            management is required.
          </p>

        </div>


        <div className="tms-scenario-grid">

          {scenarios.map(
            (scenario) => (
              <article
                key={scenario.number}
                className="
                  tms-scenario-card
                  tms-reveal
                "
              >

                <div className="
                  tms-scenario-image
                ">

                  <img
                    src={scenario.image}
                    alt={scenario.title}
                  />

                  <div className="
                    tms-scenario-image-overlay
                  " />

                  <span>
                    {scenario.number}
                  </span>

                </div>


                <div className="
                  tms-scenario-content
                ">

                  <h3>
                    {scenario.title}
                  </h3>

                  <p>
                    {scenario.text}
                  </p>

                </div>

              </article>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          VALUE
      ===================================================== */}

      <section 
        className="tms-value"
        style={{
          "--tms-value-bg": `url(${operationsBackground})`,
        }}
      >

        <div className="
          tms-value-content
          tms-reveal
        ">

          <span>
            BUSINESS VALUE
          </span>

          <h2>
            Greater Control.
            <br />
            <strong>
              Better Operations.
            </strong>
          </h2>

          <p>
            By bringing deployment,
            application management,
            monitoring and remote support
            into one environment, TMS helps
            partners improve terminal
            management efficiency and
            operational visibility.
          </p>

        </div>


        <div className="
          tms-value-points
          tms-reveal
        ">


        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="tms-cta">

        <div className="tms-cta-grid" />

        <div className="
          tms-cta-content
          tms-reveal
        ">

          <span>
            NEWPOS / TERMINAL MANAGEMENT
          </span>

          <h2>
            Build Smarter
            <br />
            <strong>
              Terminal Operations.
            </strong>
          </h2>

          <p>
            Talk to NEWPOS about TMS,
            deployment requirements,
            terminal management and
            connected payment operations.
          </p>

        </div>


        <Link
          to="/contact"
          className="
            tms-cta-button
            tms-reveal
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

export default TerminalManagement;