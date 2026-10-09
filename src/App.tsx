import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="flex-1 pt-[72px] sm:pt-[80px] overflow-x-hidden w-full max-w-full">
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
    </BrowserRouter>
  );
};

export default App;
