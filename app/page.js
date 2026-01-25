'use client';

import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Sponsors from './components/Sponsors';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ui/ScrollToTop';

export default function Home() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Sponsors />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </ThemeProvider>
  );
}
