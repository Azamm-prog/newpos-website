import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      {/* =====================================================
          FOOTER MAIN
      ===================================================== */}

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
          >
            NEWPOS
          </Link>

          <p>
            NEWPOS Tech is a leading global payment products and
            solutions provider, delivering safe, reliable and
            technologically advanced E-payment products and
            solutions around the world.
          </p>

          <strong>
            4006-520-589
          </strong>

          <span>
            Monday to Sunday 0:00-24:00
          </span>

        </div>


        {/* PRODUCT */}
        <div className="footer-column">

          <h3>
            Product
          </h3>

          <Link to="/products">
            Smart POS
          </Link>

          <Link to="/products">
            Classic POS
          </Link>

          <Link to="/products">
            Unattended Terminals
          </Link>

          <Link to="/products">
            Cloud Speaker
          </Link>

          <Link to="/products">
            Accessories
          </Link>

          <Link to="/products">
            Smart ECR
          </Link>

        </div>


        {/* SOLUTION */}
        <div className="footer-column">

          <h3>
            Solution
          </h3>

          <Link to="/solutions">
            Terminal Management System
          </Link>

          <Link to="/solutions">
            NewViewer
          </Link>

          <Link to="/solutions">
            RKI
          </Link>

          <Link to="/solutions">
            Cloud MIS
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <h3>
            Contact &amp; Service
          </h3>

          <Link to="/contact">
            Contact Us
          </Link>

          <Link to="/contact">
            Training &amp; Service
          </Link>

          <Link to="/contact">
            Cooperation Case
          </Link>

        </div>


        {/* COMPANY */}
        <div className="footer-column">

          <h3>
            About Us
          </h3>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/about">
            Company History
          </Link>

          <Link to="/about">
            Company Culture
          </Link>

          <Link to="/about">
            Company Address
          </Link>

        </div>


        {/* NEWS */}
        <div className="footer-column">

          <h3>
            News
          </h3>

          <Link to="/news">
            Company News
          </Link>

          <Link to="/news">
            Exhibition News
          </Link>

          <Link to="/news">
            Video News
          </Link>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="footer-bottom">

        <span>
          Copyright©2007-2023 NEW POS TECHNOLOGY LIMITED
          All Rights Reserved
        </span>

        <div className="footer-bottom-links">

          <Link to="/privacy">
            Privacy Policy
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;