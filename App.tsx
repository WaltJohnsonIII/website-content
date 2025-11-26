import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { FAQPage } from './pages/FAQPage';
import { RelationshipsPage } from './pages/RelationshipsPage';
import { TemplateDetailPage } from './pages/TemplateDetailPage';
import { PricingPage } from './pages/PricingPage';

// ScrollToTop component ensures the window scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/relationships" element={<RelationshipsPage />} />
            <Route path="/relationships/demo" element={<TemplateDetailPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;