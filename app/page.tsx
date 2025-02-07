"use client";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Passing only the components without dark mode props */}
      <Navbar setIsDarkMode={undefined} />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
