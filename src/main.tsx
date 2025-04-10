import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutPage from './pages/about';
import CulversPage from './pages/culvers';
import HomePage from './pages/home';
import NotFoundPage from './pages/notFound';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/culvers',
    element: <CulversPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
