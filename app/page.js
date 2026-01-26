'use client';

import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ui/ScrollToTop';

export default function Home() {
  // Script untuk membersihkan URL dari tracking parameters (IG/FB)
  useEffect(function() {
    if (typeof window !== 'undefined' && window.location.search) {
      var url = new URL(window.location.href);
      var params = new URLSearchParams(url.search);
      var paramsToRemove = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
      var changed = false;

      Array.from(params.keys()).forEach(function(key) {
        if (paramsToRemove.includes(key) || key.startsWith('utm_')) {
          params.delete(key);
          changed = true;
        }
      });

      if (changed) {
        var newUrl = params.toString() ? window.location.pathname + '?' + params.toString() : window.location.pathname;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Sponsors />
        <FAQ />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </ThemeProvider>
  );
}
