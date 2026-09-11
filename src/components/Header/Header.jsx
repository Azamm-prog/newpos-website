import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import new9810 from "../../assets/images/products/new9810.png";
import new9800 from "../../assets/images/products/new9800.png";
import new9830 from "../../assets/images/products/new9830.png";
import new9310 from "../../assets/images/products/new9310.png";
import new9810pro from "../../assets/images/products/new9810pro.png";
import new9220 from "../../assets/images/products/new9220.png";

import "./Header.css";


/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const productCategories = [
  {
    number: "01",
    title: "Smart POS",
    description:
      "Advanced smart payment terminals.",
    image: new9810,
  },

  {
    number: "02",
    title: "Classic POS",
    description:
      "Reliable everyday payment terminals.",
    image: new9800,
  },

  {
    number: "03",
    title: "Unattended Terminals",
    description:
      "Self-service payment solutions.",
    image: new9830,
  },

  {
    number: "04",
    title: "Cloud Speaker",
    description:
      "Connected payment notification.",
    image: new9310,
  },

  {
    number: "05",
    title: "Accessories",
    description:
      "Supporting payment accessories.",
    image: new9810pro,
  },

  {
    number: "06",
    title: "Smart ECR",
    description:
      "Smart retail cash register solutions.",
    image: new9220,
  },
];


/* =========================================================
   SOLUTIONS
========================================================= */

const solutions = [
  {
    number: "01",
    short: "TMS",
    title: "Terminal Management System",
    description:
      "Remote terminal management, deployment and monitoring.",
  },

  {
    number: "02",
    short: "VIEW",
    title: "NewViewer",
    description:
      "Remote POS assistance through the NEWPOS cloud platform.",
  },

  {
    number: "03",
    short: "RKI",
    title: "Remote Key Injection",
    description:
      "Secure remote key injection for large terminal fleets.",
  },

  {
    number: "04",
    short: "MIS",
    title: "Cloud MIS",
    description:
      "Cloud-based transaction and business management.",
  },
];


/* =========================================================
   HEADER
========================================================= */

function Header() {
  const [searchOpen, setSearchOpen] =
    useState(false);

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const searchInputRef =
    useRef(null);


  /* =======================================================
     SEARCH AUTO FOCUS
  ======================================================= */

  useEffect(() => {
    if (
      searchOpen &&
      searchInputRef.current
    ) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);


  /* =======================================================
     HEADER SCROLL STATE
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {

      const hero =
        document.querySelector(
          ".home-hero-slider"
        );

      if (!hero) {

        setScrolled(
          window.scrollY > 20
        );

        return;
      }

      const heroBottom =
        hero.getBoundingClientRect().bottom;

      const headerHeight = 70;

      setScrolled(
        heroBottom <= headerHeight
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);


  /* =======================================================
     KEYBOARD ESCAPE
  ======================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {

        setSearchOpen(false);
        setLanguageOpen(false);
        setMobileOpen(false);

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


  /* =======================================================
     CLOSE EVERYTHING
  ======================================================= */

  const closeMenus = () => {

    setSearchOpen(false);
    setLanguageOpen(false);
    setMobileOpen(false);

  };


  return (
    <>

      <header
        className={`site-header ${
          scrolled
            ? "header-scrolled"
            : ""
        }`}
      >

        <div className="header-inner">


          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="header-logo"
            onClick={closeMenus}
          >

            <span className="header-logo-main">
              NEWPOS
            </span>

            <span className="header-logo-sub">
              PAYMENT TECHNOLOGY
            </span>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="header-nav">


            {/* HOME */}

            <Link
              to="/"
              className="header-nav-link"
              onClick={closeMenus}
            >
              Home
            </Link>


            {/* PRODUCTS */}

            <div className="header-nav-item">

              <Link
                to="/products"
                className="header-nav-link has-menu"
              >

                Product

                <span className="nav-chevron">
                  ↓
                </span>

              </Link>


              <div className="products-dropdown">

                <div className="mega-dropdown-inner">

                  <div className="mega-top">

                    <div>

                      <span className="mega-eyebrow">
                        NEWPOS / PRODUCT PORTFOLIO
                      </span>

                      <h2>
                        Payment Products
                        <br />
                        <strong>
                          For Every Scenario.
                        </strong>
                      </h2>

                      <p>
                        Explore NEWPOS payment
                        hardware for modern
                        business environments.
                      </p>

                    </div>


                    <Link
                      to="/products"
                      className="mega-view-all"
                      onClick={closeMenus}
                    >
                      View All Products

                      <span>
                        →
                      </span>

                    </Link>

                  </div>


                  <div className="mega-product-grid">

                    {productCategories.map(
                      (category) => (

                        <Link
                          key={category.title}
                          to="/products"
                          className="mega-product-card"
                          onClick={closeMenus}
                        >

                          <div className="mega-card-number">
                            {category.number}
                          </div>

                          <div className="mega-card-image">

                            <img
                              src={category.image}
                              alt={category.title}
                            />

                          </div>

                          <div className="mega-card-content">

                            <h3>
                              {category.title}
                            </h3>

                            <p>
                              {category.description}
                            </p>

                          </div>

                        </Link>

                      )
                    )}

                  </div>


                  <div className="mega-bottom">

                    <span>
                      SMART PAYMENT
                    </span>

                    <span>
                      GLOBAL HARDWARE
                    </span>

                    <span>
                      SECURE TECHNOLOGY
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* SOLUTIONS */}

            <div className="header-nav-item">

              <Link
                to="/solutions"
                className="header-nav-link has-menu"
              >

                Solution

                <span className="nav-chevron">
                  ↓
                </span>

              </Link>


              <div className="solution-dropdown">

                <div className="solution-dropdown-header">

                  <div>

                    <span>
                      NEWPOS / SOLUTIONS
                    </span>

                    <h3>
                      Connected Payment Infrastructure.
                    </h3>

                  </div>

                  <Link
                    to="/solutions"
                    onClick={closeMenus}
                  >
                    All Solutions →
                  </Link>

                </div>


                <div className="solution-dropdown-grid">

                  {solutions.map(
                    (solution) => (

                      <Link
                        key={solution.title}
                        to="/solutions"
                        className="solution-dropdown-card"
                        onClick={closeMenus}
                      >

                        <span className="solution-dropdown-number">
                          {solution.number}
                        </span>

                        <span className="solution-dropdown-code">
                          {solution.short}
                        </span>

                        <h4>
                          {solution.title}
                        </h4>

                        <p>
                          {solution.description}
                        </p>

                        <span className="solution-dropdown-arrow">
                          →
                        </span>

                      </Link>

                    )
                  )}

                </div>

              </div>

            </div>


            {/* CONTACT / SERVICE */}

            <div className="header-nav-item">

              <Link
                to="/contact"
                className="header-nav-link has-menu"
              >

                Contact &amp; Service

                <span className="nav-chevron">
                  ↓
                </span>

              </Link>


              <div className="simple-dropdown">

                <div className="simple-dropdown-heading">
                  CONTACT &amp; SERVICE
                </div>

                <Link
                  to="/contact"
                  onClick={closeMenus}
                >
                  Contact Us
                  <span>→</span>
                </Link>

                <Link
                  to="/service"
                  onClick={closeMenus}
                >
                  Training &amp; Service
                  <span>→</span>
                </Link>

                <Link
                  to="/cooperation-case"
                  onClick={closeMenus}
                >
                  Cooperation Case
                  <span>→</span>
                </Link>

              </div>

            </div>


            {/* ABOUT */}

            <div className="header-nav-item">

              <Link
                to="/about"
                className="header-nav-link has-menu"
              >

                About Us

                <span className="nav-chevron">
                  ↓
                </span>

              </Link>


              <div className="simple-dropdown">

                <div className="simple-dropdown-heading">
                  ABOUT US
                </div>

                <Link
                  to="/about"
                  onClick={closeMenus}
                >
                  About Us
                  <span>→</span>
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenus}
                >
                  Company History
                  <span>→</span>
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenus}
                >
                  Company Culture
                  <span>→</span>
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenus}
                >
                  Company Address
                  <span>→</span>
                </Link>

              </div>

            </div>


            {/* NEWS */}

            <Link
              to="/news"
              className="header-nav-link"
              onClick={closeMenus}
            >
              News
            </Link>

          </nav>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="header-actions">


            {/* SEARCH */}

            <div
              className={`header-search ${
                searchOpen
                  ? "is-open"
                  : ""
              }`}
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.2"
                />

                <path d="M16 16L21 21" />

              </svg>


              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search..."
                onFocus={() =>
                  setSearchOpen(true)
                }
              />


              {searchOpen && (
                <button
                  type="button"
                  className="header-search-close"
                  onClick={() =>
                    setSearchOpen(false)
                  }
                  aria-label="Close search"
                >
                  ×
                </button>
              )}

            </div>


            {/* LANGUAGE */}

            <div className="language-selector">

              <button
                type="button"
                className="language-button"
                onClick={() => {

                  setLanguageOpen(
                    (value) => !value
                  );

                  setSearchOpen(false);
                  setMobileOpen(false);

                }}
              >

                <span>
                  EN
                </span>

                <span className="language-chevron">
                  ↓
                </span>

              </button>


              <div
                className={`language-dropdown ${
                  languageOpen
                    ? "is-open"
                    : ""
                }`}
              >

                <button
                  type="button"
                  className="active-language"
                  onClick={() =>
                    setLanguageOpen(false)
                  }
                >
                  English
                  <span>✓</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setLanguageOpen(false)
                  }
                >
                  中文
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setLanguageOpen(false)
                  }
                >
                  Português
                </button>

              </div>

            </div>


            {/* CONTACT */}

            <Link
              to="/contact?type=sales"
              className="header-contact-button"
              onClick={closeMenus}
            >

              Contact Sales

              <b>
                →
              </b>

            </Link>


            {/* MOBILE MENU */}

            <button
              type="button"
              className={`mobile-menu-button ${
                mobileOpen
                  ? "active"
                  : ""
              }`}
              onClick={() => {

                setMobileOpen(
                  (value) => !value
                );

                setSearchOpen(false);
                setLanguageOpen(false);

              }}
              aria-label="Open navigation"
              aria-expanded={mobileOpen}
            >

              <span />
              <span />
              <span />

            </button>

          </div>

        </div>


        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        <div
          className={`mobile-navigation ${
            mobileOpen
              ? "is-open"
              : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenus}
          >
            Home
          </Link>


          <details>

            <summary>
              Products
              <span>+</span>
            </summary>

            <div className="mobile-submenu">

              {productCategories.map(
                (category) => (

                  <Link
                    key={category.title}
                    to="/products"
                    onClick={closeMenus}
                  >
                    {category.title}
                  </Link>

                )
              )}

            </div>

          </details>


          <details>

            <summary>
              Solutions
              <span>+</span>
            </summary>

            <div className="mobile-submenu">

              {solutions.map(
                (solution) => (

                  <Link
                    key={solution.title}
                    to="/solutions"
                    onClick={closeMenus}
                  >
                    {solution.title}
                  </Link>

                )
              )}

            </div>

          </details>


          <details>

            <summary>
              Contact &amp; Service
              <span>+</span>
            </summary>

            <div className="mobile-submenu">

              <Link
                to="/contact"
                onClick={closeMenus}
              >
                Contact Us
              </Link>

              <Link
                to="/service"
                onClick={closeMenus}
              >
                Training &amp; Service
              </Link>

              <Link
                to="/cooperation-case"
                onClick={closeMenus}
              >
                Cooperation Case
              </Link>

            </div>

          </details>


          <details>

            <summary>
              About Us
              <span>+</span>
            </summary>

            <div className="mobile-submenu">

              <Link
                to="/about"
                onClick={closeMenus}
              >
                About Us
              </Link>

              <Link
                to="/about"
                onClick={closeMenus}
              >
                Company History
              </Link>

              <Link
                to="/about"
                onClick={closeMenus}
              >
                Company Culture
              </Link>

              <Link
                to="/about"
                onClick={closeMenus}
              >
                Company Address
              </Link>

            </div>

          </details>


          <Link
            to="/news"
            onClick={closeMenus}
          >
            News
          </Link>


          <Link
            to="/contact?type=sales"
            onClick={closeMenus}
          >
            Contact Sales
          </Link>

        </div>

      </header>


      {(searchOpen || mobileOpen) && (
        <div
          className="header-backdrop"
          onClick={closeMenus}
        />
      )}

    </>
  );
}

export default Header;