import "./app.scss";
import { lazy, Suspense } from "react";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { Routes, Route } from "react-router-dom";
const Resume = lazy(() => import("./components/resume/Resume"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));

export const AppComponent = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppComponent />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
