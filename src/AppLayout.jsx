// src/AppLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}
