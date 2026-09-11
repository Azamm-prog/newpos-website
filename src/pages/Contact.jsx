import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useSearchParams,
} from "react-router-dom";

import contactHeroBackground from "../assets/images/contact/contact-hero-bg.jpg";

import afterSalesImage from "../assets/images/contact/after-sales.jpg";
import trainingImage from "../assets/images/contact/training.jpg";
import softwareImage from "../assets/images/contact/software.jpg";
import valueAddedImage from "../assets/images/contact/value-added.jpg";

import "./Contact.css";


/* =========================================================
   SERVICE DATA
========================================================= */

const serviceCards = [
  {
    number: "01",
    label: "AFTER-SALES",
    title: (
      <>
        After-sales
        <br />
        Guarantee
      </>
    ),
    description:
      "Regional service support, maintenance assistance and lifecycle support for deployed payment terminals.",
    image: afterSalesImage,
    link: "Explore Service",
    href: "/service",
  },

  {
    number: "02",
    label: "TRAINING",
    title: (
      <>
        Training
        <br />
        Services
      </>
    ),
    description:
      "Product guidance, technical training, maintenance assistance and troubleshooting support.",
    image: trainingImage,
    link: "Explore Training",
    href: "/service",
  },

  {
    number: "03",
    label: "SOFTWARE",
    title: (
      <>
        Software
        <br />
        Platform Services
      </>
    ),
    description:
      "TMS, Cloud MIS, platform services and customized software support for payment deployments.",
    image: softwareImage,
    link: "Explore Solutions",
    href: "/solutions",
  },

  {
    number: "04",
    label: "VALUE-ADDED",
    title: (
      <>
        Value-added
        <br />
        Services
      </>
    ),
    description:
      "Customer resource recommendations, cooperation support and customized branded products and solutions.",
    image: valueAddedImage,
    link: "Discuss Services",
    href: "/service",
  },
];


/* =========================================================
   CONTACT FORM OPTIONS
========================================================= */

const enquiryTypes = [
  {
    value: "quote",
    label: "Request a Quote",
  },

  {
    value: "sample",
    label: "Request a Sample",
  },

  {
    value: "products",
    label: "Product Information",
  },

  {
    value: "sales",
    label: "Sales",
  },

  {
    value: "support",
    label: "Technical Support",
  },

  {
    value: "after-sales",
    label: "After-sales Service",
  },

  {
    value: "training",
    label: "Training",
  },

  {
    value: "software",
    label: "Software / TMS / Cloud MIS",
  },

  {
    value: "distribution",
    label: "Become a Distributor",
  },

  {
    value: "partnership",
    label: "Business Cooperation",
  },

  {
    value: "oem",
    label: "OEM / ODM",
  },
];


/* =========================================================
   SCROLL REVEAL
========================================================= */

function useContactReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll(".contact-reveal");

    if (!elements.length) {
      return undefined;
    }

    elements.forEach((element, index) => {
      element.style.setProperty(
        "--contact-delay",
        `${(index % 6) * 70}ms`
      );
    });

    const observer =
      new IntersectionObserver(
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
   CONTACT PAGE
========================================================= */

function Contact() {
  useContactReveal();

  const [
    searchParams,
  ] = useSearchParams();

  const initialEnquiry =
    searchParams.get("type") || "";


  /* =======================================================
     FORM DATA
  ======================================================= */

  const [
    formData,
    setFormData,
  ] = useState({
    name: "",
    email: "",
    company: "",
    telephone: "",
    enquiry: initialEnquiry,
    message: "",
    website: "",
  });


  const [
    errors,
    setErrors,
  ] = useState({});


  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);


  const [
    submitStatus,
    setSubmitStatus,
  ] = useState("");


  /* =======================================================
     KEEP ENQUIRY TYPE IN SYNC WITH URL
  ======================================================= */

  useEffect(() => {
    const requestedType =
      searchParams.get("type") || "";

    const validType =
      enquiryTypes.some(
        (type) =>
          type.value === requestedType
      )
        ? requestedType
        : "";

    setFormData((current) => {
      if (
        current.enquiry === validType
      ) {
        return current;
      }

      return {
        ...current,
        enquiry: validType,
      };
    });

    setErrors((current) => {
      if (!current.enquiry) {
        return current;
      }

      return {
        ...current,
        enquiry: "",
      };
    });
  }, [searchParams]);


  /* =======================================================
     FORM FIELD UPDATE
  ======================================================= */

  const updateField =
    (event) => {
      const {
        name,
        value,
      } = event.target;

      setFormData((current) => ({
        ...current,
        [name]: value,
      }));

      setErrors((current) => ({
        ...current,
        [name]: "",
      }));

      setSubmitStatus("");
    };


  /* =======================================================
     FORM VALIDATION
  ======================================================= */

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name =
        "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.enquiry) {
      nextErrors.enquiry =
        "Please select an enquiry type.";
    }

    if (!formData.message.trim()) {
      nextErrors.message =
        "Please tell us how we can help.";
    } else if (
      formData.message.trim().length < 10
    ) {
      nextErrors.message =
        "Please provide a little more detail.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  };


  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit =
    async (event) => {
      event.preventDefault();

      setSubmitStatus("");

      /*
       * Hidden honeypot field.
       * If a bot fills this field, silently stop.
       */
      if (formData.website.trim()) {
        return;
      }

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        /*
         * FRONTEND SUBMISSION STATE
         *
         * This currently simulates the submission
         * because no backend/API endpoint has been
         * provided yet.
         *
         * Replace this section with the real
         * NEWPOS backend/API when available.
         */

        await new Promise((resolve) =>
          setTimeout(resolve, 1000)
        );

        setSubmitStatus("success");

        setFormData({
          name: "",
          email: "",
          company: "",
          telephone: "",
          enquiry: "",
          message: "",
          website: "",
        });

        setErrors({});
      } catch (error) {
        console.error(
          "Contact form submission failed:",
          error
        );

        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    };


  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div
          className="contact-hero-background"
          style={{
            backgroundImage:
              `url(${contactHeroBackground})`,
          }}
        />

        <div className="contact-hero-overlay" />

        <div
          className="
            contact-hero-content
            contact-reveal
          "
        >

          <span className="contact-eyebrow">
            NEWPOS / CONTACT
          </span>

          <h1>
            Let’s Talk
            <br />
            <strong>
              Payment.
            </strong>
          </h1>

          <p>
            Whether you are looking for
            payment terminals, software
            solutions, distribution
            opportunities or business
            cooperation, our team is ready
            to help.
          </p>

          <div className="contact-hero-actions">

            <a
              href="#contact-form"
              className="contact-primary-button"
            >
              Start A Conversation
              <b>→</b>
            </a>

            <a
              href="#contact-options"
              className="contact-secondary-button"
            >
              Explore Contact Options
              <span>↓</span>
            </a>

          </div>

          <div className="contact-hero-meta">
            <span>SALES</span>
            <span>SUPPORT</span>
            <span>BUSINESS COOPERATION</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT OPTIONS
      ===================================================== */}

      <section
        className="contact-options-section"
        id="contact-options"
      >

        <div
          className="
            contact-section-heading
            contact-reveal
          "
        >

          <div>

            <span>
              HOW CAN WE HELP?
            </span>

            <h2>
              Start With
              <br />
              <strong>
                The Right Team.
              </strong>
            </h2>

          </div>

          <p>
            Choose the type of enquiry that
            best matches your needs and our
            team can direct your request to
            the appropriate channel.
          </p>

        </div>


        <div className="contact-options-grid">

          {/* =================================================
              SALES
          ================================================= */}

          <article
            className="
              contact-option-card
              contact-reveal
            "
          >

            <div className="contact-option-top">
              <span>01</span>
              <b>SALES</b>
            </div>

            <div className="contact-option-body">

              <span className="contact-option-label">
                SALES &amp; PRODUCTS
              </span>

              <h3>
                Looking For
                <br />
                NEWPOS Products?
              </h3>

              <p>
                Ask about payment terminals,
                product specifications,
                samples, availability and
                business requirements.
              </p>

            </div>

            <Link
              to="/contact?type=sales#contact-form"
            >
              Talk To Sales
              <b>→</b>
            </Link>

          </article>


          {/* =================================================
              PARTNERSHIP
          ================================================= */}

          <article
            className="
              contact-option-card
              contact-option-card-blue
              contact-reveal
            "
          >

            <div className="contact-option-top">
              <span>02</span>
              <b>PARTNER</b>
            </div>

            <div className="contact-option-body">

              <span className="contact-option-label">
                BUSINESS COOPERATION
              </span>

              <h3>
                Become A
                <br />
                NEWPOS Partner.
              </h3>

              <p>
                Discuss distribution,
                OEM cooperation,
                technology partnerships
                and opportunities in
                new markets.
              </p>

            </div>

            <Link
              to="/contact?type=partnership#contact-form"
            >
              Discuss Cooperation
              <b>→</b>
            </Link>

          </article>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section
        className="contact-form-section"
        id="contact-form"
      >

        <div
          className="
            contact-information
            contact-reveal
          "
        >

          <span className="contact-form-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Tell Us
            <br />
            <strong>
              What You Need.
            </strong>
          </h2>

          <p>
            Send us your requirements and
            a member of the NEWPOS team
            can follow up with you regarding
            products, solutions or business
            cooperation.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span>PHONE</span>

              <strong>
                4006-520-589
              </strong>
            </div>

            <div className="contact-detail">
              <span>EMAIL</span>

              <strong>
                sales@newpostech.com
              </strong>
            </div>

            <div className="contact-detail">
              <span>LOCATION</span>

              <strong>
                NEWPOS office address
              </strong>
            </div>

            <div className="contact-detail">
              <span>RESPONSE</span>

              <strong>
                Our team will review your enquiry
                and respond through the contact
                details you provide.
              </strong>
            </div>

          </div>

        </div>


        {/* ===================================================
            FORM CARD
        =================================================== */}

        <div
          className="
            contact-form-card
            contact-reveal
          "
        >

          <div className="contact-form-header">

            <span>
              REQUEST INFORMATION
            </span>

            <h3>
              How Can We
              <br />
              <strong>
                Help?
              </strong>
            </h3>

          </div>


          <form
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* =================================================
                NAME + EMAIL
            ================================================= */}

            <div className="contact-form-row">

              <label>

                <span>
                  FULL NAME <i>*</i>
                </span>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={
                    Boolean(errors.name)
                  }
                  aria-describedby={
                    errors.name
                      ? "name-error"
                      : undefined
                  }
                  required
                />

                {errors.name && (
                  <small
                    id="name-error"
                    className="
                      contact-field-error
                    "
                  >
                    {errors.name}
                  </small>
                )}

              </label>


              <label>

                <span>
                  EMAIL ADDRESS <i>*</i>
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={updateField}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={
                    Boolean(errors.email)
                  }
                  aria-describedby={
                    errors.email
                      ? "email-error"
                      : undefined
                  }
                  required
                />

                {errors.email && (
                  <small
                    id="email-error"
                    className="
                      contact-field-error
                    "
                  >
                    {errors.email}
                  </small>
                )}

              </label>

            </div>


            {/* =================================================
                COMPANY + TELEPHONE
            ================================================= */}

            <div className="contact-form-row">

              <label>

                <span>
                  COMPANY
                </span>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={updateField}
                  placeholder="Company name"
                  autoComplete="organization"
                />

              </label>


              <label>

                <span>
                  TELEPHONE
                </span>

                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={updateField}
                  placeholder="+92 ..."
                  autoComplete="tel"
                />

              </label>

            </div>


            {/* =================================================
                ENQUIRY TYPE
            ================================================= */}

            <div className="contact-form-row">

              <label>

                <span>
                  ENQUIRY TYPE <i>*</i>
                </span>

                <select
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={updateField}
                  aria-invalid={
                    Boolean(errors.enquiry)
                  }
                  aria-describedby={
                    errors.enquiry
                      ? "enquiry-error"
                      : undefined
                  }
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select an enquiry
                  </option>

                  {enquiryTypes.map(
                    (type) => (
                      <option
                        key={type.value}
                        value={type.value}
                      >
                        {type.label}
                      </option>
                    )
                  )}

                </select>

                {errors.enquiry && (
                  <small
                    id="enquiry-error"
                    className="
                      contact-field-error
                    "
                  >
                    {errors.enquiry}
                  </small>
                )}

              </label>

            </div>


            {/* =================================================
                MESSAGE
            ================================================= */}

            <label className="contact-message-field">

              <span>
                MESSAGE <i>*</i>
              </span>

              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={updateField}
                placeholder="Tell us about your requirements..."
                aria-invalid={
                  Boolean(errors.message)
                }
                aria-describedby={
                  errors.message
                    ? "message-error"
                    : undefined
                }
                required
              />

              {errors.message && (
                <small
                  id="message-error"
                  className="
                    contact-field-error
                  "
                >
                  {errors.message}
                </small>
              )}

            </label>


            {/* =================================================
                SPAM HONEYPOT
            ================================================= */}

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={updateField}
              tabIndex="-1"
              autoComplete="off"
              className="contact-honeypot"
              aria-hidden="true"
            />


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="contact-submit-button"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >

              {isSubmitting
                ? "Sending..."
                : "Send Enquiry"}

              {!isSubmitting && (
                <b>
                  →
                </b>
              )}

            </button>


            {/* =================================================
                SUCCESS
            ================================================= */}

            {submitStatus === "success" && (
              <div
                className="
                  contact-form-success
                "
                role="status"
                aria-live="polite"
              >

                <strong>
                  Enquiry received.
                </strong>

                <span>
                  Thank you. Your enquiry has
                  been recorded and our team can
                  follow up using the details you
                  provided.
                </span>

              </div>
            )}


            {/* =================================================
                ERROR
            ================================================= */}

            {submitStatus === "error" && (
              <div
                className="
                  contact-form-error
                "
                role="alert"
                aria-live="assertive"
              >

                <strong>
                  Something went wrong.
                </strong>

                <span>
                  We could not process your enquiry.
                  Please try again.
                </span>

              </div>
            )}


            <small className="contact-form-note">
              By submitting this form, you
              are asking NEWPOS to contact
              you regarding your enquiry.
            </small>

          </form>

        </div>

      </section>


      {/* =====================================================
          TRAINING & SERVICE
      ===================================================== */}

      <section className="contact-service-section">

        <div
          className="
            contact-service-heading
            contact-reveal
          "
        >

          <div>

            <span>
              TRAINING &amp; SERVICE
            </span>

            <h2>
              Support Beyond
              <br />
              <strong>
                The Terminal.
              </strong>
            </h2>

          </div>

          <p>
            NEWPOS supports customers and
            partners throughout the payment
            product lifecycle with
            after-sales, training, software
            platform and value-added services.
          </p>

        </div>


        {/* =================================================
            SERVICE CARDS
        ================================================= */}

        <div className="contact-service-grid">

          {serviceCards.map((service) => (

            <article
              key={service.number}
              className="
                contact-service-card
                contact-reveal
              "
            >

              <div className="contact-service-image">

                <img
                  src={service.image}
                  alt={`${service.label} service`}
                  loading="lazy"
                />

                <div
                  className="
                    contact-service-image-overlay
                  "
                />

                <span
                  className="
                    contact-service-number
                  "
                >
                  {service.number}
                </span>

                <span
                  className="
                    contact-service-image-label
                  "
                >
                  NEWPOS
                </span>

                <span
                  className="
                    contact-service-image-arrow
                  "
                >
                  ↗
                </span>

              </div>


              <div className="contact-service-content">

                <div className="contact-service-card-top">

                  <span>
                    {service.number}
                  </span>

                  <b>
                    {service.label}
                  </b>

                </div>


                <div className="contact-service-card-body">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>


                <Link to={service.href}>

                  {service.link}

                  <b>
                    →
                  </b>

                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          QUICK INFORMATION
      ===================================================== */}

      <section className="contact-faq-section">

        <div
          className="
            contact-section-heading
            contact-reveal
          "
        >

          <div>

            <span>
              QUICK INFORMATION
            </span>

            <h2>
              Before You
              <br />
              <strong>
                Contact Us.
              </strong>
            </h2>

          </div>

          <p>
            Find useful information before
            sending your enquiry.
          </p>

        </div>


        <div className="contact-faq-grid">

          <article className="contact-reveal">

            <span>01</span>

            <h3>
              Looking for a product?
            </h3>

            <p>
              Explore NEWPOS payment terminals
              and product categories.
            </p>

            <Link to="/products">
              Explore Products →
            </Link>

          </article>


          <article className="contact-reveal">

            <span>02</span>

            <h3>
              Need a software solution?
            </h3>

            <p>
              Explore terminal management,
              secure key injection and
              remote assistance solutions.
            </p>

            <Link to="/solutions">
              Explore Solutions →
            </Link>

          </article>


          <article className="contact-reveal">

            <span>03</span>

            <h3>
              Interested in partnership?
            </h3>

            <p>
              Select Business Cooperation,
              Distribution or OEM / ODM
              in the enquiry form.
            </p>

            <Link
              to="/contact?type=partnership#contact-form"
            >
              Start Enquiry →
            </Link>

          </article>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final-cta">

        <div className="contact-final-background" />

        <div className="contact-final-overlay" />

        <div
          className="
            contact-final-content
            contact-reveal
          "
        >

          <span>
            NEWPOS TECHNOLOGY
          </span>

          <h2>
            Let’s Build
            <br />
            <strong>
              Better Payments.
            </strong>
          </h2>

          <p>
            Have a project, product
            requirement or business
            opportunity? Start a conversation
            with NEWPOS.
          </p>

        </div>


        <Link
          to="/contact?type=sales#contact-form"
          className="
            contact-final-button
            contact-reveal
          "
        >
          Start A Conversation
          <b>
            →
          </b>
        </Link>

      </section>

    </main>
  );
}

export default Contact;