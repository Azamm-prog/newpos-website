import { useEffect, useState } from "react";
import "./FloatingContactBar.css";

function FloatingContactBar() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact-floating-bar">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/4006520589"
        className="contact-floating-button contact-floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.1 21.5c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9-.1 5.4-4.5 9.8-9.9 9.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.8-.7 2-1.3.3-.6.3-1.1.2-1.3-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>


      {/* LIVE CHAT */}
      <button
        type="button"
        className="contact-floating-button contact-floating-chat"
        aria-label="Contact Sales"
        onClick={() => {
          window.location.href = "/contact?type=sales";
        }}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4l4 3 4-3h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-2 10H6v-2h12v2Zm0-4H6V8h12v2Z" />
        </svg>
      </button>


      {/* PHONE */}
      <a
        href="tel:4006-520-589"
        className="contact-floating-button contact-floating-phone"
        aria-label="Call NEWPOS"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.3 21 3 12.7 3 2.8c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.2 1.1l-2.2 2.2Z" />
        </svg>
      </a>


      {/* BACK TO TOP */}
      {showTop && (
        <button
          type="button"
          className="contact-floating-button contact-floating-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="m7.4 14.6 4.6-4.6 4.6 4.6 1.4-1.4-6-6-6 6 1.4 1.4Z" />
          </svg>

          <span>TOP</span>
        </button>
      )}

    </div>
  );
}

export default FloatingContactBar;