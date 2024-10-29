// src/App.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';


// Configuration des routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

