import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

/* =========================================================
   COMPONENTS
========================================================= */

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingContactBar from "./components/FloatingContactBar/FloatingContactBar";


/* =========================================================
   PAGES
========================================================= */

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import New9310pro from "./pages/Products/New9310pro";

import Solutions from "./pages/Solutions";
import About from "./pages/About";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Contact from "./pages/Contact";


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        {/* =================================================
            HEADER
        ================================================= */}

        <Header />


        {/* =================================================
            ROUTES
        ================================================= */}

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* PRODUCTS */}

          <Route
            path="/products"
            element={<Products />}
          />


          {/* =================================================
              NEW9310PRO
              IMPORTANT:
              This MUST come before /products/:productSlug
          ================================================= */}

          <Route
            path="/products/new9310pro"
            element={<New9310pro />}
          />


          {/* OTHER PRODUCT DETAILS */}

          <Route
            path="/products/:productSlug"
            element={<ProductDetail />}
          />


          {/* SOLUTIONS */}

          <Route
            path="/solutions"
            element={<Solutions />}
          />


          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* NEWS */}

          <Route
            path="/news"
            element={<News />}
          />

          <Route
            path="/news/:id"
            element={<NewsArticle />}
          />


          {/* CONTACT */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* FALLBACK */}

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>


        {/* =================================================
            FOOTER
        ================================================= */}

        <Footer />


        {/* =================================================
            GLOBAL FLOATING CONTACT BAR
        ================================================= */}

        <FloatingContactBar />

      </div>

    </BrowserRouter>
  );
}


export default App;