import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import "./NewsArticle.css";


/* =========================================================
   ARTICLE 446 IMAGES
========================================================= */

import article446_01
  from "../assets/images/news/articles/446/446-01-anniversary.jpg";

import article446_02
  from "../assets/images/news/articles/446/446-02-startup.jpg";

import article446_03
  from "../assets/images/news/articles/446/446-03-history.jpg";

import article446_04
  from "../assets/images/news/articles/446/446-04-global-expansion.jpg";

import article446_05
  from "../assets/images/news/articles/446/446-05-europe-expansion.jpg";

import article446_06
  from "../assets/images/news/articles/446/446-06-technology.jpg";

import article446_07
  from "../assets/images/news/articles/446/446-07-product-portfolio.jpg";

import article446_08
  from "../assets/images/news/articles/446/446-08-company-team.jpg";

import article446_10
  from "../assets/images/news/articles/446/446-10-closing.jpg";


/* =========================================================
   ARTICLE 355 IMAGES
========================================================= */

import article355_01
  from "../assets/images/news/articles/355/355-01.jpg";

import article355_02
  from "../assets/images/news/articles/355/355-02.jpg";

import article355_03
  from "../assets/images/news/articles/355/355-03.jpg";


/* =========================================================
   ARTICLE 186 IMAGES
========================================================= */

import article186_01
  from "../assets/images/news/articles/186/186-01.jpg";

import article186_02
  from "../assets/images/news/articles/186/186-02.jpg";

import article186_03
  from "../assets/images/news/articles/186/186-03.jpg";


/* =========================================================
   ARTICLE 440 IMAGES
========================================================= */

import article440_01
  from "../assets/images/news/articles/440/440-01.jpg";

import article440_02
  from "../assets/images/news/articles/440/440-02.jpg";


/* =========================================================
   ARTICLE 405 IMAGES
========================================================= */

import article405_01
  from "../assets/images/news/articles/405/405-01.jpg";

import article405_02
  from "../assets/images/news/articles/405/405-02.jpg";


/* =========================================================
   ARTICLE 445 IMAGES
========================================================= */

import article445_01
  from "../assets/images/news/articles/445/445-01.jpg";

import article445_02
  from "../assets/images/news/articles/445/445-02.jpg";

import article445_03
  from "../assets/images/news/articles/445/445-03.jpg";

import article445_04
  from "../assets/images/news/articles/445/445-04.jpg";


/* =========================================================
   OTHER EXISTING NEWS IMAGES
========================================================= */

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


/* =========================================================
   ARTICLES
========================================================= */

const articles = [

  /* =======================================================
     446
  ======================================================= */

  {
    id: 446,

    category:
      "Company",

    date:
      "10 AUG 2026",

    title:
      "19 Years of Perseverance and Progress, NEWPOS Reaches New Heights in Global Payments",

    subtitle:
      "From a seven-person team in 2007 to an international payment terminal provider serving more than 110 countries and regions.",

    heroImage:
      article446_01,

    blocks: [

      {
        type:
          "text",

        text:
          "On August 10, 2026, NEWPOS celebrated its 19th anniversary. From a seven-person entrepreneurial team founded in 2007, NEWPOS has grown into an international payment terminal provider with business operations across more than 110 countries and regions and cumulative shipments exceeding 60 million terminals.",
      },


      {
        type:
          "image",

        image:
          article446_01,

        alt:
          "NEWPOS 19th anniversary",
      },


      {
        type:
          "heading",

        text:
          "From Zero to One",
      },


      {
        type:
          "text",

        text:
          "Looking back to 2007, when China's electronic payment industry was beginning to develop, NEWPOS was established at Shenzhen Nanshan Science and Technology Park. The founding team chose the path of independent research and development and began building its own payment terminal capabilities.",
      },


      {
        type:
          "image",

        image:
          article446_02,

        alt:
          "NEWPOS early development",
      },


      {
        type:
          "text",

        text:
          "In 2008, NEWPOS successfully launched NEW8110 and introduced its first handheld mobile POS terminal, establishing an early foundation for the company's payment terminal business.",
      },


      {
        type:
          "image",

        image:
          article446_03,

        alt:
          "NEWPOS company history",
      },


      {
        type:
          "heading",

        text:
          "Growing Through the Industry",
      },


      {
        type:
          "text",

        text:
          "NEWPOS continued to strengthen its product development and industry capabilities as the electronic payment market evolved. The company expanded its business, developed new products and continued building its technology organization.",
      },


      {
        type:
          "image",

        image:
          article446_04,

        alt:
          "NEWPOS global expansion",
      },


      {
        type:
          "heading",

        text:
          "Global Expansion",
      },


      {
        type:
          "text",

        text:
          "NEWPOS has pursued overseas market development since its early years. Its products are now distributed across more than 110 countries and regions, with international activities spanning major global markets.",
      },


      {
        type:
          "image",

        image:
          article446_05,

        alt:
          "NEWPOS international expansion",
      },


      {
        type:
          "text",

        text:
          "The company's international development has continued through new subsidiaries, manufacturing facilities and closer relationships with customers and partners in major global markets.",
      },


      {
        type:
          "heading",

        text:
          "Technology as the Core Engine",
      },


      {
        type:
          "image",

        image:
          article446_06,

        alt:
          "NEWPOS payment technology",
      },


      {
        type:
          "text",

        text:
          "NEWPOS has consistently followed a development philosophy centered on security, reliability and technological advancement. The company owns more than 80 technology patents and continues to expand its payment technology capabilities.",
      },


      {
        type:
          "heading",

        text:
          "A Broad Product Portfolio",
      },


      {
        type:
          "image",

        image:
          article446_07,

        alt:
          "NEWPOS product portfolio",
      },


      {
        type:
          "text",

        text:
          "The NEWPOS portfolio covers smart POS terminals, traditional POS terminals, mPOS devices, cloud speakers, unattended terminals and other payment products designed for different payment scenarios and business requirements.",
      },


      {
        type:
          "heading",

        text:
          "People Behind the Progress",
      },


      {
        type:
          "image",

        image:
          article446_08,

        alt:
          "NEWPOS team",
      },


      {
        type:
          "text",

        text:
          "NEWPOS describes its development as the result of the dedication and contribution of its employees. The company continues to build its organization around responsibility, openness, passion and trust.",
      },


      {
        type:
          "heading",

        text:
          "A New Journey Begins",
      },


      {
        type:
          "text",

        text:
          "As the payment industry continues to evolve, NEWPOS remains focused on technological innovation, international development and customer-oriented payment solutions.",
      },


      {
        type:
          "image",

        image:
          article446_10,

        alt:
          "NEWPOS future vision",
      },

    ],
  },


  /* =======================================================
     440
  ======================================================= */

  {
    id: 440,

    category:
      "Company",

    date:
      "26 NOV 2025",

    title:
      "NEWPOS Ranks Among Global Leaders in Nilson Report",

    subtitle:
      "NEWPOS strengthens its position in the global payment terminal market with leading 2024 shipment rankings.",

    heroImage:
      article440_01,

    blocks: [

      {
        type:
          "text",

        text:
          "According to market data released by Nilson Report, NEWPOS achieved sixth place in global payment terminal manufacturer shipments and third place in Asia-Pacific POS terminal shipments for 2024.",
      },


      {
        type:
          "image",

        image:
          article440_01,

        alt:
          "NEWPOS Nilson Report",
      },


      {
        type:
          "heading",

        text:
          "Global Market Recognition",
      },


      {
        type:
          "text",

        text:
          "NEWPOS shipped 7.346 million POS units globally in 2024, representing a 5.73% market share. The result reflects the company's continued international development and product capabilities.",
      },


      {
        type:
          "image",

        image:
          article440_02,

        alt:
          "NEWPOS market recognition",
      },


      {
        type:
          "heading",

        text:
          "Continuing Innovation",
      },


      {
        type:
          "text",

        text:
          "NEWPOS continues to invest in payment technology research and development, strengthen its product matrix and improve service capabilities for customers around the world.",
      },

    ],
  },


  /* =======================================================
     445
  ======================================================= */

  {
    id: 445,

    category:
      "Exhibition",

    date:
      "06 MAR 2026",

    title:
      "NEWPOS Debuts at RETAILTECH JAPAN 2026, Showcasing New Forces in Smart Retail",

    subtitle:
      "NEWPOS presents intelligent payment technology and explores the future of smart retail in Tokyo.",

    heroImage:
      article445_01,

    blocks: [

      {
        type:
          "text",

        text:
          "RETAILTECH JAPAN 2026 was held from March 3 to 6, 2026 at Tokyo Big Sight. NEWPOS presented intelligent payment terminal products and connected with customers and partners from the retail technology industry.",
      },


      {
        type:
          "image",

        image:
          article445_01,

        alt:
          "NEWPOS RETAILTECH JAPAN 2026",
      },


      {
        type:
          "heading",

        text:
          "Smart Payment on Display",
      },


      {
        type:
          "text",

        text:
          "The NEWPOS booth displayed market-proven terminals together with a new generation of intelligent payment products.",
      },


      {
        type:
          "image",

        image:
          article445_02,

        alt:
          "NEWPOS RETAILTECH product display",
      },


      {
        type:
          "heading",

        text:
          "Intelligent Payment Technology",
      },


      {
        type:
          "text",

        text:
          "NEWPOS highlighted intelligent POS products designed around modern retail requirements and changing payment scenarios.",
      },


      {
        type:
          "image",

        image:
          article445_03,

        alt:
          "NEWPOS smart retail payment technology",
      },


      {
        type:
          "heading",

        text:
          "From Products to Partnership",
      },


      {
        type:
          "text",

        text:
          "The exhibition created opportunities for NEWPOS to communicate with retailers, technology partners and industry experts about smart payment and retail applications.",
      },


      {
        type:
          "image",

        image:
          article445_04,

        alt:
          "NEWPOS RETAILTECH JAPAN exhibition",
      },

    ],
  },


  /* =======================================================
     405
  ======================================================= */

  {
    id: 405,

    category:
      "Company",

    date:
      "06 JUN 2025",

    title:
      "NEW9310 PRO Smart POS Terminal by NEWPOS Makes Debut at Hiroshima Baseball Stadium",

    subtitle:
      "A real-world cashless payment deployment showcases the NEW9310 PRO.",

    heroImage:
      article405_01,

    blocks: [

      {
        type:
          "text",

        text:
          "At Hiroshima's Matsuda Sports Stadium, the NEWPOS NEW9310 PRO smart POS terminal was introduced as part of the stadium's cashless payment experience.",
      },


      {
        type:
          "image",

        image:
          article405_01,

        alt:
          "NEWPOS NEW9310 PRO at Hiroshima stadium",
      },


      {
        type:
          "heading",

        text:
          "Fast and Convenient Cashless Payments",
      },


      {
        type:
          "text",

        text:
          "The deployment demonstrated how customers could quickly complete transactions through the smart POS experience.",
      },


      {
        type:
          "image",

        image:
          article405_02,

        alt:
          "NEWPOS smart POS deployment",
      },


      {
        type:
          "heading",

        text:
          "Designed for Demanding Environments",
      },


      {
        type:
          "text",

        text:
          "The stadium application demonstrates how NEWPOS terminals can support high-traffic payment environments.",
      },

    ],
  },


  /* =======================================================
     355
  ======================================================= */

  {
    id: 355,

    category:
      "Company",

    date:
      "21 OCT 2023",

    title:
      "NEWPOS Ranked Fifth in the World in POS Shipments in 2022",

    subtitle:
      "NEWPOS strengthens its position in the worldwide POS market and Asia-Pacific region.",

    heroImage:
      article355_01,

    blocks: [

      {
        type:
          "text",

        text:
          "According to the Nilson Report, NEWPOS ranked fifth in the world in POS shipments in 2022 and second in the Asia-Pacific region for four consecutive years.",
      },


      {
        type:
          "image",

        image:
          article355_01,

        alt:
          "NEWPOS POS shipment ranking",
      },


      {
        type:
          "heading",

        text:
          "Customer-Centered Development",
      },


      {
        type:
          "text",

        text:
          "NEWPOS continues to focus on research and development, product innovation and customer requirements as part of its development strategy.",
      },


      {
        type:
          "image",

        image:
          article355_02,

        alt:
          "NEWPOS product development",
      },


      {
        type:
          "heading",

        text:
          "NEW9310",
      },


      {
        type:
          "text",

        text:
          "NEW9310, described by NEWPOS as its first full-screen POS terminal product, attracted customer attention following its launch.",
      },


      {
        type:
          "image",

        image:
          article355_03,

        alt:
          "NEWPOS NEW9310",
      },

    ],
  },


  /* =======================================================
     186
  ======================================================= */

  {
    id: 186,

    category:
      "Company",

    date:
      "28 OCT 2022",

    title:
      "NEWPOS Has Made a Permanent Home in Nanshan District",

    subtitle:
      "Another milestone in NEWPOS's development in Shenzhen.",

    heroImage:
      article186_01,

    blocks: [

      {
        type:
          "text",

        text:
          "NEWPOS continued its development in Shenzhen and participated in the Liuxian Dong seven-neighborhood joint construction project in Nanshan District.",
      },


      {
        type:
          "image",

        image:
          article186_01,

        alt:
          "NEWPOS Nanshan",
      },


      {
        type:
          "heading",

        text:
          "Continuing Development",
      },


      {
        type:
          "text",

        text:
          "The milestone reflected NEWPOS's continued development and connection with the local technology and business environment.",
      },


      {
        type:
          "image",

        image:
          article186_02,

        alt:
          "NEWPOS Nanshan development",
      },


      {
        type:
          "text",

        text:
          "The company continued its long-term development while strengthening its organization and business foundation.",
      },


      {
        type:
          "image",

        image:
          article186_03,

        alt:
          "NEWPOS development",
      },

    ],
  },


  /* =======================================================
     EXISTING FALLBACK ARTICLES
  ======================================================= */

  {
    id: 435,
    category: "Exhibition",
    date: "17 SEP 2025",

    title:
      "NEWPOS Shines at NRF 2025 Retail's Big Show Europe",

    subtitle:
      "NEWPOS showcases smart payment technology and strengthens international relationships in Paris.",

    heroImage:
      nrfEurope,

    blocks: [

      {
        type:
          "text",

        text:
          "NRF 2025 Retail's Big Show Europe was held in Paris, bringing together retailers, payment companies and technology partners from around the world.",
      },

      {
        type:
          "image",

        image:
          nrfEurope,

        alt:
          "NEWPOS NRF Europe",
      },

      {
        type:
          "heading",

        text:
          "Innovation on Display",
      },

      {
        type:
          "text",

        text:
          "NEWPOS presented payment products ranging from classic POS terminals to intelligent devices designed for modern payment scenarios.",
      },

    ],
  },


  {
    id: 438,
    category: "Exhibition",
    date: "31 OCT 2025",

    title:
      "NEWPOS Shines at 2025 Milan International Payment Expo",

    subtitle:
      "NEWPOS connects with European payment industry partners in Milan.",

    heroImage:
      milanPaymentExpo,

    blocks: [

      {
        type:
          "text",

        text:
          "The Milan International Payment Expo brought together professionals and companies from the global payment industry.",
      },

      {
        type:
          "image",

        image:
          milanPaymentExpo,

        alt:
          "NEWPOS Milan Payment Expo",
      },

      {
        type:
          "heading",

        text:
          "Understanding the European Market",
      },

      {
        type:
          "text",

        text:
          "The NEWPOS team communicated with payment service providers, banking institutions and partners about technology development and localized cooperation.",
      },

    ],
  },


  {
    id: 406,
    category: "Exhibition",
    date: "19 JUN 2025",

    title:
      "NEWPOS at DIGITAL PAYEXPO 2025 Nigeria",

    subtitle:
      "Global payment innovation attracts attention in Nigeria.",

    heroImage:
      digitalPayexpo,

    blocks: [

      {
        type:
          "text",

        text:
          "DIGITAL PAYEXPO 2025 Nigeria brought together professionals from across the payment industry.",
      },

      {
        type:
          "image",

        image:
          digitalPayexpo,

        alt:
          "NEWPOS DIGITAL PAYEXPO Nigeria",
      },

      {
        type:
          "heading",

        text:
          "Innovation for Diverse Markets",
      },

      {
        type:
          "text",

        text:
          "NEWPOS demonstrated traditional POS terminals alongside intelligent products and discussed payment innovation and market requirements.",
      },

    ],
  },


  {
    id: 399,
    category: "Exhibition",
    date: "03 APR 2025",

    title:
      "NEWPOS Shines at AUTOCOM 2025 in Sao Paulo, Brazil",

    subtitle:
      "NEWPOS presents classic and intelligent payment products in Brazil.",

    heroImage:
      autocomBrazil,

    blocks: [

      {
        type:
          "text",

        text:
          "NEWPOS participated in AUTOCOM 2025 in Sao Paulo, Brazil, presenting payment terminals and solutions for the retail environment.",
      },

      {
        type:
          "image",

        image:
          autocomBrazil,

        alt:
          "NEWPOS AUTOCOM Brazil",
      },

      {
        type:
          "heading",

        text:
          "Classic and Intelligent POS",
      },

      {
        type:
          "text",

        text:
          "The exhibition showcased both classic payment terminals and newer intelligent POS products.",
      },

    ],
  },


  {
    id: 421,
    category: "Exhibition",
    date: "10 DEC 2024",

    title:
      "NEWPOS Participates in TRUSTECH 2024",

    subtitle:
      "NEWPOS continues its international exhibition activities.",

    heroImage:
      trustech,

    blocks: [

      {
        type:
          "text",

        text:
          "NEWPOS participated in TRUSTECH 2024, an international event covering payment, identification, digital security and fintech technologies.",
      },

      {
        type:
          "image",

        image:
          trustech,

        alt:
          "NEWPOS TRUSTECH 2024",
      },

      {
        type:
          "heading",

        text:
          "Global Industry Engagement",
      },

      {
        type:
          "text",

        text:
          "International exhibitions remain an important part of NEWPOS's approach to connecting with global payment markets.",
      },

    ],
  },


  {
    id: 2021,
    category: "Company",
    date: "10 AUG 2021",

    title:
      "NEWPOS Celebrates Its 14th Anniversary",

    subtitle:
      "A milestone in the company's continuing development.",

    heroImage:
      newposAnniversary14,

    blocks: [

      {
        type:
          "text",

        text:
          "NEWPOS marked its 14th anniversary and continued its long-term development in payment terminal technology.",
      },

      {
        type:
          "image",

        image:
          newposAnniversary14,

        alt:
          "NEWPOS 14th anniversary",
      },

      {
        type:
          "heading",

        text:
          "Continuing the Journey",
      },

      {
        type:
          "text",

        text:
          "The anniversary reflected NEWPOS's continued commitment to product development, market expansion and international business.",
      },

    ],
  },


  {
    id: 2020,
    category: "Company",
    date: "2020",

    title:
      "NEWPOS Continues Expanding Its Global Payment Technology Business",

    subtitle:
      "Strengthening payment products, technology capabilities and international markets.",

    heroImage:
      paymentTechnology,

    blocks: [

      {
        type:
          "text",

        text:
          "NEWPOS continued strengthening its payment terminal business, technology capabilities and international market reach.",
      },

      {
        type:
          "image",

        image:
          paymentTechnology,

        alt:
          "NEWPOS payment technology",
      },

      {
        type:
          "heading",

        text:
          "Building for Global Markets",
      },

      {
        type:
          "text",

        text:
          "The company remained focused on providing payment products and technology solutions for businesses and payment partners across different markets.",
      },

    ],
  },

];


/* =========================================================
   COMPONENT
========================================================= */

function NewsArticle() {

  const {
    id,
  } = useParams();


  const articleId =
    Number(id);


  const articleIndex =
    articles.findIndex(
      (item) =>
        item.id ===
        articleId
    );


  const article =
    articleIndex >= 0
      ? articles[
          articleIndex
        ]
      : null;


  /* =======================================================
     PREVIOUS / NEXT
  ======================================================= */

  const previousArticle =
    articleIndex > 0
      ? articles[
          articleIndex - 1
        ]
      : null;


  const nextArticle =
    articleIndex >= 0 &&
    articleIndex <
      articles.length - 1
      ? articles[
          articleIndex + 1
        ]
      : null;


  /* =======================================================
     RELATED
  ======================================================= */

  const relatedArticles =
    useMemo(
      () => {

        if (!article) {
          return [];
        }


        const sameCategory =
          articles.filter(
            (item) =>
              item.id !==
                article.id &&
              item.category ===
                article.category
          );


        const otherArticles =
          articles.filter(
            (item) =>
              item.id !==
                article.id &&
              item.category !==
                article.category
          );


        return [
          ...sameCategory,
          ...otherArticles,
        ].slice(
          0,
          3
        );

      },

      [
        article,
      ]
    );


  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!article) {

    return (

      <main
        className="
          news-article-page
          news-article-not-found
        "
      >

        <div>

          <span>
            NEWPOS / NEWS
          </span>


          <h1>
            Article
            <br />
            Not Found.
          </h1>


          <p>
            The requested NEWPOS article
            could not be found.
          </p>


          <Link
            to="/news"
            className="
              news-article-back-button
            "
          >
            ← Back To News
          </Link>

        </div>

      </main>

    );

  }


  return (

    <main
      className="
        news-article-page
      "
    >


      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="
          news-article-hero
        "
      >

        <div
          className="
            news-article-hero-image
          "

          style={{
            backgroundImage:
              `url(${article.heroImage})`,
          }}
        />


        <div
          className="
            news-article-hero-overlay
          "
        />


        <div
          className="
            news-article-hero-content
          "
        >

          <div
            className="
              news-article-breadcrumb
            "
          >

            <Link to="/news">
              News
            </Link>

            <span>
              /
            </span>

            <span>
              {
                article.category
              }
            </span>

          </div>


          <span
            className="
              news-article-category
            "
          >
            {
              article.category
            }
          </span>


          <h1>
            {
              article.title
            }
          </h1>


          <p
            className="
              news-article-subtitle
            "
          >
            {
              article.subtitle
            }
          </p>


          <div
            className="
              news-article-date
            "
          >

            <span>
              {
                article.date
              }
            </span>

            <i />

            <span>
              NEWPOS TECHNOLOGY
            </span>

          </div>

        </div>

      </section>


      {/* =================================================
          ARTICLE BODY
      ================================================= */}

      <section
        className="
          news-article-body
        "
      >

        <div
          className="
            news-article-layout
          "
        >

          <article
            className="
              news-article-content
            "
          >

            {article.blocks.map(
              (
                block,
                index
              ) => {


                /* =========================================
                   TEXT
                ========================================= */

                if (
                  block.type ===
                  "text"
                ) {

                  return (

                    <p
                      key={
                        `text-${index}`
                      }

                      className="
                        news-article-paragraph
                      "
                    >
                      {
                        block.text
                      }
                    </p>

                  );

                }


                /* =========================================
                   HEADING
                ========================================= */

                if (
                  block.type ===
                  "heading"
                ) {

                  return (

                    <div
                      key={
                        `heading-${index}`
                      }

                      className="
                        news-article-heading-block
                      "
                    >

                      <span>
                        {
                          String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )
                        }
                      </span>


                      <h2>
                        {
                          block.text
                        }
                      </h2>

                    </div>

                  );

                }


                /* =========================================
                   IMAGE
                ========================================= */

                if (
                  block.type ===
                  "image"
                ) {

                  return (

                    <figure
                      key={
                        `image-${index}`
                      }

                      className="
                        news-article-full-image
                      "
                    >

                      <img
                        src={
                          block.image
                        }

                        alt={
                          block.alt
                        }

                        loading={
                          index === 1
                            ? "eager"
                            : "lazy"
                        }
                      />

                    </figure>

                  );

                }


                return null;

              }
            )}

          </article>


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside
            className="
              news-article-sidebar
            "
          >

            <div
              className="
                news-article-sidebar-block
              "
            >

              <span>
                ARTICLE
              </span>


              <strong>
                {
                  article.category
                }
              </strong>


              <small>
                {
                  article.date
                }
              </small>

            </div>


            <div
              className="
                news-article-sidebar-line
              "
            />


            <Link
              to="/news"
              className="
                news-article-sidebar-back
              "
            >

              <span>
                ←
              </span>

              Back To News

            </Link>

          </aside>

        </div>

      </section>


      {/* =================================================
          PREVIOUS / NEXT
      ================================================= */}

      <section
        className="
          news-article-navigation
        "
      >

        {previousArticle ? (

          <Link
            to={
              `/news/${previousArticle.id}`
            }

            className="
              news-article-nav-card
            "
          >

            <span>
              ← Previous Article
            </span>


            <strong>
              {
                previousArticle.title
              }
            </strong>

          </Link>

        ) : (

          <div
            className="
              news-article-nav-empty
            "
          />

        )}


        {nextArticle ? (

          <Link
            to={
              `/news/${nextArticle.id}`
            }

            className="
              news-article-nav-card
              news-article-nav-next
            "
          >

            <span>
              Next Article →
            </span>


            <strong>
              {
                nextArticle.title
              }
            </strong>

          </Link>

        ) : (

          <div
            className="
              news-article-nav-empty
            "
          />

        )}

      </section>


      {/* =================================================
          CONNECTING GLOBAL PAYMENTS
      ================================================= */}

      <section
        className="
          news-article-brand
        "
      >

        <div
          className="
            news-article-brand-inner
          "
        >

          <span>
            NEWPOS TECHNOLOGY
          </span>


          <strong>
            Connecting Global Payments.
          </strong>

        </div>

      </section>


      {/* =================================================
          RELATED NEWS
      ================================================= */}

      {relatedArticles.length >
        0 && (

        <section
          className="
            news-article-related
          "
        >

          <div
            className="
              news-article-related-heading
            "
          >

            <span>
              KEEP READING
            </span>


            <h2>
              Related
              <br />
              <strong>
                News.
              </strong>
            </h2>

          </div>


          <div
            className="
              news-article-related-grid
            "
          >

            {relatedArticles.map(
              (
                item
              ) => (

                <Link
                  key={
                    item.id
                  }

                  to={
                    `/news/${item.id}`
                  }

                  className="
                    news-related-card
                  "
                >

                  <div
                    className="
                      news-related-image
                    "
                  >

                    <img
                      src={
                        item.heroImage
                      }

                      alt={
                        item.title
                      }

                      loading="lazy"
                    />


                    <div
                      className="
                        news-related-image-overlay
                      "
                    />


                    <span>
                      {
                        item.category
                      }
                    </span>

                  </div>


                  <div
                    className="
                      news-related-content
                    "
                  >

                    <time>
                      {
                        item.date
                      }
                    </time>


                    <h3>
                      {
                        item.title
                      }
                    </h3>


                    <span>
                      Read Article →
                    </span>

                  </div>

                </Link>

              )
            )}

          </div>

        </section>

      )}


      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section
        className="
          news-article-cta
        "
      >

        <div
          className="
            news-article-cta-background
          "
        />


        <div
          className="
            news-article-cta-glow
          "
        />


        <div
          className="
            news-article-cta-content
          "
        >

          <span>
            NEWPOS TECHNOLOGY
          </span>


          <h2>
            Stay Connected
            <br />

            <strong>
              With NEWPOS.
            </strong>
          </h2>


          <p>
            Explore NEWPOS products,
            solutions, company developments
            and global payment activities.
          </p>

        </div>


        <Link
          to="/news"
          className="
            news-article-cta-button
          "
        >

          Back To News

          <b>
            →
          </b>

        </Link>

      </section>

    </main>
  );
}


export default NewsArticle;