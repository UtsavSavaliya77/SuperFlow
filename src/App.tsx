import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { QualityPage } from './pages/QualityPage';
import { ContactPage } from './pages/ContactPage';
import { PumpDetailPage } from './pages/PumpDetailPage';
import { FloatingActions } from './components/FloatingActions';

// Global Lenis ref for external scrolling controls
let globalLenis: Lenis | null = null;
export const getLenis = () => globalLenis;

// Scroll to top on route change with Lenis integration
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (globalLenis) {
      globalLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

// Main Layout wrapper with route-aware padding & Lenis smooth scroll provider
const MainLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      globalLenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className={`flex-1 overflow-x-hidden w-full max-w-full ${isHome ? '' : 'pt-[72px] sm:pt-[80px]'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<PumpDetailPage />} />
          <Route path="/products/:id" element={<PumpDetailPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout />
    </BrowserRouter>
  );
};

export default App;
