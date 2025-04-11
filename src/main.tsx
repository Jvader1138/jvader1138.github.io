import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import AboutPage from './pages/about';
import CulversPage from './pages/culvers';
import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/culvers" element={<CulversPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
);
