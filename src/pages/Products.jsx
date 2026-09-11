import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import "./Products.css";


/* =========================================================
   PRODUCT PAGE IMAGES
========================================================= */

import productsHeroBg from "../assets/images/products/products-hero-bg.jpg";

import connectedWorldBg from "../assets/images/products/connected-world-bg.jpg";

import classicPosImage from "../assets/images/products/classic-pos.jpg";
import unattendedImage from "../assets/images/products/unattended.jpg";
import cloudSpeakerImage from "../assets/images/products/cloud-speaker.jpg";
import accessoriesImage from "../assets/images/products/accessories.jpg";
import smartEcrImage from "../assets/images/products/smart-ecr.jpg";


/* =========================================================
   SMART POS
========================================================= */

import new9810 from "../assets/images/products/new9810.png";
import new9800 from "../assets/images/products/new9800.png";
import new9830 from "../assets/images/products/new9830.png";
import new9310pro from "../assets/images/products/new9310pro.png";
import new9310 from "../assets/images/products/new9310.png";
import new9310base from "../assets/images/products/new9310base.png";
import new9310proBase from "../assets/images/products/new9310pro-base.png";
import new9220 from "../assets/images/products/new9220.png";
import new9010 from "../assets/images/products/new9010.png";


/* =========================================================
   CLASSIC POS
========================================================= */

import new2010 from "../assets/images/products/new2010.png";
import new2020 from "../assets/images/products/new2020.png";
import new2030 from "../assets/images/products/new2030.png";
import new5010 from "../assets/images/products/new5010.png";
import new5320 from "../assets/images/products/new5320.png";
import new6260 from "../assets/images/products/new6260.png";
import new6260p from "../assets/images/products/new6260p.png";
import new7220 from "../assets/images/products/new7220.png";


/* =========================================================
   UNATTENDED
========================================================= */

import nop210 from "../assets/images/products/nop-210.png";
import nop608t from "../assets/images/products/nop-608t.png";


/* =========================================================
   CLOUD SPEAKER / CONNECTED
========================================================= */

import mdp726 from "../assets/images/products/mdp726.png";
import mdp810 from "../assets/images/products/mdp810.png";
import mdp820 from "../assets/images/products/mdp820.png";
import mdp910 from "../assets/images/products/mdp910.png";
import n98 from "../assets/images/products/n98.png";


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    name: "NEW9810",
    slug: "new9810",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A modern smart payment terminal designed for secure, dependable and connected electronic payment environments.",
    image: new9810,
    featured: true,
  },

  {
    name: "NEW9800",
    slug: "new9800",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A professional smart POS platform designed for modern business and payment environments.",
    image: new9800,
    featured: true,
  },

  {
    name: "NEW9830",
    slug: "new9830",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A flexible smart payment platform designed for demanding retail and business scenarios.",
    image: new9830,
    featured: true,
  },

  {
    name: "NEW9310",
    slug: "new9310",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A professional smart payment terminal developed for dependable everyday transaction environments.",
    image: new9310,
    featured: true,
  },

  {
    name: "NEW9310Pro",
    slug: "new9310pro",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A connected smart POS terminal designed around contemporary payment experiences.",
    image: new9310pro,
    featured: true,
  },

  {
    name: "NEW9310",
    slug: "new9310",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A full-screen smart POS platform designed for modern payment environments.",
    image: new9310,
    featured: false,
  },

  {
    name: "NEW9310 Base",
    slug: "new9310base",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "NEW9310 hardware configuration for flexible payment terminal deployment.",
    image: new9310base,
    featured: false,
  },

  {
    name: "NEW9310Pro Base",
    slug: "new9310pro-base",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "NEW9310Pro hardware configuration for professional payment environments.",
    image: new9310proBase,
    featured: false,
  },

  {
    name: "NEW9220",
    slug: "new9220",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A portable smart payment platform designed for modern merchant environments.",
    image: new9220,
    featured: false,
  },

  {
    name: "NEW9010",
    slug: "new9010",
    type: "Smart POS Terminal",
    category: "Smart POS",
    description:
      "A practical smart payment terminal designed for reliable day-to-day use.",
    image: new9010,
    featured: false,
  },


  /* =======================================================
     CLASSIC POS
  ======================================================= */

  {
    name: "NEW2010",
    slug: "new2010",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "A dependable classic POS platform for established electronic payment environments.",
    image: new2010,
    featured: false,
  },

  {
    name: "NEW2020",
    slug: "new2020",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "Classic payment hardware designed for practical point-of-sale deployment.",
    image: new2020,
    featured: false,
  },

  {
    name: "NEW2030",
    slug: "new2030",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "A classic POS terminal designed for everyday transaction processing.",
    image: new2030,
    featured: false,
  },

  {
    name: "NEW5010",
    slug: "new5010",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "Professional classic POS hardware for dependable merchant payment operations.",
    image: new5010,
    featured: false,
  },

  {
    name: "NEW5320",
    slug: "new5320",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "A practical payment terminal platform for established point-of-sale environments.",
    image: new5320,
    featured: false,
  },

  {
    name: "NEW6260",
    slug: "new6260",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "Reliable POS hardware designed for everyday electronic payment deployments.",
    image: new6260,
    featured: false,
  },

  {
    name: "NEW6260P",
    slug: "new6260p",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "A POS terminal configuration designed for flexible merchant payment applications.",
    image: new6260p,
    featured: false,
  },

  {
    name: "NEW7220",
    slug: "new7220",
    type: "Classic POS Terminal",
    category: "Classic POS",
    description:
      "Classic payment hardware developed for dependable merchant deployment.",
    image: new7220,
    featured: false,
  },


  /* =======================================================
     UNATTENDED
  ======================================================= */

  {
    name: "NOP-210",
    slug: "nop-210",
    type: "Unattended Payment",
    category: "Unattended",
    description:
      "Payment hardware designed for self-service and unattended transaction environments.",
    image: nop210,
    featured: false,
  },

  {
    name: "NOP-608T",
    slug: "nop-608t",
    type: "Unattended Payment",
    category: "Unattended",
    description:
      "A specialized unattended payment terminal for automated transaction scenarios.",
    image: nop608t,
    featured: false,
  },


  /* =======================================================
     CLOUD SPEAKER
  ======================================================= */

  {
    name: "MDP726",
    slug: "mdp726",
    type: "Cloud Speaker",
    category: "Cloud Speaker",
    description:
      "Connected payment notification hardware designed to improve transaction visibility.",
    image: mdp726,
    featured: false,
  },

  {
    name: "MDP810",
    slug: "mdp810",
    type: "Cloud Speaker",
    category: "Cloud Speaker",
    description:
      "Cloud-connected payment notification technology for modern merchant environments.",
    image: mdp810,
    featured: false,
  },

  {
    name: "MDP820",
    slug: "mdp820",
    type: "Cloud Speaker",
    category: "Cloud Speaker",
    description:
      "Connected transaction notification hardware for convenient merchant operations.",
    image: mdp820,
    featured: false,
  },

  {
    name: "MDP910",
    slug: "mdp910",
    type: "Cloud Speaker",
    category: "Cloud Speaker",
    description:
      "A connected cloud speaker platform designed for payment transaction notifications.",
    image: mdp910,
    featured: false,
  },

  {
    name: "N98",
    slug: "n98",
    type: "Connected Device",
    category: "Cloud Speaker",
    description:
      "A connected payment device designed to support modern transaction environments.",
    image: n98,
    featured: false,
  },
];


/* =========================================================
   PRODUCT FAMILIES
========================================================= */

const families = [
  {
    number: "01",
    category: "Smart POS",
    title: "Smart POS",
    description:
      "Intelligent payment terminals for modern retail, banking, hospitality and business environments.",
    image: productsHeroBg,
  },

  {
    number: "02",
    category: "Classic POS",
    title: "Classic POS",
    description:
      "Reliable payment hardware for everyday electronic transaction processing.",
    image: classicPosImage,
  },

  {
    number: "03",
    category: "Unattended",
    title: "Unattended",
    description:
      "Payment technology designed for self-service and unattended environments.",
    image: unattendedImage,
  },

  {
    number: "04",
    category: "Cloud Speaker",
    title: "Cloud Speaker",
    description:
      "Connected payment notification technology for convenient transaction confirmation.",
    image: cloudSpeakerImage,
  },

  {
    number: "05",
    category: "Smart ECR",
    title: "Smart ECR",
    description:
      "Smart retail and electronic cash register solutions for connected merchant environments.",
    image: smartEcrImage,
  },

  {
    number: "06",
    category: "Accessories",
    title: "Accessories",
    description:
      "Supporting hardware and accessories for complete payment deployments.",
    image: accessoriesImage,
  },
];


/* =========================================================
   WHY NEWPOS
========================================================= */

const benefits = [
  {
    number: "01",
    title: "Secure",
    text:
      "Payment hardware developed around dependable and controlled electronic payment environments.",
  },

  {
    number: "02",
    title: "Connected",
    text:
      "Products designed for modern environments where communication and connectivity are essential.",
  },

  {
    number: "03",
    title: "Reliable",
    text:
      "Professional hardware intended for consistent day-to-day business operation.",
  },

  {
    number: "04",
    title: "Flexible",
    text:
      "A broad portfolio supports different merchant environments and payment scenarios.",
  },
];


/* =========================================================
   REVEAL
========================================================= */

function useProductReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll(
        ".products-reveal"
      );

    if (!elements.length) {
      return undefined;
    }

    elements.forEach(
      (element, index) => {
        element.style.setProperty(
          "--product-delay",
          `${(index % 6) * 60}ms`
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
            0.06,

          rootMargin:
            "0px 0px -35px 0px",
        }
      );

    elements.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);
}


/* =========================================================
   PRODUCTS
========================================================= */

function Products() {
  useProductReveal();

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    searchQuery,
    setSearchQuery,
  ] = useState("");


  /* =======================================================
     CATEGORIES
  ======================================================= */

  const categories = [
    "All",
    "Smart POS",
    "Classic POS",
    "Unattended",
    "Cloud Speaker",
    "Smart ECR",
    "Accessories",
  ];


  /* =======================================================
     FILTERED PRODUCTS
  ======================================================= */

  const filteredProducts =
    useMemo(() => {
      const query =
        searchQuery
          .trim()
          .toLowerCase();

      return products.filter(
        (product) => {

          const categoryMatch =
            activeCategory === "All" ||
            product.category ===
              activeCategory;

          const searchMatch =
            !query ||
            product.name
              .toLowerCase()
              .includes(query) ||
            product.type
              .toLowerCase()
              .includes(query) ||
            product.category
              .toLowerCase()
              .includes(query) ||
            product.description
              .toLowerCase()
              .includes(query);

          return (
            categoryMatch &&
            searchMatch
          );
        }
      );
    }, [
      activeCategory,
      searchQuery,
    ]);


  /* =======================================================
     FEATURED
  ======================================================= */

  const featuredProducts =
    products.filter(
      (product) =>
        product.featured
    );


  /* =======================================================
     CATEGORY DESCRIPTION
  ======================================================= */

  const categoryDescription =
    activeCategory === "All"
      ? "Explore the currently loaded NEWPOS payment product portfolio."
      : `Explore the ${activeCategory} product range.`;


  /* =======================================================
     FILTER HANDLER
  ======================================================= */

  const changeCategory =
    (category) => {

      setActiveCategory(
        category
      );

      setSearchQuery("");

      requestAnimationFrame(
        () => {
          document
            .getElementById(
              "product-range"
            )
            ?.scrollIntoView({
              behavior:
                "smooth",
              block:
                "start",
            });
        }
      );
    };


  return (
    <main
      className="
        products-page
      "
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          product-hero
        "
      >

        <div
          className="
            product-hero-background
          "
          style={{
            backgroundImage:
              `url(${productsHeroBg})`,
          }}
        />

        <div
          className="
            product-hero-overlay
          "
        />


        <div
          className="
            product-hero-content
            products-reveal
          "
        >

          <span
            className="
              product-eyebrow
            "
          >
            NEWPOS / PRODUCT CATALOG
          </span>


          <h1>
            Payment
            <br />
            <strong>
              Products.
            </strong>
          </h1>


          <p>
            Explore NEWPOS payment terminals,
            connected devices and specialized
            payment products designed for
            different business environments.
          </p>


          <div
            className="
              product-hero-actions
            "
          >

            <a
              href="#product-range"
              className="
                product-primary-button
              "
            >
              Explore Catalog
              <b>↓</b>
            </a>


            <Link
              to="/contact?type=products"
              className="
                product-secondary-button
              "
            >
              Request Product Information
            </Link>

          </div>


          <div
            className="
              product-hero-meta
            "
          >

            <span>
              SMART POS
            </span>

            <span>
              CLASSIC POS
            </span>

            <span>
              UNATTENDED
            </span>

            <span>
              CONNECTED
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="
          product-intro
        "
      >

        <div
          className="
            product-intro-heading
            products-reveal
          "
        >

          <span>
            PRODUCT PHILOSOPHY
          </span>


          <h2>
            Built For The
            <br />
            <strong>
              Way Businesses Pay.
            </strong>
          </h2>

        </div>


        <div
          className="
            product-intro-copy
            products-reveal
          "
        >

          <p>
            NEWPOS develops payment products
            for businesses, institutions and
            payment environments that require
            dependable hardware and modern
            technology.
          </p>

          <p>
            From smart POS terminals to classic
            and specialized payment devices,
            the portfolio is designed to support
            different business requirements and
            transaction scenarios.
          </p>

        </div>

      </section>


      {/* =====================================================
          FEATURED SMART POS
      ===================================================== */}

      <section
        className="
          product-featured
        "
      >

        <div
          className="
            product-featured-copy
            products-reveal
          "
        >

          <span
            className="
              product-section-label
            "
          >
            FEATURED SMART POS
          </span>


          <h2>
            Modern Payment.
            <br />
            <strong>
              Built For Business.
            </strong>
          </h2>


          <p>
            Explore selected NEWPOS smart POS
            terminals designed around modern
            business and payment environments.
          </p>

        </div>


        <div
          className="
            product-featured-grid
          "
        >

          {featuredProducts.map(
            (product) => (

              <Link
                key={
                  product.slug
                }
                to={
                  `/products/${product.slug}`
                }
                className="
                  product-featured-card
                  products-reveal
                "
              >

                <div
                  className="
                    product-featured-image
                  "
                >

                  <img
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                    loading="lazy"
                  />


                  <span>
                    {
                      product.category
                    }
                  </span>

                </div>


                <div
                  className="
                    product-featured-card-content
                  "
                >

                  <small>
                    {
                      product.type
                    }
                  </small>


                  <h3>
                    {
                      product.name
                    }
                  </h3>


                  <p>
                    {
                      product.description
                    }
                  </p>


                  <span
                    className="
                      product-card-link
                    "
                  >
                    View Product
                    <b>
                      →
                    </b>
                  </span>

                </div>

              </Link>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          WHY NEWPOS
      ===================================================== */}

      <section
        className="
          product-benefits
        "
      >

        <div
          className="
            product-section-heading
            products-reveal
          "
        >

          <span>
            WHY NEWPOS
          </span>


          <h2>
            Payment Hardware
            <br />
            <strong>
              With Purpose.
            </strong>
          </h2>


          <p>
            Products designed around the
            requirements of real payment
            businesses and deployment
            environments.
          </p>

        </div>


        <div
          className="
            benefits-grid
          "
        >

          {benefits.map(
            (benefit) => (

              <article
                key={
                  benefit.number
                }
                className="
                  benefit-card
                  products-reveal
                "
              >

                <div
                  className="
                    benefit-top
                  "
                >

                  <span>
                    {
                      benefit.number
                    }
                  </span>

                  <b>
                    ↗
                  </b>

                </div>


                <div>

                  <h3>
                    {
                      benefit.title
                    }
                  </h3>

                  <p>
                    {
                      benefit.text
                    }
                  </p>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          PRODUCT FAMILIES
      ===================================================== */}

      <section
        className="
          product-families
        "
      >

        <div
          className="
            product-section-heading
            products-reveal
          "
        >

          <span>
            PRODUCT PORTFOLIO
          </span>


          <h2>
            One Portfolio.
            <br />
            <strong>
              Multiple Payment Scenarios.
            </strong>
          </h2>


          <p>
            Browse NEWPOS product families
            across payment, connectivity and
            supporting hardware categories.
          </p>

        </div>


        <div
          className="
            family-grid
          "
        >

          {families.map(
            (
              family,
              index
            ) => (

              <article
                key={
                  family.category
                }
                className={`
                  family-card
                  ${
                    index === 0
                      ? "family-featured"
                      : ""
                  }
                  ${
                    index === 3
                      ? "family-wide"
                      : ""
                  }
                  products-reveal
                `}
              >

                <div
                  className="
                    family-image
                  "
                >

                  <img
                    src={
                      family.image
                    }
                    alt={
                      family.title
                    }
                    loading="lazy"
                  />


                  <span
                    className="
                      family-number
                    "
                  >
                    {
                      family.number
                    }
                  </span>

                </div>


                <div
                  className="
                    family-content
                  "
                >

                  <span>
                    {
                      family.category.toUpperCase()
                    }
                  </span>


                  <h3>
                    {
                      family.title
                    }
                  </h3>


                  <p>
                    {
                      family.description
                    }
                  </p>


                  <button
                    type="button"
                    onClick={() =>
                      changeCategory(
                        family.category
                      )
                    }
                  >
                    Explore Products
                    <b>
                      →
                    </b>
                  </button>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          PRODUCT CATALOG
      ===================================================== */}

      <section
        className="
          product-range
        "
        id="product-range"
      >

        <div
          className="
            product-range-header
            products-reveal
          "
        >

          <div
            className="
              product-section-heading
            "
          >

            <span>
              PRODUCT CATALOG
            </span>


            <h2>
              Find The Right
              <br />
              <strong>
                Product.
              </strong>
            </h2>


            <p>
              Search and filter the NEWPOS
              product portfolio.
            </p>

          </div>


          {/* SEARCH */}

          <div
            className="
              catalog-search
            "
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

              <path
                d="
                  M16 16
                  L21 21
                "
              />

            </svg>


            <input
              type="search"
              value={
                searchQuery
              }
              onChange={
                (event) =>
                  setSearchQuery(
                    event.target.value
                  )
              }
              placeholder="Search products..."
              aria-label="Search products"
            />


            {searchQuery && (

              <button
                type="button"
                aria-label="Clear search"
                onClick={() =>
                  setSearchQuery("")
                }
              >
                ×
              </button>

            )}

          </div>

        </div>


        {/* FILTER BAR */}

        <div
          className="
            catalog-controls
            products-reveal
          "
        >

          <div
            className="
              product-filters
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
                    setActiveCategory(
                      category
                    )
                  }
                >
                  {
                    category
                  }
                </button>

              )
            )}

          </div>


          <div
            className="
              catalog-result
            "
          >

            <strong>
              {
                filteredProducts.length
              }
            </strong>

            <span>
              {
                filteredProducts.length ===
                1
                  ? "product"
                  : "products"
              }
            </span>

          </div>

        </div>


        <div
          className="
            catalog-status
          "
        >
          {
            categoryDescription
          }
        </div>


        {/* PRODUCT GRID */}

        <div
          className="
            product-range-grid
          "
        >

          {filteredProducts.map(
            (
              product,
              index
            ) => (

              <Link
                key={
                  product.slug
                }
                to={
                  `/products/${product.slug}`
                }
                className="
                  range-product-card
                  products-reveal
                  is-visible
                "
              >

                <div
                  className="
                    range-product-image
                  "
                >

                  <img
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                    loading="lazy"
                  />


                  <span
                    className="
                      range-product-number
                    "
                  >
                    {
                      String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )
                    }
                  </span>


                  <span
                    className="
                      range-product-category
                    "
                  >
                    {
                      product.category
                    }
                  </span>


                  {product.featured && (

                    <b
                      className="
                        range-featured
                      "
                    >
                      FEATURED
                    </b>

                  )}

                </div>


                <div
                  className="
                    range-product-info
                  "
                >

                  <small>
                    {
                      product.type
                    }
                  </small>


                  <h3>
                    {
                      product.name
                    }
                  </h3>


                  <p>
                    {
                      product.description
                    }
                  </p>


                  <span
                    className="
                      range-product-link
                    "
                  >
                    View Product
                    <b>
                      →
                    </b>
                  </span>

                </div>

              </Link>

            )
          )}

        </div>


        {/* EMPTY */}

        {filteredProducts.length ===
          0 && (

          <div
            className="
              product-empty
            "
          >

            <strong>
              No products found
            </strong>

            <span>
              Try another category or
              search term.
            </span>


            <button
              type="button"
              onClick={() => {
                setActiveCategory(
                  "All"
                );

                setSearchQuery(
                  ""
                );
              }}
            >
              Reset Catalog
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          CONNECTED WORLD
      ===================================================== */}

      <section
        className="
          product-spotlight
        "
        style={{
          "--connected-world-bg":
            `url(${connectedWorldBg})`,
        }}
      >

        <div
          className="
            spotlight-background
          "
        />

        <div
          className="
            spotlight-overlay
          "
        />


        <div
          className="
            spotlight-content
            products-reveal
          "
        >

          <span>
            NEWPOS TECHNOLOGY
          </span>


          <h2>
            Hardware For
            <br />
            <strong>
              A Connected World.
            </strong>
          </h2>


          <p>
            NEWPOS combines payment hardware,
            connectivity and supporting technology
            to help businesses operate dependable
            electronic payment environments.
          </p>


          <Link
            to="/solutions"
            className="
              spotlight-link
            "
          >
            Explore Payment Solutions

            <b>
              →
            </b>
          </Link>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          product-final-cta
        "
      >

        <div
          className="
            product-final-copy
            products-reveal
          "
        >

          <span>
            NEWPOS / PRODUCTS
          </span>


          <h2>
            Looking For
            <br />
            <strong>
              The Right Product?
            </strong>
          </h2>


          <p>
            Contact NEWPOS for product
            information, samples, distribution
            opportunities and business cooperation.
          </p>

        </div>


        <div
          className="
            product-final-actions
            products-reveal
          "
        >

          <a
            href="#product-range"
            className="
              product-final-primary
            "
          >
            Explore Products
            <b>
              ↓
            </b>
          </a>


          <Link
            to="/contact?type=sales#contact-form"
            className="
              product-final-secondary
            "
          >
            Contact Sales
            <b>
              →
            </b>
          </Link>

        </div>

      </section>

    </main>
  );
}


export default Products;