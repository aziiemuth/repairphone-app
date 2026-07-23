'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Stats = dynamic(() => import('./components/Stats'));
const Services = dynamic(() => import('./components/Services'));
const Process = dynamic(() => import('./components/Process'));
const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const Sponsors = dynamic(() => import('./components/Sponsors'));
const FAQ = dynamic(() => import('./components/FAQ'));
const Location = dynamic(() => import('./components/Location'));
const CTA = dynamic(() => import('./components/CTA'));
const Footer = dynamic(() => import('./components/Footer'));
const ScrollToTop = dynamic(() => import('./components/ui/ScrollToTop'));

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
      <ScrollToTop />
    </ThemeProvider>
  );
}
