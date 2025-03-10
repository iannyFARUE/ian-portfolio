import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Testimonials from "./pages/testimonials/Testimonials";
import Faqs from "./pages/faqs/Faqs";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import FloatingNav from "./pages/floating-nav/FloatingNav";
import "./App.css";
import Modal from "./components/Modal";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";

function App() {
  const { themeState } = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      {/* <FloatingNav /> */}
      <Theme />
    </main>
  );
}

export default App;
