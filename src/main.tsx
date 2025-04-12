import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route} from 'react-router-dom';

import Navbar from './navbar';
import AboutPage from './pages/about';
import CulversPage from './pages/culvers';
import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/culvers" element={<CulversPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </HashRouter>
  </StrictMode>
);
